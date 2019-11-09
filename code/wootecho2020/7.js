class User {
    constructor(name) {
        this.name = name;
        this.friends = {};
    }
}

Array.prototype.stableSort = function (cmp) {
    cmp = !!cmp ? cmp : (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };
    let stabilizedThis = this.map((el, index) => [el, index]);
    let stableCmp = (a, b) => {
        let order = cmp(a[0], b[0]);
        if (order != 0) return order;
        return a[1] - b[1];
    }
    stabilizedThis.sort(stableCmp);
    for (let i = 0; i < this.length; i++) {
        this[i] = stabilizedThis[i][0];
    }
    return this;
}

function compare1(a, b) {
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
    return 0;
}
function compare2(a, b) {
    if (a[1] > b[1]) {
        return -1;
    }
    if (a[1] < b[1]) {
        return 1;
    }
    return 0;
}

const fillUserList = (userList, user, friends, visitors) => {
    userList[user] = new User(user);

    for (let i = 0; i < friends.length; i++) {
        if (!userList[friends[i][0]]) {
            userList[friends[i][0]] = new User(friends[i][0]);
        }
        userList[friends[i][0]].friends[friends[i][1]] = true;

        if (!userList[friends[i][1]]) {
            userList[friends[i][1]] = new User(friends[i][1]);
        }
        userList[friends[i][1]].friends[friends[i][0]] = true;
    }
}

const isFriend = (userList, user, target) => {
    return target in userList[user].friends
}

function solution(user, friends, visitors) {
    const userList = {}


    fillUserList(userList, user, friends, visitors);
    const reco = {};

    for (let i = 0; i < visitors.length; i++) {
        if (isFriend(userList, user, visitors[i]) || visitors[i] === user) continue;

        if (!reco[visitors[i]]) reco[visitors[i]] = 0;
        reco[visitors[i]]++;
    }

    for (let id in userList[user].friends) {
        for (let id2 in userList[id].friends) {
            if (!isFriend(userList, user, userList[id].friends[id2]) && user !== id2) {
                if (!reco[id2]) reco[id2] = 0;
                reco[id2] += 10;
            }
        }
    }

    const answer = [];

    for (let id in reco) {
        answer.push([id, reco[id]])
    }
    answer.stableSort(compare1)
    answer.stableSort(compare2)

    const result = [];
    for (let i = 0; i < answer.length; i++) {
        result.push(answer[i][0])
    }
    return result;
}


const user = "mrko";
const friends = [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]]
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan", "mrko"]

console.log(solution(user, friends, visitors));

