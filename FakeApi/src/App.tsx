import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Pagination from './Pagination';

function App() {
  //https://fakestoreapi.com/products/
  const [fake, setFake] = useState<any[]>([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[itemsPerPage,curItemsPerPage]=useState(6);
  const [sortType, setSortType] = useState('price');
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

const indexOfLastItem=currentPage*itemsPerPage
const indexOfFirstItem = indexOfLastItem-itemsPerPage
const currentItems=fake.slice(indexOfFirstItem, indexOfLastItem)

const paginate=(pageNumber:number) => setCurrentPage(pageNumber);

  console.log(fake);
  useEffect(()=>{
    fakestore();
  },[])
  const fakestore = async() => {
    const response = await fetch("https://fakestoreapi.com/products/");
    //console.log(response);
    const jsonData= await response.json();
   // console.log(jsonData);
   setFake(jsonData);
  }


  useEffect(() => {
    const sortArray = (type:string) => {
   /*   const types:any = {
        priceAc: 'priceAc',
        priceDes: 'priceDes',
      };*/
      console.log(type)
     // const sortProperty = types[type];
     const sortProperty ='price';
      const sorted = (type=='priceDes')?[...fake].sort((a, b) => b[sortProperty] - a[sortProperty]):[...fake].reverse();
      setFake(sorted);
    };

    sortArray(sortType);
  }, [sortType]);
 // fakestore();
 let filteredResults = null;
 if (query){
  filteredResults = fake.filter(values =>
  values.title.toLowerCase().includes(query.toLowerCase()) 
);
 }else{
  filteredResults=currentItems
 }

 
  return (
    <>
    <h2>Fake API</h2>
    <select className="sort" onChange={(e) => setSortType(e.target.value)}>
      
        <option value="priceAc">Цена по возрастанию</option>
        <option value="priceDes">Цена по убыванию</option>
  </select>
  <br/>
  <input type="text" placeholder="Поиск по наименованию" value={query}  onChange={(e) => setQuery(e.target.value)}  />
<br/>

    <div className="container">
    {filteredResults.map((values)=>{
        return(
 
            <div className="box content" key={values.id}>
                <h5>{values.title}</h5>
                <p>{values.description}</p>
                <p>Price $ {values.price}</p>
              <img src={values.image} alt="" />
            </div>
            
        
        )
      })}
  
    </div>
    <Pagination itemsPerPage={itemsPerPage} totalItems={fake.length} paginate={paginate}/>

    </>
  );
}

export default App;
