import java.util.*;

class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        
        Stack<Integer> stack = new Stack<>();
        int[] burger = new int[4];
        int[] makeBurger = {1,3,2,1};
        int len = ingredient.length;
        
        for(int i=0; i<len; ++i){
            stack.push(ingredient[i]);
            while(stack.size() > 3){
                for(int j=0; j<4; ++j){
                    burger[j] = stack.pop();
                }
                if(Arrays.equals(burger, makeBurger)){
                    answer++;
                    continue;
                }
                else {
                    for(int j=3; j>=0; --j){
                        stack.push(burger[j]);
                    }
                    break;
                }
            }
        }
        return answer;
    }
}

/*
스택에 넣다가 스택사이즈가 4개 이상이 되면 그때 4개를 팝해서 확인하고 다시 도는 형식으로 하면 되는구나


아니 왜 정답을 봤는데도 못푸냐.. 미친건가?

*/