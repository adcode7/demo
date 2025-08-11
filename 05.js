//   global object :object 
// chrome Browser :window 
// Node js:global

// every environment have it own object name 
// this is vary confusion for developer 

// that way we use GlobalThis key word






/*   "This"  keyword in javascript is special key word that refer to the
context in which the current code is being executed 


its value depends on how the function where this is used is called.



1.)Globla context (outside any function)

2.)In browser : Window 

3.)In Node.js :It return empty object


*inside a function 
i.)(Non-Strict Mode)
   when "this" is used inside a regular function , 
   it refer to the global object

   ->By default it use Non-strict-mode

ii.) when we use (strict-Mode)
    this will be undefined inside a function



***************************** Arrow function****************

Arrow function don't have their own "this" key word.
//Instead ,they inherit this from the surrounding (lexical )scope.


***********  inside a constructor or class ***********
.// In Constructor and classes , "this" refers to the instance of the object of the object being created


*/