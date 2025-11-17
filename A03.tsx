const fs = require("fs");

const Main = (input :string) =>{
    const lines :string[] = input.split("\n");
    const [_a,sum] = lines[0]!.split(" ").map((x) => Number(x));
    const red_num :number[] = lines[1]!.split(" ").map((x) => Number(x));
    const blue_num :number[] = lines[2]!.split(" ").map((x) => Number(x));
    for(const red_card of red_num){
        for(const blue_card of blue_num){
            if(sum === red_card + blue_card){
                console.log("Yes");
                return ;
            }
        }
    }
    console.log("No");
}

const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);

// const Main = (input: string): void => {
//     const [firstLine, redsLine, bluesLine] = input.trim().split("\n");
  
//     // 1行目: N と 合計値 sum（N は使わないので _n）
//     const [_n, sumStr] = firstLine.trim().split(" ");
//     const sum = Number(sumStr);
  
//     // 2行目: 赤カード
//     const redCards: number[] = redsLine.trim().split(" ").map(Number);
//     // 3行目: 青カード
//     const blueCards: number[] = bluesLine.trim().split(" ").map(Number);
  
//     // 青カードを Set 化しておくと、補数の存在チェックが楽
//     const blueSet = new Set<number>(blueCards);
  
//     for (const red of redCards) {
//       const need = sum - red;
//       if (blueSet.has(need)) {
//         console.log("Yes");
//         return;
//       }
//     }
  
//     console.log("No");
//   };