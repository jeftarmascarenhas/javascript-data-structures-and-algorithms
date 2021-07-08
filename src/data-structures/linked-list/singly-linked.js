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

		this.tail.next = newNode
		this.tail = newNode
	}

	// O(1)
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

		while(currentNode.next) {
			count += 1
			currentNode = currentNode.next
		}	
		return count
	}

	// N(1)
	getHead() {
		return this.head
	}

	// N(1)
	getTail() {
		return this.tail
	}

	// N(n)
	getItemByValeu(data) {
		if (!this.head) return null
		if (this.head.data === data) return this.head

		let currentNode = this.head
		
		while(currentNode.next) {
			currentNode = currentNode.next
			if (currentNode.data === data) {
				return currentNode
			}
		}

		return null
	}

	// N(1)
	remove(node) {
		if (!this.head) return null
		if (this.head === node) {
			this.head = node.next
			this.tail = this.head
			return
		}

		let currentNode = this.head

		while(currentNode.next && currentNode.next !== node) {
			currentNode = currentNode.next
		}
		currentNode.next = node.next
	}

	//O(1)
	removeAtStart() {
		if(!this.head) {
			return null
		}
		this.head = this.head.next
	}

	//O(n)
	removeAtEnd() {
		if(!this.head) {
			return null
		}

		let currentNode = this.head

		while(currentNode.next.next !== null) {
			currentNode = currentNode.next
		}
		currentNode.next = null
	}

	//O(n)
	toArray() {
		let currentNode = this.head
		const data = []
		while (currentNode) {
			data.push(currentNode.data)
			currentNode = currentNode.next
		}
		return data
	}

	reverseLinkedList() {
		let prevNode = null
		let currentNode = this.head

		while(currentNode !== null) {
			let next = currentNode.next
			currentNode.next = prevNode
			prevNode = currentNode
			currentNode = next
		}
		this.head = prevNode
	}

}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.reverseLinkedList()

console.log(list.toArray())
