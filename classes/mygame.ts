

// class game {
//     name: string;
//    choice :number;
//     constructor(   name: string,
//         choice :number) {
//         this.name = name,
//         this.choice = choice
//     }

// playGuessGame =() => {

//     return "computer guessing Game";
//   }

//   playCarRacing(){ 
//     return "car racing Game";
//   }

//   startPlaying(choice: string) {
//     if (choice === "racing") {
//       return this.playCarRacing();
//     } else if (choice === "guess") {
//       return this.playGuessGame();
//     }
//   }

// }

let cheext = [ 2, 3, 4, 5, 6, 7, 8, 9, 10]
setInterval(()=>{
  const Check = () =>{
    let ranD = Math.ceil(Math.random() *cheext.length)
    return ranD
  }
  // console.log(Check());
  setTimeout(()=>{
    // console.log(cheext);
    
  })
}, 2000)






