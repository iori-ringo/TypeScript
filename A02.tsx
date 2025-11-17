const fs = require("fs");
const Main = (input :string) => {
    const lines :string[] = input.trim().split("\n");
    const [nStr,xStr] = lines[0]!.trim().split(" ");

    const nums :number[] = lines[1]!.trim().split(" ").map((nStr) => Number(nStr));
    const x = Number(xStr);
    for (let num of nums){
        if(x === num){
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}

const input = fs.readFileSync("/dev/stdin","utf8");
Main(input);

// const exists = nums.includes(x);
// console.log(exists ? "Yes" : "No");