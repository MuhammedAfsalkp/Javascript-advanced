// let str="afsal";
// let arr=[1,2,3,4]
// for(let key of str){
//     console.log(key)
// }
// for(let key of arr){
//     console.log(key)
// }


//like array string can also be use in for of
// function perm(str){
//     if(str.length < 2) { return str;} 
//     let res=[];
//     for(let i=0; i<str.length; i++){
//         let f=str[i];

//         let rem=str.slice(0,i)+str.slice(i+1,str.length);
//         for(let per of perm(rem)){
//             res.push(f+per);
//         }
//     }
//     return res;
// }
// console.log(perm("aac"))


// let findPermutations = (string) => {
//     if (!string || typeof string !== "string"){
//       return "Please enter a string"
//     } else if (string.length < 2 ){
//       return string
//     } 
//     let permutationsArray = []     
//     for (let i = 0; i < string.length; i++){
//       let char = string[i] 
//       //to avoid repetition
//       if(string.indexOf(char) != i) continue;
//       let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length) 
//       for (let permutation of findPermutations(remainingChars)){
//         permutationsArray.push(char + permutation)
//       }
//     }
//       return permutationsArray;
//     }
//    console.log( findPermutations("aac"))


function comb(str){
    let res=[];
    for(i=0; i<str.length; i++){
      
        for(j=i+1; j<str.length+1; j++){
            res.push(str.slice(i,j))
        }
    }
    return res;
}
console.log(comb('aac'))



// var abc = function () {
//     var holdingArr = [];
//     var threeOptions = ["a", "b"];
//     var recursiveABC = function(singleSolution) {
//         if (singleSolution.length > 2) {
//           holdingArr.push(singleSolution);
//           return;
//         }
//         for (var i=0; i < threeOptions.length; i++) {
//           recursiveABC(singleSolution.concat([threeOptions[i]]));
//         }
//     };
//     recursiveABC([]);
//     return holdingArr;
//   };

//   console.log(abc())

// let res=[];
// function perm(str, data, last, index)
//     {
//         let length = str.length;
      
  
//         // One by one fix all letacters at the given index
//         // and recur for the subsequent indexes
//         for (let i = 0; i < length; i++)
//         {
  
//             // Fix the ith letacter at index and if
//             // this is not the last index then
//             // recursively call for higher indexes
//             data[index] = str[i];
  
//             // If this is the last index then print
//             // the string stored in data[]
//             if (index == last){
//               console.log(data)
//                res.push(data.join("")) 
//             }
//             else
//                 perm(str, data, last, index + 1);
//         }
//     }

//     let str="ABC"
//     perm(str,[],str.length-1,0);
//     console.log(res)
//     // allLexicographic("ABC");