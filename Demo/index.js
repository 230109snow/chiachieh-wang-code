  // FizzBuzz
  function fizzbuzz(){
    let input = document.getElementById("fizzbuzz").value;
    const output = document.getElementById("output");
    console.log(input)
    document.getElementById("fizzbuzz").value="";
    let string ='';
    for(let i = 1; i<= input ;i++ ){
        if(i % 15 === 0) string += "\nFizzBuzz";
        else if (i % 5 === 0) string += "\nBuzz";
        else if (i % 3 === 0) string += "\nFizz";
        else string += "\n"+i;
    }

    
    output.innerText = string;
}

// Calculator part 
let firstNum=0, secondNum=0;
let operator = ''
let secNum = false;
function calculate(value){
    const display = document.getElementById("display");

    if(value ==='-' || value ==='+' || value ==='*' ||value ==='/'){
        if(secNum){
            if(operator === '+'){
                firstNum = firstNum + secondNum ;
                secondNum = 0;
            }   
            else if(operator === '-'){
                firstNum = firstNum - secondNum ;
                secondNum = 0;
            }
            else if(operator === '*'){
                firstNum = firstNum * secondNum ;
                secondNum = 0;
            }
            else if(operator === '/'){
                firstNum = firstNum / secondNum ;
                secondNum = 0;
            }  
        }
        operator = value
        display.innerText = value;
        secNum = true;

    }
    else if(value === '='){
        if(operator === '+'){
            firstNum = firstNum + secondNum ;
            secondNum = 0;
        }
        else if(operator === '-'){
            firstNum = firstNum - secondNum ;
            secondNum = 0;
        }
        else if(operator === '*'){
            firstNum = firstNum * secondNum ;
            secondNum = 0;
        }
        else if(operator === '/'){
            firstNum = firstNum / secondNum ;
            secondNum = 0;
        }   
        display.innerText = firstNum;
        operator = '=';
        console.log(firstNum);
    }
    else if(value === 'c'){
        firstNum=0, 
        secondNum=0;
        operator = '';
        secNum = false;
        display.innerText = 0;
    }
    else {
        if(operator === '='){
            firstNum=0, 
            operator = '';
            secNum = false;
        }
        if(!secNum){
            firstNum = firstNum * 10 + value;
            display.innerText = firstNum;
        }
        else {
            secondNum = secondNum * 10 + value;
            display.innerText = secondNum;
        }
        
    }
    console.log(value);
}

// Calculation for Calculator 2.0

// use to store the input value
const input = [];
// use to store the operator symbol 
const symbol = [];
// This variable store the equation 
let equation ="";
// Temporary variable that stores number;
let temp = 0;

// Display the equation and the result 
const screen = document.getElementById("screen");

function calculation(value){
    function simpleCal(index,oper){
        if(oper === "*")temp = input[index] * input[index+1];
        else if (oper === "/") temp = input[index] / input[index+1];
        else if (oper === "+") temp = input[index] + input[index+1];
        else if (oper === "-") temp = input[index] - input[index+1];
                
        input.splice(index, 2, temp);
        symbol.splice(index, 1);
        console.log(symbol);
        console.log(input);
    }
    function cal(){
       while(symbol.length !== 0){
        if(symbol.includes("*") || symbol.includes("/") ){
            for(let k = 0; k < symbol.length; k++){
                if(symbol[k] === "*" || symbol[k] === "/"){
                    simpleCal(k, symbol[k]);
                    break;                    
                }                
            }
        }
        else {
            simpleCal(0, symbol[0]);
        }
       }
    }

    if(value ==='-' || value ==='+' || value ==='*' ||value ==='/'){
      
        if(input.length !== 1 || symbol.length !== 0){
            input.push(temp);
        }        
        symbol.push(value);
        equation += value;
        temp = 0;
         
    }
    else if( value === "="){
        if(symbol.length !== 0)  input.push(temp); 
        console.log(input);
        console.log(symbol);
        cal();
        temp = 0;
        equation = input[0];
        screen.innerText = equation;
    }
    else if(value === "c"){
        input.length = 0;
        symbol.length = 0;
        temp = 0;
        equation = "0";
    }
    else if(value === 'bp'){
        let lastIndex = equation.length-1;
        let char = equation.charAt(lastIndex);
        equation = equation.substring(0,lastIndex);

        if(char === "+" || char === "-" || char === "*" || char === "/"){
            symbol.pop();
            temp = input.pop();
        }
        else{
            temp = (temp - char) / 10 ;
        }
    }
    // number goes here
    else {
        if(input.length === 1 && symbol.length ===0) {
            equation = "";
            input.length = 0;
        }
        if(equation === "0") equation = "";
        temp = temp *10 + value;           
        equation += value;
    }
    screen.innerText = equation;
}

/// Hangman Game 

// Words

const words = [];

let attemptLeft = 6;