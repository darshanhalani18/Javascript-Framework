
# util.deprecate()

### util.deprecate() is used to mark a function as outdated (deprecated), so it shows a warning message when the function is used.

This is helpful when you are updating your code and want to warn developers not to use old methods.

### Syntax:
```bash
util.deprecate(fn, warningMessage);
```
- fn - The function to mark as deprecated
- warningMessage - Message to show when the function (deprecated) is called

### Example:

```bash
const util = require("util");

// Original function
function hello() {
  return `Hello World`;
}

// Marking 'hello' as deprecated
const oldHello = util.deprecate(hello,
  "hello() is deprecated. Please use newHello()"
);

// Calling the deprecated function
console.log(oldHello());
```

### Output:
```bash
(node:12345) DeprecationWarning: hello() is deprecated. Please use newHello()
Hello World
```