import java.util.*;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        
        int customerLen = privacies.length;
        boolean[] bool = new boolean[customerLen];
        for(int i=0;i<customerLen;++i){
            //"2021.05.02 A"
            String infomations = privacies[i];
            
            //일단 크게 가입날짜와 약관유형으로 구별해야한다.
            String[] info = infomations.split(" ");
            String date = info[0];
            String type = info[1];
            
            //date에서 년/월/일 로 나눠야한다.
            String[] datePart = date.split("\\.");
            int year = Integer.parseInt(datePart[0]);
            int month = Integer.parseInt(datePart[1]);
            int day = Integer.parseInt(datePart[2]);
            
            //terms에서 type 꺼내기
            // String T; //이거 필요없을거같긴 해?
            int period = 0;
            for(String term : terms){
                if(term.startsWith(type)){
                    String[] str = term.split(" ");
                    // T = str[0];
                    period = Integer.parseInt(str[1]);
                    break; //원하는 항목을 찾았으니까.
                }
            }
            System.out.println("파싱한거 : "+ year + " " + month + " " + day);
            //이제 해야할게 terms와 비교해서 기간을 더하고 오늘 날짜보다 크면 그걸 i + 1을 저장하면 될거같아요
            if(day == 1) {
                day = 28;
                //month를 빼야하는데
                if(month == 1) {
                    --year;
                    month = 12;
                    System.out.println("이거 왜 안돼?");
                }
                else {
                    --month;
                    System.out.println("이게 실행되는거 같은데?");
                }
            }
            else --day;

            int totalMonths = (month - 1) + period;
            // 연도는 totalMonths를 12로 나눈 몫만큼 증가합니다.
            year += totalMonths / 12;
            // 월은 totalMonths를 12로 나눈 나머지에 다시 1을 더해서 1부터 12 범위로 맞춥니다.
            month = (totalMonths % 12) + 1;
            
            //month가 1인 경우도 위에처럼 계산을 해줘야하는데 안했구나.
            System.out.println("이것이 더한 거 아닌가여 ? "+ year + " " + month + " " + day);
            
            //이제 today와 비교해서 추가하면 될듯.
            String[] T = today.split("\\.");
            int yearT = Integer.parseInt(T[0]);
            int monthT = Integer.parseInt(T[1]);
            int dayT = Integer.parseInt(T[2]);
            
            //조건이 잘못됐다.. 오늘날짜가 더 크니까 파기해야지 !!
            if(yearT == year && yearT >= 2000 && yearT <= 2022 && year >= 2000 && year <= 2022){
                if(monthT == month){
                    if(dayT > day) bool[i] = true;
                } 
                else if(monthT > month) bool[i] = true;
            }
            else if(yearT > year&& yearT >= 2000 && yearT <= 2022 && year >= 2000 && year <= 2022) bool[i] = true;
        }
        
        // System.out.println(Arrays.toString(bool));
        int cnt = 0;
        for(boolean b : bool){
            if(b == true) ++cnt;
        }
        int[] answer = new int[cnt];
        int idx = 0;
        for(int i=0;i<customerLen;++i){
            if(bool[i] == true) answer[idx++] = i+1;
        }
        
        return answer;
    }
}

/**/
/*
일자를 계산해서 -1을 먼저 할건데 1인 경우에만 신경쓰면 되는거 아닌가?
이렇게해서 day를 먼저하고, month를 1을 빼고, + month만큼 하면 되는건가
month에도 %12를 할거임.맞제
12보다 큰 수라면 year에도 유효기간월/12++ 을 해줄거고. 맞나
일단 파싱하는것부터 관건이긴 해
그러고 마지막에는 오름차순으로 return을 해야하네.
*/