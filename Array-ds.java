static int[] reverseArray(int[] a) {
        int [] answer = new int [a.length];
        for(int i = 0; i < a.length; i++){
            answer [a.length -i -1] = a[i];
        }
        return answer;
}
