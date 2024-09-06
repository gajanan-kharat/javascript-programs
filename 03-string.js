

var greet = "Good Morning";
console.log("Given string is: ", greet);

var greetLength = greet.length;
console.log("Total number of characters is: ",greetLength);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt5= greet.charAt(5);
console.log("Character at index 5 is: ", charAt5);

console.log("==== Last index character ====");
var lastChar= greet.charAt(greet.length-1);
console.log("Character at last index is: ", lastChar);

console.log("============= toUpperCase() ===============");
var upperCaseString = greet.toUpperCase();
console.log("Result is: ", upperCaseString);

console.log("============= toLowerCase() ===============");
var lowerCaseString = greet.toLowerCase();
console.log("Result is: ", lowerCaseString);

console.log("============= concat() ===============");
var firstName = "Jenny";
var lastName = " Gates";
var concatString = firstName + lastName;
console.log("Concat string using + Operator:",concatString );
var result = firstName.concat(lastName);
console.log("Concat string using concat() :",result );


console.log("============= indexOf() ===============");
var result = greet.indexOf("M");
console.log("Index of character M is: ", result);

var result = greet.indexOf("Z");
console.log("Index of character Z is: ", result);

console.log("============= replace() ===============");
var result = greet.replace("Morning", "Afternoon");
console.log("After replace: ", result);


console.log("============= trim() ===============");
var day = "   Saturday    ";
var dayLength = day.length;
console.log("Before string trim length is: ", dayLength);

var dayAfterTrim = day.trim();
var dayAfterTrimLength= dayAfterTrim.length;
console.log("After string trim length is: ", dayAfterTrimLength);
console.log(dayAfterTrim);

console.log("Total removed character: leading and trailing- ",dayLength- dayAfterTrimLength);

console.log("============= includes() ===============");
var result = greet.includes("Mor");
console.log(result);
var result = greet.includes("mor");
console.log(result);

console.log("============= slice() ===============");
var result = greet.slice(3, 11);
console.log(result);
var result = greet.slice(5);
console.log(result);

console.log(`============= split() ===============`);
var result = greet.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);

var myLove = "I love only JavaScript";
var result = myLove.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);


console.log(` Given sentence - ${myLove} Total number of words ${result}`);

// console.log(`I love only "JavaScript" `);


function stringBasics(){
    console.log(`My dream company is "TCS" `);
    var hobbyOne = "Reading";
    var hobbyTwo = "Programming";
    var hobbyThree = "Dancing";

    console.log(`My hobbies are : ${hobbyOne}, ${hobbyTwo}, ${hobbyThree}`);

    // console.log(`Total characters are: ${}`);

    var sentence = "   Hey you are doing good, keep it up    ";
    console.log(`Given string is: ${sentence}`);

    // Remove the leading and trailing extra spaces and log string on console with it’s length
    var sentence = "   Hey you are doing good, keep it up    ";
    var result = sentence.trim();
    console.log(`Given string ${result}  and it's length ${result.length}`);
      
}


console.log("========== String Template ==============");
console.log(`I love only "JavaScript"`);
var city = "Pune";
var country = "India";
console.log(`My city name is: ${city} and country is ${country}`);

















