const fs = require("fs");
const Main = (input :string) => {
    const numbers :number[] = input.split(/\s+/).map(Number);
    const [pointP, pointQ, pointX, pointY] = numbers;
    if (
        pointP! <= pointX! && pointX! <= pointP!+100 && 
        pointQ! <= pointY! && pointY! <= pointQ!+100
    ) {
        console.log("Yes");
        return;
    }
    console.log("No");

}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
Main(input)