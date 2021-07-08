const Intern = require ('../lib/Intern');

const internTest = new Intern ('Marlon', 'mliemann@live.com', 107 , 'Intern', 'UNCC')

describe('Intern', () => {
    it('has a name', () =>{
        expect(internTest.name).toEqual(expect.any(String))
    })
    it('has an email id', () =>{
        expect(internTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(internTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(internTest.role).toBe('Intern')
    })

    it('has a school name', () => {
        expect(internTest.school).toEqual(expect.any(String))
    })
})
