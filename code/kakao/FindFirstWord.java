package com.company;

import java.util.*;

import sun.tools.jconsole.JConsole;

public class Main {
	public static void main(String[] args) {
        System.out.println(solution("statistics"));
	}

	public static int solution(String s) {
		HashMap<Character, Integer> countMap = new HashMap<>();
		HashMap<Character, Integer> map = new HashMap<>();

		for (int i = 0; i < s.length(); i++) {
			char cur = s.charAt(i);

			Integer count = countMap.get(cur);

			if (count != null) {
				map.remove(cur);
			}

			if (count == null) {
				countMap.put(cur, 1);
				map.put(cur, i + 1);
			} else {
				countMap.put(cur, count + 1);
			}

		}

		int min = -1;

		for (Map.Entry<Character, Integer> entry : map.entrySet()) {
			if (min == -1) {
				min = entry.getValue();
				continue;
			}

			min = Math.min(entry.getValue(), min);
		}

		return min;
	}
}




















