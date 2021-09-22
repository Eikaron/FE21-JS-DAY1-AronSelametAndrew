// Intermediate

// Exercise 1
const cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort());

// Exercise 2
const fruit = ['apple', 'banana', 'kiwi'];
console.log(fruit);
fruit.push('orange');
console.log(fruit);
fruit.pop();
console.log(fruit);

const animals = ['monkey', 'horse', 'dog'];
console.log(animals.sort());
const animalSort = animals.sort();
animalSort.unshift('cat');
console.log(animalSort);

// Exercise 3
const lasFruitas = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
let temp = new Array();  // N.B Cannot use const here must use let (or var)
temp = lasFruitas.split('/');
console.log(temp);
for (index in temp) {
    console.log(temp[index]);
}

document.getElementById('fruit').innerHTML = temp.join(", ");
document.getElementById('fruit2').innerHTML =
    temp[0] + ",<br>" +
    temp[1] + ",<br>" +
    temp[2] + ",<br>" +
    temp[3] + ",<br>" +
    temp[4] + ",<br>" +
    temp[5] + ",<br>" +
    temp[6] + ",<br>" +
    temp[7] + ".<br>";