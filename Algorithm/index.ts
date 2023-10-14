//petxCode (Peter Oti)(Github Link)
//Assignment
//Practice
//4 ways to get a reverse methods(Test with console.time, console.timeEnd() to know O of 1 or 2 or 3)
// Draw a graph for what we did in class



// 1 + 2 + 3 + 4 + 5 + 6 = 21

// // step 1
// const addUp = (n: number) => {
//     let  count: number = n;
//     const arr: Array<number> = [];
  
//     for (let i = 1; i <= count; i++) {
//       arr.push(i);
//     }
  
//     return arr.reduce((a: number, b: number) => {
//       return a + b;
//     });
//   };
  
//   // step 2
//   const addUp2 = (n: number) => {
//     let count: number = n;
//     const arr: Array<number> = [];
//     let total: number = 0;
  
//     for (let i = 1; i <= count; i++) {
//       total += i;
//     }
  
//     return total;
//   };
  
//   // step 3
//   const addUp3 = (n: number) => {
//     return (n * (n + 1)) / 2;
//   };
  
//   console.time("start");
//   console.timeEnd("start");
  
//   console.time("addUp");
//   console.log(addUp(15000));
//   console.timeEnd("addUp");
//   console.log();
  
//   console.time("addUp2");
//   console.log(addUp2(15000));
//   console.timeEnd("addUp2");
//   console.log();
  
//   console.time("addUp3");
//   console.log(addUp3(15000));
//   console.timeEnd("addUp3");
//   console.log();


///////Assignment


// const ReversalFunct = (array: string[])=>{
// let arr = []
// let reverse = arr.push()

// }
// console.log(ReversalFunct(["Stanley"]));


const Reversal = () =>{
let name = "stanley"
let reverse = name.split("").sort((a:any, b:any)=>{return b- a})
console.log(reverse);

// for (let i = 1; i < name.length; i++) {
//     const element = name
//     return element
// }
}
console.log(Reversal());

