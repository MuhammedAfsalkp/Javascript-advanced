let s1='axx';
let s2='axxx#'
let SS1=s1.split('')
let  SS2=s2.split('')

for(i=0; i<SS1.length; i++){
    if(s1[i]=='#'){
        SS1.splice(i-1,1)
    }
}

for(i=0; i<s2.length; i++){
    if(s2[i]=='#'){
        SS2.splice(i-1,1)
    }
}

if(SS2.join()==SS1.join()){
    console.log(1)
}else{
    console.log(0)
}