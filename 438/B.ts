const fs = require("fs")
function main (input :string) {
    const lines = input.split(/\n/)
    const [baseArrayNum, diffArrayNum] = lines[0]!.split(/\s+/).map(Number)
    const baseArray = lines[1]!.split("").map(Number)
    const diffArray = lines[2]!.split("").map(Number)

    let minCount = Infinity;
    for (let i = 0; (diffArrayNum! + i) <= baseArrayNum!; i++) {
        let result = 0;
        for (let j = i; j < (diffArrayNum! + i); j++) {
            const diffOfBase = baseArray[j]! - diffArray[j - i]!
            result += (diffOfBase < 0) ? (diffOfBase + 10) : diffOfBase
        }

        if (result < minCount) minCount = result
    }
    console.log(minCount)
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)