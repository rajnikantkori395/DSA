let stack1 = []
let stack2 = []

// enque element
let el = 5
function enque (el){

while (stack1.length) {
stack2.push(stack1.pop())
}
stack1.push(el)
while (stack2.length) {
stack1.push(stack2.pop())
}

console.log(stack1)
}

//deque element
function deque () {
console.log(stack1.pop())
}

enque(4)
enque(5)
enque(6)
deque()