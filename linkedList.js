// 10 --> 5 --> 16

// myLinkdeList = {
//     value: 10,
//     next: {
//         value: 5,
//         next: {
//             value: 16,
//             next: null
//         }
//     } 
// }



class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append (value){
        let newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail =  newNode;
        this.length++
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        let array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        }
        let leader = this.traverseIndex(index-1);
        let holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
    }

    traverseIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        let leader = this.traverseIndex(index-1);
        let unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }
    reverse(){
        let reverseNode = this.traverseIndex(this.length);
        console.log('', reverseNode);
    }
}
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(3);
myLinkedList.insert(20, 90);
myLinkedList.insert(2, 143);
myLinkedList.remove(2);
myLinkedList.remove(4);
console.log(myLinkedList)
console.log(myLinkedList.printList())
