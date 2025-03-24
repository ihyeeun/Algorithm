import java.util.*;

class Solution {
    public int solution(String[] friends, String[] gifts) {
        int answer = 0;
        
        int len = friends.length;
        int[][] exchange = new int[len][len];
        int[] pcnt = new int[len];
        
        //근데 2차원 배열이면 어떻게 문자열을 확인해서 값을 넣을지 고민된다.
        
        for(int i=0, end=gifts.length; i<end; ++i){
            String[] names = gifts[i].split(" ");
            int idx1 = Arrays.asList(friends).indexOf(names[0]);
            int idx2 = Arrays.asList(friends).indexOf(names[1]);
            // System.out.println(idx1 + " " + idx2);
            ++exchange[idx1][idx2];
        }
        // System.out.println(Arrays.deepToString(exchange));
        
        //이제 여기서부터 비교해서 작성하는거 만들어줘야하는데
        //일단 다음달에 선물 받을 배열을 만들어주는게 좋겠지?
        
        for(int i=0; i<len; ++i){
            //근데 여기서 굳이 for문을 한번 더 돌 필요가 없자네?
            for(int j=i; j<len; ++j){
                //이제 조건 1을 수행해야겟어요
                //exchange[][] 를 수행할건디 
                //엥 이렇게 확인하는게 맞나?
                //대각선으로 맞는지를 확인해야하는데 어케해야하니 맞네
                if(exchange[i][j] == exchange[j][i] ||
                  (exchange[i][j] == 0 && exchange[j][i] == 0)
                  ){ //두사람이 주고 받지 않았거나, 동일하게 주고 받았다면
                    //선물지수를 확인해서 선물지수가 큰 사람이 선물을 받는다.
                    int send1 = 0;
                    int receive1 = 0;
                    int send2 = 0;
                    int receive2 = 0;
                    for(int k=0; k<len; ++k){
                        send1 += exchange[i][k];
                        receive1 += exchange[k][i];
                        
                        send2 += exchange[j][k];
                        receive2 += exchange[k][j];
                    }
                    if(send1-receive1 > send2-receive2) ++pcnt[i];
                    else if(send1-receive1 < send2-receive2) ++pcnt[j];
                    // System.out.println("조건2. " + Arrays.toString(pcnt));
                }
                // else if(exchange[i][j] > 0 || exchange[i][j] > 0){
                else {
                    // 위 조건이 두 사람이 선물을 주고받은 기록이 있다면
                    if(exchange[i][j] > exchange[j][i]) ++pcnt[i];
                    else ++pcnt[j];
                    // System.out.println("조건1. " + Arrays.toString(pcnt));
                }
                
                // 조건 2. 만약 주고
            }
            // System.out.println("이것이 선물 : "+ Arrays.toString(pcnt));
        }
        
        // for(int i=0;i<len;++i){
        //     System.out.println(pcnt[i]);
        // }
        // System.out.println("최종 : " + Arrays.toString(pcnt));
        for(int i=0;i<len;++i){
            if(answer < pcnt[i]) answer = pcnt[i];
        }
        return answer;
    }
    //이제 배열에서 제일 높은 값을 꺼내면 된다.
}
/*
다음 달에 선물을 제일 많이 받은 선물의 개수를 return 하면 된다.

조건 1. 두사람이 선물이 주고받은 기록이 있다면
    1-1. 더 많은 선물을 준 사람이 다음달에는 선물을 받을 것.
    
조건 2. 두사람이 주고받은 개수가 없거나 동일하다면
    2-1. 선물지수가 더 작은 사람이 큰 사람에게 선물을 줍니다.
    2-2. 만약 선물지수도 같다면 선물을 주고받지 않음.
    
선물지수란?
    "준 선물의 수 - 받은 선물의 수" 를 말한다.
    
gifts : 선물을 준 친구 / 선물을 받은 친구
*/

/*
어떻게 풀어야할가유..
friends : 친구 이름. -> 이건 이제 배열 크기로 만들면 될거같긴한데
gifts : 누가 누구에게 줬는지 체크하면 되는데

자바라는 언어에도 딕셔너리 개념이 있나?
일단 friends의 크기로 2차원 배열을 만들면 되나.
그리고 비교를 할때 문자열 equels로 해야해?

그리고 일단 gifts에서 공백을 기준으로 파싱하는 메서드가 뭐였는지 기억 나는 사람.
split 과 stringTokenizer 가 있는데
stringTokenizer가 속도가 더 빠르다고 하네요 그러면 일단 파싱하는건 이걸로 사용.

그러면 이제 Map을 이용해서 선물 받을 개수 카운트를 증가하면 될거같은데

2차원 배열에서는 gift로 준거를 개수를 카운트 하면 되는거같고

그러면 그냥 각각 돌면서 계산하면서 count하면 되는거 아닌가?
*/