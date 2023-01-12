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
const words = [ "abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes",
                "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz","blizzard","boggle","bookworm","boxcar",
                "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", 
                "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex",
                "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord",
                "flapjack", "flopping", "fluffiness", "flyby", "foxglove","frazzled", "frizzled", "fuchsia", "funny", "gabby",
                "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", 
                "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot",
                "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", 
                "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole",
                "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury",
                "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays",
                "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel",
                "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz","queue","quips",
                "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch",
                "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", 
                "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant",
                "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka",
                "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", 
                "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone",
                "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"];

let word = "";

let missLetter = "";

const hidden = [];

const charHadEnter = [];


// DOM elements

const image = document.getElementById("image");
const wordDiv = document.getElementById("word");
const missesDiv = document.getElementById("misses");
let target = "";

// image array 

const imgs = ["Hangman-0.png", "Hangman-1.png", "Hangman-2.png", "Hangman-3.png", "Hangman-4.png", "Hangman-5.png", "Hangman-6.png","lose.jpg"]


// Attempt variable
let attemptLeft = 6;

let attempt = 0;

// Generate a word to play with 
function generate(){
    let randNum = Math.floor(Math.random() * words.length);
    console.log(randNum);
    target = words[randNum];
    console.log(target);

    hidden.length = 0;
    for(let i = 0; i<target.length; i++){
        hidden.push(" _ ");
    }
    missLetter = ""
    attempt = 0;

    charHadEnter.length = 0;

    console.log(hidden);
    
    wordDiv.innerText = hidden;
    missesDiv.innerText = missLetter;

    image.setAttribute("src","Hangman-0.png");
}

// Hangman function

function hangman(){

    const char = document.getElementById("guess").value;
    console.log(char);
    document.getElementById("guess").value = ""; 

    if(charHadEnter.includes(char)){
        alert("You already guess this letter, try another letter again");
    }

    else {
         // Check the target string. Does it contain the char value?
        if(target.includes(char)){
            // Do something
            let index = target.indexOf(char);
            while(index !== -1){
                hidden[index] = char;
                target = target.replace(char,'*');
                index = target.indexOf(char);
            }       
        }
        else {
            attempt ++;
            missLetter = missLetter + " " + char;
            image.setAttribute("src",imgs[attempt]);        
        }
        charHadEnter.push(char);
    }
   

    wordDiv.innerText = hidden;
    missesDiv.innerText = missLetter;

    
    console.log(charHadEnter);

    if(!hidden.includes(" _ ")){
        image.setAttribute("src","win.png");
    }
}

//console.log(3.3-1.1);