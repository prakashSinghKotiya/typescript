// In TypeScript, a call signature is basically a way to tell TypeScript:
// “If someone calls this thing like a function, this is what the parameters and 
// return value must look like.”


//inside object when we declare a fn which is a method and we are defining its type  and return type inside that obj it is called 
//as callsignature 
//eg:

type Student = {
    name:string,
    class: number,
    greeet:(country : string) => string    // this is call signature here we are defining the fn type of a method 


}

const stud : Student = {
    name: "prakash",
    class: 6,
     greeet :(xyz : string):string => {
        return `data : ${stud.name} , ${stud.class} , ${xyz}}`

    }
}


console.log(stud.greeet("india" ))