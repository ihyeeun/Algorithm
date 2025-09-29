function solution(dirs) {
    var answer = 0;
    var directions = {
        "U": [0,1],
        "D": [0,-1],
        "R": [1,0],
        "L": [-1,0]
    }
    let X=0, Y=0;
    let count = 0;
    let visited = new Set();
    
    // 방향을 바꿔주는 함수가 있는게 필요할 듯
    function direction(dir){
        // 경계를 넘어가는 명령어가 있으면 무시하고 넘어가야한디
        let nextX = X + directions[dir][0];
        let nextY = Y + directions[dir][1];
        
        // 여기서 체크여부를 넣으려면 어떻게 하면 좋으려나 
        let check1 = `${X}${Y}${nextX}${nextY}`;
        let check2 = `${nextX}${nextY}${X}${Y}`;
        
        if(nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) 
            return;
        // 지금 문제는 겹치는 경우에는 아예 가지를 않아서 오류가 나고 있네.. 일단 겹치더라도 가게 만들어야한다.
        if(!(visited.has(check1) && visited.has(check2))){
            // 새로운 길인 경우에만 카운트
            count++;
            visited.add(check1).add(check2);
        }
        return [X,Y] = [nextX, nextY];   
    }
    
    for(d of dirs){
        direction(d);
    }
    
    return count;
}