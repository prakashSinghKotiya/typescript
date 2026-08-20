// utility types are built in types in ts which helps in manipulating or transforming other types in convinient way 
//TypeScript utility types as ready-made tools for modifying existing types.

// different types of utility types 

//1> Partial : Partial<T> Partial makes all properties optional. means  send only porperty you want acc to your convinience 
//from the defined type eg: 

interface Person {
        name: string;     
        age: number;
        address: string;
    }
    
    const  PartialPerson: Partial<Person> = {   // cuz OF  partiall its now optional what we want to use or insert or update 
        name : "prakash"
    }
 // see the Person interface have lots of porperty but becasue of using partial we can only send or update the property we want
 // accordingly we ddont need to define the whole obj witht the whole porperties person interface have 
 // but there should be properties that are isside the interface Person , if we use any diff property it willl throw err 


// 2. Required<T> Opposite of Partial. It makes everything required. even the properties that are optional 
// eg;

interface Object {
    name: string;  
    age ?: number;      
    address ?: string;
}
// see we put age and add optional so noramlly it wont throw err if we dont define these properties but theats not the case
// with REQUIRED  it means every property of that type must be required even the ones that are optional


const toto : Required<Object> ={  // here we used object interface type so now even optional properties are req to define 
    name : "PRAkash",
    age : 21,
    address : "fishafiej"
}


// 3 Readonly<T> It makes all properties readonly. It's like const. Makes properties impossible to reassign.
 // EG: 
 interface Object2 {
    name: string;  
    age ?: number;      
    address ?: string;
}

const newtodo: Readonly<Object2> = { // here we used Readonly so now we cannot update this newtodo obj property
     name : "PRAkash",
    age : 21,
    address : "fishafiej"
}

// newtodo.name = "hifi"  , we cant do this now this willl throw error 



//4 Pick<T,  this helps is picking the only property we need from the type  , eg :

 interface Object3 {
    name: string;  
    age ?: number;      
    address ?: string;
}

const faah: Pick< Object3 , "name" | "age"> = {  // here we picked only name and age so we dont need address so this is how picl works
    name : "faahd",
    age : 21
}


// 5 omit : this is opposite of pick ,  it omits porperty we dont neeED means it will remove the properties we dont need 
// eg:

interface Object4 {
    name: string;  
    age ?: number;      
    address ?: string;
} 

const fahhh : Omit<Object4 , "name"> = {  //suppose we  dont ened the name field so this is how we can omit it .
    age : 21
}


// 6. Record<K, V>  It creates an object type where: K = key type , V = value type
// eg: 
 
type role = "Admin" | "user" | "superuser" // this is the key type 
type permission = "read" | "write" | "delete" // this is the value type 

const permissions : Record< role , permission> = { // here we created a obj with key type role and value type permission
Admin : "read",
user : "write",
superuser : "delete"
} 

//another eg 


type sRole = "Admin" | "user"

const all : Record< sRole , string> = {  // here we creating an obj with key sRole(type) and value type string(any)
    Admin : "read",
    user : "write"
}
