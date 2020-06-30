const reverse = (prev, next) => {
    if (!next) {
        return prev;
    }

    const result = reverse(next, next.next);
    next.next = prev;

    return result;
};

var reverseList = function (head) {
    return reverse(null, head);
};
