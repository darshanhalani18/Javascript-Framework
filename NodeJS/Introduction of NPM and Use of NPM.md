
## What is NPM?

NPM stands for Node Package Manager.
It is the default package manager for Node.js and is used to:

- Install libraries (packages) written by other developers.

- Manage your project’s dependencies.

- Share your own packages with others.

- When you install Node.js, npm gets installed automatically.

You can check the version of NPM by `npm -v`

## Use of NPM

### Create a Node.js project and install a package using NPM (e.g., chalk for colored console messages)

- ### Step 1: Create a New Folder.
- ### Step 2: Initialize a New Node Project
```bash
  npm init -y
```
This will create a package.json file with default settings.

- ### Step 3: Install a Package (e.g., chalk).
```bash
  npm install chalk
```
This adds chalk to your project and
It also creates a node_modules folder and updates package.json.

## index.js Example Code
Create a file named index.js and write this code:
```bash
// Import the chalk module
const chalk = require('chalk');

console.log(chalk.green("This is green text!"));
console.log(chalk.blue.bold("This is bold blue text!"));
```
- ### Step 4: Run Your Program
```bash
node index.js
```
You should see colorful output in the terminal!

## Uninstalling, and Updating Modules using NPM

- ### Uninstalling a Module
You can remove any module using:
```bash
npm uninstall <package-name>
```
Example:
``` bash
npm uninstall chalk
```
- ### Updating a Module
To update a specific module to its latest version:
```bash
npm update <package-name>
```
Example:
```bash
npm update chalk
```
To update all outdated packages:
```bash
npm update
```


