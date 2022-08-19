const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
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
  ])
  .then(answers => {
    console.info('Answer:', prompt);
  });