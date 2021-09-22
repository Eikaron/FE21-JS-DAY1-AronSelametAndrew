const sentence = "Hey there, i am a javascript developer, and i live in vienna";
let newSentence = sentence.split(' ');
newSentence.splice(7);
newSentence.pop();
newSentence.push('developer.');
console.log(newSentence);
console.log(newSentence.join(" "));

document.querySelector('#extra1').innerHTML = newSentence.join(" ");

//  Extra Ex2
let fruit = ['apple', 'banana', 'kiwi'];
fruit.splice(1, 0, 'orange', 'strawberry');
console.log(fruit);
// console.log(fruit.splice(1, 0, 'orange', 'strawberry'));
fruit.join(" ");
document.getElementById('ex2').innerHTML = fruit;