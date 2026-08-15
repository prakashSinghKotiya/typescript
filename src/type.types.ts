//  1  here the outer type is the reserved keyword in ts its used to create TYPE ALIAS (CUSTOM DATA TYPES) so here the outside 
// type ie type masalachai is the custom data types

//outside type :This type is a TypeScript keyword used to create a type alias. MasalaChai is the name of the type alias.
//inside type  :This type is just an object property name (also called a property key).
// It says that an object of this type must have a property called type.
//and the spicelevel is the masalachai obj property 

type MasalaChai = { type: "masala"; spicelevel: number }

// type MasalaChai = {     // `type` = TypeScript keyword
//                         // `MasalaChai` = type alias name

//   type: "masala";       // `type` = object property
//                         // `"masala"` = string literal type

//   spicelevel: number;   // `spicelevel` = object property
//                         // `number` = TypeScript type
// }


// 2.Union type means the type value of chai must be from any three 
//  type Chai = MasalaChai | GingerChai | ElaichiChai 


 