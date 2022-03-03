/**
 *   const vs Object.freeze
 * 
 *   const applies to binding variables means where we cannot assign new reference to the variable
 * 
 *   freeze applies to value mainly for objects where it makes object immutable
 */

 // const won't allow re-assigning where object can be mutable
 const person = {
    name: "Leonardo"
 };
 person.name = 'a1'
 console.log(person)

 //freeze makes object immutable
 Object.freeze(person)
 person.name = 'a2';
 console.log(person)

