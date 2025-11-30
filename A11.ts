const fs = require("fs");
const Main = (input :string) => {
    const tokens :string[] = input.split(/\s+/);
    let index :number = 0;
    const arrayNum = Number(tokens[index++]);
    const targetNum = Number(tokens[index++]);

    const sortedArray :number[] = [];
    for (let i=0;i<arrayNum;i++) {
        sortedArray.push(Number(tokens[index++]));
    }

    let startNum :number = 0;
    let endNum :number = arrayNum-1;
    while (1) {
        const centerNum :number = Math.floor((startNum + endNum)/2);
        if (sortedArray[centerNum] === targetNum) {
            console.log(centerNum + 1);
            break;
        } else if (startNum === endNum) {
            break;
        }else if (sortedArray[centerNum]! > targetNum) {
            //  「centerが 自身をもう一度見ない」ように 1 足したり引いたりします。
            endNum = centerNum-1;
        }else {
            startNum = centerNum+1;
        }
    }

}
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);