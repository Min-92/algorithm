import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        while(scan.hasNextLine()) {
        	String word = scan.nextLine();
        	if(word.isEmpty() || word.length() > 100 || word.startsWith(" ") || word.endsWith(" ")) {
        		break;
        	}
        	else {
        		System.out.println(word);
	        }
        }
	}
}
