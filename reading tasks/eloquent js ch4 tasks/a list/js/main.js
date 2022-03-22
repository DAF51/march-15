
// A list

// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list 
// (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, 
// the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };


// The resulting objects form a chain, like this:
// A linked list

// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values 
// {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent 
// lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element 
// list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
// Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element 
// and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number 
// and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is 
// no such element.

// If you haven’t already, also write a recursive version of nth.

class ListNode {
  constructor(value) {
    this.value =value
    this.rest =null
  }
}

class List {
  constructor(head = null, tail = null) {
    this.head = head
    this.tail = tail
  }

  append(node) {
    if(this.head === null) {
      // If the head is empty, this sets both the tail and the head to be the same value, the current node
      this.head = this.tail = node
    } else {
      //If the head has something, the value of the "rest" of the current tail is set to the current node, and the 
      //value of the current tail is switched to this current node. The previous tail node will still point to this one.
      this.tail.rest = node;
      this.tail = node
    }
  }

  prepend(node) {
    if(this.head === null) {
      // If the head is empty, this sets both the tail and the head to be the same value, the current node
      this.head = this.tail = node
    } else {
      // if the head isn't empty, the new node will the "rest" part of the new node will point to the current head, and then it will replace the current
      //head. This will ensure that the new head still points to the rest of the list
      node.rest = this.head
      this.head = node
    }
  }

  nth(num) { 
  let currentNode = this.head
  for(let i= 0; i< num; i++){
    console.log(currentNode)
      if(currentNode === null){
        console.log("Undefined node")
      }else if(i === num-1){
        console.log(currentNode.value)
      } else {
        currentNode = currentNode.rest
      }
    }
  }
}

function arrayToList(arr){
  let list = new List
  arr.forEach((currentVal) =>{
    let node = new ListNode(currentVal)
    list.append(node)
  })
  
  return list
}



function listToArray(list){
  array = []
  while(list.head !=null){
    //As long as the head isn't empty, it'll push the value of the head node to the array and then update the head node
    //so that it moves on to the next node on the list
    array.push(list.head.value)
    list.head = list.head.rest
  }

  return array
}

let list = arrayToList([10,20,30])

let node = new ListNode(40)

list.prepend(node)

console.log(list.nth(5))

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20