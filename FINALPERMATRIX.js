// // //permutation with repetition
// let str="CAB"
// let res=[];
// function perm(str,last,data,index){
//     for(let i=0; i<str.length; i++){
//         data[index]=str[i]
//         if(index==last){
//             res.push(data.join(""))
//         }else{
//             perm(str,str.length-1,data,index+1)
//         }
//     }
// }
// perm(str,str.length-1,[],0)
// console.log(res.sort())


// // //permutation without repetition
// function permwithoutRep(str){
// if(str.length<2) return str;
// let res=[];
// for(let i=0; i<str.length; i++){
//     let f=str[i];
//     let rem=str.slice(0,i)+str.slice(i+1,str.length);
//     for(let p of permwithoutRep(rem)){
//         res.push(f+p)
//     }
// }
//   return res;
// }
// console.log(permwithoutRep("AB"));



// function comb(str){
//     let res=[];
//     for(i=0; i<str.length; i++){
//         for(j=i+1; j<str.length+1; j++){
//            res.push(str.slice(i,j)) 
//         }
//     }
//     return res;
// }
// console.log(comb("ABC"))


// let a=[
//     [5,2],
//     [6,-3],
//     [7,3],
//     [-4,0]
// ]
// let b=[
//     [4,5,-2],
//     [-1,1,6]
// ]
// let ar=a.length;
// let al=a[0].length;
// let br=b.length;
// let bl=b[0].length;
// if(al !=br){ console.log("Multiplication is not possible"); return;}
// let c=new Array(ar);
// for(let i=0; i<ar; i++){
//     c[i]=new Array(bl)
//     for(let j=0; j<bl; j++){
//         c[i][j]=0;
//         for(let k=0; k<al; k++){
//             c[i][j]+=a[i][k]*b[k][j]          
//         }
//     }
// }
// console.log(c)