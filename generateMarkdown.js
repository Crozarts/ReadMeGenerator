// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
${data.description}
<br>
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
![${data.link1Title}](${data.link1})
<br>
![${data.link2Title}](${data.link2})
### Questions 
any question please direct them to <br> ${data.email}
<br>
[Github](https://github.com/${data.user})
`;
}

module.exports = generateMarkdown;
