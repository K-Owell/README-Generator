// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project? (Required)", "Please provide a description of your project. (Required)", "Please provide installation instructions for your project. (Required)", "What is the usage of this project? (Required)", "What license are your using? (Required)", "Would you like to allow other developers to contribute to your project? (Default: Yes)", "Please provide instruction on how to contribute to your project.", "Please provide a link to your deployed project. (Required)", "Please provide your email address. (Required).", "Please provide your GitHub username. (Required)"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out README.md in this directory to see it!')
    });
}


// TODO: Create a function to initialize app
function init() {
    const [ title, description, instructions, usage, license, contribute, howToContribute, link, email, github ] = questions;

    return inquirer.prompt ([{
        type: 'input',
        name: 'title',
        message: title,
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!')
            };
        }
    },
    {
        type: 'input',
        name: 'description',
        message: description,
        validate: description => {
            if(description) {
                return true;
            } else {
                console.log('Please enter your project description!')
            };
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: instructions,
        validate: installation => {
            if(installation) {
                return true;
            } else {
                console.log('Please provide installation instructions!')
            };
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: usage,
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please provide the usage of your project!')
            };
        }
    },
    {
        type: 'list',
        name: 'license',
        message: license,
        choices: [
            "apache-2.0",
            "lgpl-3.0",
            "mit",
            "mpl-2.0",
            "unlicense"
        ]
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: contribute,
        default: true
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: howToContribute,
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'link',
        name: 'link',
        message: link,
        validate: linkInput => {
            if(linkInput) {
                return true;
            } else {
                console.log('Please provide a link to your project!')
            };
        }
    },
    {
        type: 'link',
        name: 'email',
        message: email,
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please provide your email!')
            };
        }

    },
    {
        type: 'input',
        name: 'github',
        message: github,
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please provide your github username!')
            };
        }
    }
    ]);
};

// Function call to initialize app
init()
.then(answers => generateMarkdown(answers))
.then(layout => writeToFile('README.md', layout))