//In TypeScript, generics let you write reusable code that works with different data types while keeping type safety.
// generic in tpescript is written as <T> and t will can be the given value or return value 
// you can say generic is by default unknow but it gets it value when we call it but in unknown  once we set the value
//  its not changeable but in generic for that function call it will be that datatype for that particalar function call


function callme  <t>( value : t): t {
    return value
}

callme ("prakash") // or we can explicityly set the type eg : callme <string>("prakash")
callme (22)  // callme <number>(22)
callme (true ) // callme <boolean>(true) 

// see how the callme function act a a string when string is calling and act aas ano when no is callling and so on 
//t is called as a place holder we can write any things insete of t eg x y or z or xyx anything .

// 2- MULTIPLE GENERIC VALUES 

function adds <T, U> ( a: T, b : U): void {
    console.log (typeof a)
    console.log (typeof b)
}

adds<number, number>(1,2)
adds<number, string>(1 ,"2")
adds("1" ,"2")
adds(1, true)


// 3 - mutiple generic types with defaut type as well 

function demo <t , u > (a: t, b: u , c: boolean):void { // see the value f a and b are geenric but c have a custom type givenn
    console.log (typeof a)                  // void means this  fn wont return any  value 
    console.log (typeof b)
    console.log (typeof c)
}
