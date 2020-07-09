#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");

const { addContact, getContact } = require("./logic.js");

program
  .version("0.0.1")
  .description("Contact management system");

const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : 'Enter firstname ...'
  },
  {
    type : 'input',
    name : 'lastname',
    message : 'Enter lastname ...'
  },
  {
    type : 'input',
    name : 'phone',
    message : 'Enter phone number ...'
  },
  {
    type : 'input',
    name : 'email',
    message : 'Enter email address ...'
  }
];

program
  .command("addContact")
  .alias("a")
  .description("Add a contact")
  .action(() => {
    prompt(questions)
      .then(answers=>{
        addContact(answers);
      })

  });

program.parse(process.argv);
