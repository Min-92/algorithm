const compareTime = (a, b) => {
	if (a.time > b.time) {
		return 1;
	}

	if (a.time < b.time) {
		return -1;
	}

	if (a.index > b.index) {
		return 1;
	}

	return -1;
};

const compareIndex = (a, b) => {
	if (a.index > b.index) {
		return 1;
	}
	return -1;
};

function solution(food_times, k) {
	let foods = [];

	for (let i = 0; i < food_times.length; i++) {
		foods[i] = {time: food_times[i], index: i + 1};
	}

	foods.sort(compareTime);

	let left = k;

	for (let i = 0; i < food_times.length; i++) {
		const length = food_times.length - i;

		const tt = i === 0 ? foods[i].time * length : (foods[i].time - foods[i - 1].time) * length;

		if (left < tt) {
			if (!foods.slice(i).length) {
				return -1;
			}
			return foods.slice(i).sort(compareIndex)[left % length].index;
		}

		left -= tt;
	}

	return -1;
}

console.log(solution([1, 1, 1, 1], 4) === -1);
console.log(solution([4, 2, 3, 6, 7, 1, 5, 8], 16));
console.log(solution([3, 1, 1, 1, 2, 4, 3], 12) === 6);
console.log(solution([3, 1, 2, 2], 5));
console.log(solution([3, 1, 2], 3));
