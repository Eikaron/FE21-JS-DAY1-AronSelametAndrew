const sentence = "Hey there, i am a javascript developer, and i live in vienna";
let newSentence = sentence.split(' ');
newSentence.splice(7);
newSentence.pop();
newSentence.push('developer.');
console.log(newSentence);
console.log(newSentence.join(" "));

// DOM version
document.querySelector('#extra1').innerHTML = newSentence.join(" ");

//  Extra Ex2
let fruit = ['apple', 'banana', 'kiwi'];
fruit.splice(1, 0, 'orange', 'strawberry');
console.log(fruit);
// DOM version
document.getElementById('ex2').innerHTML = fruit.join(" "); // This works better but not sure why

// Questions
console.log(fruit.join(", "));
console.log(fruit.splice(1, 0, 'orange', 'strawberry')); // EMPTY! splice stores no value unlike pop(), join()
console.log(fruit.pop()); // Here it does what we expect

