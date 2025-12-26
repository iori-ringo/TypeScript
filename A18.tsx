const fs = require("fs");

const Main = (input: string) => {
    const tokens = input.split(/\s+/);
    let index = 0;
    const cardNumber = Number(tokens[index++]);
    const goalNumber = Number(tokens[index++]);

    const cards :number[] = Array(cardNumber);
    for (let i=0; i<cardNumber; i++) {
        cards.push(Number(tokens[index++]))
    }

    // const sortedCards = cards.sort((a,b) => a-b)

    // let result = 0;
    // for (let i=0; i<cardNumber; i++) {
    //     if (result === goalNumber ) {
    //         console.log("Yes");
    //         return;
    //     }

    // }

    const dp: boolean[] = Array(goalNumber + 1).fill(false);
    dp[0] = true;
  
    for (const card of cards) {
      for (let x = goalNumber; x >= card; x--) {
        if (dp[x - card]) dp[x] = true;
      }
    }

    console.log(dp[goalNumber] ? "Yes" : "No");
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input)