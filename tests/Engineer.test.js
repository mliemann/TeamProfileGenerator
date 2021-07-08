const Engineer = require('../lib/Engineer');

//name, email, id, role and github user name validation for Engineer

const engineerTest = new Engineer ('Mars', 'mliemann@live.com', 106, 'Engineer', 'mliemann')

describe("Engineer", () =>{
    it('has a name', () =>{
        expect(engineerTest.name).toEqual(expect.any(String))
    })
    it('has an email id', () =>{
        expect(engineerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(engineerTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(engineerTest.role).toBe('Engineer')
    })

    it('has a github username', () => {
        expect(engineerTest.gitHub).toEqual(expect.any(String))
    })


})
