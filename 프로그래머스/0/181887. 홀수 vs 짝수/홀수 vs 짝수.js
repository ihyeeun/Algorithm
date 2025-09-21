function solution(num_list) {
    var oddN = 0;
    var evenN = 0;  
        
    for(let i=0;i<num_list.length ;++i){
        if(i % 2 == 0){
            oddN += num_list[i];
        }
        else {
            evenN += num_list[i];
        }
    }
    
    return oddN > evenN ? oddN : evenN;
}