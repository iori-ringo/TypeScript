const fs = require("fs");
const BASE_NUMBER = 2;

const Main = (input :string) => {
    const number = Number(input.trim());
    const result = Math.pow(BASE_NUMBER, number) - BASE_NUMBER*number;
    console.log(result);
    return
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input)