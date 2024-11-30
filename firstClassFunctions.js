/**
 * a language is said to have first class functions is th functions can be treated like variables 
 */

// 1 function can be assigned to a variable
const variable = ()=>{
    console.log("assigned a function to a variable");
}

variable() // we can call the defined function by adding parenthesis to the variable

// 2. functions can be passed as arguments
const foo = ()=>{
    console.log("passing foo as an argument");
}

function executeFoo(foo){
    foo()
}

// 3. returning a function
const Bar = ()=>{
    console.log("return Bar");
}

function returnBar(Bar){
     return Bar() // we can return a function in javascript because they are treated as values
}