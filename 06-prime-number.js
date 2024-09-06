
function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        } 
    }
   return true; 
}
var result = isPrime(4);
console.log(`Is number 4 Prime - ${result}`);

var result = isPrime(5);
console.log(`Is number 5 Prime - ${result}`);



const array = [ 3, 9, 7, 6, 19, 29, 53 ];
let count = 0;
for (const element of array) {
    var result = isPrime(element);
    if(result==true){
        count++;
    }
}

console.log(`count`);


