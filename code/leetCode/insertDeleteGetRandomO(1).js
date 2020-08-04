/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (val === null || val === undefined) {
        return false;
    }

    if (this[val] !== undefined) {
        return false;
    }

    this[val] = val;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this[val] === undefined) {
        return false;
    }

    delete this[val];

    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const keys = Object.keys(this);

    const random = Math.floor(Math.random() * keys.length);

    return this[keys[random]];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
