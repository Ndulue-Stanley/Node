// let studentName: string =
//   "Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene Zion Wisdom Delight Stanyley Jessica Ayomide Regina Jemima Khalid Franklin Dennis Emmanuel Chinedu";

// interface iData {
//   name: string;
//   score: number;
// }

// class school {
//   branch: string;
//   static count: number = 0;
//   static mySchools: school[] = [];

//   constructor(branch: string) {
//     this.branch = branch;
//     school.count++;
//     school.mySchools.push(this);
//   }

//   registerStudents(): any {
//     let numb: number = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

//     return Array.from({ length: numb }, () => {
//       let studentArr: string[] = studentName.split(" ");

//       let randNumb: number = Math.floor(Math.random() * studentArr.length);

//       let score: number = Math.floor(Math.random() * (100 - 45 + 1)) + 45;

//       return { name: studentArr[randNumb], score };
//     });
//   }

//   getTopInstanceResult(...args: any[]) {
//     let res = args.flat();
//     return res.sort((a, b) => {
//       return b.score - a.score;
//     })[0];
//   }

//   static getTopResult(...args: school[][]): iData[] {
//     let data: iData[] = [];

//     for (let i of args) {
//       let x: any = i.sort((a: any, b: any) => {
//         return b.score - a.score;
//       })[0];
//       data.push(x);
//     }

//     return data.sort((a, b) => {
//       return b.score - a.score;
//     });
//   }

//    getSchoolsAvarageResult(...args: school[][]) {
//     let data: number[] = [];

//     for (let i of args) {
//       let res: number =
//         i
//           .map((el: any) => {
//             return el.score;
//           })
//           .reduce((a, b) => {
//             return a + b;
//           }) / i.length;

//       data.push(res);
//     }

//     return data;
//   }
  
//   static getBestPerformingResult(...args: school[][]): iData[] {
//     let data: iData[]|any = [];

//     for (let i of args) {
//       let x: any = i.sort((a: any, b: any) => {
//         return b.score - a.score;
//       })[0];
//       let y = i.map((el:any)=>{
//         return el.score < school.getTopResult;
//       })
//       data.push(x, y);
//     }

//     return data.sort((a, b) => {
//       return b.score - a.score;
//     });
    
//   }

//   static newTeacher(...args: any[]):any{
//     let change: number[] = []
//     for (let i in args){
//         let gradeA = args[i][0];
//         let gradeB = args[i][1];
//         let gradeC = args[i][2];
//      let SchoolA = {school: schoolA.branch, average: parseInt(gradeA)};
//      let SchoolB = {school: schoolB.branch, average: parseInt(gradeB)};
//      let SchoolC = {school: schoolC.branch, average: parseInt(gradeC)};
//      let schools: any = change.push(this.newTeacher(args))
//      console.log(schools);
     
        
      
//     } 
// }




//   playGuessGame() {
//     return "computer guessing Game";
//   }

//   playCarRacing() {
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

// let schoolA = new school("Tolu");
// let schoolB = new school("Wilma");
// let schoolC = new school("OjoRoad");

// // console.log(schoolA.startPlaying("guess"));

// // console.clear();

// // console.log(
// //   school.getSchoolsAvarageResult(
// //     schoolA.registerStudents(),
// //     schoolB.registerStudents(),
// //     schoolC.registerStudents(),
// //   ),
// // );
// // console.log(school.getBestPerformingResult(schoolA.registerStudents(),));
// // console.log(school.getBestPerformingResult(schoolB.registerStudents(),));
// // console.log(school.getBestPerformingResult(schoolC.registerStudents(),));


// // console.log(schoolA.registerStudents());

// // let studentArr: string[] = studentName.split(" ");

// // (max - min +1) + max

// // let randNumb: number = Math.floor(Math.random() * 100);

// // console.log(randNumb);
// // console.log(studentArr[randNumb]);

// // const getNumb = (max: number, min: number) => {
// //   let rand = Math.floor(Math.random() * (max - min + 1)) + min;
// //   return rand;
// // };

// // console.log(getNumb(100, 45));

// // const arrData = [
// //   { name: "Jemima", score: 62 },
// //   { name: "Francis", score: 67 },
// //   { name: "Stanyley", score: 93 },
// //   { name: "Samuel", score: 55 },
// // ];

// // console.log(
// //   arrData
// //     .map((el) => {
// //       return el.score;
// //     })
// //     .reduce((a, b) => {
// //       return a + b;
// //     }) / arrData.length,
// // )