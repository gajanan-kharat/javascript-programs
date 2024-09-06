
function Student(fullName, graduation, collegeName, city){
    this.fullName = fullName;
    this.graduation = graduation;
    this.collegeName = collegeName;
    this.city = city;
}
const std1 = new Student("Sid Gates", 2024, "Clg-one", "Pune");
console.log(std1);

const std2 = new Student("Jenny Many", 2023, "Clg-two", "Mumbai");
console.log(std2);

Student.prototype.country = "India";

console.log(std1.fullName, std1.country);

console.log(std2.fullName, std2.country);


// Prototype
const array = [10, 20, 30, 100];
array.push(500);
array.pop();


let friendList = [ "Elon", "Bill", "Stew", "Jenny"];

friendList.splice(2, 1);



function Bank(bankName, location, ifscCode, branchCode){

}

let yesBank = new Bank("", "", "", "");
console.log(`Bank Details: Name: ${yesBank.bankName}, Location: ${}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI bank Details OpenTime : ${sbiBank.openTime}  `);

function charCount( ){

}
charCount()
charCount()
charCount()
