const Employee = require ('../lib/Employee');

const employeeTest = new Employee ("Marlon", "mliemann@live.com", 105 , "Employee");


describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
    })

    it('has an email id', () => {
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('has a role of employee', () => {
        expect(employeeTest.role).toBe('Employee')
    })

})