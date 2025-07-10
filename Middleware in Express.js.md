
# Middleware in Express.js

### A middleware in Express is a function that has access to the request (req), response (res), and the next middleware in the application’s request-response cycle.

### Middleware Signature

```bash
(req, res, next) => { ... }
```
- **req** : incoming request object
- **res** : outgoing response object
- **next** : a function that passes control to the next middleware

### Use of Middleware
- Logging requests
- Parsing request bodies (e.g., JSON)
- Authentication / Authorization
- Handling errors
- Serving static files
- Defining global behavior

### How Middleware Works - Example
```bash
const express = require("express");
const app = express();

// Global middleware.
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

```
- **Global Middleware** runs for every incoming request - no matter which route.
- req.url is the requested path (e.g., /, /about, etc.).
- **next** tells Express to continue to the next middleware or route.
- Without next(), the request will be stuck and not reach your route.

###  Specify a path in app.use() ->  route-specific middleware.
Example :
```bash
app.use("/", (req, res, next) => {
  console.log("Home Page");
  next();
});
```
### Multiple Middleware Functions Assigned to a Single Route 
We can attach multiple middleware functions to a single route path in Express.js. Each middleware function performs a specific task and passes control to the next function using the next() method.

Example:
```bash
app.get(
  "/",
  (req, res, next) => {
    console.log("Home Page Middleware-1");
    next(); // Pass control to the next middleware
  },
  (req, res) => {
    console.log("Home Page Middleware-2");
    res.send("Response sent from the second middleware");
  }
);
```
### Redirecting from One Route to Another Without Using Middleware

redirect() method in Express.js to directly redirect the user from one route to another without using any middleware functions.

This is useful when you want to forward users to another route, such as after login, logout, or moving old routes to new ones.

Example:
```bash
// Redirect from home page to about page

app.get("/", (req, res) => {
  res.redirect("/about");
});

// About route
app.get("/about", (req, res) => {
  res.send("About Page");
});
```
### Route Skipping Using next("route") 
next("route") in Express.js to skip remaining middleware for a route and pass control to the next matching route handler with the same path.

For example..
- The first "/ " route contains two middleware functions.
- The first middleware logs a message and calls next("route").
- This causes Express to skip the second middleware and move to the next defined "/" route.

Code:
```bash
app.get(
  "/",
  (req, res, next) => {
    console.log("Home Page Middleware-1");
    next("route");
  },
  (req, res) => {
    res.send("Home Page Middleware-2");
  }
);
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/", (req, res) => {
  res.send("Hello!!");
});
```
The final output is "Hello!!" from the second "/" route.
### Flow Control Example – Conditional Middleware Execution Based on Query Parameter

```bash
// Global Middleware-1: Logger

app.use((req, res, next) => {
  console.log("Middleware-1 : Logging Request");
  next();
});

// Global Middleware-2: Conditional check based on rollNo

app.use((req, res, next) => {
  console.log("Middleware-2 : Checking RollNo");

  const rollNo = req.query.rollNo;

  if (rollNo === "101") {
    console.log("Access granted!");
    next(); // Pass to next middleware
  } else {
    console.log("Access denied!");
    // No next(), so request ends here for others
  }
});

// Global Middleware-3: Runs only if rollNo is 101
app.use((req, res, next) => {
  console.log("You passed rollNo check");
  next();
});

// Final Route Handler
app.get("/", (req, res) => {
  res.send("Welcome 101");
});
```
### Output
If URL is:
```bash
http://localhost:4500/?rollNo=101
```
Console Output:
```bash
Middleware-1 : Logging Request
Middleware-2 : Checking RollNo
Access granted!
You passed rollNo check
```
Browser Output:
```bash
Welcome 101
```
