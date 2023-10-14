import moment from "moment";

// console.log("bring in cup 1");
// console.log("bring in cup 2");
// console.log("bring in cup 3");

// console.log("bring in cup 4");
// console.log("bring in cup 5");

// function cup(guessTime: number) {
//   console.log();
//   console.log("Waiting for Joan...!");

//   let time = new Date().getTime();
//   let delayTime = time + guessTime;

//   setTimeout(() => {
//     while (new Date().getTime() < delayTime) {
//       // console.log("start processing!!!");
//     }

//     console.log();
//     console.log("Etart process executed at: ", moment(time).format("LTS"));
//     console.log("End process executed at: ", moment(delayTime).format("LTS"));
//     console.log(
//       "This whole process took ",
//       (delayTime - time) / 1000,
//       " seconds"
//     );
//     console.log();
//   }, 0);
// }

// const check = (cb: any): void => {
//   setTimeout(() => {
//     return cb();
//   }, 0);
// };

// console.log(
//   check((res: any) => {
//     console.log(res);
//   })
// );

// let name: string = "Peter";

// check(() => {
//   console.log("resolve check1");
//   check(() => {
//     console.log("resolve check2");
//     check(() => {
//       console.log("resolve check3");
//     });
//   });
// });

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("A promise kept");
//   } else {
//     reject("A promise failed");
//   }
// });

// promise
//   .then((res) => {
//     console.log(${res} with ${myName});
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("clean up code");
//   });

// let myName: string = "Peter";

// const promise = Promise.resolve("this is a promise kept");
// const promiseFailed = Promise.reject("this is a promise kept");

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let name = prompt("What is your name: ");

// console.log(name);

// const promise = new Promise((resolve, reject) => {
//   const numb: number = Math.floor(Math.random() * 10);

//   const guessNumb = parseInt(prompt("What your Number: "));

//   if (guessNumb === numb) {
//     console.log();
//     resolve("A promise kept");
//   } else {
//     console.log();
//     reject("A promise failed");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const makeRequest = (time: number) => {
//   return new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       resolve(It takes ${time / 1000} second to return this result..);
//     }, time);
//   });
// };

// makeRequest(2000).then((res) => {
//   console.log();
//   console.log(res);
// });

// Promise.race([
//   makeRequest(2000),
//   makeRequest(1000),
//   makeRequest(9000),
//   makeRequest(500),
// ]).then((res) => {
//   console.log(res);
// });

// let userEmail: string = "";
// let userPassword: string = "";

// const makeRequest = () => {
//   return new Promise((resolve, reject) => {
//     const email = prompt("Enter your Email: ");
//     const password = prompt("Enter your password: ");

//     userEmail = email;
//     userPassword = password;

//     return setTimeout(() => {
//       if (userEmail === "peter@test.com" && userPassword === "peter@test.com") {
//         console.log();
//         resolve(`${userEmail.split("@")[0]}`);
//       } else {
//         console.log();
//         reject("user authentication failed");
//       }
//     }, 1000);
//   });
// };

// const landingPage = (res: any) => {
//   console.log(`Welcome ${res}, to our landing Page, `);
// };

// makeRequest()
//   .then((res) => {
//     landingPage(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const myWebApp = async () => {
//   const val = await makeRequest();

//   const result = landingPage(val);
//   console.log(result);
// };

// myWebApp();


/////Assignment 1



let name = "Stanley"
let nam1 = "Stanley"


const Load = ()=>{
   while (setTimeout(()=>{
    return new Promise ((resolve, reject)=>{
      if (name === nam1) {
        console.log("[############]")
        resolve("A promise kept")
      }else{
    console.log(`[############]`)
        reject("A promise kept")
      }
    })
   }), 1000){
        break
   }
}


let trial1 = parseInt("")
let trial2 = parseInt("")
let trial3 = parseInt("")
let trial4 = parseInt("")


let RandomNumbers = Math.floor((Math.random())* 1)

const TrialFunction = () => {
 return new Promise ((resolve, reject)=>{
    const Firsttrial = parseInt(prompt("Guess a number: "))
    console.log(`You have 3 trials left`);
    const Secondtrial = parseInt(prompt("Guess a number: "))
    console.log(`You have 2 trials left`);

    const Thirdtrial = parseInt(prompt("Guess a number: "))
    console.log(`You have 1 trials left`);

    const Fourthtrial = parseInt(prompt("Guess a number: "))
    console.log(`You have 0 trials left`);
Load()


    trial1 = Firsttrial
    trial2 = Secondtrial
    trial3 = Thirdtrial
    trial4 = Fourthtrial

    return setTimeout(()=>{
        if ((Firsttrial === RandomNumbers || Secondtrial === RandomNumbers || Thirdtrial === RandomNumbers || Fourthtrial === RandomNumbers)) {
            console.log();
            resolve(`A promise kept`)
        }else{
            console.log();
            
            reject(`A promise failed`)
        }
    },0
    ) 
 })
}

TrialFunction().then((res)=>{
    console.log((res));
}).catch((err)=>{
    console.log(err);
})
