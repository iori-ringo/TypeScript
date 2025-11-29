const fs = require("fs");
const Main = (input :string) => {
    const tokens = input.split(/\s+/);
    let index :number = 0;
    const printerNum = Number(tokens[index++]);
    const target :number = Number(tokens[index++]);
    const printspower :number[] = [];
    for (let i=0;i<printerNum;i++){
        printspower.push(
            Number(tokens[index++])
        );
    }

    const minPower :number = Math.min(...printspower);

    let low = 0;
    let high = minPower * target;

      // 「time 秒以内に target 枚以上刷れるか？」を判定するヘルパー関数
    const canPrint = (time :number) => {
        let sum :number = 0;
        for (let i=0;i<printerNum;i++) {
            sum += Math.floor(time/printspower[i]!);
            if (sum >= target) {
                return true;
            }
        }
        return (sum >= target);
    }

      // 条件を満たす最小の時間を二分探索で求める
    while (low < high) {
        const mid = Math.floor((low + high)/2);
        if (canPrint(mid)) {
            high = mid;
            // mid 秒で target 枚以上刷れる → もっと短い時間を試す
        } else {
            // mid 秒では足りない → もっと時間が必要
            low = mid + 1;
        }
    }
    console.log(low);
}
const input = fs.readFileSync("/dev/stdin","utf8").trim();
Main(input);

// 結構制約強めの問題かも、でも2分探索の方法は入れておいて損はないね。
// 「時間 t を固定したとき、その時刻までに合計何枚刷れるか？」　が　秒数で見ると短調増加であることを確認できたら、それを2分探索を行うだけ。
// 上記を、適切な範囲で、適切な形式で