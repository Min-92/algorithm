/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

const replaceAt = (str, index, replacement) => {
    return str.substring(0, index) + replacement + str.substring(index + 1);
};

const getNextSteps = (current, visited, deadends) => {
    const list = [];
    for (let i = 0; i < current.val.length; i++) {
        const minus = replaceAt(
            current.val,
            i,
            (current.val[i] * 1 + 10 - 1) % 10
        );
        const plus = replaceAt(
            current.val,
            i,
            (current.val[i] * 1 + 10 + 1) % 10
        );

        if (!visited[minus]) {
            if (!deadends.find((element) => element === minus)) {
                list.push({ val: minus, step: current.step + 1 });
            }
        }

        if (!visited[plus]) {
            if (!deadends.find((element) => element === plus)) {
                list.push({ val: plus, step: current.step + 1 });
            }
        }
    }

    return list;
};
var openLock = function (deadends, target) {
    if (target === "0000") {
        return 0;
    }

    if (deadends.find((element) => element === "0000")) {
        return -1;
    }

    const q = [];
    const visited = {};
    let current = {
        val: "0000",
        step: 0,
    };

    while (current && target !== current.val) {
        visited[current.val] = true;
        const nexts = getNextSteps(current, visited, deadends);

        nexts.forEach((element) => {
            if (visited[element.val]) {
                return;
            }

            if (deadends.find((dead) => dead === element.val)) {
                return;
            }

            q.push(element);
        });

        if (!q.length) {
            break;
        }

        do {
            current = q.shift();
            if (!current) {
                break;
            }
            if (!visited[current.val]) {
                break;
            }
        } while (true);
    }

    if (current && current.val === target) {
        return current.step;
    }

    return -1;
};
