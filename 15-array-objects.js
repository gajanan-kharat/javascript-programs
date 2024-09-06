
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const array = [emp_anil, emp_radha, emp_rishi];
for (const element of array) {
    if(element.emp_company=="TCS") {
      console.log(element.emp_name, element.emp_company);
    }
}

for (const element of array) {
    if(element.emp_dept=="Finance") {
      console.log(element.emp_name, element.emp_dept);
    }
}

for (const element of array) {
    if(element.emp_name.startsWith("R")) {
      console.log(element.emp_name, element.emp_dept);
    }
}

for (const element of array) {
    if(element.emp_salary>75000) {
      console.log(element.emp_name, element.emp_dept);
    }
}

for (const element of array) {
    if(element.emp_salary>=50000 && element.emp_dept=="IT") {
      console.log(element.emp_name, element.emp_dept);
    }
}