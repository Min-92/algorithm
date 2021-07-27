package com.company;

import java.util.*;

public class Main {
	public static void main(String[] args) {
		// write your code here
		System.out.println(solution(new ArrayList<Integer>(Arrays.asList(3, 1, 1, 1, 5, 2, 5))));
	}

	static public int INIT = 0;
	static public int INCREASE = 1;
	static public int DECREASE = -1;

	public static int solution(List<Integer> arr) {
		int ai = 0;
		int bi = 0;

		int status = INIT;
		int max = 0;
		while (bi < arr.size()) {
			if (bi == arr.size() - 1) {
				max = Math.max(max, bi - ai + 1);
				break;
			}

			int a = arr.get(ai);
			int b = arr.get(bi);
			int bn = arr.get(bi + 1);

			int nextStatus = getStatus(b, bn);

			if (ai == bi) {
				max = Math.max(max, bi - ai + 1);

				status = nextStatus;
				bi++;
				continue;
			}

			if (status == INIT || status == INCREASE) {
				max = Math.max(max, bi - ai + 1);

				status = nextStatus;
				bi++;
				continue;
			}

			if (status == DECREASE && nextStatus != INCREASE) {
				max = Math.max(max, bi - ai + 1);

				if (nextStatus != INIT) {
					status = nextStatus;
				}
				bi++;
				continue;
			}

			max = Math.max(max, bi - ai + 1);

			ai = bi;

			if (ai == 0) {
				status = INIT;
				continue;
			}

			while (a >= 0 && arr.get(ai - 1) == b) {
				ai--;
			}
			status = INIT;
		}

		return max;
	}

	public static int getStatus(int a, int b) {
		if (a > b) {
			return DECREASE;
		}

		if (a < b) {
			return INCREASE;
		}

		return INIT;
	}
}




















