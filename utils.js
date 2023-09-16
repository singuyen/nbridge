class RecentlyUsedList {

    constructor() {
        this.items = [];
    }

    add(newItem) {
        if (this.items.indexOf(newItem)) {
            var position = this.items.indexOf(newItem);
            var existingItem = this.items[position];

            this.items.splice(position, 1);
            this.items.splice(0, 0, existingItem);
        } else {
            this.items.unshift(newItem);
        }
    };

    lenght() {
        var size = this.items.length;
        return size;
    }

    itemat(index) {
        var position = 0;
        for (let item of this.items) {
            if (position == index)
                return item;

            ++position;
        }

        return undefined;
    }
}
