//Exercise 1//

var array1 = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari']
array1.sort();
console.log(array1);

//Exercise 2//
var fruit = ['apple', 'banana', 'kiwi']
var animals = ["monkey", "horse", "dog"]

animals.sort();

console.log(fruit+"\n"+fruit+",orange") 
console.log(animals+"\n"+"cat,"+animals)

//Exercise 3

var morefruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"


//method 1
//console.log(morefruit.split("/").join(" "));

//method 2
var temp= morefruit.split("/")

for (let i = 0; i < temp.length; i++) {
    console.log(temp[i])
}

