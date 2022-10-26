class List {

    constructor(array = []) {
        this.array = array.sort((a, b) => a - b);
        this.size = array.length;
    }

    add(number) {
        this.array.push(number)
        this.array.sort((a, b) => a - b)
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index > this.array.length - 1) {
            throw new Error("Invalid Index");
        }
        this.array.splice(index, 1);
        this.size--;
        return;
    }

    get(index) {
        if (index < 0 || index > this.array.length - 1) {
            throw new Error("Invalid Index");
        }
        return this.array[index];
    }

    size() {
        return this.array.length;
    }
}


let list = new List();
list.add(5);
list.add(3);
