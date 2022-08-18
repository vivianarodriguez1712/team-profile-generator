const Intern = require("../lib/Intern");

test ('testing for name property', () => {
    // test value
    var testValue = 'john'
  
    const newIntern = new Intern( testValue, 1, 123, 'zuniversity')
  
    expect(newIntern.name).toBe(testValue)
  })

  test ('testing for id property', () => {
    // test value
    var testValue = '1'
  
    const newIntern = new Intern('john', testValue, 123, 'zuniversity')
  
    expect(newIntern.id).toBe(testValue)
  })

test ('testing for email property', () => {
    // test value
    var testValue = '123'
  
    const newIntern = new Intern('john', 1, testValue, 'zuniversity')
  
    expect(newIntern.email).toBe(testValue)
  })

  test ('testing for school property', () => {
    // test value
    var testValue = 'zuniversity'
  
    const newIntern = new Intern('john', 1, 123, testValue)
  
    expect(newIntern.school).toBe(testValue)
  })

  test ('testing for getSchool method', () => {
    // test value
    var testValue = 'zuniversity'
  
    const newIntern = new Intern('john', 1, 123, testValue)
  
    expect(newIntern.getSchool()).toBe(testValue)
  })

  test ('testing for getRole method', () => {
    // test value
    var testValue = 'Intern'
  
    const newIntern = new Intern('john', 1, 123, 'zuniversity')
  
    expect(newIntern.getRole()).toBe(testValue)
  })