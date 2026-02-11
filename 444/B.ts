const fs = require("fs")
function main (input :string) {
    const [N, K] = input.split(" ").map(Number)
    let count = 0;
    
    // // 桁和を計算する関数
    // const digitSum = (n: number): number => {
    //     return n.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
    // };
    
    // for (let i = 1; i <= N!; i++) {
    //     if (digitSum(i) === K) {
    //         count++;
    //     }
    // }
    // console.log(count)

    // --- 元のコード ---
    for (let i = 1; i<=N!; i++) {
        const digitCount = i.toString().length;
        let preNum = 0;
        let result = 0;
        for (let j = digitCount; j > 0; j--) {
            const addNum = Math.floor(i / (10 ** (j-1))) - (preNum * 10);
            result += addNum;
            preNum = preNum*10 + addNum;
        }
        if (result === K) {
            count++;
        }
    }
    console.log(count)

}
const input = fs.readFileSync("/dev/stdin", "utf8")
main(input)