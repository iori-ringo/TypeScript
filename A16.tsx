const fs = require("fs");
const Main = (input :string) => {
    const tokens = input.split(/\s+/);
    let index = 0;
    const roomNum = Number(tokens[index++]);
    const rootA :number[] = []
    for (let i=2;i<=roomNum;i++) {
        const dist = Number(tokens[index++])
        rootA.push(dist)
    }

    const rootB :number[] = [];
    for (let i=3;i<=roomNum;i++) {
        const dist = Number(tokens[index++]);
        rootB.push(dist)
    }

    let resTime = rootA[0];
    let preTime = 0;
    for (let i=3;i<=roomNum;i++) {
        const rootANumber = rootA[i-2]! + resTime!;
        const rootBNumber = rootB[i-3]! + preTime;
        preTime = resTime!;
        if ( rootANumber < rootBNumber ) {
            resTime = rootANumber;
        } else {
            resTime = rootBNumber;
        }
    }
    console.log(resTime)
    return;
}
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input)