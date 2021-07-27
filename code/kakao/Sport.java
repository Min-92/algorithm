package com.company;

import java.util.*;

public class Main {
	public static HashMap<Integer, Integer> factorialMap = new HashMap<>();

	public static void main(String[] args) {
		// write your code here
		System.out.println(solution(5));
	}

	public static int solution(int n) {
		// Write your code here
		HashMap<Integer, Integer> member = new HashMap<>();
		member.put(n, 1);
	
		int next;
		int current = n;
		int max = n;
	
		while (true) {
			next = getNextPlayer(current);
	
			if (member.get(next) != null) {
				break;
			}
	
			member.put(next, 1);
			current = next;
			max = Math.max(max, current);
		}
		return max * member.keySet().size();
	}
	
	public static int getNextPlayer(int x) {
		int result = 0;
	
		int n = 1;
		int cur = x;
		while (cur > 0) {
			int a = (int)(cur % Math.pow(10, n));
	
			result += getFactorial(a);
	
			cur = (int)(cur / Math.pow(10, n));
		}
	
		return result;
	}
	
	public static int getFactorial(int x) {
		Integer ans = factorialMap.get(x);
	
		if (ans != null) {
			return ans;
		}
	
		int fac = fac(x);
		factorialMap.put(x, fac);
	
		return fac;
	}
	
	public static int fac(int x) {
		int result = 1;
		int cur = x;
	
		while (cur > 1) {
			result = result * cur--;
		}
	
		return result;
	}
}




















