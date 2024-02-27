class ListItem{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
    
class List{
    constructor(head=null){
    this.head=head;
    }
    listLen(){
        if (this.head==null) throw new Error('Список пуст');
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }        

        return count;
    }
    listPrint() {
    
    if (this.head==null) throw new Error('Список пуст');
    let node = this.head;
    let strOutput = "Состав списка: ";
        while (node) {
            strOutput=strOutput + ` ${node.data} `;
            node = node.next
        }
    console.log(strOutput);
    }

    insertToHead(val){
        let newNode=new ListItem(val);
        newNode.next=this.head;
        this.head=newNode;
   
    }
    insertToEnd(val){
        let node=this.head;
        let newNode=new ListItem(val);
        if(node){
            while (node.next){
            node=node.next;
            }
            node.next=newNode;
        }else{
            this.head=newNode;
        }

      this.listPrint();

    }
    
    changeItem(pos, val){
        if (this.head==null) throw new Error('Список пуст');
        if (pos>=this.listLen()) throw new Error('Нет такой позиции');
        let cursor=0;
        let node=this.head;
        while (node){
            if (cursor==pos) break;
            node=node.next;
            cursor++;
        }     
        node.data=val;  
        this.listPrint();
       
    }

    findItem(pos){
        if (this.head==null) throw new Error('Список пуст');
        if (pos>=this.listLen()) throw new Error('Нет такой позиции');
        let cursor=0;
        let node=this.head;
        while (node){
            if (cursor==pos) break;
            node=node.next;
            cursor++;
        }  
        
        console.log(`Нашли элемент с индексом ${pos}. Он равен ${node.data}.`);
        
    }

    deleteItem(pos){
        if (this.head==null) throw new Error('Список пуст');
        if (pos>=this.listLen()) throw new Error('Нет такой позиции');
        
        let cursor=0;
        let node=this.head;

        while (node){
            if (cursor==pos-1) break;
            node=node.next;
            cursor++;
        } 
        node.next=node.next.next;
        this.listPrint();
        
    }
}

function createList(){

let nodePrev=null;
let node=null;
let nodeHead=null;

let list = new List(nodeHead);

//list.listPrint;
//list.listLen;
//list.changeItem(2,'LaLa');
//list.findItem(7);
//list.deleteItem(5);
list.insertToHead(90);
list.insertToEnd(2000);
list.listPrint();

let array=[11,7,9,15,6,3,10,12,14,13,18,20,25];
    for (let i=0; i < array.length; i++){
        list.insertToEnd(array[i]);
    }

    
    list.listPrint;
    console.log("Вставили элемент в начало списка");
    list.insertToHead(24);
    console.log("Вставили элемент в конец списка");
    list.insertToEnd(2);
    console.log("Изменили элемент списка с индексом 2");
    list.changeItem(2,'LaLa');
    console.log("Хотим найти элемент с индексом 7");
    list.findItem(7);
    console.log("Длина списка " +list.listLen());
    console.log("Хотим удалить 5-й элемент");
    list.deleteItem(5);

}


const creater = document.querySelector('.creater');


creater.addEventListener('click', createList);

