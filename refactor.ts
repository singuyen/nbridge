export default class RecentlyAddedList<T> {
    public items:any[] // Items is public so it is accessible from outside of the contructor

    constructor() {
        this.items = []
    }

    addItem(newItem: T): void {
        const itemList = new Set()
        itemList.add(newItem) // Add new Item to first object
        this.items.forEach(itemList.add, itemList) // Set() doesn't accept duplicated value

        this.items = Array.from(itemList) // Convert a set of values to an iterable array
    }
}

// How to use
const itemList = new RecentlyAddedList()
itemList.addItem('file_three')
itemList.addItem('file_two')
itemList.addItem('file_one')
itemList.addItem('file_two')

console.log(itemList.items) // Print: [ 'file_two', 'file_one', 'file_three' ]
console.log(itemList.items.length) // Print: 3
console.log(itemList.items[0]) // Print: 'file_two'
