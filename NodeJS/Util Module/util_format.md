
# util.format()

### util.format() is used to create formatted strings using placeholders like %s, %d, %j, etc., just like printf() in C.

It's helpful when you want to insert values like strings, numbers, or objects inside a message.

### Syntax:
```bash
util.format(formatString, value1, value2, ...)
```
### Example:
```bash
const util = require("util");

const name = "Jay";
const age = 20;

const message = util.format("Name is %s and Age is %d", name, age);
console.log(message);
```
### Another Example..
### Formatting an object: 
#### ( %j is used to insert an object as JSON)
```bash
const obj = { subject: "JSF", sem: 5 };
const msg = util.format("Subject Details: %j", obj);
console.log(msg);
```