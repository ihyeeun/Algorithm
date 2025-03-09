class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        boolean[] bool = new boolean[10]; //기본적으로 false가 설정이 되어있을것.
        int len = numbers.length;
        for(int i=0;i<len;++i){
            bool[numbers[i]] = true;
        }
        
        for(int i=0;i<10;++i){
            if(!bool[i]) answer+=i;
        }
        
        
        return answer;
    }
}

//오 바로 비트마스크가 떠올랐어. bool배열?