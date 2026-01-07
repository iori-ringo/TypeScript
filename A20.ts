// 結構典型的な問題な気がする。　⇒これを応用しろっていわれてもなかなかにおもしろそうではある
const fs = require("fs");
const Main = (input: string) => {
    const tokens = input.split(/\s+/);
    const stringA = tokens[0]?.trim().split("") ?? [];
    const stringB = tokens[1]?.trim().split("") ?? [];

    const lengthA = stringA.length;
    const lengthB = stringB.length;

    // dp[j] = LCS( Sの先頭 i文字 , Tの先頭 j文字 )
    // ただし i は外側ループで増えていく。最初 i=0 なので全部0。
    const dp = new Uint16Array(lengthB + 1);

    for (let i = 0; i < lengthA; i++) {
        let prevDiag = 0; // これは dp2[i][j] の「左上」(dp2[i][j]ではなく dp2[i-1][j-1]) に相当する値

        for (let j = 0; j < lengthB; j++) {
            const tmp = dp[j + 1] ?? 0;
// 型の | undifinedとかのエラーはこうやって解決　⇒ undifinedだったらデフォルトでこの値を決めてやる！

            // tmp は「更新前の dp[j+1]」＝上 (dp2[i][j+1] の計算における dp2[i-1][j+1])

            if (stringA[i] === stringB[j]) {
                // 一致 → 左上 + 1
                dp[j + 1] = prevDiag + 1;
            } else {
                // 不一致 → max(上, 左)
                // 上 = 更新前 dp[j+1] (= tmp と同じ)
                // 左 = 更新後 dp[j]
                const up = tmp;
                const left = dp[j] ?? 0;
                dp[j + 1] = up > left ? up : left;
            }

            // 次の j に進むために、左上を更新する
            // 次のマスの「左上」は、今の tmp（＝更新前 dp[j+1]）になる
            prevDiag = tmp;
        }
    }

    console.log(dp[lengthB]!.toString());
}

    // let max_sub = 0;

    // for (let startChar=0; startChar<lengthA!; startChar++) {
    //     let count = 0;
    //     let startB = 0;
    //     for (let charA=startChar; charA<lengthA!; charA++) {
    //         for (let charB=startB; charB<lengthB!; charB++) {
    //             if (charB === lengthB!-1) {
                    
    //             }
    //             if (stringA![charA] === stringB![charB]) {
    //                 count++;
    //                 startB = charB + 1;
    //                 break;
    //             }
    //         }
    //     }
    //     max_sub = (max_sub > count) ? max_sub : count;
    // }

    // console.log(max_sub)
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input)
/*
どちらか一方を決めて、それを最初の一文字から、もう一方の単語の文字と合うかを進めていって、あったら、
それ以降の文字でそれを繰り返し、どちらかが単語の最後までたどり着くまで繰り返し、
終了のタイミングでの count に格納された単語と保存している max_sub と比較し大きい方を格納して、
最初に決めた単語の参照が始まる文字が最後の文字になったタイミングで終了
*/

// 「S全体とT全体」を直接考えず、先頭からの範囲（prefix）に分解して、段階的に答えを増やしていきます。
