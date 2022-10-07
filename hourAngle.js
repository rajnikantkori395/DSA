let min = 25

let hour = 3

let seconddeg = min * 5.5;
let firstdeg = hour * 30;


let angle = Math.min(Math.abs(firstdeg-seconddeg),360-Math.abs(firstdeg-seconddeg))

console.log(angle)

// O(1)