#! /usr/bin/env node

import inquirer from "inquirer";

let user = await inquirer.prompt({
  name: "ans",
  type: "input",
  message: "Enter your sentence/paragraph"
});

let wordCount = user.ans.trim().split(" ").length;
 console.log(`Your sentence/paragraph contains ${wordCount} words`);
