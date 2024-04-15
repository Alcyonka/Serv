import React from 'react'

function Pagination({itemsPerPage, totalItems, paginate}:{itemsPerPage:number, totalItems:number,paginate:any}) {
    const pageNumbers:any=[];
    for (let i=1; i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i);
    }


  return (
    <>
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number:any) => (
        <li key={number} className='page-item'>
            <a onClick={()=>paginate(number)} className='page-link' href="#">
                {number}
            </a>
        </li>
        ))}
      </ul>
    </nav>
    </>
  )
}

export default Pagination
