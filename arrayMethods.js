//array is mutable 
//referencing
//we can change the state 

// creates an array of length 5;
// const fruits = new Array(5);
// console.log(fruits.length); // 5
// console.log(fruits[0],fruits);//undefined [ <5 empty items> ]


//create array-normal
// const fruits = ['Apple', 'Banana'];
// console.log(fruits.length); // 2
// console.log(fruits[0],fruits[3]); //Apple undefined

// const ar= new Array(1,2,'test',false);
// console.log(ar.length);  //4
// console.log(ar)  //[ 1, 2, 'test', false ]

//STATIC METHOD


// to check is an array or not
// console.log(Array.isArray([1, 2, 3]) ) // true
// console.log(Array.isArray({foo: 123})) // false
// console.log(Array.isArray('foobar'));   // false
// console.log(Array.isArray(undefined));  // false



//Array.prototype - to add new methods to array
//arrow function does not support this,so use normal syntax here
// Array.prototype.sum=function(){
//     let s=0;
//     // console.log("working",this.length)
//     for(let i=0; i<this.length; i++){       
//         s=s+this[i];
//     }
//     return s;
// }
// Array.prototype.sec="rf";
// let a=[1,2,3,4]
// console.log(a.sum(),a.sec) //10 rf
//Return element specific index

//INSTANCE METHODS

// //concat nochange in original array
// let ar=[1,2,3];
// let br=ar.concat([4,5]);
// console.log(br,ar)  //[ 1, 2, 3, 4, 5 ]   [ 1, 2, 3 ]
// let cp=ar.concat()
// ar[0]=10;
// console.log(ar,cp)  //[ 10, 2, 3 ] [ 1, 2, 3 ]
// cp=ar.concat('a','b','c','d',[1,2,3,[100,500]])  //[ 10, 2, 3, 'a', 'b', 'c', 'd', 1, 2, 3, [ 100, 500 ] ]
// console.log(cp)




//copy within array  -change the original array
// let ar=['a','b','c','d','e','f'];                                     //              e-1
// let nar = ar.copyWithin(0,3,4);                                       // (target,start,end)
// console.log(nar,ar)            //[ 'd', 'b', 'c', 'd', 'e', 'f' ] [ 'd', 'b', 'c', 'd', 'e', 'f' ]
// let b = ar.copyWithin(0,1,4);  //[ 'b', 'c', 'd', 'd', 'e', 'f' ] [ 'b', 'c', 'd', 'd', 'e', 'f' ]
// console.log(b,ar);
// console.log(ar.copyWithin(2,0,3));  //[ 'b', 'c', 'b', 'c', 'd', 'f' ]




//arr.entries           (use array.foreach)
//method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// let ar= ['a','b','c','d','e','f']; 
// //approximately it=[[ 0, 'a' ] , [ 1, 'b' ] , [ 2, 'c' ] , [ 3, 'd' ] , [ 4, 'e' ]]
// let it = ar.entries()
// console.log(it) // [Array Iterator]
// for (let a of it ){
//     console.log(a)
// }
// // [ 0, 'a' ]
// // [ 1, 'b' ]
// // [ 2, 'c' ]
// // [ 3, 'd' ]
// // [ 4, 'e' ]
// const a = ["a", "b", "c"];
// // 'it' making errors
// for(let [index,value] of ar.entries()){
//     // console.log("working")
//     console.log(`index= ${index} value=${value}`)
// }
// // index= 0 value=a
// // index= 1 value=b
// // index= 2 value=c
// // index= 3 value=d
// // index= 4 value=e
// // index= 5 value=f




//array filter 
// let a=[5,10,15,2]
// let fiveMultiple = a.filter((element,index,array)=>{ if(element%5==0){
//     return element;
// }})
// console.log(fiveMultiple,a)  //[ 5, 10, 15 ] [ 5, 10, 15, 2 ]




// array.every
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// program to check is subset or not
// var ar=[1,2,3,4,5];
// var a=[1,5,4]
// var b=[1,2,10]
// let resultA=a.every((element)=>{
//     return (ar.includes(element))
// });
// console.log(resultA);  //true
// const resultB = b.every((element)=>{
//     return (ar.includes(element))
// })
// console.log(resultB)  //false



// //arr.fill                 fill(value, start, end)  //change the original array
// //The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
// // It returns the modified array.
// const ar=[1,2,3,4,5];
// console.log(ar.fill(0));   // [ 0, 0, 0, 0, 0 ]
// console.log(ar)   //[ 0, 0, 0, 0, 0 ]
// console.log(ar.fill(1,1,4)); //[ 0, 1, 1, 1, 0 ] 
// console.log(ar.fill(3,1));   //[ 0, 3, 3, 3, 3 ]


//arr.find 
//The find() method returns the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.
// let ar=[1,2,3,4,5,100]
// const hundred = ar.find((element)=>{return (element == 100)});
// console.log(hundred,ar)  //100 [ 1, 2, 3, 4, 5, 100 ]
// const fifty = ar.find((element)=>{return (element == 200)});
// console.log(fifty) //undefined


//arr.findIndex
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
// If no elements satisfy the testing function, -1 is returned.
// let ar=[10,20,30,40];
// const thirtyIndex = ar.findIndex((element)=>{return (element == 30)});
// console.log(thirtyIndex,ar); //2 [ 10, 20, 30, 40 ]
// const hundredIndex = ar.findIndex((element)=>{return (element == 100)});
// console.log(hundredIndex);   //-1


//arr.findLast   //this method is not working in current version
//The findLast() method returns the value of the last element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.
// let ar=[100,200,300,40,500,200];
// lastGreaterTwoFifty = ar.findLast((element)=>{return(element>=250)});
// console.log(lastGreaterTwoFifty)



// arr.findLastIndex     //this method is not working in current version
//The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
// const array1 = [5, 12, 50, 130, 44];
// const isLargeNumber = (element) => element > 45;
// console.log(array1.findLastIndex(isLargeNumber));


//arr.flat()  //there is no change in original array  -  Infinity - for any flatering
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//default value is 1
// The flat method removes empty slots in arrays:
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat(),arr1);
// // expected output: [0, 1, 2, 3, 4]   [ 0, 1, 2, [ 3, 4 ] ]
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const test=[1,2,[3,3],[4,['a','b']]];
// console.log(test.flat(Number.POSITIVE_INFINITY));  //  [1, 2, 3, 3,4,'a','b']


// arr.flatMap
//The flatMap() method returns a new array formed by applying a given callback function to each element of the array,
// and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), 
//but slightly more efficient than calling those two methods separately.
// provide flat of depth 1.
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// const res= arr4.flatMap((element)=>{return element*2}); //[ 2, 4, NaN ] [ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]
// console.group(res,arr4)


// //arr.forEach   -instead of for loop
// //The forEach() method executes a provided function once for each array element.
// // it deos not execute for holes,emptyvalue eg;-[1,2,'',3]
// let ar=[1,2,3,4];
// let br =ar.forEach((element,index,array)=>{
//     console.log(element,index,array)
// })
// console.log(br,"test")  //undefined test
// // 1 0 [ 1, 2, 3, 4 ]
// // 2 1 [ 1, 2, 3, 4 ]
// // 3 2 [ 1, 2, 3, 4 ]
// // 4 3 [ 1, 2, 3, 4 ]



//arr.includes(serach,fromIndex)
//Determines whether the calling array contains a value, returning true or false as appropriate.
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// // expected output: true
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// // expected output: true
// console.log(pets.includes('at'));
// // expected output: false
// const test=[1,2,3,4,5];
// console.log(test.includes(1,1))
// // expected output: false   if from index is -1 '-1+test.length'  is the searching position,if it is negative entire array will be searched


// arr.indexOf()    indexOf(searchElement, fromIndex)
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let ar=['a','b','c','a','d','e'];
console.log(ar.indexOf('a',2));  //3
console.log(ar.indexOf('x'));  //-1
console.log(ar.indexOf('b',-3)) //-1 ie:- -3+5=2 so fromIndex=2 



//arr.join(seperator)
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
// separated by commas or a specified separator string. If the array has only one item,
// then that item will be returned without using the separator. ( default ,)
// let ar=['A','f','s','a','l']
// const str=(ar.join())
// console.log(str,ar);   //A,f,s,a,l [ 'A', 'f', 's', 'a', 'l' ]
// console.log(ar.join(''))  //Afsal
// console.log(ar.join('*'))  //A*f*s*a*l



//arr.keys()
//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }
// // expected output: 0
// // expected output: 1
// // expected output: 2
// //key iterator doesn't ignore holes
// const arr = ['a', , 'c'];
// const sparseKeys = Object.keys(arr);
// const denseKeys = [...arr.keys()];
// console.log(sparseKeys); // ['0', '2']
// console.log(denseKeys);  // [0, 1, 2]




// //arr.lastIndexOf(search,fromIndex)
// //The lastIndexOf() method returns the last index at which a given element can be found in the array,
// // or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const array1 = ['a', 'b', 'c','d','e','a'];
// const la=array1.lastIndexOf('a') //5
// console.log(la)
// console.log(array1.lastIndexOf('a',1)) //0
// console.log(array1.lastIndexOf('a',5))//5
// console.log(array1.lastIndexOf('a',-7))//-1
// console.log(array1.lastIndexOf('a',7))//5
// //fromIndex
// //The position in the array at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), herr -5
// // A fromIndex value greater than or equal to the length of the array also causes the whole array to be searched
// //if array.length + fromIndex is less than 0, the array is not searched, and the method returns -1.



//arr.map()
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// let ar=[1,2,3,4,5,6,7];
// let br = ar.map((element)=>{
//     return(element*2)
// })
// console.log(br,ar);   // [ 2,  4,  6, 8, 10, 12, 14 ]  [ 1, 2, 3, 4, 5, 6, 7 ]



//arr.pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// let ar=[1,2,3,4,5,6,7];
// let popped = ar.pop();



//arr.push() //cannot be used with string,because strings are immutable
//   The push() method adds one or more elements to the end of an array and returns the new length of the array.
// let ar=[1,2,3,4,5,6,7];
// ar.push(8);
// console.log(ar);  //[ 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(ar.push(9,10),ar)  //10  [ 1, 2, 3, 4, 5, 6, 7, 8,9,10]
// const vegetables = ['parsnip', 'potato'];
// const moreVegs = ['celery', 'beetroot'];
// // Merge the second array into the first one
// vegetables.push(...moreVegs);
// console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']



// //arr.reduce()
// //reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)
// //The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// // in order, passing in the return value from the calculation on the preceding element.
// // The final result of running the reducer across all elements of the array is a single value.
// let ar=[1,2,3,4,5,6,7];
// let sum = ar.reduce((prev,cur,index,arr)=>{
//     return prev + cur
// },0)
// console.log("sum = ",sum);  // sum =  28
// // initialValue Optional
// // A value to which previousValue is initialized the first time the callback is called.
// //  If initialValue is specified, that also causes currentValue to be initialized to the first value in the array.
// //   If initialValue is not specified, previousValue is initialized to the first value in the array,
// //  and currentValue is initialized to the second value in the array.



// //arr.reduceRight()
// //The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// const array1 = [[0, 1], [2, 3], [4, 5]];
// const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log(result);
// // expected output: Array [4, 5, 2, 3, 0, 1]





//arr.reverse()
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// // expected output: "array1:" Array ["one", "two", "three"]
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// // expected output: "reversed:" Array ["three", "two", "one"]
// // Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// // expected output: "array1:" Array ["three", "two", "one"]





//arr.shift()
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);
// // expected output: Array [2, 3]
// console.log(firstElement);
// // expected output: 1





// //arr.slice(start,end)   (end-1)     no change in the original array
// // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// // where start and end represent the index of items in that array. 
// //The original array will not be modified.
// let ar=[1,2,3,4,5,6,7,8];
// let b= ar.slice(1,4);
// console.log(b,ar); // [ 2, 3, 4 ] [1, 2, 3, 4, 5, 6, 7, 8]
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




// //arr.some()    
// //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// // It returns true if, in the array,
// // it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// let ar=[1,2,10,100];
// let foundHundred = ar.some((element)=>{return (element==100)});
// let foundFifty = ar.some((element)=>{return (element==50)})
// console.log(foundHundred) //true;
// console.log(foundFifty); //false







// //arr.sort()    change the original array
// // The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, 
// // built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// let a=[10,1,4,7,2,100,50];
// //ascending
// a.sort((a,b)=>a-b);  //  [ 1,  2,   4, 7, 10, 50, 100]
// console.log(a)
// //descending
// let b=a.sort((a,b)=>b-a);
// console.log(a,b)   //   [ 100, 50, 10, 7,  4,  2,  1]    [ 100, 50, 10, 7,  4,  2,  1]



// // arr.splice(start, deleteCount, item1, item2, itemN)
// //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]
// let ret=months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months,ret);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"] ['june]
// //To access part of an array without modifying it, see slice().
// // Return value
// // An array containing the deleted elements.
// // If only one element is removed, an array of one element is returned.
// // If no elements are removed, an empty array is returned.



//arr.toLocaleString() ,arr.values,Array.prototype[@@iterator]()- google



// //arr.toString()
// //The toString() method returns a string representing the specified array and its elements.
// const array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString(),array1);
// // expected output: "1,2,a,1a [ 1, 2, 'a', '1a' ]"


//arr.unshift()
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));
// // expected output: 5
// console.log(array1);
// // expected output: Array [4, 5, 1, 2, 3]

//2D
// const board = [
//     ['R','N','B','Q','K','B','N','R'],
//     ['P','P','P','P','P','P','P','P'],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     ['p','p','p','p','p','p','p','p'],
//     ['r','n','b','q','k','b','n','r'] ];
  
//   console.log(board.join('\n'));
  
//   // Move King's Pawn forward 2
//   board[4][4] = board[6][4];
//   board[6][4] = ' ';
//   console.log("....op......")
//   console.log(board.join('\n'));


// const values = [];
// for (let x = 0; x < 10; x++) {
//   values.push([
//     2 ** x,
//     2 * x ** 2,
//   ]);
// }
// console.table(values);
// let ar=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(ar,ar[2][1]) //  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 8
