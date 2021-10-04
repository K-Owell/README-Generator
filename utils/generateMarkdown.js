const { userInfo } = require("os");
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  return `[License](https://choosealicense.com/licenses/${license}/)`
}
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  return `## License 
  This project is covered by ${license} ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  
  ## Description
  ${data.description}


  ## Table of Contents
  - [Description](#description)
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Link](#link)
  - [Contact Info](#github)


  ## Instructions
  ${data.installation}


  ## Usage
  ${data.usage}
  

  ## Contribute
  ${data.howToContribute}


  ## Link
  ${data.link}

  ## Contact Info
  * ${data.email}
  * https://github.com/${data.github}



  ${renderLicenseSection(data.license)}
`
;
}

module.exports = generateMarkdown;