const findCycle = (node) => {
    if (!node) {
        return false;
    }

    if (node.visited) {
        return true;
    }

    node.visited = true;
    return findCycle(node.next);
};

var hasCycle = function (head) {
    return findCycle(head);
};
