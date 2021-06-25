let fs = require('fs');
let file1 = fs.readFileSync('file1','utf-8').slice(1,-1); // не удаляешь после того как использовал. 
let file2 = fs.readFileSync('file2','utf-8').slice(1,-1); // Ещё и ручками убрал " в самом начале, хотя алгоритм работает и без этого

function first_way(){ // плохой вариант
      let arr_file1 = file1.split(' ');
      let arr_file2 = file2.split(' ');
      let flag = false;
      let count = 0;
      for(let i = 0; i < arr_file1.length; i++){
            if(arr_file1[i] == 'user:'){
                  for(let j = 0; j < arr_file2.length; j++){
                        if(arr_file2[j] == 'user:' && arr_file1[i+1] == arr_file2[j+1]){
                        flag = true;
                        break; 
                        }
                  }
                  if(flag == false){
                        count++;
                        console.log(arr_file1[i+1])
                  }
                  flag = false;
            }

      }
      console.log(count);
}
function second_way(file1,file2){ // Передавай параметрами переменные. 
                                  // Изза того что ты использовал внешнюю переменную в функции её считает глобальной и её никогда не удалит сборщик мусора пока прога работает
      let first_file_names = get_name(file1);
      let second_file_names = get_name(file2);
      let flag = false;
      let count = 0;
      for(let i of first_file_names){
            for(let j of second_file_names){
                  if(i == j){
                        flag = true;
                        break;
                  }
            }
            if(!flag){ //красавчик. тут респект. Всё сделано чисто
                  console.log(i);
                  count++;
            }
            flag = false;
      }
      console.log(count);
}
function get_name(string){
      let index = string.indexOf('user:');
      let names = new Set();
      while(index != -1){
            names.add(string.slice(index+6,string.indexOf(',',index)));
            index = string.indexOf('user:',index + 1);

      }
      return names;
}


// first_way();
second_way(file1,file2);
