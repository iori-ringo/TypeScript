const fs = require("fs");
function main (input :string) {
    const lines :string[] = input.split("\n")
    let index = 0;
    const [arrayNum, queryNum] = lines[index++]!.split(" ").map(Number);

    let array :number [] = []
    const arrayLine = index++;
    for (let i = 0; i < arrayNum!; i++) {
        array.push(
            Number(lines[arrayLine]?.split(" ")[i])
        )
    }

    // BIT（Binary Indexed Tree）
    // 区間の合計値を O(log N) で求めるためのデータ構造
    // bit は 1-indexed で管理するが、bitUpdate / bitQuery は 0-indexed で受け取る
    const N = arrayNum!;
    const bit = new Array(N + 1).fill(0);

    // 0-indexed の位置 idx に delta を加算する
    function bitUpdate(idx: number, delta: number) {
        let pos = idx + 1; // 0-indexed → 1-indexed に変換
        while (pos <= N) {
            bit[pos] += delta;
            pos += pos & (-pos); // 次の管理ノードへ移動
        }
    }

    // array[0] ~ array[idx] の合計を返す（0-indexed）
    function bitQuery(idx: number): number {
        let sum = 0;
        let pos = idx + 1; // 0-indexed → 1-indexed に変換
        while (pos > 0) {
            sum += bit[pos];
            pos -= pos & (-pos); // 親ノードへ移動
        }
        return sum;
    }

    // BIT に初期値を登録
    for (let i = 0; i < N; i++) {
        bitUpdate(i, array[i]!);
    }

    const out: string[] = [];

    for (let i = 0; i < queryNum!; i++) {
        const query = lines[index++]!.split(" ")
        const firstQuery = Number(query[0]);
        if (firstQuery === 1) {
            const tmpIndex = Number(query[1]);
            const tmp = array[tmpIndex]!;

            bitUpdate(tmpIndex - 1, array[tmpIndex]! - array[tmpIndex - 1]!);
            bitUpdate(tmpIndex, array[tmpIndex - 1]! - array[tmpIndex]!);

            array[tmpIndex] = array[tmpIndex - 1]!;
            array[tmpIndex - 1] = tmp;
        } else if (firstQuery === 2) {
            const fromQuery = Number(query[1])
            const toQuery = Number(query[2])
            const result = bitQuery(toQuery - 1) - bitQuery(fromQuery - 2);
            out.push(String(result))
        }
    }
    console.log(out.join("\n"));
    return ;
}
const input = fs.readFileSync("/dev/stdin", "utf8")
main(input)
