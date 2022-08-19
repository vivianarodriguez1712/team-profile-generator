const inquirer = require('inquirer');
const fs = require("fs");
const { finish } = require('stream');

const employeeInfo = () => {
   return inquirer.prompt([
     {
       type: 'input',
       name: 'name',
       message: 'Enter managers name'
      },
     {
         type: "input",
         name: "id",
         message: "Enter employee ID",
        },
       {
         type: "input",
         name: "email",
         message: "Enter email address",
  
       },
       {
         type: "input",
         name: "number",
         message: "Enter office number",
 
       },
 
   ]).then(answers => {
     console.info('Answer:', answers);
   })
 };

  const employeeQuestion = ([
    {
      type: 'list',
      name: 'add',
      message: 'Want to add an employee?',
      choices: ['Engineer, Intern, Finish building my team']
    }
  ])

  if (answers.add === "Engineer") {
    const employeeAnswer = inquirer
      .prompt([
        {
          type: "input",
          name: "github",
          message: "Enter your GitHub user name?",
        },
    ])
      const Engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        employeeAnswer.github
      );

      newemployeeInfo.push(Engineer);

    } else if (answers.add === "Intern") {
      const internInfo = inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: "Enter your school name",
          },
        ])
        
        const Intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          internInfo.school
        );
        newemployeeInfo.push(newIntern);          
    }
    
 const finish = ([
   {
     type: 'list',
     name: 'done',
     message: 'Are you done building you team?',
     choice: ['yes, no'],
   }
  ])

.then(finish, answers => {
     console.info('Answer:', answers);
    });