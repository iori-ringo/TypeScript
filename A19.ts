const fs = require("fs");

type Tresure = {
    weight: number,
    value: number
}

const Main = (input :string) => {
    const tokens = input.split(/\s+/);
    let index = 0;
    const tresureNumber = Number(tokens[index++]);
    const weightNumber = Number(tokens[index++]);

    const tresures :Tresure[] = [];
    for (let i=0; i<tresureNumber; i++) {
        tresures.push(
            {
                weight: Number(tokens[index++]),
                value : Number(tokens[index++])
            }
        )
    }

    let eachWeightMaxValue :number[] = Array(weightNumber + 1).fill(0); 
    eachWeightMaxValue[0] = 0;


    for (const tresure of tresures) {
        for (let weight = weightNumber; weight>=1; weight--) {
            const sumWeight = weight + tresure.weight;
            const sumValue = eachWeightMaxValue[weight]! + tresure.value;

            if ((sumWeight <= weightNumber) && (eachWeightMaxValue[weight] !== 0) && (eachWeightMaxValue[sumWeight]! < sumValue)) {
                eachWeightMaxValue[sumWeight] = sumValue;
            } 
        }

        if (eachWeightMaxValue[tresure.weight]! < tresure.value) {
            eachWeightMaxValue[tresure.weight] = tresure.value;
        }
    }

    // for (let i=weightNumber; i>0; i--) {
    //     if (eachWeightMaxValue[i] !== 0) {
    //         console.log(eachWeightMaxValue[i]);
    //         return;
    //     }
    // }
    console.log(Math.max(...eachWeightMaxValue))
    return;

    // console.log(Math.max(...eachWeightMaxValue));

}
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input)
// 普通にわからん系の問題だこれ
// 各重さの数で数字の配列を保持し、　⇒その添え字の重さがまだなかったら「０」を格納
// 各重さの添え字がある。に価値を格納
// tresure一個ずつで、その重さの番号に価値を格納。競合がいたら今回と前回の価値で大きい方を格納