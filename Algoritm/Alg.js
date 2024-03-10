

const creater = document.querySelector('.creater');




function Floid(){

    for(k=1;k<=4;k++){
      for(i=1;i<=4;i++){
        for(j=1;j<=4;j++){

            console.log(`Итерация k=${k} i=${i} j=${j}`);

          let value1 = document.getElementById(i+""+j).innerHTML;
          let value2 = document.getElementById(i+""+k).innerHTML;
          let value3 = document.getElementById(k+""+j).innerHTML;

         

          // Проверка, записана ли в ячейку бесконечность
          value1 = isNaN(parseInt(value1))?Infinity:parseInt(value1);
          value2 = isNaN(parseInt(value2))?Infinity:parseInt(value2);
          value3 = isNaN(parseInt(value3))?Infinity:parseInt(value3);
          
          console.log(`value1=${value1}  value2=${value2}  value3=${value3}`);

          // Пересчет матрицы
          let sum = value2 + value3;


          if(value1 > sum){
            value1 = sum;
            // Замена значений
            document.getElementById(i+""+j).innerHTML = value1+"";

            console.log(`После перерасчета ${value1} ${value2}  ${value3}`);
          }
        }
      }
    }
  
    var floyd_button = document.getElementById("creater");

  }

  creater.addEventListener('click', Floid);