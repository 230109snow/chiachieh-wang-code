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