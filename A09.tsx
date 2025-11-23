const fs = require("fs");

const Main = (input :string) =>{
    const lines :string[] = input.split("\n").map((line) => line.trim());
    let index :number = 0;
    const [h_Str,w_Str,snow_day_Str] = lines[index ++]!.split(" ");
    const h_num = Number(h_Str);
    const w_num = Number(w_Str);
    const snow_day_num = Number(snow_day_Str);

    let kingdom :number[][] = Array.from({length : h_num},() => new Array(w_num).fill(0));
    for (let i = 0;i<snow_day_num;i++){
        const [h_start_Str,w_start_Str,h_end_Str,w_end_Str] = lines[index++]!.split(" ");
        const h_start :number = Number(h_start_Str);
        const w_start :number = Number(w_start_Str);
        const h_end :number = Number(h_end_Str)
        const w_end :number = Number(w_end_Str);

        // 累積和で考える。それぞれの範囲の始まりに１、終わりに−１を加える。その後、それらの累積和を計算する
        for (let h = h_start - 1;h < h_end;h++){
            kingdom[h]![w_start - 1]! ++;
            // kingdom[h]![w_end - 1]! --;これだと範囲の最後の地点で−１をしてしまっていて最後の地点の値が計算されていない
            // kingdom[h]![w_end]! --;これだとkingdomの端っこの値を入れようとした時に範囲外のアクセスになってしまう。
            if(w_end < w_num){
                kingdom[h]![w_end]! --;
            }

            // for (let w = w_start - 1;w < w_end;w++){
            //     kingdom[h]![w]! ++;
            // }
        }
    }

    // ３重のfor文から、２重が２つに。

    for(let h = 0;h<h_num;h++){
        for(let w = 0;w<w_num;w++){
            kingdom[h]![w]! += (w===0) ? 0 : kingdom[h]![w-1]!;
        }
    }

    kingdom.forEach((row) => {
        console.log(row.join(" "));
    });
}

const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);



// const tokens = input.trim().split(/\s+/);
//     let idx = 0;

//     const h = Number(tokens[idx++]!);
//     const w = Number(tokens[idx++]!);
//     const n = Number(tokens[idx++]!);

//     const kingdom: number[][] = Array.from({ length: h }, () =>
//         new Array<number>(w).fill(0)
//     );

//     for (let k = 0; k < n; k++) {
//         const hStart = Number(tokens[idx++]!) - 1;
//         const wStart = Number(tokens[idx++]!) - 1;
//         const hEnd = Number(tokens[idx++]!);
//         const wEnd = Number(tokens[idx++]!);

//         for (let y = hStart; y < hEnd; y++) {
//             kingdom[y][wStart] += 1;
//             if (wEnd < w) {
//                 kingdom[y][wEnd] -= 1;
//             }
//         }
//     }

//     const out: string[] = [];

//     for (let y = 0; y < h; y++) {
//         for (let x = 1; x < w; x++) {
//             kingdom[y][x] += kingdom[y][x - 1];
//         }
//         out.push(kingdom[y].join(" "));
//     }

//     console.log(out.join("\n"));