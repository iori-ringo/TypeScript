const fs = require("fs");

const Main = (input :string) => {
    const [n,x] = input.split(" ").map((num) => Number(num));
    let count :number = 0;
    if(3*n! < x!){
        console.log(count);
        return;
    }

     for(let i = 1;i <= n!;i++){
        if(i + 2 > x!){
            break;
        }

        for(let j = 1;j <= n!;j++){
            if((i + j + 1) > x! || (i + 2*n!) < x!){
                break;
            }
            const k = x! - i - j;
            if(n! >= k && k >= 1){
                count ++;
            }
        }
    }
    console.log(count);
}

const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);
