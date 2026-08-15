"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 normal fn
const xyzz = (a) => {
    return `a`;
};
// 2> default fn parameter 
//see here we are giving default value to the parameter in a ie the id so when we call this fn we can skip this id
//  and it will take the default value 
const yze = (b, a = 1) => {
    return `your id is ${a} and  name is ${b}`;
};
yze("prakash"); // see it id is 1 by default so we can give if we want 
// 3> optional fn 
// see here the second parameter is option so its up to how we call the fn with number or not 
const cyz = (a, b) => {
    if (b) {
        return `your id is ${b} and name is ${a}`;
    }
    return `your name is ${a}`;
};
cyz("prakash"); // no error 
//# sourceMappingURL=functions.js.map