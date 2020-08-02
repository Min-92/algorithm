/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.length = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (x === undefined || x === null) {
        return;
    }

    this[this.length] = x;
    this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (!this.length) {
        return null;
    }

    this.length--;
    return this[this.length];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let min = null;

    for (let i = 0; i < this.length; i++) {
        if (min === null) {
            min = this[i];
            continue;
        }

        min = Math.min(min, this[i]);
    }

    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
