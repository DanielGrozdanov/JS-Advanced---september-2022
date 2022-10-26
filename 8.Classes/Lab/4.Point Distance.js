class Point {
    static distance(first, second) {
        let dx = first.x - second.x
        let dy = first.y - second.y
        return Math.sqrt(dx **2 + dy **2);
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}