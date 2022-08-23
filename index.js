const inquirer  = require("inquirer");
const fs = require ("fs");

const questions = [
    {
        type: 'input',
        name: 'ProjectName',
        message: "What is your project name? "
    },

    {
        type: 'input',
        name: 'Description',
        message: "What is the description of your project? "
    },
    {
        type: 'input',
        name: 'installation',
        message: "If applicable, describe the steps required to install your project for the Installation section."
        
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples of your project in use for the Usage section."
        
    },
    {
        type: 'input',
        name: 'contributing',
        message: "If applicable, provide guidelines on how other developers can contribute to your project."
       
    },
    {
        type: 'input',
        name: 'tests',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them."
        
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        
    }
    

];

function createMarkdown(information) {
    const data = ` 

        ## Project Title: ${information.ProjectName}

        Project Description: ${information.Description}
    
        Installation: ${information.installation}

        Usage: ${information.usage}

        Contributing: ${information.contributing}

        Tests: ${information.tests}

        LICENSE: ${information.license}

    `

    // Write information to markdown file
    writeToFile(data)
}

function writeToFile(data) {
    fs.writeFile("README.md", data, (error) => {console.log(error)})

    // here is where we take the data and write a README file from it

    console.log('This is from writeToFile function')

    console.log(data)
}

function init() {
    inquirer.prompt(questions)
    .then((information) => {
        // information is an OBJECT. To get the value from an object, you need to use the name of the key
        // example: information.Description
        console.log(information)
        console.log(information.Description)

        // next, need to write markdown
        createMarkdown(information)
    })
}

// Function call to initialize app
init();


