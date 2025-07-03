
# Util Module

## The util module is a built-in module in Node.js that provides utility functions to help developers with:
- Debugging
- String formatting
- Inheritance
- Deprecation warnings
- Object inspection

It helps make your code cleaner, safer, and easier to maintain- especially when working with advanced Node.js features.

## util.debuglog()

#### util.debuglog() is used to print debug messages, but only when you manually enable them using an environment variable.

### Why use it?
Imagine you're making a student registration app and want to check:
- Is the database connected?
- Did the form get submitted?

You might normally write:
```bash
console.log("connected with Database");
```
But later, when your app is working fine, you don’t want these messages to print every time.
So instead of console.log(), use util.debuglog().

It’s cleaner and safer — messages are hidden unless explicitly enabled.

### util_debuglog.js
```bash
const util = require('util');

// Step 1: Create a debug function with section name 'Student'
const debug = util.debuglog('Student');

// Step 2: Use the debug function to log messages
debug('Form is submitted by student');
```
A section (Student) is just a name or label you give to a part of your program.
You can have multiple sections like 'db', 'auth', 'student' etc., and enable them individually.

###  How to Run
#### If you try to run the file using node util_debug.js, nothing will be printed because debug messages are hidden by default.

####  Run with environment variable

```bash
set NODE_DEBUG=Student
node util_debuglog.js
```
#### Or

```bash
set NODE_DEBUG=Student && node util_debuglog.js
```
### Output
```bash
STUDENT 12345: Form is submitted by student
```
Here, 12345 is your process ID (it changes every time).