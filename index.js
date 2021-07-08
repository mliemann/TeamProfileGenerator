//require
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTemplate = require('./src/htmltemplate');



const team = []


function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter Employee Name.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter Employee e-mail address.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter Employee Id.';
                }
            }
        },



        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Employee", "Manager", "Engineer", "Intern"]

        },

    ])
    .then(answers => {

            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'Enter office number:',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return 'Please enter office #';
                            }
                        }
                        
                    }
                ])
                .then(response => {
                    console.log(response.office);
                    const ManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    team.push(ManagerTeam);
                    addOption()
                })
            }else if(answers.role === 'Engineer' ){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHub',
                        message:'Enter Github name:',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter gitHub username.';
                            }
                        }
                    }
                ])
                .then(response => {
                    console.log(response.gitHub);
                    const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.gitHub)
                    team.push(EngineerTeam);
                    addOption()
                })
            } else if (answers.role === 'Intern'){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'Enter School name:', 
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter school  name.';
                            }
                        }

                    }
                ])
                .then(response =>{
                    console.log(response.school);
                    const internTeam = new Intern (answers.name,  answers.email, answers.id, answers.role, response.school)
                    team.push(internTeam);
                    addOption()
                })
            }

            else {
                const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role);
                team.push(employeeTeam);
                addOption()

            }


            function addOption() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(res =>{
                    if(res.addMore === true){
                        userInfo(team);
                    }else{
                        console.log('team', team)
                        let cardLayoutHtml = generateTemplate(team);
                        writePage(cardLayoutHtml)
                    }
                })
            }
        })
}


userInfo();

//write html file

function writePage (html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            throw err
        }
        console.log("HTML generated")
        CSScopy()
    })
}


const CSScopy = () =>{
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err){
            throw err
        }
        console.log('CSS file copied')
    });
}

module.exports = writePage, CSScopy
