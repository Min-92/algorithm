const order = (node, d, arr) => {
    if (!arr[d]) {
        arr[d] = [node.val];
    } else {
        arr[d].push(node.val);
    }

    if (node.left) {
        order(node.left, d + 1, arr);
    }

    if (node.right) {
        order(node.right, d + 1, arr);
    }
};

var levelOrder = function (root) {
    const arr = [];

    if (!root) {
        return arr;
    }

    order(root, 0, arr);
    return arr;
};
