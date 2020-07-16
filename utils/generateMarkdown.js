// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Table of Content
  * [Title](#Title)
  * [Authors](#Authors)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#Licenses)
  * [Contributions](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [Github](#Github)

# **Title**
###${data.title}

# **Authors**
###${data.authors}


# **Description**
### ${data.description}


# **Installation**
### ${data.install}


# **Usage**
### ${data.usage}


# **Licenses**
### ${data.license}


# **Contributions**
### ${data.contribution}


# **Test**
### ${data.test}


# **Questions**
### ${data.question}


# **Github**
### The link to your github account is https://www.github.com/${data.github}

`;
}

module.exports = generateMarkdown;
