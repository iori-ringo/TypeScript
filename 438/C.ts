const fs = require("fs")
function main(input: string) {
    const tokens = input.trim().split(/\s+/);
    let index = 0;
    const N = Number(tokens[index++]);
    
    // スタックを使用してO(N)で処理
    const stack: number[] = [];
    
    for (let i = 0; i < N; i++) {
        const val = Number(tokens[index++]);
        stack.push(val);
        
        // 末尾4つが同じ数字なら削除
        const len = stack.length;
        if (len >= 4) {
            const v = stack[len - 1];
            if (stack[len - 2] === v && 
                stack[len - 3] === v && 
                stack[len - 4] === v) {
                stack.length -= 4;
            }
        }
    }
    console.log(stack.length);
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)