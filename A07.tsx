const fs = require("fs");

type DateRange = {
    start_date :number,
    end_date :number
}

const Main = (input :string) =>{
    const lines :string[] = input.split("\n").map((line) => line.trim());
    const days :number = Number(lines[0]);
    const num_of_pep :number = Number(lines[1]);
    const plans :DateRange[] = [];
    for (let i = 0;i < num_of_pep;i++){
        const [start_Str,end_Str] = lines[2 + i]!.split(" ");
        const i_start = Number(start_Str);
        const i_end = Number(end_Str);
        plans.push({
            start_date : i_start,
            end_date : i_end
        })
    }

    const counts :number[] = Array(days).fill(0);

    for(const plan of plans){
        for (let i = plan.start_date - 1; i < plan.end_date;i++){
            if (counts[i] === undefined){
                counts[i] = 0;
            }
            counts[i]!++;
        }
    }

    for (const count of counts){
        console.log(count);
    }
}

const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);

// // ==== 差分配列（difference array）を用意 ====
//   // diff[i] = 「i日目に、人数がどれだけ増減するか」
//   // 0〜days まで使うので、長さ days+1 を確保して 0 で初期化
//   const diff: number[] = new Array(days + 1).fill(0);

//   // ==== 各人の予定を差分配列に反映 ====
//   // 元のコードでは「各人の期間の全ての日をループして +1」していたが、
//   // ここでは「開始日に +1」「終了日の翌日に -1」だけを記録する。
//   for (let i = 0; i < num_of_pep; i++) {
//     const [startStr, endStr] = lines[2 + i]!.split(" ");
//     const start: number = Number(startStr); // 1-based
//     const end: number = Number(endStr);     // 1-based

//     // 入力は 1〜days なので、それに合わせてそのまま使う。
//     // 「start日目から人が増える」 → start-1 番目のインデックスに +1
//     diff[start - 1] += 1;

//     // 「end日目まで人がいる」＝「end+1日目から人が減る」なので、
//     // end < days のときに end 番目のインデックスに -1 する。
//     // （0-based なので end 番目が「end+1日目」に対応）
//     if (end < days) {
//       diff[end] -= 1;
//     }
//   }

//   // ==== 差分配列から「各日ごとの人数」を復元（累積和） ====
//   // 累積和（るいせきわ）＝先頭から順番に合計していくこと
//   // current: 現在の日までの合計人数
//   const counts: number[] = new Array(days);
//   let current: number = 0;

//   for (let d = 0; d < days; d++) {
//     // d日目の人数の変化量を足す
//     current += diff[d];
//     // それがそのまま d日目の人数になる
//     counts[d] = current;
//   }