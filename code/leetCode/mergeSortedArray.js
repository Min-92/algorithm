/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
	if (!nums2.length) {
		return;
	}
	const a = nums1.slice(0, m);
	const b = [...nums2];

	let i = 0;

	const max = n + m;

	while (i < max) {
		if (a[0] === undefined) {
			nums1[i] = b.shift();
			i++;
			continue;
		}

		if (b[0] === undefined) {
			nums1[i] = a.shift();
			i++;
			continue;
		}

		if (a[0] < b[0]) {
			nums1[i] = a.shift();
		} else {
			nums1[i] = b.shift();
		}
		i++;
	}
};
