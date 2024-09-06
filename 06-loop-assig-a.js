
var word = "Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char=='e') {
        count++; 
    }
}
console.log(`Count of char e is : ${count}`);

console.log("====== Count the vowels================");
var sentence = "I am very good IT Developer";
var vowels = "aeiou";
var vowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index); 
    char = char.toLowerCase();
    if(vowels.includes(char)){
        vowelCount++;
    }
}
console.log(`Vowels count is: ${vowelCount}`);

console.log(`======= Sum of 1 to 5================`);
var sum = 0;
for (let index = 1; index <=5; index++) {
    sum = sum + index;   
}
console.log(`Summation is ${sum}`);


console.log("=== Write a function to get the sum of cube of numbers from 1 to 5.=====");
var sumCube = 0;
for (let index = 1; index <=5; index++) {
    sumCube = sumCube + index * index * index;  
}
console.log(`Sum Cube is : ${sumCube}`);

