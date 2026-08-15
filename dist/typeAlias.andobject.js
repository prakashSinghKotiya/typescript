"use strict";
//1 > in ts we can give type to the object if not ts wil automatically infer the type of the object
Object.defineProperty(exports, "__esModule", { value: true });
//but if we defining the type so we have to define it like this  , but if there are mutiple obj we need to create also it types
// so its going to be a lot of work and unncessary if we want same property to access in every obj so to overcome this  
// we use TYPE ALIAS 
const obj = {
    name: "prakash",
    age: 22,
    isadult: true,
    address: {
        city: "khatima",
        country: "india"
    }
};
const u1 = {
    name: "prak ",
    age: 21,
    isadult: true,
    address: {
        city: "khatima",
        country: "india"
    }
};
//fn  to find the name with age 
const find = (x) => {
    return `name is ${x.name} and age is ${x.age}`;
};
find(u1);
//A type alias for an object defines the expected structure (shape) of that object: required keys must be present,
//  and their values must have the specified types.
//# sourceMappingURL=typeAlias.andobject.js.map