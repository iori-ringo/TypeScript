const fs = require("fs")
function main (input :string): void {
    const tokens = input.split(/\s+/)
    let index = 0;

    const nToken = tokens[index++];
    const tToken = tokens[index++];
    if (nToken === undefined || tToken === undefined) return;
    
    const N = Number(nToken);
    const T = Number(tToken);

    const A: number[] = [];
    for (let i = 0; i < N; i++) {
        const aToken = tokens[index++];
        if (aToken === undefined) return;
        A.push(Number(aToken));
    }

    let chokutterMinutes = 0;
    const firstA = A[0];
    if (firstA === undefined) {
        console.log(T)
        return
    };
    chokutterMinutes += firstA;

    let prev = chokutterMinutes;
    
    for (let i = 1; i < N; i++) {
        const current = A[i];
        if (current === undefined) continue;
        if (current > prev + 100) {
            chokutterMinutes += (current - (prev + 100))
            prev = current;
        }
    }

    const subLast = T - (prev + 100)
    chokutterMinutes += subLast > 0 ? subLast : 0

    console.log(chokutterMinutes)
}
const input = fs.readFileSync("/dev/stdin", "utf8");
main(input)