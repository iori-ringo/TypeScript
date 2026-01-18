const fs = require("fs");
const Main = (input: string) => {
    const number = Number(input);

    const resultSet :Set<number> = new Set();
    let result = number;
    while (result !== 1) {
        result = Compute(result);
        if (resultSet.has(result)) {
            console.log("No");
            return ;
        } else {
            resultSet.add(result);
        } 
    }
    console.log("Yes");
}

const Compute = (happy: number) => {
    const onePlace = happy % 10;
    const tensPlace = (happy % 100 - onePlace)/10;
    const tensPlaceNotNegative = (tensPlace > 0) ? tensPlace : 0;

    const handredsPlace = (happy % 1000 - (tensPlaceNotNegative * 10) - onePlace)/100;
    const handredsPlaceNotNegative = (handredsPlace > 0) ? handredsPlace : 0;
    const thousandsPlace = (happy - (handredsPlaceNotNegative * 100) - (tensPlaceNotNegative * 10) - onePlace)/1000;
    const thousandsPlaceNotNegative = (thousandsPlace > 0) ? thousandsPlace : 0;

    const result = onePlace*onePlace + tensPlaceNotNegative*tensPlaceNotNegative + handredsPlaceNotNegative*handredsPlaceNotNegative + thousandsPlaceNotNegative*thousandsPlace;

    return result;
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input)