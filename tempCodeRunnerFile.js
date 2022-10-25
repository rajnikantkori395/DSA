 deleteFromHead() {
      if (this.head == null){
        // console.log('List is already empty')
        return null
      }
      else{
       if (this.head.next == null){
        this.head = null;
       }
       else{
        this.head = this.head.next
        this.head.prev = null
       }
      }