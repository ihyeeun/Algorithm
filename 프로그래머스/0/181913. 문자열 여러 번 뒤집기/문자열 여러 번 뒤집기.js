function solution(my_string, queries) {
    var answer = '';
    
    for([s,e] of queries){
        let temp = my_string.slice(s,e+1);
        temp = [...temp].reverse();
        let temp_str = ''
        for(let i=0;i<s;++i){
            temp_str += my_string[i];
        }
        temp_str += temp.join("");
        for(let i=e+1;i<my_string.length;++i){
            temp_str += my_string[i];
        }
        my_string = temp_str;
    }
    
    return my_string;
}