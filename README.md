# scratch-certification (SCTF)

An NPM module to verify third-party Scratch extensions.

## Installation
```js
// Using NPM
npm install scratch-certification

// Using Yarn
yarn add scratch-certification
```

## Requiring Module
```js
// Using Node.js
const sctf = require('scratch-certification');

// Using React.js
import 'scratch-certification';
```

## Concept
This module has a system of *hashes* and *codes*. Think of a hash as a random unique string to initialize the Scratch connection, and a code as a password to log into your Scratch connnection.

## Pros and Cons
### **Pros:**
- It's a module, meaning it grants developers more flexability and customization for usage of their choice
- The code system allows users to have a more memorable login method, and a partial account-based system
- It solves the web exploit problem in existing modules, by having flexability to require a username to login via a login/sign in system.

### **Cons:**
- Only 3 functions (More coming soon)
- No multi-language suport (Coming soon)

## Example Code / Usage

### Create Hash
**Functionalities:**
Creates a random distinguishable crypto generated string.

**Parameters:**
- `length` - The length of the hash (Leave blank for a default of 45) - Optional

**Example Code:**
```js
const sctf = require('scratch-certification'); // Require SCTF

const myHash = sctf.createHash(50); // Create hash with a length of 50 

console.log(myHash); // -> 937edd69e10f253dd309a0e8b7d126f8f37cfd277577a494cd
```

**Notes:**
- There are no notes for this function.

___

### Check Hash
**Functionalities:**
Checks the user's Scratch profile for the hash, returns HTTP status code depending on what it finds

**Parameters:**
- `Hash` - The hash to check for (generated with `createhash()` or your own generated hash (not recommended)) - Mandatory
- `User` - The Scratch profile username that the module checks for the hash on - Mandatory

**Example Code:**
```js
const sctf = require('scratch-certification'); // Require SCTF

sctf.checkHash(hash, 'griffpatch').then((res) => {
  if (res === 302) { // Hash found
    console.log('Hash found!');
  } else if (res === 404) { // Hash not found
    console.log('Hash not found');
  } else if (res === 400) { // Error
    console.log('Error');
  }
});
```

**Notes:**
- Returns a promise, requiring usage of `.then` or an asynchronous function expression
- Returns HTTP status codes to indicate whether a hash was found. See a list of HTTP status codes [here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

___

### Create Code
**Functionalities:**
Takes a password (recommended user input), and adds characters at the end to secure it further, creating a code.

**Parameters:**
- `Password` - The password to secure and return - Mandatory
- `Length` - The amount of characters to add when securing the password. Leave blank for a default of 5 - Optional

**Example Code:**
```js
const sctf = require('scratch-certification'); // Require SCTF

const code = sctf.createCode('unicorn', 10);

console.log(code); // -> unicorn`)0~$$6+|!
```

**Notes:**
- There are no notes for this function.

## Contact
**b1048546:**
https://scratch.mit.edu/users/b1048546/
**LilJuiceBox491:**
https://scratch.mit.edu/users/LilJuiceBox491/