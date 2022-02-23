// Write your solution in this file!

const employee = {
    name: "", 
    streetAddress: "",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdate = {...employee};

    employeeUpdate[key] = value;

    return employeeUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 

    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const deletedEmployee = {...employee};

    deletedEmployee[key] = value;

    return deletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;

    return employee;
}