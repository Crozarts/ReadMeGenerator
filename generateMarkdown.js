// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
${data.description}
![License](https://img.shields.io/badge/license-${data.license}-blue)
## User Story
${data.userStory}
## Installation
${data.installation}
## Usage
${data.usage}
## License 
This application is covered under the following license: [${data.license}](https://choosealicense.com/licenses/).
### Contributing
${data.contribution}
### Links 
![projectLinks](${data.link1})
![projectLinks](${data.link2})
### Questions 
any question please direct them to ${data.email}
[Github](https://github.com/${data.user})
`;
}

module.exports = generateMarkdown;
