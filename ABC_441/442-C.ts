const fs = require("fs");

function main (input :string) {
    const tokens = input.trim().split(/\s+/)
    let index = 0;
    const doctorNum = Number(tokens[index++]);
    const relationNum = Number(tokens[index++]);

    // 1. 利害関係者を「人数」だけカウント
    const counts = new Int32Array(doctorNum + 1);
    for (let i = 0; i < relationNum; i++) {
        const a = Number(tokens[index++]);
        const b = Number(tokens[index++]);
        if (a <= doctorNum) counts[a]!++;
        if (b <= doctorNum) counts[b]!++;
    }

    const resultArray :bigint[] = [];
    for (let i = 1; i <= doctorNum; i++) {
        // 2. 候補者 n = 全員 - 自分(1) - 利害関係者
        const n = BigInt(doctorNum - 1 - counts[i]!);
        
        // 3. 組み合わせの公式 nC3 = n * (n-1) * (n-2) / 6
        // BigIntリテラル(0n等)が環境によってエラーになるため BigInt() を使用
        if (n < BigInt(3)) {
            resultArray.push(BigInt(0));
        } else {
            const result = (n * (n - BigInt(1)) * (n - BigInt(2))) / BigInt(6);
            resultArray.push(result);
        }
    }

    console.log(resultArray.join(" "));
}

// 入力読み込み（環境に合わせて 0 または /dev/stdin を使用）
try {
    const input = fs.readFileSync(0, "utf8");
    main(input);
} catch (e) {
    const input = fs.readFileSync("/dev/stdin", "utf8");
    main(input);
}

// まじで難しく考えたの典型例
// 回答に必要な情報がどれなのか、今回だったら「この研究者は、誰と誰と...依存関係があるっていうの」
// ではなく、「その研究者の依存関係の数」のみが必要。Mapで誰と誰が関係があるのかを管理する必要はない。
// ⇒こういうのを見極めていきたい。