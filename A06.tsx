const fs = require("fs");

type DateRange = {
    start_day :number 
    end_day :number 
}

const Main = (input:string) => {
    // const lines :string[] = input.split("\n").map((line) => {line.trim()});ダメな例
    const lines :string[] = input.split("\n").map((line) => line.trim());
    const [day_num,q_num] = lines[0]!.split(" ").map((num) => Number(num));
    const days :number[] = lines[1]!.split(" ").map((num) => Number(num));
    const questions :DateRange[] = new Array();

    for (let i = 2;i< q_num! + 2;i++){
        const [start_day,end_day] = lines[i]!.split(" ");
        questions.push({
            start_day : Number(start_day),
            end_day : Number(end_day),
        });
    }

    const prefix :number[] = new Array(day_num! + 1).fill(0);
    for (let i = 0;i < day_num!;i++){
        prefix[i + 1] = prefix[i]! + days[i]!;
    }

    for(let i = 0;i < q_num!;i++){
        let sum = 0;
        const start :number = questions[i]!.start_day!;
        const end :number = questions[i]!.end_day!;

        // for (let j = start;j <= end;j++){
        //     sum += days[j]!;
        // }
        sum = prefix[end]! - prefix[start - 1]!;
        console.log(sum);
    }

}
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input)