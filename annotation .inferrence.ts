// 1. Type Annotation:
// You explicitly tell TypeScript what type a variable should have.
// The part after : is the type annotation:
//type annotation is a way to explicitly specify the type of a variable , function parameter, or return value .

const age : number = 25; // age is explicitly  type annotated as a number
const namee : string = 'John'; // name is explicitly  type annotated as a string

// Type annotaion in fn 

function xyz (a: number, b: number): number { // see here we are giving type of parameters and the return type as well 
        return a + b;
    }

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