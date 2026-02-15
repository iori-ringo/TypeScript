const fs = require("fs")
function main (input :string) {
    const [yearOfDays, feldDate] = input.split(/\s+/).map(Number)
    console.log(7 - ((yearOfDays! - feldDate!) % 7))
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
main(input)