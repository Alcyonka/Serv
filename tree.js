class Node {
    constructor(data) {
        this.data = data; // значение узла
        this.left = null;   // левый потомок
        this.right = null; // правый потомок
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // корень
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); 
        }
    }
    insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}
search(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        return this.search(node.left, data);
    } else if (data > node.data) {
        return this.search(node.right, data);
    } else {
        return node;
    }
}


//Меняет значение узла dataOld на dataNew
changeNode(dataOld, dataNew){
    let findNode=search(dataOld);
    if (!findNode) return null;

    findNode.data=dataNew;

    return findNode;
}


//Заменяем удаляемый узел максимальным значением из левого поддерева
delete(node,data){
    if (!node){
        console.log("Дерево пустое");
        return node;
    }
    if (node.data > data){  // Если удаляемое значение меньше текущего, ищем в левом поддереве
        console.log(`Значение узла ${node.data} больше значения ${data}`);
        node.left = this.delete(node.left, data);
    }else if (node.data < data){  //Если удаляемое значение больше текущего, ищем в правом поддереве
        console.log(`Значение узла ${node.data} меньше значения ${data}`);
        node.right = this.delete(node.right, data);
    }else{  // Если удаляемое значение равно текущему
        console.log(`Нашли значение ${node.data}`);

        if (node.left === null & node.right === null){  // Если удаляем лист
            console.log(`Потомков нет`);
            node = null;
        }else if (node.left === null){  // Если у удаляемого узла только правый потомок, присваиваем в удаляемый узел потомка
            console.log(`Правый потомок ${node.right.data}`);
            console.log(`Заменили ${node.data} на ${node.right.data}`);
            node= node.right;
           //node.right = this.delete(node.right,this.data);
        }else if (node.right === null){  // Если у удаляемого узла только левый потомок, присваиваем в удаляемый узел потомка
            console.log(`Левый потомок ${node.left.data}`);
            console.log(`Заменили ${node.data} на ${node.left.data}`);
            
           node= node.left;
          // node.left=this.delete(node.left,this.data);
        }else{  // Есть оба потомка
            console.log(`Есть оба потомка у ${node.data}`);
            console.log(`Левый потомок ${node.left.data}`);
             console.log(`Правый потомок ${node.right.data}`);

           //  let original = node;
            let prevNode = node.left; //Запоминаем левого потомка, чтобы в его поддереве искать максимальное значение
            while(prevNode.right){  // Затем ищем максимальное значение 
                prevNode = prevNode.right;
            }

            console.log(`Заменили значение узла ${node.data} на ${prevNode.data}`);
            node.data = prevNode.data;  // Заменить значение в удаляемом элемента масимальным значением из левого поддерева
            
            console.log(`В левом дереве ищем узел ${prevNode.data}`);
            node.left = this.delete(node.left, prevNode.data);  // В левом поддереве остался узел-дубликат. Ищем и удаляем узел-дубликат
        }
    } 
    
    console.log(node.data);
    return node;
}

height(node) {
    // Если дерево пусто, то его высота равна нулю
    if (!node) {
        return 0;
    }

    // Иначе высота равна единице плюс максимальная высота из высот левого и правого поддеревьев
    return 1 + Math.max(this.height(node.left), this.height(node.right));
}

}





function createTree(){
    let tree = new BinarySearchTree();
  /*  tree.insert(11); // корень
    tree.insert(7);
    tree.insert(9);
    tree.insert(15);
    tree.insert(6);*/

    let array=[11,7,9,15,6,3,10,12,14,13,18,20,25];
    for (let i=0; i < array.length; i++){
        
        tree.insert(array[i]);
    }

    console.log(tree);
console.log("Ищем 7");
    let found = tree.search(tree.root, 7);
    if (found){
        console.log("Нашли");
    }else{
        console.log("Не нашли");
    }

    console.log("Удаляем узел 15");

  tree.delete(tree.root, 15);
  console.log("Высота дерева равна " + tree.height(tree.root));

}

const creater = document.querySelector('.creater');


creater.addEventListener('click', createTree);

