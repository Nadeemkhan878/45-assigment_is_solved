//Q18:
//  seeing the wold: think of at least places in the wold you'd like to visit.
//  store the location in a array. make sure the arrey is not in alphabetical order.
//  print your arrey in its orignal order.
//  print your arrey in alphabetical order without modifying the actual list.
//  show that your arrey is still in its orignal order by printing it.
//  print your arrey in reverse alphabetical order without changing the order of ther orignal list.
//  show that your arrey is still in its orignal order by printing it again
//  reverse the order of your list.print the arrey to show that its order has changed.
//  reverse the order of your list again.print the list to show it's back to its orignal order.
//  sort your arrey so it's stored in alphabetical order.print the arrey to show that its order has been changed.

                      //Task 18
let places :string[]=[`Karachi`,`Hydrabad`,`Balochistan`,`Multan`,`Punjab`,];
console.log(`orignal  `+places);


// print your arrey in alphabetical order without modifying the actual list.
console.log(`copy `+[...places].sort());


//  show that your arrey is still in its orignal order by printing it.
console.log(`orignal  `+places);


//  print your arrey in reverse alphabetical order without changing the order of ther orignal list.
console.log(`copy  `+[...places].sort().reverse());


//  show that your arrey is still in its orignal order by printing it again
console.log(`copy  `+[...places].sort().reverse ());


//  reverse the order of your list.print the arrey to show that its order has changed.
console.log(`orignal  `+places.sort());


//  reverse the order of your list again.print the list to show it's back to its orignal order.
console.log(`orignal  `+places.sort().reverse());










let arrey:string[]=[`Nadeem`,`Murtaza`,`Mehmood`,`Tanveer`,`Sameer`];
for (let i=0; i<arrey.length; i++){
console.log(`${arrey[i]}`)
}

// let arrey: string[] = [`Nadeem`,`Murtaza`,`Mehmood`,`Tanveer`,`Sameer`];
// for (let i=0; i<arrey.length; i++){
// console.log(`${arrey[i]}`);
// }
