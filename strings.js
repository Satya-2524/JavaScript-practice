// string methods 
const str="Hello world"
console.log(str[0])
console.log(str[3])   //to find the index values

// charAt
const str1="Hello Peoples"
console.log(str1.charAt(7))
console.log(str1.at(-1))  //allow -ne value ,if there is no character in the string it will give empty space

// slice
const str2="my name is apple"
console.log(str2.slice(0,6)) 
console.log(str2[0].toUpperCase() + str2.slice(1))
console.log(str2[0].toUpperCase() + str2.slice(1) + str2[15].toUpperCase())

// startswith
const str3="sweet banana"
console.log(str3.startsWith("s")) //true
console.log(str3.startsWith("w")) //false

// endswith
console.log(str3.endsWith("s")) //false
console.log(str3.endsWith("a")) //ture 

// includes
const str4="i am learning javascript"
console.log(str4.includes("am"))  // true
console.log(str4.includes("java")) //true



