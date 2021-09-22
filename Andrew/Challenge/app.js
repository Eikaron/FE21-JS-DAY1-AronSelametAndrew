// Challenge 1
const wien = [['Vienna'], ['is'], ['a'], ['nice'], ['city']];

// Test in console
console.log(" \t Hello")
// for (index in wien) {
//     console.log(wien[index][0])
// }

console.log(wien[0][0]);
console.log(" \t " + wien[1][0]);
console.log(" \t \t" + wien[2][0]);
console.log(" \t \t \t" + wien[3][0]);
console.log(" \t \t \t \t" + wien[4][0]);

//  Challenge 2
let sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up.";
let newSentence = sentence.split('$').join(" ");
console.log(newSentence);


document.getElementById('ch1').innerHTML = newSentence;