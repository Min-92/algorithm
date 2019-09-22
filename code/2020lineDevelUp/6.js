let str = '';

const isInRange = (height, size, maxHeight, align) => {
    const numHeight = size * 2 - 1;

    if (align === 'TOP') {
        return height <= numHeight;
    }
    if (align === 'BOTTOM') {
        return height > (maxHeight - numHeight);
    }

    if (align === 'MIDDLE') {
        if (height <= maxHeight/2){
            return height > (maxHeight - numHeight) / 2     
        }else{
            return height <= maxHeight - (maxHeight - numHeight) / 2;
        }
        // return height > (maxHeight - numHeight) / 2 || height <= maxHeight - (maxHeight - numHeight) / 2;
    }
}

const findRelative = (height, size, maxHeight, align) => {
    const numHeight = size * 2 - 1;

    if (align === 'TOP') {
        return height;
    }

    if (align === 'BOTTOM') {
        return height - (maxHeight - numHeight);
    }

    return height - (maxHeight - numHeight) / 2;

}

const prin = (num, height, size, maxHeight, align) => {
    const numHeight = size * 2 - 1;
    if (str.length) str += ' ';

    if (!isInRange(height, size, maxHeight, align)) {
        for (let i = 0; i < size; i++) {
            str += '.';
        }
        return;
    }

    const relativeHeight = findRelative(height, size, maxHeight, align);

    if (num === 1) {
        for (let i = 0; i < size - 1; i++) {
            str += '.';
        }
        str += '#';
        return;
    }
    if (num === 2) {
        if (relativeHeight === 1 || relativeHeight === numHeight || relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        if (relativeHeight < (numHeight + 1) / 2) {
            for (let i = 0; i < size - 1; i++) {
                str += '.';
            }
            str += '#';
            return;
        }
        str += '#';
        for (let i = 0; i < size - 1; i++) {
            str += '.';
        }
        return;

    }

    if (num === 3) {
        if (relativeHeight === 1 || relativeHeight === numHeight || relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        for (let i = 0; i < size - 1; i++) {
            str += '.';
        }
        str += '#';
        return;
    }
    if (num === 4) {
        if (relativeHeight < (numHeight + 1) / 2) {
            str += '#';
            for (let i = 0; i < size - 2; i++) {
                str += '.';
            }
            str += '#';
            return;
        }
        if (relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        if (relativeHeight > (numHeight + 1) / 2) {
            for (let i = 0; i < size - 1; i++) {
                str += '.';
            }
            str += '#';
            return;
        }
    }
    if (num === 5) {
        if (relativeHeight === 1 || relativeHeight === numHeight || relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        if (relativeHeight < (numHeight + 1) / 2) {
            str += '#';
            for (let i = 0; i < size - 1; i++) {
                str += '.';
            }
            return;
        }
        for (let i = 0; i < size - 1; i++) {
            str += '.';
        }
        str += '#';
        return;
    }

    if (num === 6) {
        if (relativeHeight < (numHeight + 1) / 2) {
            str += '#';
            for (let i = 0; i < size - 1; i++) {
                str += '.';
            }
            return;
        }
        if (relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        if (relativeHeight === numHeight) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        if (relativeHeight > (numHeight + 1) / 2) {
            str += '#';
            for (let i = 0; i < size - 2; i++) {
                str += '.';
            }
            str += '#';
            return;
        }
    }

    if (num === 7) {
        if (relativeHeight === 1) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        for (let i = 0; i < size - 1; i++) {
            str += '.';
        }
        str += '#';
        return;

    }

    if (num === 8) {
        if (relativeHeight === 1 || relativeHeight === numHeight || relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        str += '#';
        for (let i = 0; i < size - 2; i++) {
            str += '.';
        }
        str += '#';
        return;
    }
    if (num === 9) {
        if (relativeHeight === 1 || relativeHeight === (numHeight + 1) / 2) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        if (relativeHeight < (numHeight + 1) / 2) {
            str += '#';
            for (let i = 0; i < size - 2; i++) {
                str += '.';
            }
            str += '#';
            return;
        }
        for (let i = 0; i < size - 1; i++) {
            str += '.';
        }
        str += '#';
        return;
    }
    if (num === 0) {
        if (relativeHeight === 1 || relativeHeight === numHeight) {
            for (let i = 0; i < size; i++) {
                str += '#';
            }
            return;
        }
        str += '#';
        for (let i = 0; i < size - 2; i++) {
            str += '.';
        }
        str += '#';
        return;
    }

}





// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split('\n');
//     const a = n.shift().split(' ');
//     const align = a[1];

//     let max = 0;
//     const arr = [];
//     for (let i = 0; i < n.length - 1; i++) {
//         const [size, num] = n[i].split(' ');
//         max = Math.max(size, max);
//         for (let j = 0; j < num.length; j++) {
//             arr.push([Number(size), Number(num[j])])
//         }
//     }

//     for (let i = 1; i <= max * 2 - 1; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             prin(arr[j][1], i, arr[j][0], max * 2 - 1, align);
//         }
//         console.log(str);
//         str = '';
//     }

// });

const solution = (data) => {
    const n = data.split('\n');
    const a = n.shift().split(' ');
    const align = a[1];
    let max = 0;
    const arr = [];
    for (let i = 0; i < n.length; i++) {
        const [size, num] = n[i].split(' ');
        max = Math.max(size, max);
        for (let j = 0; j < num.length; j++) {
            arr.push([Number(size), Number(num[j])])
        }
    }
    for (let i = 1; i <= max * 2 - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            prin(arr[j][1], i, arr[j][0], max * 2 - 1, align);
        }
        console.log(str);
        str = '';
    }
}
solution('1 MIDDLE\n5 1234\n3 1234567890');
console.log();
solution('1 TOP\n5 1234\n3 1234567890');
console.log();
solution('1 BOTTOM\n5 1234\n3 1234567890');