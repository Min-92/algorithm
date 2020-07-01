const merge = (node1, node2) => {
    if (!node1 || !node2) {
        return;
    }

    if (node1.next && node1.next.val < node2.val) {
        merge(node1.next, node2);
    } else {
        const next = node1.next;
        node1.next = node2;
        merge(node2, next);
    }

    return node1;
};

var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    if (l1.val <= l2.val) {
        return merge(l1, l2);
    } else {
        return merge(l2, l1);
    }
};
