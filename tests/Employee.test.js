const Employee = require("../lib/Employee");

test ('testing for name property', () => {
  // test value
  var testValue = 'john'

  const newEmployee = new Employee(testValue, 1, 123)

  expect(newEmployee.name).toBe(testValue)
})

test ('testing for id property', () => {
  // test value
  var testValue = '1'

  const newEmployee = new Employee(john, testValue, 123)

  expect(newEmployee.id).toBe(testValue)
})

test ('testing for email property', () => {
  // test value
  var testValue = '123'

  const newEmployee = new Employee(john, 1, testValue)

  expect(newEmployee.email).toBe(testValue)
})

test ('testing for getName method', () => {
  // test value
  var testValue = 'john'

  const newEmployee = new Employee(testValue, 1, 123)

  expect(newEmployee.getName).toBe(testValue)
})

test ('testing for getId method', () => {
  // test value
  var testValue = '1'

  const newEmployee = new Employee(john, testValue, 123)

  expect(newEmployee.getId).toBe(testValue)
})

test ('testing for getEmail method', () => {
  // test value
  var testValue = '123'

  const newEmployee = new Employee(john, 1, testValue)

  expect(newEmployee.getEmail).toBe(testValue)
})

test ('testing for getRole method', () => {
  // test value
  var testValue = 'Employee'

  const newEmployee = new Employee(john, 1, 123)

  expect(newEmployee.getRole).toBe(testValue)
})


















