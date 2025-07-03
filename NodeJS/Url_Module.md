
# URL Module

## The url module in Node.js is used to parse and format URLs.
### It helps you break down a full URL into parts like:


- protocol
- hostname
- pathname
- query string

## url.parse()

url.parse() breaks a URL string into separate parts so you can access each part easily.

### Example:
```bash
const url = require("url");

const myURL = "https://www.darshan.ac.in/admissions?course=BTech&year=2025";

// Parse the URL
const parsedURL = url.parse(myURL);

console.log(parsedURL.query); 
```
### Output:
```bash
course=BTech&year=2025
```
By default, query is returned as a string.

### To get query as an object:
Use true as the second argument in url.parse():
```bash
const parsed = url.parse(myURL, true);
console.log(parsed.query);
```
### Output
```bash
{ course: 'BTech', year: '2025' }
```
This gives you easy access to individual query values like:
```bash
console.log(parsed.query.course);   // BTech

```