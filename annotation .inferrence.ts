// 1. Type Annotation:
// You explicitly tell TypeScript what type a variable should have.
// The part after : is the type annotation:

const age : number = 25; // age is explicitly annotated as a number
const namee : string = 'John'; // name is explicitly annotated as a string

// 2.Type Inference
// You don't explicitly specify the type. TypeScript figures it out from the value.

let nam= "Prakash";
let agee = 24;


//TypeScript automatically infers:

// name      // string
// age       // number
// isStudent // boolean

// So this:
// let age = 24;   is essentially understood as:  let age: number = 24;