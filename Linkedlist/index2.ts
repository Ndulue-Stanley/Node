
class Noded {
    public val: number
    public next: Noded | null

    constructor(val:number){
        this.val = val
        this.next = null
    }
}

class Linklist {
    public head: Noded | null | any
    public tail: Noded | null | any
    public length: number

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert (val:number){
        let node = new Noded (val);
        if (!this.head) {
            this.head = node
            this.tail = this.head;

        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
     }

     remove(){
        if (!this.head) {   
            return undefined
        } else {
            let current = this.tail;
            let newTail = current;

            while(current.next){
                this.tail = newTail;
                this.tail.next = null;
            }
            this.length--;
            return current;
        }

    }
    removeHead(){
        if (!this.head) {
            return undefined
        } else {
            let current = this.head
            let newHead = current

            while (current.next) {
                this.head = newHead
                this.head.next = null                
            }
            this.length--;
            return current
        }
    }

    insertHead(val:number){
        let node = new Noded (val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            node.next = this.head;
            this.head = node
        }
        this.length++
        return this
    }

    get(index:number){
        if (index < 0 || index >= this.length) {
            return undefined
        } else {
            let count:number = 0;
            let current = this.head

            while (index !== count) {
                current = current.next
                count++
            }
           return current 
        }
    }

}


let link = new Linklist();

console.log(link.head);
console.log(link.tail);
(link.insert(3));
(link.insert(6));
(link.insert(9));
(link.get(1));
// console.log(link.insertHead(10));
// console.log(link.removeHead());
// console.log(link.insert(12));
console.log(link.length);
console.log(link);