

//for of loop : only use in array not in object


// const arr=[1,3,9,42,9,2,4];
// for(let val of arr){
//     console.log(val);
    
// }

//// iteration on string 

// const str="adnan siddiqui";
// for(let val of str){
//     console.log(val);
// }


// object is not iterateble directly  but we can iterate using object.val becouse 
//object.value is gives us array

/*const obj={
    name:"adnan",
    age:26,
    gender:"Male"
}
for(let val of Object.values(obj)){
    console.log(val);
    
}*/


/* when we call function and give the reference of another function is called call back function 
like this :

function name(fun){
console.log("hey my name is adnan ");

fun()
}

function about(){
console.log("i am from muz bihar ")
}




name(about); //this is called call back function
      ref
*/
  


// for each : =>

// let arr=[1,20,53,6,55,6,63];
// arr.forEach((ele)=>{
//     console.log(ele);
    
// })


// arr.forEach(call bacck func expect)



/*                   <<<  filter     >>>
filter give us true or false 
it need the call back function 



const arr=[20,36,256,15,69,28];
let ans=arr.filter((ele)=>{
    return ele%2==0;
})
console.log(ans);

*/

// example :
 
/*const students=[
    {name:"adnan",roll:1204,marks:92},
    {name:"rohan",roll:1244,marks:30},
    {name:"anil",roll:1254,marks:45},
    {name:"amit",roll:1114,marks:80},
    {name:"ayan",roll:1204,marks:72},
    {name:"sohail",roll:1346,marks:82},
    {name:"aryan",roll:1546,marks:50},
]
// if we filter out those student is obtained greater than 50 marks 

const result=students.filter(({marks})=>{
    return marks>50;
})
console.log(result);

*/



/*                               <<<< Map>>>  

for modification that value; 
it is also expect the call back function 
and return an array


// const arr=[1,2,3,6,4];

// const result=arr.map((ele)=>{
//     return ele*5;
// })
// console.log(result);


*/


//   chainnig 

// const arr=[1,2,3,8,69,20];
// const result=arr.filter((num)=>{
//     return num%2==0;
// }).map((ele)=>{
//     return ele*ele;
// })

// console.log(result);


