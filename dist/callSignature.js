"use strict";
// In TypeScript, a call signature is basically a way to tell TypeScript:
// “If someone calls this thing like a function, this is what the parameters and 
// return value must look like.”
Object.defineProperty(exports, "__esModule", { value: true });
const stud = {
    name: "prakash",
    class: 6,
    greeet: (xyz) => {
        return `data : ${stud.name} , ${stud.class} , ${xyz}}`;
    }
};
console.log(stud.greeet("india"));
//# sourceMappingURL=callSignature.js.map