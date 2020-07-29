const operator = {
	"*": 0,
	"+": 0,
	"-": 0,
};

const getOperators = (str) => {
	for (let i = 0; i < str.length - 1; i++) {
		if (isNaN(str[i] * 1)) {
			operator[str[i]]++;
		}
	}
	return opr;
};

const getExpressionArr = (expression) => {
	const expressionArr = [];

	let number = "";

	for (let i = 0; i < expression.length; i++) {
		if (i === expression.length - 1) {
			number += expression[i];
			expressionArr.push(number * 1);
			continue;
		}

		if (isNaN(expression[i] * 1)) {
			expressionArr.push(number * 1);
			expressionArr.push(expression[i]);

			operator[expression[i]]++;
			number = "";
			continue;
		}

		number += expression[i];
	}
	return expressionArr;
};

const getPermutation = (operatorArr) => {
	let result = [];

	const permute = (arr, m = []) => {
		if (arr.length === 0) {
			result.push(m);
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				permute(curr.slice(), m.concat(next));
			}
		}
	};

	permute(operatorArr);

	return result;
};

const getOpArr = () => {
	const result = [];

	if (operator["*"]) {
		result.push("*");
	}
	if (operator["+"]) {
		result.push("+");
	}
	if (operator["-"]) {
		result.push("-");
	}
	return result;
};

const getOperatorQueue = (operatorArr, op) => {
	const arr = [];

	operatorArr.forEach((element) => {
		for (let i = 0; i < op[element]; i++) {
			arr.push(element);
		}
	});

	return arr;
};

const compute = (operator, num1, num2) => {
	if (operator === "*") {
		return num1 * num2;
	}
	if (operator === "+") {
		return num1 + num2;
	}
	if (operator === "-") {
		return num1 - num2;
	}
};

const getComputedExpressionArr = (i, operator, ans) => {
	const computed = compute(operator, ans[i - 1], ans[i + 1]);

	return [...ans.slice(0, i - 1), computed, ...ans.slice(i + 2, ans.length)];
};

const getAnswer = (operatorArr, expressionArr) => {
	const op = Object.assign({}, operator);

	const opQ = getOperatorQueue(operatorArr, op);

	let ans = expressionArr;

	while (ans.length > 1) {
		const operator = opQ.shift();
		for (let i = 0; i < ans.length; i++) {
			if (ans[i] === operator) {
				ans = getComputedExpressionArr(i, operator, ans);
				break;
			}
		}
	}

	return ans[0];
};

function solution(expression) {
	const expressionArr = getExpressionArr(expression);

	const permutation = getPermutation(getOpArr());

	let max = 0;

	for (let i = 0; i < permutation.length; i++) {
		max = Math.max(Math.abs(getAnswer(permutation[i], expressionArr)), max);
	}
	return max;
}

// console.log(solution("100-200*300-500+20") === 60420);
console.log(solution("50*6-3*2") === 300);
