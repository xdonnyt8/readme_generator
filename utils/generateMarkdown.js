// function to generate markdown for README
function generateMarkdown(data) {
  return `
# **${data.title}**

# **_Table of Content_**
* [Authors](#Authors)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#Licenses)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Questions](#Questions)
* [Github](#Github)
* [Email](#Email)

# Authors
### ${data.authors}


# Description
### ${data.description}


# Installation
### ${data.install}


# Usage
### ${data.usage}


# Licenses
### ${data.license}


# Contributions
### ${data.contribution}


# Test
### ${data.test}


# Questions
### ${data.question}


# Github
### The link to your github account is https://www.github.com/${data.github}

# Email
### Email me @ ${data.email} if you have any questions.



`;
}

module.exports = generateMarkdown;
