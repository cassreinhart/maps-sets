//no literal syntax for maps
//use new keyword
 
const myMap = new Map(); //empty map
//add key/value pair w/set method
myMap.set(7, 'seven');
//myMap --> {7 => "seven"}
myMap.set('7', 'seven string');
//myMap --> {7 => 'seven, "7" => "seven string"}

myMap.get(7); //"seven"
myMap.get('7'); //"seven string"

myMap.set([], 'empty array!');
myMap.get([]) //undefined
//this happens because arrays are reference types, so you need to store the array into a variable to reference the specific array

const empty = [];
myMap.set(empty, 'empty array!')
myMap.get(empty); //[]

//map methods

//use functions as keys in a map
const add = (x, y) => x + y;
const mult = (x, y) => x * y;

//we want to see how many times the functions were used
const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

//built in methods for map
//create a map that doesn't start out empty
[[],[],[]] //must follow this format of array of arrays
const bandData = [
    [3, '3 Doors Down'], 
    ["three", "Three Dog Night"], 
    ['nine', 'Nine Inch Nails'],
    ['four', "The Four Seasons"],
    [41, 'Sum 41']
];

const bandMap = new Map(bandData); //makes a map

// use spread operator 
[...bandMap];
bandMap.set(182, 'Blink-182').set("twenty", 'Matchbox Twenty'); //you can chain on!!!

//other methods
//has- check if a map contains something
bandMap.has(41); //true

//delete will delete a pair based on a key
bandMap.delete('twenty');
bandMap.has('twenty');//false

//clear can empty out a map entirely
bandMap.clear();//now bandMap is empty

//keys gets all keys from a given map
bandMap.keys(); //returns map iterator {3, "three", "nine", "four", 41, ...}, a collection of all the keys
[...bandMap.keys()]; //will turn into an array of keys


//iterating with maps
//for...of
for (let x of bandMap) {
    console.log(x); //returns pairs of key/values
    //[3, "3 Doors Down"]
}
for (let [key, value] of bandMap) { //inline destructuring
     //this is nicer unless you have a function/callback that is already written you can just pass into the forEach method
    console.log(key, '=', value); 
}

//maps always have the same order (insertion order), and a size!
bandMap.size //tells us how many elements are in it

//forEach
bandMap.forEach((val, key) => console.log(key + '=>' + val)); //note it is VALUE first and THEN key.

//sets
//only store unique values, will not store duplicates
const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']); //you can do an empty set or pass in an iterable (string/arr)
//returns Set (4) {'nofilter', 'justsaying', 'winning', 'yolo'}
//if you pass in a string, it will basically spread it into the set
//if you pass in two strings, the second will be ignored. if a character repeats twice, it will be skipped and only entered once

bannedHashTags.add('bestlife').add('selfie'); //you can chain them on, this will add to the end of the set
bannedHashTags.has('yolo') //true
bannedHashTags.delete('winning');
bannedHashTags.clear();

function filterHashTags (tags) {
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
    return tags.filter((tag) => !bannedHashTags.has(tag));//filter the tags that are not in this set
}

const lilysTags = ['happymonday', 'yolo', 'winning', 'sunset'];  
filterHashTags(lilysTags) 
//return ['happy monday', 'sunset']
//array does the same thing with .includes, but sets are faster!

//remove duplicates from an array in oneline

const ages = [45, 42, 21, 23, 24, 98, 2, 3, 3, 12, 3, 12, 45];
new Set(ages);

//to turn back into an array
[...new Set(ages)]; //now you can call array methods on this new array!

const test = new Set();
test.add(-0)
test.add(0)//both versions of 0 are the same

//NaN === NaN false (like arrays, they are different values)