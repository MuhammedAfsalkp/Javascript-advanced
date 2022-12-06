// var siteInfo = {
//     "name" : "blogger",
//     "users" : [
//         ["admins","1","2","3"],
//         ["editors","4","5","6"]
//     ]
// }

// let res=siteInfo.users[1].forEach(element => {
    
// if(element=="editors"){
// }
// else{
//     console.log(element)
// }
   
// })

// let country='India,Pakistan,Germany,GreatBritain,Srilanka,Unitedstates Of America,Canada';
// let output;
// if(country.includes('Canada')){
//     output=country.replace('Canada','CANADA')

// }else{
//     output='Canada does not exist in the string'
// }
// console.log(output)

const fun= (str)=>{
    const obj={
        'a':1, 'A':1, 'b':2,  'B':2, 'c':3, 'C':3, 'd':4,  'D':4, 'e':5, 'E':5, 'f':6,  'F':6,
        'g':7, 'G':7, 'h':8,  'H':8, 'i':9, 'I':9, 'j':10,  'J':10, 'k':11, 'K':11, 'l':12,  'L':12,
        'M':13, 'm':13, 'n':14,  'N':14, 'o':15, 'O':15, 'p':16,  'P':16, 'q':17, 'Q':17, 'r':18,  'R':18,
        's':19, 'S':19, 't':20,  'T':20, 'u':21, 'U':21, 'v':22,  'V':22, 'w':23, 'W':23, 'x':24,  'X':24,
        'y':25, 'Y':25, 'z':26,  'Z':26

    }
    let c=0;
    let string=str.split('');
    string.forEach((element ,index)=> {

        if(index+1 ==obj[`${element}`])c++
        
    });
    return c;

}
console.log(fun("xyzD"))