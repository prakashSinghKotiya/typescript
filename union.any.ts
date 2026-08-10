// 1. Union 

// A union type means a variable can have one of several specific types. eg : 

 let id: string | number;

//  string | number , means: id can be a string OR a number.
// Example with functions

function printId(id: string | number) {
    console.log(id);
}

printId(101);      
printId("abc123"); 


// 1.1 Union_type   : this is also a type of  custom types we create 
let Status: "pending" | "approved" | "rejected"; // here  these are count as our custom types || string literal types


// What does it mean? You're telling TypeScript: 
// "Status can contain only one of these three exact strings: "pending", "approved", or "rejected"."

// So:
 Status = "pending";  Status = "approved";   Status = "rejected";  Status = "completed"; // ❌
// Normally:

// let status: string;  means: status → can contain ANY string

// But:

// let status: "pending" | "approved" | "rejected";

// means:
// status
//   ├── "pending"   ✅
//   ├── "approved"  ✅
//   └── "rejected"  ✅  Only those exact values are allowed.

// What is this called?

// This part: "pending" | "approved" | "rejected"  is a union type of string literal types,
//  commonly called a string literal union.



// 2. any 
// any basically tells TypeScript: "Don't check this value's type." also ts saya:"I don't know and I won't check."

let value: any = 10;

value = "hello"; // ✅
value = true;    // ✅
value = {};      // ✅

// You can also do things that would normally cause type errors:

let values: any = "hello";

values.toUpperCase(); // ✅
values.foo();         // ✅
values.xyz;           // ✅

// TypeScript won't complain because value is any.
///generally we try to avoid "any" when possible.


//3 unknown : this is new type came up its slighlty better than any cuz it tell rn the type is unknown but the time 
// it gets a value it will automatically infer the type and will have a type 