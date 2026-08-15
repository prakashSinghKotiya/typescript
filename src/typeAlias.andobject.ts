//1 > in ts we can give type to the object if not ts wil automatically infer the type of the object

//but if we defining the type so we have to define it like this  , but if there are mutiple obj we need to create also it types
// so its going to be a lot of work and unncessary if we want same property to access in every obj so to overcome this  
// we use TYPE ALIAS 


const obj : {        // type annotation defiining types 
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

// 2> TYPE ALIAS : is a way to reuse the same type over and over again 
 // to use type alias we use " type " keyword eg : type Xyz  = {}
 // the first word of type alias should be in capital letter
//eg :

type Property = {  // type alias 
    name : string;
    age : number,
    isadult : boolean,
    address : {
        city : string;
        country : string
    }
}


const u1 :Property = {  //see here we using the typealias Property its like a small component of obj
    name : "prak ",
    age : 21,
    isadult : true,
    address:{
        city: "khatima",
        country : "india"
    }
}

//fn  to find the name with age 

const find =( x :Property): String  =>{  // see here inside fn as well we using the type alias , and the retunr type is string

    return `name is ${x.name} and age is ${x.age}`

}

find (u1)


//A type alias for an object defines the expected structure (shape) of that object: required keys must be present,
//  and their values must have the specified types.