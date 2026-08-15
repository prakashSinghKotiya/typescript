"use strict";
// 1 UNION : union in typescript is a type that represents a value that can be one of several possible types. 
// eg : type data = string | number | boolean | null | any | unknown  etc 
// union is represented by | this pipe symbol  and union act as || OR operator
Object.defineProperty(exports, "__esModule", { value: true });
//union fn eg : 
function finds(value) {
    return typeof value === 'string' ? value.toUpperCase() : typeof value === 'number' ? value * 2 : false;
}
console.log(finds("prakash"));
console.log(finds(22));
console.log(finds(true));
const person = { name: "prakash", age: 22 };
const depart = { id: 123, department: "IT" };
function fulldetails(a, b) {
    //                                                              setting the return type means only this values can be retuned 
    return {
        ...a, // without spread op it wil create individual object which is  !== return type 
        ...b // spread op is merginf the a and b prop into one object and which is === return type
    };
}
const detail = fulldetails(person, depart); // &  means the return value must satisfy both complete types
console.log(detail);
// function fulldetails (a : Names , b : Id ): Name & Id   { // It means the return value must satisfy both complete types.  used intersection
//                                                      and  this will return evey object present 
//     return {
//        ... a, 
//        ... b
// }
//# sourceMappingURL=union.intersection.js.map