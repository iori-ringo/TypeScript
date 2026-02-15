const fs = require("fs")
function main (input :string) {
    const tokens :number[] = input.split(/\s+/).map(Number)
    let index = 0;
    const N = tokens[index++]
    const array: number[] = []
    for (let i = 0; i< N!; i++) {
        array.push(tokens[index++]!)
    }

    const resultsMap = B(Math.max(...array))
    let result = 0n;
    for (let i = 0; i<N!; i++) {
        const val = array[i];
        // undefinedチェック
        const mappedVal = resultsMap.get(val!);
        if (mappedVal !== undefined) {
            result += mappedVal;
        }
    }

    console.log(result)

    function B (number :number) :Map<number, bigint> {
        let base = 0n;
        const numberMap = new Map <number, bigint>()

        for (let i = 0; i <= number; i++) {
            base = (base * 10n) + 1n
            numberMap.set(i+1, base)
        }
        return numberMap;
    }
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)