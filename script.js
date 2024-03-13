const display = document.getElementById("output");
function insert(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        //The eval() method evaluates or executes an argument.
        // If the argument is an expression, eval() evaluates the 
        // expression. If the argument is one or more 
        // JavaScript statements, eval() executes the 
        // statements.
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}