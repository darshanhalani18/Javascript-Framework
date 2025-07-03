
# EventEmitter 

## EventEmitter is a built-in class in Node.js that lets you create and handle custom events — just like “onClick”, “onLogin”, or “onDataReceived” in web development.

### Real-world Analogy:
Just like in HTML:
```bash
<button onclick="submitForm()">Submit</button>
```
You attach a function to a click event.

In Node.js, EventEmitter lets you do the same thing — but with custom events in the backend.

### Example:
```bash
const EventEmitter = require("events");

// Step 1: Create an emitter object
const myEmitter = new EventEmitter();

// Step 2: Listen to the event using .on()
myEmitter.on("submit", () => {
  console.log("Submitted Successfully!!");
});

myEmitter.on('submit', () => {
  console.log("Logging submit time...");
});

// Step 3: Trigger the event using .emit()
myEmitter.emit("submit");
```

**.on(eventName, callback)** When an event happens, run this function

**.emit(eventName)** Trigger the event and run all attached functions

### Output
```bash
Submitted Successfully!!
Logging submit time...
```