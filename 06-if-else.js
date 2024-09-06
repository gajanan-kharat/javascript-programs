
var votingChecker = function(age, person){
    if (age>=18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`Unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote`);
    }
}
votingChecker(21, "Jenny");
votingChecker(17, "Elon");

var voteEligible = function(age){
    if (age==0 || age < 0 || age > 130 || age==null) {
        console.log(`Invalid Date. Age - ${age}`); 
    } else {
       console.log(`Valid data: ${age}`);
       if (age>=18) {
        console.log(`Eligible for voting`);
       } else {
        console.log(`Not Eligible for voting`);
       }   
    }
}
voteEligible(45); 
voteEligible( 17); 
voteEligible(-10); 
voteEligible(200); 
voteEligible(0); 
voteEligible(null); 

