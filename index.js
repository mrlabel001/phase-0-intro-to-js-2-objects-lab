const employee = {
    name:"jaspher",
    streetAddress:"langas"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value });
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const newOb =  Object.assign({}, employee);
    delete newOb[key];
    return newOb;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    Object.assign({}, employee);
    delete employee[key];
    return employee;
    }
 