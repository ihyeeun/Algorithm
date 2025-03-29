import java.util.*;

class Solution {
    public String solution(String[] id_pw, String[][] db) {
        String answer = "";
        
        HashMap<String, String> DB = new HashMap<>();
        for(String[] id : db){
            DB.put(id[0], id[1]);
        }
        //조건 1. 일치하는 회원정보가 있으면 login
        // if(DB.get(id_pw[0]) != null){
        String password;
        if((password = DB.get(id_pw[0])) != null){
            if(id_pw[1].equals(password)){
                answer = "login";
            }
            else answer = "wrong pw";
        }
        else { // 아이디가 일치하지 않으면 fail
            answer += "fail";   
        }
        
        //조건 3. 아이디는 일치하나 비밀번호가 일치하지 않으면 wrong pw
        
        return answer;
    }
}

/*
어떻게 빠르게 풀 수 있을까 고민했는데
여기서 hashMap을 이용하면 좀 더 빠르게 풀 수 있을거같다라는 생각이.

*/