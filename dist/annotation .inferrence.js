"use strict";
// 1. Type Annotation:
// You explicitly tell TypeScript what type a variable should have.
// The part after : is the type annotation:
//type annotation is a way to explicitly specify the type of a variable , function parameter, or return value .
Object.defineProperty(exports, "__esModule", { value: true });
const age = 25; // age is explicitly  type annotated as a number
const namee = 'John'; // name is explicitly  type annotated as a string
// Type annotaion in fn 
function xyz(a, b) {
    return a + b;
}
// 2.Type Inference
// You don't explicitly specify the type. TypeScript figures it out from the value.
let nam = "Prakash";
let agee = 24;
//TypeScript automatically infers:
// name      // string
// age       // number
// isStudent // boolean
// So this:
// let age = 24;   is essentially understood as:  let age: number = 24;
//# sourceMappingURL=annotation%20.inferrence.js.map