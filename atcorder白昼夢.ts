const fs = require("fs");

const Main = (input: string) => {
  const words :string[] = ["dreamer", "dream", "eraser", "erase"];
  
  console.log(input_make_from_words(input,words) ? "YES" : "NO");
}

const input_make_from_words = (input :string, words :string[]) :boolean => {
    let count :number = input.length;
    
    while(count > 0){
      for(let i = 0; i < words.length;i++){
        const w = words[i];
        const start = count - w!.length;

        if(words[i] === input.substring(start,count)){
          count = start;
          break;
        }else if(i === words.length - 1) return false;
      }
    }
    return true;
}

const input = fs.readFileSync("/dev/stdin", "utf8").trim();
Main(input);