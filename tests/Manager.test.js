const Manager = require("../lib/Manager");


test ('testing for name property', () => {
    // test value
    var testValue = 'john'
  
    const newManager = new Manager( testValue, 1, 123, 100)
  
    expect(newManager.name).toBe(testValue)
  })

  test ('testing for id property', () => {
    // test value
    var testValue = '1'
  
    const newManager = new Manager('john', testValue, 123, 100)
  
    expect(newManager.id).toBe(testValue)
  })

test ('testing for email property', () => {
    // test value
    var testValue = '123'
  
    const newManager = new Manager('john', 1, testValue, 100)
  
    expect(newManager.email).toBe(testValue)
  })

  test ('testing for office number property', () => {
    // test value
    var testValue = '100'
  
    const newManager = new Manager('john', 1, 123, testValue)
  
    expect(newManager.officeNumber).toBe(testValue)
  })

  test ('testing for getRole method', () => {
    // test value
    var testValue = 'Manager'
  
    const newManager = new Manager('john', 1, 123, 100)
  
    expect(newManager.getRole()).toBe(testValue)
  })