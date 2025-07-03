
# QueryString Module
### The querystring module is a built-in Node.js module that helps to:
- Parse a query string into an object
- Convert an object into a query string
- Encode/decode special characters in URLs

## 1. Parse Query String into Object

```bash
const querystring = require("querystring");

const myURL = "course=BTech&year=2025";
const parseURL = querystring.parse(myURL);
console.log(parseURL);
console.log(parseURL.course);
```
#### "course=BTech&year=2025" => { course: 'BTech', year: '2025' }

## 2. Encode Special Characters using escape()
```bash
const data = "BCA Sem-5 JSF";
const encoded = querystring.escape(data);
console.log(encoded);
```
#### BCA Sem-5 JSF => BCA%20Sem-5%20JSF
### escape(): Converts special characters (like spaces) into a URL-safe format.
- like space becomes %20
- Useful for sending data in URLs
## 3. Decode using unescape()
```bash
const encoded = "BCA%20Sem-5%20JSF";

const decode = querystring.unescape(encoded);
console.log(decode);
```
#### BCA%20Sem-5%20JSF => BCA Sem-5 JSF
### unescape(): Converts an encoded string back to its original form.
## 4. Convert Object into Query String using stringify()
```bash
const data = {
  course: "BCA",
  Sem: 5,
  Subject: "JSF"
};

const queryStr = querystring.stringify(data);
console.log(queryStr);
```
### { course: "BCA", Sem: 5 } => "course=BCA&Sem=5"









