const key = {
	1: [0, 0],
	2: [0, 1],
	3: [0, 2],
	4: [1, 0],
	5: [1, 1],
	6: [1, 2],
	7: [2, 0],
	8: [2, 1],
	9: [2, 2],
	0: [3, 1],
};

const lPo = [3, 0];
const rPo = [3, 2];

const getRange = (nPo, hPo) => {
	return Math.abs(nPo[0] - hPo[0]) + Math.abs(nPo[1] - hPo[1]);
};

const getMovingHand = (number, hand) => {
	if (number === 1 || number === 4 || number === 7) {
		return "left";
	}

	if (number === 3 || number === 6 || number === 9) {
		return "right";
	}

	const lRange = getRange(key[number], lPo);
	const rRange = getRange(key[number], rPo);

	if (lRange === rRange) {
		return hand;
	}

	if (lRange < rRange) {
		return "left";
	}

	return "right";
};

const moveHand = (number, hand) => {
	if (hand === "left") {
		lPo[0] = key[number][0];
		lPo[1] = key[number][1];
		return "L";
	}

	if (hand === "right") {
		rPo[0] = key[number][0];
		rPo[1] = key[number][1];
		return "R";
	}
};

function solution(numbers, hand) {
	return numbers.reduce((acc, cur) => {
		const movingHand = getMovingHand(cur, hand);
		return acc + moveHand(cur, movingHand);
	}, "");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") === "LRLLLRLLRRL");
