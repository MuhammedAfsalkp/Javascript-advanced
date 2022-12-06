// const strPrim = 'foo';
// const strObj = new String(strPrim);
// console.log(typeof strPrim); // Logs "string"
// console.log(typeof strObj);  // Logs "object"


// const a = new String("Hello world"); // a === "Hello world" is false
// const b = String("Hello world");     // b === "Hello world" is true
// a instanceof String;         // is true
// b instanceof String;         // is false
// typeof a // "object"
// typeof b // "string"


//   INSTANCE METHODS

// //String.charAt()
// let str="afsal";
// console.log(str.charAt(0));//a
// let b = str.charAt(1);//f
// let c = str.charAt(8);//''
// console.log(b,c)


// //String.concat
// let str="afsal";
// let newStr = str.concat('kp','ptb');
// console.log(str,newStr);   //afsal afsalkpptb


// //String.includes(searchString, position)
// let str="afsal kp";
// console.log(str.includes('kp'));   //true
// let f=str.includes(' ');
// console.log(f,str)   //true afsal kp


// //String.endsWith(searchString, length)
// let str="afsal kp";
// console.log(str.endsWith(' kp')); //true
// let f=str.endsWith('l',4); 
// console.log(f)    //false
// console.log(str.endsWith('l',5),str);  //true afsal kp


// String.indexOf(searchString, position)
// let str="hewlo world";
// let a=str.indexOf(' ');
// let b =str.indexOf('w');
// let c =str.indexOf('w',4);
// console.log(a,b,c,str)   //5 6 -1 hello world

//String.lastIndexOf(searchString, position)
// let str="hello world";
// let a= str.lastIndexOf('l');
// let b= str.lastIndexOf('l',4);
// let c= str.lastIndexOf('l',-6);   //as it is minus look at '0' index only
// let d= str.lastIndexOf('h',-6);
// console.log(a,b,c,d)   //9 3 -1 0



// //String.padEnd(targetLength, padString)
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.'),str1);
// // expected output: "Breaded Mushrooms........"
// const str2 = '200';
// console.log(str2.padEnd(5),str2);
// // expected output: "200  "

//String.padStart(targetLength, padString)
// const str1 = '5';
// console.log(str1.padStart(2, '0'));
// // expected output: "05"
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber,fullNumber);
// // expected output: "************5581"  2034399002125581


// String.repeat(count)
//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// let str="abc";
// let res=str.repeat(4);
// console.log(res,str) //abcabcabcabc abc
// console.log(str.repeat(0)) // ''


//String.replace()
// let ar="afsfl";
// let newStr = ar.replace('f','r');
// console.log(newStr,ar);// arsfl afsfl
// console.log("test".replace('est','EST'));   //tEST

 
//String.replaceAll()    //notworking
// let str="ABcdABefAB";
// let newStr = str.replaceAll('AB','ab');
// console.log(newStr)

// //String.slice(start,end)  end-1
// let str="hello world"
// let b = str.slice('0',5);  //hello hello world
// console.log(b,str)
// console.log(str.slice(0,-2))  //hello wor


//String.split(seperator,limit)
// let str="ab cd ed gh"
// let ar=str.split(' ');
// console.log(ar,str)  //[ 'ab', 'cd', 'ed', 'gh' ] ab cd ed gh
// console.log("aggdhahahhdaj".split('a')); // [ '', 'ggdh', 'h', 'hhd', 'j' ]
// console.log("abc".split(''))
// console.log(str.split())


// String.startsWith
// let str="hello world";
// console.log(str.startsWith('hel'));  //true
// console.log(str.startsWith('heL'));   //false
// console.log(str.startsWith('w',6))    //true


//String.substring(start,end)  end-1
// let str="hello world";
// console.log(str.substring(6));   //world


//String.toLowerCase();
// let str="ABCdefg";
// let l=str.toLowerCase();
// let u=str.toUpperCase();
// console.log(str,l,u)   // ABCdefg abcdefg ABCDEFG


// //String.trim(),trimStart(),trimEnd()
// let str="  hello world   program   ";
// let full=str.trim();
// let st=str.trimStart();
// let en=str.trimEnd();
// console.log(full,st,en,str);   //hello world   program hello world   program      hello world   program   hello world   program


// // String.valueOf
// // The valueOf() method returns the primitive value of a String object.
// const stringObj = new String('foo');
// console.log(stringObj);
// // expected output: String { "foo" }
// console.log(stringObj.valueOf());
// // expected output: "foo"







