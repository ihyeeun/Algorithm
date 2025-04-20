import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        
        int len = participant.length; //참여한 선수의 수를 len 변수에 저장.
        HashMap<String, Integer> map = new HashMap<>();
        
        for(String name : participant){
            if(map.containsKey(name)){
                //map에 중복되는 이름이 있다면 count를 증가해야함.
                map.put(name, map.get(name)+1);
            }
            else {
                map.put(name, 1);
            }
        }
        
        for(String name : completion) {
            //그니까 여기서 하나씩 확인할건데 만약 0이 되면 remove 해도 되긴할듯
            if(map.containsKey(name)){
                //그니까 만약 포함되어있으면 remove하는것도 만들긴 할건데
                if(map.get(name)-1 == 0){
                    map.remove(name);
                }
                else {
                    map.put(name,map.get(name)-1);
                }
            }
        }
        
        for(String name : map.keySet()){
            answer += name;
        }
        
        return answer;
    }
}

/*
hash에는 hashMap/ hashSet 이 두종류가 있음
뭔가 contains를 사용해서 풀면 좋을거같긴 한데
근데 이거 hash로 푼다고 ? 굳이굳이이긴해 ..
그냥 간단하게 바로 풀 방법이 뭐가 있을까"?

진짜 이렇게 풀면 안되고 그냥 지우는걸로 구현해야겠네? 
동명이인이 있을수도 있구나..

아오 배열 값 지우는거 어케하냐

잠깐 ! 완주 완료한 애를 없애야하는건가?

아니면 bool배열로 만들어서 true, false로 만들면 안되나?
그러면 중복된 이름도 찾을 수 있긴 하자네
그렇네 이 경우는 3명이 동명이인이면 안되는거아님?
아니 저 두개 배열이 있을텐데
비교하면 안되나?
일단 participant의 배열을 만들면서 카운트를 진행할거아냐
그리고 completion의 배열도 만들면서 카운트를 해.
근데 만약에 카운트 개수가 같지 않으면 반환하면 되는거 아녀?

*/