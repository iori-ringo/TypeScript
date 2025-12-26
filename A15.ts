const fs = require("fs");
const Main = (input :string) => {
    const tokens = input.split(/\s+/);
    let index = 0;
    const arrayNum = Number(tokens[index++]);

    const originalArray :number[] = [];
    const NotRepatSet :Set<number> = new Set();
    // let sortedNotRepatArray :number[] = []

    for (let i=0; i<arrayNum; i++) {
        const targetNum :number = Number(tokens[index++]);
        originalArray.push(
            Number(targetNum)
        )
    NotRepatSet.add(targetNum)
        // if (!sortedNotRepatArray.includes(targetNum)) {
        //     sortedNotRepatArray.push(targetNum)
        // }
    }

    const sortedNotRepat :number[] = Array.from(NotRepatSet).sort((a, b) => a-b)
    
    // sortedNotRepatArray.sort((a,b) => a-b)

    const sortedNotRepatMap :Map<number, number> = new Map <number, number>();
    sortedNotRepat.forEach((value, idx) => {
        sortedNotRepatMap.set(value, idx+1);
    })

    const resultArray :number[] =[]; 
    for (let i=0; i<arrayNum; i++) {
        // resultArray.push (
        //     sortedNotRepatArray.indexOf(originalArray[i]!)
        // )
        resultArray.push(sortedNotRepatMap.get(originalArray[i]!)!)
    }

    console.log(resultArray.join(' '));
    return;
}
const input :string = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);