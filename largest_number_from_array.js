// largest number formed by an array 

let arr = ['3', '30', '34', '5', '9']
// can be solved using comparison based sorting 
function comparison(x,y){
    let xy = x+y
    let yx = y+x
    return (yx-xy)
}
function largestNum (arr) {
    let str = ''
    arr.sort(comparison)
   for (let i=0;i < arr.length ; i++){
     str +=  arr[i]
   }
   return str
}

// time complexity of O(Nlog(N))

console.log(largestNum(arr))