import inquirer from "inquirer";
import fs from "fs";
import path from "path";

const readMe = [
    {
        type: 'input',
        name:'description',
        message:'Enter a description for README',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter how you would install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this program?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is contributing to this program?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test the program',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'none'],
    },
]
function renderLicenseBatch(license){
    if (license === 'none'){
        return ''
    }
    else {
      return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
      ' ',
      '_'
    )}-blue.svg)` 
    }
}
function generateReadMeString(word) {
return(`
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li><a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#Test">Tests</a>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Description
${word.description}

### Installation
${word.installation}

## Usage
${word.usage}

## Contributing
${word.contributing}

## Tests
${word.test}

## License

Distributed under the project_license. ${renderLicenseBatch(word.license)}
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 `);    
}
function excercise (){
    inquirer.prompt(readMe).then(answers => {
        let readMe = generateReadMeString(answers);
        fs.writeFileSync(path.join(process.cwd(),"README.md"), readMe)
    }) 
}

excercise();