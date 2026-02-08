type ActionType = 1 | 2 | 3;

const fs = require("fs");
function main (input :string) {
    const tokens = input.split(/\s+/)
    let index = 0;
    const actionNum = Number(tokens[index++]);
    const actionArray :ActionType[] = []

    for (let i = 0; i < actionNum; i++) {
        actionArray.push(
            Number(tokens[index++]) as ActionType
        )
    }
    let volume = 0;
    let isPlay :boolean = false;
    const resultsArray :string[] = []

    for (let count = 0; count < actionNum; count++) {
        switch (actionArray[count]) {
            case 1:
                volume++
                break;
            case 2:
                volume -= (volume === 0) ? 0 : 1
                break;
            case 3:
                isPlay = !isPlay
                break;
        }
        const result = (volume >= 3 && isPlay) ? "Yes" : "No"
        resultsArray.push(result)
    }

    console.log(resultsArray.join("\n"))
}
const input = fs.readFileSync("/dev/stdin", "utf8");
main(input)