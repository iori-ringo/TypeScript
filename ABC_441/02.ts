const fs = require("fs");

function main(input: string): void {
  const parts = input.trim().split(/\s+/);
  if (parts.length < 2) return; // 入力不正対策（AtCoderなら基本起きない）

  let age = Number(parts[0]);
  const goalBeansNum = Number(parts[1]);

  let passedYears = 0;
  for (let eatedBeans = age; eatedBeans < goalBeansNum; passedYears++) {
    age++;
    eatedBeans += age;
  }
  console.log(passedYears);
}

const input = fs.readFileSync("/dev/stdin", "utf8");
main(input);
