//Exercise 1//

var array1 = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari']
array1.sort();
//document.write(array1);

//Exercise 2//
var fruit = ['apple', 'banana', 'kiwi']
var animals = ["monkey", "horse", "dog"]

animals.sort();

//console.log(fruit+"\n"+fruit+",orange") 
//console.log(animals+"\n"+"cat,"+animals)

//Exercise 3

var morefruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"

var temp = morefruit.split("/")

for (let i = 0; i < temp.length; i++) {
    document.write(temp[i]+"\n")
}
//newline doesn‘t work in the browser like that