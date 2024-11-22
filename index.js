const employee = {
    name: "",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    return {
        ...employeeObject,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key] = value
    return employeeObject
}

function deleteFromEmployeeByKey(employeeObject, key){
    const employeeObjectCopy = {...employeeObject}
    delete employeeObjectCopy[key]
    return employeeObjectCopy
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key]
    return employeeObject
}