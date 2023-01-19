import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent {
  imgSrc = "../../assets/images/Hangman0.png";

  /// Hangman Game 
  words = [ "abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes",
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
                "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"
              ];
  word : string = "";
  missLetter : string = "x";
              
  hidden : string[] =[]; 
              
  charHadEnter : string[] = [];

  wordDiv :  HTMLSpanElement = document.getElementById("word") as HTMLSpanElement;
  missesDiv :  HTMLSpanElement = document.getElementById("misses") as HTMLSpanElement;
  target = "";

  attempt = 0


  generate(){
    this.missesDiv = document.getElementById("misses") as HTMLSpanElement;
    this.wordDiv  = document.getElementById("word") as HTMLSpanElement;
    let randNum = Math.floor(Math.random() * this.words.length);
    console.log(randNum);
    this.target = this.words[randNum];
    console.log(this.target);

    this.hidden.length = 0;;
    for(let i = 0; i<this.target.length; i++){
        this.hidden.push(" _ ");
    }
    this.missLetter = " ";
    this.attempt = 0;

    this.charHadEnter.length = 0;

    
    console.log(this.hidden.length);
    console.log(this.hidden[1]);
    this.wordDiv.innerText = this.hidden.toString();
    this.missesDiv.innerText = "";

  
  }
  hangman(){
    console.log("this button been clicked");
    const char =(<HTMLInputElement> document.getElementById("guess")).value;
    console.log(char);
    (<HTMLInputElement>document.getElementById("guess")).value = ""; 

    if(this.charHadEnter.includes(char)){
        alert("You already guess this letter, try another letter again");
    }

    else {
        // Check the target string. Does it contain the char value?
        if(this.target.includes(char)){
            // Do something
            let index = this.target.indexOf(char);
            while(index !== -1){
              this.hidden[index] = char;
              console.log(this.hidden);
              this.target = this.target.replace(char,'*');
              index = this.target.indexOf(char);
            }       
        }
        else {
            this.attempt ++;
            this.imgSrc = `../../assets/images/Hangman${this.attempt}.png`
            console.log(this.imgSrc);
            this.missLetter = this.missLetter + " " + char;
           
        }
        this.charHadEnter.push(char);
    }
  

    this.wordDiv.innerText = this.hidden.toString();
    this.missesDiv.innerText = this.missLetter;

    
    console.log(this.charHadEnter);
      if(!this.hidden.includes(" _ ")){
        this.imgSrc = "../../assets/images/win.png";
      }
  }

}
