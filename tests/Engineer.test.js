const Engineer = require("../lib/Engineer");

test ('testing for name property', () => {
    // test value
    var testValue = 'john'
  
    const newEngineer = new Engineer(testValue, 1, 123)
  
    expect(newEngineer.name).toBe(testValue)
  })
  
  test ('testing for id property', () => {
    // test value
    var testValue = '1'
  
    const newEngineer = new Engineer(john, testValue, 123)
  
    expect(newEngineer.id).toBe(testValue)
  })
  
  test ('testing for email property', () => {
    // test value
    var testValue = '123'
  
    const newEngineer = new Engineer(john, 1, testValue)
  
    expect(newEngineer.email).toBe(testValue)
  })
  