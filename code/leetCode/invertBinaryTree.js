var invertTree = function (root) {
    if (!root) {
        return root;
    }

    const { left, right } = root;

    if (left) {
        invertTree(left);
    }

    if (right) {
        invertTree(right);
    }

    if (left || right) {
        const temp = left;
        root.left = right;
        root.right = temp;
    }

    return root;
};
