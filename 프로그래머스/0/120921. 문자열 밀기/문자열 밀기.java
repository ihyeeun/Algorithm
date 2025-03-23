class Solution {
    public int solution(String A, String B) {
        int answer = -1;
        int len = A.length();
        
        int min = 100;
        int cnt = 0;
        
        String copy = A;
        
        for(int i=0; i<len; ++i){
            //여기안에 min을 선언을 해야하나
            if(A.equals(B)) {
                answer = 0;
                break;
            }
            String str = A.substring(1);
            String ch = A.substring(0,1);
            A = str + ch;
            ++cnt;
            if(str.equals(B)){
                if(min > cnt) min = cnt;
                break;
            }
            System.out.println(A);
        }
        
        System.out.println();
        A = copy;
        cnt=0;
        
        for(int i=0; i<len; ++i){
            //여기안에 min을 선언을 해야하나
            if(A.equals(B)) break;
            String str = A.substring(0, len-1);
            String ch = A.substring(len-1);
            A = ch + str;
            ++cnt;
            if(A.equals(B)){
                if(min > cnt) min = cnt;
                answer = min;
                break;
            }
            System.out.println(A);
        }
        System.out.println(min);
        return answer;
    }
}

//시계방향으로 돌려보고, 반시계방향으로 돌려보고 min값을 구하면 될거같긴한데.
//만들수없으면 -1반환.
/*
무슨 함수를 사용할 수 있을까 생각중..

그러면 ..
총 포문을 한번씩 돌고 
작은 값을 리턴해야겟네.
substring은 잘린걸 반환하는거구나..
*/
