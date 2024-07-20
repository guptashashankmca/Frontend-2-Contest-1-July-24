/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    employees.map(employee =>{
        if(employee.profession === "developer"){
            console.log(employee);
    }
});

  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    employees.forEach(employee =>{
        if(employee.profession === "developer"){
            console.log(employee);
            }
            });
  }
  
  function addData() {
    //Write your code here, just console.log
    employees.push({ id: 4, name: "james", age: "21",profession:"intern"});
    console.log(employees);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedEmloyees = employees.filter(employee => employee.profession!=="admin");
    console.log(updatedEmloyees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployees = [
        { id: 1, name: "Shashank", age: "25", profession: "designer"},
        { id: 2, name: "Rahul", age: "22", profession:"manager"},
        { id: 3, name: "Shubham", age: "24", profession:"CEO"}
    ];
    const allEmployees = employees.concat(newEmployees);
    console.log(allEmployees);
  }