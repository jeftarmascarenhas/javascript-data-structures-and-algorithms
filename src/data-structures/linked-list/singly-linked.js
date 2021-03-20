// Singly Linked

class Node {
	constructor(data) {
		this.data = data
		this.next =  null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}

	// O(1)
	append(data) {
		const newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
			return
		}
		this.head = this.tail
		this.tail.next = newNode
	}

	insertAtBegin(data) {
		const newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
			return
		}
		this.tail = this.head
		this.head = newNode
		this.head.next = this.tail
	}

	// O(n)
	length() {
		if (!this.head) {
			return null
		}

		let currentNode = this.head
		let count = 0

		while(currentNode) {
			count += 1
			currentNode = currentNode.next
		}	
		return count
	}
	getHead() {
		return this.head
	}
}

const list = new LinkedList()

list.insertAtBegin(1)
list.insertAtBegin(2)
list.insertAtBegin(3)

console.log(list.length())
console.log(list.getHead())
