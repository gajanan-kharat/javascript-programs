
function greaterNumber(n1, n2){
    var result = n1>=n2 ? n1 : n2;
    console.log(`Given numbers are ${n1}, ${n2} and greater number is: ${result}`);
}
greaterNumber(10, -10 );
greaterNumber(800, 899);

function isEvenOrOddNum(num){
    var result = num%2==0 ? true : false;
    return result;
}
var result = isEvenOrOddNum(29);
console.log(`Is Number : 29 even : ${result}`);


var result = isEvenOrOddNum(44);
var result = isEvenOrOddNum(0);
var result =  isEvenOrOddNum(101);



function interviewCheck(gradScore, hscScore, sscScore, candidateName){
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 
                ? `Congrats ${candidateName} you are eligible for TCS interview.`
                : `Unfortunately ${candidateName} are not eligible for interview`
    console.log(result);
}
// interviewCheck(80, 86, 90, "Jenny");
// interviewCheck(70, 65, 55, "Elon");
interviewCheck(60, 79, 88, "Stew");
