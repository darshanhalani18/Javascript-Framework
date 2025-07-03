
# util.inspect()

### util.inspect() is used to convert any object into a string — especially useful for logging complex or deeply nested objects in a readable format.
util.inspect() gives you full control over how the data is displayed.

It's like a better version of console.log() for inspecting data structures.

### Syntax:
```bash
util.inspect(object, options)
```
### Example:
```bash
const util = require("util");

const student = {
  name: "Darshan",
  course: "BTech",
  details: {
    year: 2025,
    subjects: ["JSF", "Flutter"],
  },
};

// Inspect the object
const output = util.inspect(student, { colors: true, depth: null });

console.log(output);
```

If you run this in your terminal, strings may appear in yellow, arrays in green, etc. (if colors: true is set).

**colors: true**  Adds terminal colors to help identify types.

**depth: null** Shows complete nested objects

