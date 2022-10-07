class DoublyLinkedList {
    constructor (data) {
        this.data = data
        this.next = null;
        this.prev = null;
    }
}  

function deleteFront (head) {
     head = head.next
}

let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
 
let k=3

//  function slidingWindowMax(arr,k) {
//      let answer = [];
//      let max = 0;
//      for (let i=0;i<=arr.length-k;i++){
//          max = arr[i]
//         for (let j=i+1;j<k+i;j++){
//             if(arr[j]>max){
//                 max = arr[j]
//             } 
//         } 
//         answer.push(max)
//      }
//      return answer
//  }
 
//  console.log(slidingWindowMax(arr,k))
 
 // worst case time complexity = O(N*K)
 // can be optimized using heap data structure.
 
 //can be further optimized by using doubly linked list


 // **********************************************************************************
 // can also be implemented using doubly linked list data structure
   
  function slidingWindowMax(arr,k) {
     let answer = [];
     let temp 
     let window = k-1
     let head
    
     for (let i=0;i<arr.length;i++){
        
         if (temp==null){
            temp = new DoublyLinkedList(arr[i]);
            head = temp
         }
         else {
            if (arr[i]>temp.data){
            temp.data = arr[i]
            }
            else {
                let newNode = new DoublyLinkedList(arr[i])
                temp.next = newNode
                newNode.prev = temp

            }
         }
         if (i>=window){
            answer.push(head.data)
         }
        
     }     
     return answer
 }
 
 console.log(slidingWindowMax(arr,k))

 // worst case time complexity of O(log(N))