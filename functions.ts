
// 1 normal fn
const xyzz = ( a: number ) :string  =>{   // type annotaattion inside parameter and retunr type is string 
    return `a`
}

// 2> default fn parameter 

//see here we are giving default value to the parameter in a ie the id so when we call this fn we can skip this id
//  and it will take the default value 

const yze = ( b : string,  a:number=1 ): string =>{
    return `your id is ${a} and  name is ${b}`
}

yze("prakash")  // see it id is 1 by default so we can give if we want 



// 3> optional fn 


const cyz = ( a : string , b ? : number) :  string =>{
    if ( b ){
        return `your id is ${b} and name is ${a}`
    }
    return `your name is ${a}`
}