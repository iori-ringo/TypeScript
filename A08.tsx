const fs = require("fs");

type Pos_Range = {
    start_h :number,
    start_w :number,
    end_h :number,
    end_w :number,
}

const Main = (input :string) =>{
    const lines :string[] = input.split("\n").map((line) =>line.trim());
    const [h_Str,w_Str] = lines[0]!.split(" ").map((line) => line.trim());
    const h_num = Number(h_Str);
    const w_num = Number(w_Str);

    const numbers :number[][] = [];
    for (let i = 0;i < h_num;i++){
        const line_of_num :number[] = lines[i + 1]!.split(" ").map(Number);
        const prefix :number[] = [];
        for(let j = 0;j<line_of_num.length + 1;j++){
            prefix.push((j === 0)? 0 : line_of_num[j-1]! + prefix[j-1]!);
        }
        numbers.push(prefix);
    }

    const q_num = Number(lines[h_num + 1]);
    const questions :Pos_Range[] = [];
    
    for (let i = 0;i<q_num;i++){
        const [start_h_Str,start_w_Str,end_h_Str,end_w_Str,] = lines[i + h_num + 2]!.split(" ");
        questions.push({
            start_h :Number(start_h_Str),
            start_w :Number(start_w_Str),
            end_h :Number(end_h_Str),
            end_w :Number(end_w_Str),
        })
    }

    for (let i = 0;i<q_num;i++){
        let res :number = 0;
        const start_h = questions[i]!.start_h;
        const start_w = questions[i]!.start_w;
        const end_h = questions[i]!.end_h;
        const end_w = questions[i]!.end_w;
        for(let j = start_h - 1;j<end_h;j++){
            res += numbers[j]![end_w]! - numbers[j]![start_w-1]!;
        }
        console.log(res);
    }

    

}
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);


// const main = (input: string): void => {
//   const lines = input.trim().split("\n");
//   let idx = 0; // 現在どの行を読んでいるか　⇒これとってもいい

//   const [hStr, wStr] = lines[idx++]!.trim().split(" ");
//   const h = Number(hStr);
//   const w = Number(wStr);

//   // 2次元累積和配列（1-indexed）　⇒結構使えそう
//   // ps[i][j] = (1,1)〜(i,j) の長方形の総和
//   const ps: number[][] = Array.from({ length: h + 1 }, () =>
//     Array(w + 1).fill(0),
//   );

//   for (let i = 1; i <= h; i++) {
//     const row = lines[idx++]!.trim().split(" ").map(Number);
//     for (let j = 1; j <= w; j++) {
//       const val = row[j - 1]!;
//       ps[i][j] =
//         val +
//         ps[i - 1][j] +
//         ps[i][j - 1] -
//         ps[i - 1][j - 1];
//     }
//   }

//   const q = Number(lines[idx++]!.trim());
//   const outputs: number[] = [];

//   for (let k = 0; k < q; k++) {
//     const [shStr, swStr, ehStr, ewStr] = lines[idx++]!.trim().split(" ");
//     const sh = Number(shStr); // start_h
//     const sw = Number(swStr); // start_w
//     const eh = Number(ehStr); // end_h
//     const ew = Number(ewStr); // end_w

//     // 2次元累積和による長方形の和
//     const sum =
//       ps[eh][ew] -
//       ps[sh - 1][ew] -
//       ps[eh][sw - 1] +
//       ps[sh - 1][sw - 1];

//     outputs.push(sum);
//   }

//   console.log(outputs.join("\n"));
// };
