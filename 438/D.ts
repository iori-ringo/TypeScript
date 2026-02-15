const fs = require("fs")
function main (input :string) {
    const tokens = input.split(/\s+/).map(Number)
    let idx = 0
    const N = tokens[idx++]!
    const A: number[] = []
    const B: number[] = []
    const C: number[] = []
    for (let i = 0; i < N; i++) A.push(tokens[idx++]!)
    for (let i = 0; i < N; i++) B.push(tokens[idx++]!)
    for (let i = 0; i < N; i++) C.push(tokens[idx++]!)

    // 累積和を構築（0-indexed）
    const prefA = new Array<number>(N)
    const prefB = new Array<number>(N)
    const prefC = new Array<number>(N)
    prefA[0] = A[0]!
    prefB[0] = B[0]!
    prefC[0] = C[0]!
    for (let i = 1; i < N; i++) {
        prefA[i] = prefA[i - 1]! + A[i]!
        prefB[i] = prefB[i - 1]! + B[i]!
        prefC[i] = prefC[i - 1]! + C[i]!
    }

    // 式を変形:
    //   sum(A[1..x]) + sum(B[x+1..y]) + sum(C[y+1..N])
    // = (prefA[x-1] - prefB[x-1]) + (prefB[y-1] - prefC[y-1]) + prefC[N-1]
    //
    // i = x-1 (0..N-3), j = y-1 (1..N-2), i < j の制約で
    // f(i) + g(j) + prefC[N-1] を最大化する
    //
    // j を走査しながら f(i) の最大値を保持すれば O(N)

    let maxF = prefA[0]! - prefB[0]! // f(0)
    let ans = -Infinity

    for (let j = 1; j <= N - 2; j++) {
        const g = prefB[j]! - prefC[j]!
        ans = Math.max(ans, maxF + g + prefC[N - 1]!)
        // 次のイテレーション用に f(j) で maxF を更新
        maxF = Math.max(maxF, prefA[j]! - prefB[j]!)
    }

    console.log(ans)
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)
