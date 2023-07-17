function solution(s) {
    let answer = 0;
    const str = `${s}${s}`;
    let leftIdx = 0;
    let rightIdx = s.length;
    
    for(let i = 0; i < s.length; i++) {
        if(checkValidBraket(str.substring(leftIdx, rightIdx))){
            answer++;
        }
        leftIdx++;
        rightIdx++;
    }
    
    return answer;
}

function checkValidBraket(s) {
    const braketsCheckObj = {
        ")":"(",
        "}":"{",
        "]":"["
    }  
    const openBrakets = Object.values(braketsCheckObj)
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
      if(openBrakets.includes(s[i])){
        stack.push(s[i]);
      } else {
        if(braketsCheckObj[s[i]] === stack[stack.length - 1]){
          stack.pop()
        } else {
          return false;
        }
      }
    }
    return stack.length === 0
}