const getDepth = (node, depth) => {
    const { left, right } = node;

    if (left && right) {
        return Math.max(getDepth(left, depth + 1), getDepth(right, depth + 1));
    }

    if (left) {
        return getDepth(left, depth + 1);
    }

    if (right) {
        return getDepth(right, depth + 1);
    }

    return depth;
};

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    return getDepth(root, 1);
};
