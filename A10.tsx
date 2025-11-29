const fs = require("fs");
const Main = (input :string) => {
    const tokens :string[] = input.split(/\s+/);
    let index :number = 0;
    const room_num = Number(tokens[index++]);
    const rooms_of_capa :number[] = [];

    for (let i = 0;i < room_num;i++){
        rooms_of_capa.push(
            Number(tokens[index++])
        )
    }

    const prefixMax :number[] = Array(room_num);
    prefixMax[0] = rooms_of_capa[0]!;
    for (let i=1;i<room_num;i++){
        const preMax = prefixMax[i-1]!;
        const currentCapa = rooms_of_capa[i]!;
        prefixMax[i] = (preMax >= currentCapa) ? preMax : currentCapa;
    }

    const suffMax :number[] = Array(room_num);
    suffMax[room_num-1] = rooms_of_capa[room_num-1]!;
    for (let i=room_num-2; i>=0;i--){
        const preMax = suffMax[i+1]!;
        const currentCapa = rooms_of_capa[i]!;
        suffMax[i] = (preMax >= currentCapa) ? preMax : currentCapa;
    }

    const work_num = Number(tokens[index++]);
    
    for (let i=0;i<work_num;i++){
        const ng_start :number = Number(tokens[index++]);
        const ng_end :number = Number(tokens[index++]);

        const res = prefixMax[ng_start-2]! > suffMax[ng_end]! ? prefixMax[ng_start-2] : suffMax[ng_end]; 

        // const first_range_max :number = Math.max(...rooms_of_capa.slice(0,Number(tokens[index++])-1));
        // const second_range_max :number = Math.max(...rooms_of_capa.slice(Number(tokens[index++]),rooms_of_capa.length));
        // const res :number = (first_range_max > second_range_max) ? first_range_max : second_range_max;
 
        // for (let j = ng_start - 1;j<ng_end;j++){
        //     if(ng_start - 1 <= j && j <= ng_end - 1){
        //         continue;
        //     }else {
        //         res = (res < rooms_of_capa[j]!) ? rooms_of_capa[j]! : res;
        //     }
        // }
        console.log(res);
    }
}

const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);
