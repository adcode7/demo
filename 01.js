// let obj={
//     name:"adnan",
//     age:26,
//     gender:"Male",
//     city:"muzaffarpur"
// }


// using for in loop i can iterate over in an object
//it print its own property as well as inherit property


// for(let key in obj){
//     console.log(key,obj[key]);
// }


//writable ,enumerable ,configurable   it use for preventing accidental changes



//by default true hota hai 

// const user={
//     name:"adnan",
//     age:25,
//     account_number:25412
// }
// user.account_number=100256;
// console.log(user.account_number); //account number change ho gayega

//we can  not change that property using defineProperty

// Object.defineProperty(user,"account_number",{
//     writable:false
// })

// user.account_number=3656;
// console.log(user.account_number);


/*In configurable is true , we can delete or change the value of any object 
 if configurable is false ,we can not delete or change the value
*/


/* enumerable :if any key of enumerable is true  then it print key or inherit property other wise 
it does not print that key 

*/


/// obj1 is inherit from Object (in build) but it does not 

//print print because it key  enumerable is  false;
 



// console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"));
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }


/*yes , we can change its enumerable   by using  define property */

// Object.defineProperty(Object.prototype,"toString",{
//     enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"));

// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }



/*
array is an object   

for in loop : we not prefer in array becouse for in loop is iterate on key
if we add the any key like 
*/

// const arr=[1,2,3,4,5]; 

// arr.name="adndn";
// arr.age=25;
// for(let key in arr){
//     console.log(arr[key])
// }

// it give us output like this:
// 1
// 2
// 3
// 4
// 5
// adndn
// 25

////   if we use simple for loop: it traverse only arrays

// for(let ind=0;ind<arr.length;ind++){
//     console.log(ind,arr[ind]);
// }


