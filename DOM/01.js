/**************** DOM *************
     <<<<<< Document object model >>>>>>
 
     it change our page into object . In js we can easily manipulate or change any thing

     This allows developers to dynamically interact with and manipulate the content, structure, and style of a webpage using JavaScript.


     Tree Structure:

     The root node is the document object.
     The DOM represents the HTML document as a hierarchical tree of nodes. For example:
     Each element, attribute, and piece of text is a node in this tree.
     Below it are nodes like <html>, <head>, and <body>.



     Performance Considerations:

     Frequent DOM manipulations can slow down a webpage because the browser must re-render the page.
     Techniques like "virtual DOM" (used in frameworks like React) optimize this process.

     ===================================================================================================================
 c: Accessing by CSS Selectors:
   i: Single Element:
      Method: document.querySelector(selector)
      Description: Returns the first element matching the specified CSS 
      selector.
    
    ii: Multiple Elements:
        Method: document.querySelectorAll(selector)
        Description: Returns a static NodeList of all elements matching the 
        specified CSS selector.
    
d: Accessing by Tag Name
   Method: document.getElementsByTagName(tagName)
   Description: Returns a live HTMLCollection of all elements with the 
   specified tag name (e.g., div, p, a).

e: Accessing Using Relationships
   i: Parent Node:
   Method: element.parentNode or element.parentElement
   Description: Access the immediate parent of an element.

   ii: Child Nodes:
   Method: element.childNodes (includes text nodes) or element.children 
   (only element nodes)
   Description: Access all child nodes of an element.

   iii: First and Last Child:
   Methods: element.firstChild, element.lastChild, 
   element.firstElementChild, element.lastElementChild

   iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling, 
   element.previousElementSibling

 */