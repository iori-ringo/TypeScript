const fs = require("fs");
const Main = (input :string) => {
    const tokens = input.split(/\s+/)
    let index = 0;
    const arrayNumber = Number(tokens[index++])
    const intArray :number[] = []
    for (let i=0; i<arrayNumber; i++) {
        intArray.push(Number(tokens[index++]))
    }
    if (!intArray) return 

    let count = 0;

    for (let i=0; i<arrayNumber-2; i++) {
        if (intArray[i]! % 5 === 0) {
            const baseNum = intArray[i]!/5;
            for (let j=i+1; j<arrayNumber-1; j++) {
                if (intArray[j]! === baseNum*3) {
                    for (let k=j+1; k<arrayNumber; k++) {
                        if (intArray[k]! === baseNum*7) {
                            count++
                        }
                    }
                } else if (intArray[j]! === baseNum*7) {
                    for (let k=j+1; k<arrayNumber; k++) {
                        if (intArray[k]! === baseNum*3) {
                            count++
                        }
                    }
                }
            }

        } 
        
        if (intArray[i]! % 3 === 0) {
            const baseNum = intArray[i]!/3;
            for (let j=i+1; j<arrayNumber-1; j++) {
                if (intArray[j]! === baseNum*7) {
                    for (let k=j+1; k<arrayNumber; k++) {
                        if (intArray[k]! === baseNum*5) {
                            count ++
                        }
                    }
                }
            }
        }
        
        if (intArray[i]! % 7 === 0) {
            const baseNum = intArray[i]!/7;
            for (let j=i+1; j<arrayNumber-1; j++) {
                if (intArray[j]! === baseNum*3) {
                    for (let k=j+1; k<arrayNumber; k++) {
                        if (intArray[k]! === baseNum*5) {
                            count ++
                        }
                    }
                }
            }
        }
    }
    console.log(count)
    return
}
const input = fs.readFileSync("/dev/stdin", "utf8").trim()
Main(input)