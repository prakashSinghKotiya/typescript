"use strict";
//A tuple in TypeScript is an array where you tell TypeScript: Exactly what type each position should contain.
Object.defineProperty(exports, "__esModule", { value: true });
// we use tuples when we are 100% sure about the datatype and the it has that only data with that only manner or flow 
let arr = ["Prakash", 22]; //normal array
// ["Prakash", 22]
// [22, "Prakash"]
// ["hello", 50, "abc","x", "y", "z"]  // see here the order dosent matter neither the limit if 2 only 
//eg tuples :
let student = ["Prakash", 22]; //tuple
// let student: [string, number] = [22, "Prakash"]; // ❌
//let student: [string, number] = ["prakash", "22","prakash", "22"] false 
// so in tuples when we define the type egg: let student :[string , number ] so it means it only will have 2 values in string and no 
// order first string sec number and only 2 values .
//NOTE : buut if we do student.push("zyc") this will get insert into the student tuple and it will thow an error so to stop this 
// we make our tuple "READ ONLY " eg:
let cc = ["Prakash", 22];
//# sourceMappingURL=tuples.js.map