const fs = require("fs");
const Main = (input :string) => {
    const tokens :string[] = input.split(/\s+/);
    let index :number = 0;
    const nums :number = Number(tokens[index++]);
    const sumMaxRange :number = Number(tokens[index++]);
    const numArray :number[] = [];
    for (let i=0;i<nums;i++) {
        numArray.push(
            Number(tokens[index++])
        );
    }
    let sumMaxRangeCount :number = 0;
    // ここから修正必要、全探索から2分探索へ修正。最初のfor文は必須。そのそれぞれの要素で、low=i+1,high=num-1,の範囲で2分探索。
    for (let i=0;i<nums-1;i++) {
        // i<numsだと　　i = nums-1 のときなど、存在しないペアも必ず1個カウントしてしまう
        let low = i+1;
        let high = nums;
        while (low < high) {
            const mid = Math.floor((low + high)/2);
            
            if (numArray[mid]! - numArray[i]! <= sumMaxRange) {
                low = mid + 1;
            } else {
                high = mid;
            }
            // 条件式（>= sumMaxRange）と数えたい条件（<= sumMaxRange）の関係整理ができておらず、カウント式 low - i がロジック的に破綻
        }
        sumMaxRangeCount += (low - (i + 1));
        // for (let j=i+1;j<nums;j++) {
        //     if (Math.abs(numArray[i]! - numArray[j]!) <= sumMaxRange) {
        //         sumMaxRangeCount ++;
        //     }
        // }
    }
    console.log(sumMaxRangeCount);
}
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);