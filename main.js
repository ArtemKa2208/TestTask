let fs = require('fs');
let file1 = fs.readFileSync('file1','utf-8').slice(1,-1);
let file2 = fs.readFileSync('file2','utf-8').slice(1,-1);

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
function second_way(){
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
            if(!flag){
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
second_way();
