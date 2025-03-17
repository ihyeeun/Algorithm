import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[] query) {
        
        int len = query.length;
        Deque<Integer> que = new ArrayDeque<>();
        for(int i=0, end= arr.length; i<end; ++i){
            que.add(arr[i]);
        }

        for(int i=0;i<len;++i){
            if(i%2 == 0){ //짝수라면
                //인덱스의 뒷부분을 잘라서 버리니까.
                int que_len = que.size();
                for(int j=query[i]+1; j<que_len; ++j){
                    que.pollLast();
                }
            }
            else{ //홀수라면
                //인덱스 앞부분을 잘라서 버림.
                for(int j=0;j<query[i];++j){
                    que.poll();
                }
            }
        }
        System.out.println(que);
        int[] answer = new int[que.size()];
        
        for(int i=0, end=que.size();i<end;++i){
            answer[i] = que.poll();
        }
        
        return answer;
    }
}