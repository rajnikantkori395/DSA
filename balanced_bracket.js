str = '}({[]})}'

function balBracket (bracket) {
    let stack = []
    for (let i=0;i<bracket.length;i++){
        if (bracket[i]=='(' || bracket[i]=='{' || bracket[i]=='['){
        stack.push (bracket[i])
        }
        else {
            if (stack[stack.length-1]==='(' && bracket[i]==')' || 
            stack[stack.length-1]==='{' && bracket[i]=='}' ||
            stack[stack.length-1]==='[' && bracket[i]==']'){
               stack.pop()
            }
            else {
                stack.push(bracket[i])
            }
        }
    }

    return !stack.length ? 'Balanced' : 'Not Balanced'
}

console.log(balBracket(str))