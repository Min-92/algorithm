/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const find = (start, end, isBad) => {
	const len = end - start + 1;

	if (len > 3) {
		const mid = Math.floor((start + end) / 2);

		if (isBad(mid)) {
			return find(start, mid, isBad);
		}
		return find(mid, end, isBad);
	}

	if (len === 3) {
		if (isBad(start + 1)) {
			if (isBad(start)) {
				return start;
			}
			return start + 1;
		}

		if (isBad(end)) {
			return end;
		}
		return end + 1;
	}

	if (len === 1) {
		if (isBad(end)) {
			return end;
		}
		return end + 1;
	}

	if (len === 2) {
		if (isBad(start)) {
			return start;
		}

		if (isBad(end)) {
			return end;
		}

		return end + 1;
	}
};
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		if (n === 1) {
			return 1;
		}
		return find(1, n, isBadVersion);
	};
};
