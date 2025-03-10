import java.util.*;

class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        int len = babbling.length;
        //연속된 발음 불가.
        //스택으로 풀자 ! 
        //스택에 남아있다면 그게 바로 게챠~
        for(int i=0;i<len;++i){
            // "aya", "ye", "woo", "ma"
            babbling[i] = babbling[i].replace("aya","1");
            babbling[i] = babbling[i].replace("ye","2");
            babbling[i] = babbling[i].replace("woo","3");
            babbling[i] = babbling[i].replace("ma","4");
            
            // System.out.println(Arrays.toString(str));
            Stack<Character> stack = new Stack<>();
            int strlen = babbling[i].length();
            
            for(int j=0;j<strlen;++j){
                char ch = babbling[i].charAt(j);
                //ch가 1,2,3,4가 아니라면 이미 발음하지 못하는 단어이므로 탈락.
                if(ch == '1' || ch == '2' || ch == '3' || ch == '4') {
                    if(stack.size() == 0) stack.push(ch);
                    else {
                        if(stack.peek() == ch) break;
                        else stack.push(ch);
                    }
                }
                else {
                    break;
                }
                if(j==strlen-1) ++answer;
            }
            
        }
        System.out.println(Arrays.toString(babbling));
        //이렇게 만들었는데 만약 연속한 숫자가 나온다면 그건 그냥 냅두고
        //이걸 스택에 넣을 필요도없지. 앞에서부터 +1인 인덱스랑 비교하면서
        //다르다면 0번을 없애고, +1인 인덱스가 다시 기준이 되게 만들면 되는데?

        
        return answer;
    }
}