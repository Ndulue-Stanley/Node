
///1st Method(Push)

let bane: Array<string> = ['stanley', 'Greater', 'freemium', 'put']
let bane2: Array<string> = ['nzube', 'nuture', 'practice', 'put']

//step 1
const PushFunct = (name:string) =>{
    return bane.push(name)
}

const Push2 = (array: string[]) =>{
    let check = array.splice(3, 1, 'just')
    console.log(array);
    return check
}


console.time('Push1')
console.log(PushFunct('new'));
console.timeEnd('Push1')
console.log();


console.time('Push2')
console.log(Push2(['kayvee']));
console.timeEnd('Push2')
console.log();

console.log();


///1st Method(shift)

const ShiftFunct  = (arr:Array<string>) =>{
   let cut =arr.slice(2, 1)
    return cut
}
const ShiftFunct2 = ( ) => {
    let arr = ['new', 'old', 'youtube', 'socials']
    let check =  arr.unshift('new')
   console.log(check);
   
}
// console.log(PushFunct2(bane2));

const arr: number[] = [];
const Reverse = (n: number) => {
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  console.log(arr.reverse());
};

// console.time("1");
// Reverse(19);
// console.timeEnd("1");
// console.log("");

//2+

const arr2: number[] = [];
const Reverse2 = (n: number) => {
  for (let i = 1; i < n; i++) {
    arr2.push(i);
  }
  console.log(
    arr2.sort((a, b) => {
      return b - a;
    })
  );
};
// console.time("2");
// Reverse2(10);
// console.timeEnd("2");
// console.log("");


// console.time('start')
// console.log(PushFunct('nnew'));
// console.timeEnd('end')
// console.log();

