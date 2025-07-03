
# util.inherits()

## util.inherits(child, parent) allows one custom constructor function (child) to inherit the behavior of another (parent), like EventEmitter.

### It is mainly used to give your own object the ability to handle events using .on() and .emit(), without creating an object of EventEmitter directly.

#### Using EventEmitter directly:

```bash
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
  console.log("Event triggered!");
});
emitter.emit('event');
```
Here, we directly create an object of the built-in EventEmitter class and use .on() and .emit()

#### Using util.inherits():

```bash
const util = require('util');
const EventEmitter = require('events');

function Student() {
// Initializes or call EventEmitter inside Student so it can use .on() and .emit()
  EventEmitter.call(this);
}

// Connects Student to EventEmitter so objects of Student can use event methods
util.inherits(Student, EventEmitter);

// Create object of your own class
const s1 = new Student();

s1.on('submit', () => {
  console.log("Student submitted!");
});

s1.emit('submit');
```
This way, you can create your own custom class (Student) and still give it the event-handling powers of EventEmitter.


