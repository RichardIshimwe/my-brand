// console.log("Prime numbers");

// let sortPrime = (array) =>{
// let newArray = [],state = 0;
//  for(let a = 0;a < array.length; a++){
//   for(let i = 2;i <= 9;i++){ 
//     console.log(array[a] % i);
//     if(array[a] % i == 0){
//      state = state + 1;
//     } 
//   }
//    console.log("the finall state is:"+state)
//    if((state < 2 && array[a] <=9) || ((state == 0 && array[a] > 9))){
// newArray.push(array[a]);
//    }
//    state = 0;
//  }
//   return newArray;
// }
// let array =[35,354,2,3,5,43,56,43,454,34,34];
// let array =[35];
// let array =[345347];
// let array =[10];
// console.log(sortPrime(array));
// !whenever you take a number which is divisible by any number 2-9 and return a prime number it can interupt a short condition like if(state < 2){newArray.push(array[a]);}
// https://codepen.io/rich26638/pen/poZXveK?editors=1112
// https://codepen.io/rich26638/pen/yLqdyZZ?editors=1111


// console.log("sort and drop prime numbers")
// let sortPrime = (array) =>{
//     let newArray = [],state = 0;
//      for(let a = 0;a < array.length; a++){
//       for(let i = 2;i <= 9;i++){ 
//         if(array[a] % i == 0){
//          state = state + 1;
//         } 
//       }
//        if((state < 2 && array[a] <=9) || ((state == 0 && array[a] > 9))){
//        }else{
//     newArray.push(array[a]);
//        }
//        state = 0;
//      }
//       return newArray;
//     }
//  let sort = (arr) =>{
//   let newArray = sortPrime(arr);
//    let num,a,hold;
//       for(let i = 0;i < newArray.length - 1;i++){
//         num = newArray[i];
//         a=i;
//         for(let j = i+1;j < newArray.length;j++){
//           if(newArray[j] < num && newArray[a] > newArray[j]){
//            a = j;
//           }
//         }
//         hold = newArray[a];
//         newArray[a] = newArray[i];
//         newArray[i] = hold;
//       }
//  return newArray;
//     }
//     let arr = [4,5,6,7,8,14,15,16,17,18,19,9,10,11,12,1,2,3,13]
//     console.log(sort(arr));



// console.log("check if array has major element");
// let checkMajor = (arr) =>{
// let state = 0,hold = 0;
// for(let i = 0;i < arr.length - 1;i++){
//   for(let j = i + 1;j < arr.length;j++){
//     if(arr[i] === arr[j]){
//       state ++;
//     }
//   }
//   if(state > hold) hold = state;
// }
// if(hold > arr.length/2) return true
// return false;
// }
// console.log(checkMajor([1,1,2,2,2]))
// ======================================================
// let student = {name:"eric"};

// console.log("advanced javascript")
// let setStudentAgeApi = (student,age) =>{
//   return new Promise(function (resolve,reject){setTimeout(() =>{
//     student.age = age;
//     if(age < 0){reject("Bad Age")}
//     else{resolve (student)}
//   },
//     500);})
// }
// setStudentAgeApi(student,-1).then(data =>{
//   console.log(data)
// }).catch(error =>{
//   console.log(error);
// });
// console.log(student)
// ============================================================
// let family1 ={fatherName:"jeph",motherName:"marie",childernNumber:4};
// let family2 ={fatherName:"jeph",motherName:"marie",childernNumber:4};
// let family3 ={fatherName:"jeph",motherName:"marie",childernNumber:4};
// let objectHolder = [family1,family2,family3];
// let myOwnApi = (array) =>{
// setTimeout(() =>{
// console.log("i can wait for i sec")
// console.log(array)
// },
// 1000
//   );
// }
// myOwnApi(objectHolder)
// console.log("i can come next")
/*  console.log("a.console.log("2. Api Processing") was the one loged lest it waited for 0.5sec while others were running
                 b.
*/
















