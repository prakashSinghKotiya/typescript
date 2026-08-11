// in ts we can give type to the object if not ts wil automatically infer the type of the object

//but if we defining the type so we have to define it like this 

const obj : {        // type annotation
    name : string;  
    age : number,
    isadult : boolean,
    address : {
        city : string;
        country : string
    }
}= {                         // real obj 
    name : "prakash",
    age : 22,
    isadult : true,
    address:{
        city: "khatima",
        country : "india"
    }
}