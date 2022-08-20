const inquirer = require('inquirer');
const fs = require("fs");

const employeeInfo = async () => {
   await inquirer.prompt([
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

  const employeeQuestion = async () => {
    await inquirer.prompt([
    {
      type: 'list',
      name: 'add',
      message: 'Want to add an employee?',
      choices: ['Engineer', 'Intern', 'Finish building my team']
    }

  ]).then(choice => {
// this is for employeeQuestions
    console.info('Answer:', choice);
  })
}
employeeQuestion();

// for the first .then on line 29
  //    console.info('Answer:', answers);
   })
  
 };

   employeeInfo();
  

   



  // if (answers.add === "Engineer") {
  //   const employeeAnswer = inquirer
  //     .prompt([
  //       {
  //         type: "input",
  //         name: "github",
  //         message: "Enter your GitHub user name?",
  //       },
  //   ])
//       const Engineer = new Engineer(
//         answers.name,
//         answers.id,
//         answers.email,
//         employeeAnswer.github
//       );

      // newemployeeInfo.push(Engineer);

//     } else if (answers.add === "Intern") {
//       const internInfo = inquirer
//         .prompt([
//           {
//             type: "input",
//             name: "school",
//             message: "Enter your school name",
//           },
//         ])
        
//         const Intern = new Intern(
//           answers.name,
//           answers.id,
//           answers.email,
//           internInfo.school
//         );
//         newemployeeInfo.push(newIntern);          
//     }
    
//  const end = ([
//    {
//      type: 'list',
//      name: 'done',
//      message: 'Are you done building you team?',
//      choice: ['yes, no'],
//    }

// .then(end, answers => { 
//      console.info('Answer:', answers);
//     })

//   ])