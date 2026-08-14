// 1 UNION : union in typescript is a type that represents a value that can be one of several possible types. 
// eg : type data = string | number | boolean | null | any | unknown  etc 
// union is represented by | this pipe symbol  and union act as || OR operator

//union fn eg : 
function find(value: string | number | boolean): string | number | boolean {
    return typeof value === 'string'? value.toUpperCase(): typeof value === 'number'? value * 2: false
}

console.log(find("prakash"))
console.log(find(22))
console.log(find(true))


// 2 INTERSECTION : It means a value must satisfy both types at the same time. conceptually an intersection acts like AND
//eg:

type Names ={
    name : string
    age : number
   
}
type Id  ={
    id : number,
    department : string
}

const  person : Names  = { name : "prakash", age : 22 }
const depart :  Id = {  id : 123, department : "IT" }

function fulldetails (a : Names , b : Id ):{name : string , age: number , id : number , department : string}  { // here we are 
//                                                              setting the return type means only this values can be retuned 
    return {
       ... a, // without spread op it wil create individual object which is  !== return type 
       ... b  // spread op is merginf the a and b prop into one object and which is === return type
}
}

const detail : Names & Id  = fulldetails(person , depart)   // &  means the return value must satisfy both complete types
console.log(detail)

// function fulldetails (a : Names , b : Id ): Name & Id   { // It means the return value must satisfy both complete types.  used intersection
//                                                      and  this will return evey object present 
//     return {
//        ... a, 
//        ... b
// }