const val = (node, cur) => {
    if (!cur.result) {
        return;
    }

    if (node.left) {
        val(node.left, cur);
    }

    if (!cur.val === undefined) {
        cur.val = node.val;
    } else {
        if (node.val <= cur.val) {
            cur.result = false;
            return;
        }
        cur.val = node.val;
    }

    if (node.right) {
        val(node.right, cur);
    }
};

var isValidBST = function (root) {
    if (!root) {
        return true;
    }

    const cur = { result: true };

    val(root, cur);
    return cur.result;
};
