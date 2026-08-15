// in ts there are same way of creating array like js  but we have to specify the type of array and tell its type array 

// we can declare array in following ways in ts 

//1 normal array
let arr1: number[]= [1, 2, 3, 4, 5]; //this is a array with numbers so its a " number [} array and this is how we set typeof array"


//2 constructor array 
 let arr2: string[] = new Array("a", "b", "c", "d", "e"); //this is a array with string so its a " string [] 


 //3 array.of 

 let ar5 : Boolean[]  = Array.of( true, false )   // array of boolean 


 // some array methods 
 // arr.push()  insert at last
 //  arr.pop()  delete from last
 //  arr.shift() delete from start
 //  arr.unshift() insert at start