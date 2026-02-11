
import * as fs from "fs";

function main(input: string) {
    const tokens = input.trim().split(/\s+/).map(Number);
    let index = 0;
    
    if (tokens.length === 0) return;

    const N = tokens[index++];
    const A: number[] = [];
    
    // A_i の読み込みと最大値の取得
    let maxA = 0;
    for (let i = 0; i < N; i++) {
        const val = tokens[index++];
        A.push(val);
        if (val > maxA) maxA = val;
    }

    // 頻度配列の作成 (1-based index で管理するため maxA + 1 のサイズ)
    // counts[x] = Aの中に x が何個あるか
    const counts = new Array(maxA + 1).fill(0);
    for (const val of A) {
        counts[val]++;
    }

    // 累積和（Suffix Sum）をとる
    // counts[i] には、本来の counts[i] + counts[i+1] + ... + counts[maxA] が入るようにする
    // つまり、A_j >= i であるような j の個数になる
    for (let i = maxA - 1; i >= 1; i--) {
        counts[i] += counts[i + 1];
    }

    // 下の桁から計算
    const resultDigits: number[] = [];
    let carry = 0;
    
    // 桁は1からmaxAまで、または繰り上がりが残っている間続く
    // counts[i] は入力値の最大桁数(maxA)までしか定義されていないので、
    // それを超えたら 0 として扱う
    for (let i = 1; i <= maxA || carry > 0; i++) {
        // A_j >= i である個数を取得 (配列外参照は0)
        const count = (i <= maxA) ? counts[i] : 0;
        
        const sum = count + carry;
        resultDigits.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    // 逆順にして出力
    console.log(resultDigits.reverse().join(""));
}

// 入力の読み込み
const input = fs.readFileSync("/dev/stdin", "utf8");
main(input);