const fs = require("fs");
const Main = (input :string) => {
    let n :number = Number(input.trim());
    let res :string = "";
    for(let i = 0;i < 10;i++){
        if(n%2 === 0){
            res = "0" + res;
        }else{
            res = "1" + res;
        }
        n = Math.floor(n/2);
    }
    console.log(res);
}

const input = fs.readFileSync("/dev/stdin","utf8");
Main(input);

// const Main = (input: string): void => {
//     const n = Number(input.trim());
//     const bin = n.toString(2).padStart(10, "0");
//     console.log(bin);
//   };


// const Main = (input: string): void => {
//     let n = Number(input.trim());
//     const bits: string[] = [];
  
//     for (let i = 0; i < 10; i++) {
//       bits.push(n % 2 === 0 ? "0" : "1");
//       n = Math.floor(n / 2);
//     }
  
//     const result = bits.reverse().join("");
//     console.log(result);
//   };
