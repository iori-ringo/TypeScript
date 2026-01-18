const fs  = require("fs");
const Main = (input :string) => {
    const number = Number(input);
    const numberArray :number[]= new Array(number + 1).fill(0);

    for (let x=1; x<Math.floor(Math.sqrt(number)); x++) {
        const x2 = x*x;
        const yMax = Math.floor(Math.sqrt(number - x2));
        if (x > yMax) break;
        for (let y=x+1; y<=yMax; y++) {
            const result = y*y+x2
            if (result > number) {
                break;
            } else {
                numberArray[result]!++
            }
        }
    }

    const goodNumberArray: number[] = []
    for (let i=1; i<number+1; i++) {
        if (numberArray[i] === 1) {
            goodNumberArray.push(i)
        }
    }

    console.log(goodNumberArray.length)
    console.log(goodNumberArray.join(" "))
    
    // for (let i=3; i<=number; i++) {
    //     let count = 0;
    //     for (let j=1,k=i-j; j<k; j++) {
    //         const result = Math.sqrt(i - j*j);
    //         if (Number.isInteger(result)) {
    //             count++;
    //             if (count > 1) {
    //                 break;
    //             }
    //         }
    //     }
    //     (count === 1) && numberArray.push(i);
    // }
    // console.log(numberArray.length);
    // console.log(numberArray.join(" "));
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input)