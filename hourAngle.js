let min = 50

let hour = 2


let firstdeg = hour * 30;
let seconddeg = min * 6;

let angle = Math.min(Math.abs(firstdeg-seconddeg),360-Math.abs(firstdeg-seconddeg))

console.log(angle)

// O(1)