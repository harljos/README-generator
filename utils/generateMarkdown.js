// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU GPL v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 2-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU AGPL v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPL v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU LGPL v2.1":
      return;
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      return "";
    case "GNU GPL v3.0":
      return "";
    case "MIT":
      return "";
    case "BSD 2-Clause":
      return "";
    case "BSD 3-Clause":
      return "";
    case "Boost":
      return "";
    case "Creative Commons":
      return "";
    case "Eclipse":
      return "";
    case "GNU AGPL v3.0":
      return "";
    case "GNU GPL v2.0":
      return "";
    case "GNU LGPL v2.1":
      return;
    case "Mozilla":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "Apache":
      return "This project is listed under the Apache license";
    case "GNU GPL v3.0":
      return "This project is listed under the GNU GPL v3.0 license";
    case "MIT":
      return "This project is listed under the MIT license";
    case "BSD 2-Clause":
      return "This project is listed under the BSD 2-Clause license";
    case "BSD 3-Clause":
      return "This project is listed under the BSD 3-Clause license";
    case "Boost":
      return "This project is listed under the Boost license";
    case "Creative Commons":
      return "This project is listed under the Creative Commons license";
    case "Eclipse":
      return "This project is listed under the Eclipse license";
    case "GNU AGPL v3.0":
      return "This project is listed under the GNU AGPL v3.0 license";
    case "GNU GPL v2.0":
      return "This project is listed under the GNU GPL v2.0 license";
    case "GNU LGPL v2.1":
      return "This project is listed under the GNU LGPL v2.1 license";
    case "Mozilla":
      return "This project is listed under the Mozilla license";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
