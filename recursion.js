fact//
function fact(n){
    if(n==1) return 1;
    return n*fact(n-1)
}
console.log(fact(4))
// 4*fact(3)
//   3*fact(2)
//    2*fact(1)
//      1


//fibanocci
// function fib(n){
//     if(n==1) return 1;
//     if(n==0) return 0;
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(7))


//reverse




// function rev(str){
//     if(str.length == 0) return str;
//     return str[str.length-1]+rev(str.slice(0,str.length-1))

// }
// console.log(rev("hello"))

//sum of array
// function sum(ar){
//     if(ar.length==1){
//         return ar[0];

//     }
    
//     return ar[ar.length-1]+sum(ar.slice(0,ar.length-1))
// }
// console.log(sum([1,2,3,4]))