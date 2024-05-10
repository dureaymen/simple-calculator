#! /usr/bin/env node

import inquirer from 'inquirer'

let question = await inquirer.prompt([
{
    name: "question1",
    type:"number",
    message:"Enter the first number:"
},
{
    name: "question2",
    type:"number",
    message:"Enter the second number:"
},

{
        name:"operator",
        type: "list",
        message: "Select the operator", 
    choices: ["+","-","*","/"]
    },
]);
if(question.operator==="+"){
    console.log (parseInt (question.question1) + parseInt(question.question2))

}
else if(question.operator==="-"){
    console.log (parseInt (question.question1) - parseInt(question.question2))

}
else if(question.operator==="*"){
    console.log (parseInt (question.question1) * parseInt(question.question2))

}
else if(question.operator==="/"){
    console.log (parseInt (question.question1) / parseInt(question.question2))

}
else{
    console.log("select again operator");
}



