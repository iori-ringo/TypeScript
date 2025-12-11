const fs = require("fs");
const Main = (input :string) => {
    const tokens :string[] = input.split(/\s+/);
    let index = 0;
    const boxCardNum = Number(tokens[index++]);
    const goalNum = Number(tokens[index++]);
    const boxNum = 4;
    let boxes :number[][] = Array.from({length :boxNum}, () => new Array(boxCardNum));
    // const sortedBoxes :number[][] = Array.from({length: boxNum}, () => new Array(boxCardNum));

    for (let i=0;i<boxNum;i++) {
        for (let j=0;j<boxCardNum;j++) {
            boxes[i]![j] = Number(tokens[index++]);
        }
        // sortedBoxes.push(boxes[i]!.sort((a,b) => a-b));
    }

    const sumSet :Set<number> = new Set();
    for (let i=0; i<boxCardNum; i++) {
        for (let j=0; j<boxCardNum; j++) {
            sumSet.add(boxes[0]![i]! + boxes[1]![j]!);
        }
    }

    for (let i=0; i<boxCardNum; i++) {
        for (let j=0; j<boxCardNum; j++) {
            if (sumSet.has(goalNum - (boxes[2]![i]! + boxes[3]![j]!))) {
                console.log("Yes");
                return;
            }
        }
    }

    // for (let i=0;i<boxCardNum;i++) {
    //     const aBoxNum = boxes[0]![i];
    //     // if (aBoxNum! > goalNum) {break;}

    //     for (let j=0;j<boxCardNum;j++) {
    //         const abBoxNum = boxes[1]![j]! + aBoxNum!;
    //         // if (abBoxNum! > goalNum) {break;}

    //         for (let k=0;k<boxCardNum;k++) {
    //             const abcBoxNum = boxes[2]![k]! + abBoxNum;
    //             // if (abcBoxNum! > goalNum) {break;} else 
    //             if (boxes[3]?.includes(goalNum - abcBoxNum)) {
    //                 console.log("Yes");
    //                 return;
    //             }
    //         }
    //     }
    // }

    console.log("No");
    return;
}

const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input);


{/*
    なにができる？
    ⇒しんぷるに、各ループで「k」以上になったらループを中止する処理をつける
    ⇒整列して、それからの処理にしたら、その数以上になったやつをそれ以降はまとめて注視できるからそれも視野に入ってくる。よな
    ⇒
    */ }