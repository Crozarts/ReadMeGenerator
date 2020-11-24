const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('util');
const generateReadMe = require('./generateMarkdown');
// const { prompt } = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile); 

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your email:",
            name: "email",
            defualt: "random@gmail.com"
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "githubUser",
            defualt: "random"
        },
        {
            type: "input",
            message: "What is the project's name?",
            name: "title"
        },
        {
            type: "input",
            message: "please add a description",
            name: "description"
        },
        {
            type: "input",
            message: "Indicate the steps you took for the installation",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide what the application is used for?",
            name: "usage"
        },
        {
            type: "input",
            message: "If this was a group project please indicate how others contributed.",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please add your links",
            name: "links"
        },
        {
            type: "list",
            message: "Please choose the current license you are using.",
            choices: ["Apache", "MIT", "MPL2.0", "GPL 3.0"],
            name: "license"
        },
    ])
};

// generate License

promptUser()
    .then(function(data){
        if (data.license === "Apache"){
            data.icon = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        if (data.license === "MIT"){
            data.icon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (data.license === "MPL2.0"){
            data.icon = "[![License: MPL2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }
        if (data.license === "GPL 3.0"){
            data.icon = "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        const readMe = generateReadMe(data)
        return writeFileAsync("myREADME.md", readMe)
    })
    .then(function (){
        console.log("Success");
    });