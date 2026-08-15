//  INTERFACE is same as type but with some more diff features , it is mostly used with class but it can also be used with obj
// interface is used to define the structure of an object means the bblueprint of an object
// The main thing about interface that typpe cant is interfacce can be extend , interface can be merged

 interface User { 
    name : string,
    age : number,
    email ? : string,  // ? means optional property
    readonly id : number  // readonly means the value of this property can not be changed
}

interface department extends User {  // extending the interface User and creating a new interface name deraptment
    depart : string
    id: number
}

const u2: User = {  // here we are creating an object of type User
    name : "prakash",
    age : 22,
    id : 123     // u1.id = 456  // this will give error because id is readonly
}



