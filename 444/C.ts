const fs = require("fs")

function main(input: string) {
    const tokens = input.split(/\s+/).map(Number)
    let index = 0
    const N = tokens[index++]!
    const A: number[] = []
    for (let i = 0; i < N; i++) {
        A.push(tokens[index++]!)
    }

    // 要素の出現回数をカウント
    const countMap = new Map<number, number>()
    for (const a of A) {
        countMap.set(a, (countMap.get(a) || 0) + 1)
    }

    const maxVal = Math.max(...A)
    const minVal = Math.min(...A)

    // 【高速化】L の候補を限定
    // L は「max(A)」または「max(A) + a（aは配列の要素）」のみ
    // なぜなら、最大値は必ず L と等しいか、ペアの一部になる必要があるから
    const candidateSet = new Set<number>()

    // 候補1: max(A) そのもの
    candidateSet.add(maxVal)

    // 候補2: max(A) + a（各要素との和）
    // ただし、max(A) + min(A) を超える必要はない
    for (const a of countMap.keys()) {
        const candidate = maxVal + a
        if (candidate <= maxVal + minVal) {
            candidateSet.add(candidate)
        }
    }

    const candidates = Array.from(candidateSet).sort((a, b) => a - b)
    const results: number[] = []

    // 各候補 L について、条件を満たすか判定
    for (const L of candidates) {
        if (canFormWithL(L, countMap)) {
            results.push(L)
        }
    }

    console.log(results.join(" "))
}

/**
 * 長さ L で全ての要素をペアリングできるか判定（O(N)）
 */
function canFormWithL(L: number, originalCount: Map<number, number>): boolean {
    // カウントマップをコピー
    const count = new Map<number, number>(originalCount)

    // 各要素について判定
    for (const [a, cnt] of count) {
        if (cnt <= 0) continue
        if (a > L) return false  // L より大きい要素があったら不可能

        if (a === L) {
            // L そのものは1本として使える → 何もしない（消費しなくてOK）
            continue
        } else if (a * 2 === L) {
            // 自分自身とペアになる場合（L = 2a）→ 偶数個必要
            if (cnt % 2 !== 0) return false
        } else if (a < L - a) {
            // a < L/2 の場合のみチェック（重複判定を避ける）
            const partner = L - a
            const partnerCount = count.get(partner) || 0
            if (cnt !== partnerCount) return false
        } else if (a > L - a) {
            // a > L/2 の場合、ペア相手が存在しないケース
            const partner = L - a
            if (!count.has(partner)) return false
        }
    }

    return true
}

const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)

// ============================================
// 以下、元のコード（コメントアウト）
// ============================================
// function main (input :string) {
//     const tokens = input.split(/\s+/).map(Number)
//     let index = 0;
//     const arrayNum = tokens[index++]
//     const array: number[] = []
//     for (let i = 0; i < arrayNum!; i++) {
//         array.push(
//             tokens[index++]! 
//         )
//     }
//     const minNum = Math.max(...array)
//     const maxNum = Math.max(...array) + Math.min(...array)

//     function isContainRange (number :number) :boolean {
//         return (minNum <= number && number <= maxNum)
//     }

//     const canResultMap = new Map<number, number[]> ()
//     const tapleSet = new Set<Set<number>>;

//     if (isContainRange(array[0]!)) {
//         const newSet = new Set<number>().add(0)
//         canResultMap.set(
//             array[0]!,newSet
//         )
//     }

//     for (let i = 1; i < arrayNum!; i++) {
//         const result = array[0]! + array[i]!;
//         if (isContainRange(result)) {
//             if (!canResultMap.has(result)) {
//                 canResultMap.set(
//                     result, [0, i]
//                 )
//             }
//         }
//     }
// }

// 下は全て同じ長さ、
// 要素全てを、ある組み合わせ(pair)で、足し合わせて、要素が全て同じ数になったら、
// Map<number, Set<Set<number>>> ⇒違いそう
// たぶんもっと簡単な方法があるはず、