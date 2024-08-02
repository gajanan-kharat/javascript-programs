

console.log("======== function with no arguments and no return value =============");

function show(){
    console.log("Inside show function");
}
show(); // Function call or invoke

console.log("======== function with arguments and no return value =============");
function multiply(n1, n2){
    console.log("Given numbers:", n1, n2);
    var result = n1 * n2;
    console.log("Multiplication is: ", result);
}
multiply(8, 9);
multiply(100, 300);
multiply(123.67, 90.77);
multiply(70);

console.log("======== function with no arguments and return value =============");
function demo(){
    console.log("Inside demo function...");
    return "Good Morning";
}
var result = demo();
console.log(result);

function square(num){
    console.log("Given number for square is: ", num);
    var result = num * num;
    return result;
}
var returnValue = square(5);
console.log("Square is: ", returnValue);

var returnValue = square(15);
console.log("Square is: ", returnValue);


function personalDetails(firstName, lastName, collegeName){
    console.log();
    console.log();
    console.log();
}
personalDetails("Jenny", "Gates", "DEMO");


function addThreeValues(param1, param2, param3){
    var result = param1 + param2 + param3;
    console.log(result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning" );