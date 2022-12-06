
function maxmin(operation,x){
    let res=[];
    let work=[];
    for(let i=0; i<operation.length; i++){
        if(operation[i]=='push'){
            work.push(x[[i]]);
            let l=Math.max(...work);
            let s=Math.min(...work); 
            res.push(l*s);

        }else{
            
            for(let j=0; j<work.length; j++){
                if(work[j]==x[i]){
                    work.splice(j,1);
                }
            }
            let l=Math.max(...work);
           let s=Math.min(...work); 
           res.push(l*s);
        }
    }
    for(let i=0; i<res.length; i++){
         console.log(res[i])
    }
    

}









let out=maxmin(['push','push','push','pop'],[1,2,3,1]);
console.log(out)

