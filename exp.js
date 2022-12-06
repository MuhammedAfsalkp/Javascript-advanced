let str="abcde";
let res=[]

function loop(l){
    for(i=1; i<str.length; i++){
        console.log(i)
        if(l!=str.length){
            loop(l+1);
            
        }
        
    }
}
for(i=1; i<str.length; i++){
    console.log(i)
    if(i!=str.length){
        loop(i);
       
    }
       
}


