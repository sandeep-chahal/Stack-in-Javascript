// Stack Using LinkedList
class Node{
  constructor(){
    this.value = null,
    this.next = null
  }
}

class Stack{
  constructor(){
    this.top = null,
    this.bottom = null,
    this.length = 0
  }

  pop(){
    if(!this.top) return this;
    this.length--;
    if(this.top === this.bottom){
      this.top = this.bottom = null;
      return this;  
    }
    this.top = this.top.next;
    return this;
  }
  push(value){
    const newNode = new Node();
    newNode.value = value;
    if(this.length===0){
      this.top = this.bottom = newNode;
    }else{
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  peek(){
    return this.top.value;
  }

}

// const myStack = new Stack();
// myStack.push("A");
// myStack.push("B");
// myStack.push("C");
// myStack.push("D");
// myStack.pop();
// myStack.pop();
// myStack.peek();

// Stack Using Array
class Stack2{
  constructor(){
    this.data = [];
  }
  push(value){
    this.data.push(value);
    return this;
  }
  pop(){
    this.data.pop();
    return this;
  }
  peek(){
    return this.data[this.data.length-1];
  }
}

const myStack = new Stack2();
myStack.push("A");
myStack.push("B");
myStack.push("C");
myStack.push("D");
myStack.pop();
myStack.pop();
// myStack.peek();
