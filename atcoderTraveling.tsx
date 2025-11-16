const fs = require("fs");

type plan = {
    root :number,
    pos_x :number,
    pos_y :number
}

const Main = (input :string) => {
    const lines :string[] = input.trim().split("\n");

    const root_num :number = Number(lines[0]);

    // const plans :plan[] = new Array(root_num);
    const plans :plan[] = [];

    // for (let i = 0; i < root_num; i++){
    //     plans[i]!.root = Number(input.split("\n")[i + 1]?.split(" ") [0]);
    //     plans[i]!.pos_x = Number(input.split("\n")[i + 1]?.split(" ") [1]);
    //     plans[i]!.pos_y = Number(input.split("\n")[i + 1]?.split(" ") [2]);
    // }

    for(let i = 0;i < root_num; i++){
        const [rootStr,xStr,yStr] = lines[i + 1]!.split(" ");
        plans.push({
            root: Number(rootStr),
            pos_x : Number(xStr),
            pos_y : Number(yStr)
        })
    }

    for (let i = 0;i < root_num;i++){

        if (i === 0){
            if ((Math.abs(plans[0]!.pos_x) + Math.abs(plans[0]!.pos_y)) <= plans[0]!.root  
            && (plans[0]!.root - Math.abs(plans[0]!.pos_x) + Math.abs(plans[0]!.pos_y) ) % 2 === 0 
        ){
                continue;
            }
        }else {
            if( Math.abs(plans[i]!.pos_x - plans[i - 1]!.pos_x) + Math.abs(plans[i]!.pos_y - plans[i - 1]!.pos_y) <= (plans[i]!.root - plans[i - 1]!.root)
            && ((plans[i]!.root - plans[i - 1]!.root) - Math.abs(plans[i]!.pos_x - plans[i - 1]!.pos_x) + Math.abs(plans[i]!.pos_y - plans[i - 1]!.pos_y)) % 2 === 0
        )
                continue;
        }

        console.log("No");
        return 0;
    }
    console.log("Yes");
}

const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);


// type Plan = {
//   t: number;
//   x: number;
//   y: number;
// };

// const main = (input: string) => {
//   const lines = input.trim().split("\n");

//   const n: number = Number(lines[0]);
//   const plans: Plan[] = [];

//   for (let i = 0; i < n; i++) {
//     const [tStr, xStr, yStr] = lines[i + 1].split(" ");
//     plans.push({
//       t: Number(tStr),
//       x: Number(xStr),
//       y: Number(yStr),
//     });
//   }

//   // 現在位置（最初は t=0, (0,0)）
//   let prevT = 0;
//   let prevX = 0;
//   let prevY = 0;

//   for (const plan of plans) {
//     const dt = plan.t - prevT;
//     const dist = Math.abs(plan.x - prevX) + Math.abs(plan.y - prevY);

//     // 時間より距離が大きい → 到達不可能
//     // 残り時間と距離の偶奇が合わない → 到達不可能
//     if (dist > dt || (dt - dist) % 2 !== 0) {
//       console.log("No");
//       return;
//     }

//     prevT = plan.t;
//     prevX = plan.x;
//     prevY = plan.y;
//   }

//   console.log("Yes");
// };
