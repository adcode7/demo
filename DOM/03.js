
//**************creating element in js **********

/*function creatingEle(elem,content){
const parent=document.getElementById('root');
const ele=document.createElement(elem);
ele.innerHTML=content;
parent.appendChild(ele);
}


creatingEle('h1',"welcome to the page !");
creatingEle("p","List of the country in global ranking ");
creatingEle('li','America')
creatingEle('li','china')
creatingEle('li','India')
creatingEle('li','japan')
*/
///************** */ creating test node ************

/*function textEle(content){
    const parents=document.getElementById('root');
    const textItem=document.createTextNode(content);
    parents.append(textItem);
}

textEle("all copy right reserved @2025 ");
*/

///***************** */ creating attributes  Node ***********


  /*const createAttri=document.createAttribute('class');
  createAttri.value="first";
    //access to all elements
//   const list =document.querySelectorAll('li');
  //access to first elements
  const list =document.querySelector('li');
   list.setAttributeNode(list);
   list.setAttributeNode(createAttri);
   //accces any specific element 
const para=document.getElementById('root');
para.children[1].setAttributeNode(createAttri);
*/

//  ************************ access attribute of any elements *****************
/*const element=document.getElementById('root');
console.log(element.getAttribute("id"));
 
// set the attribute
console.log( element.setAttribute("class","btn"));

//remove attribute
console.log(element.removeAttribute("class"));
*/

