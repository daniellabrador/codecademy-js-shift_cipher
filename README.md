# **Caesar Cipher**

The Caesar Cipher program encrypts and decryptes string of text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). This training project, prepared by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript), has been an invaluable exercise in practicing the use of JavaScript classes.

## Table of Contents

- [Project Prompt](#project-prompt)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)

## Project Prompt

A [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string `'hello'` to `'ifmmp'`.

Create a class `ShiftCipher` that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

- `encrypt`: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
- `decrypt`: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
- In both methods, any character outside the alphabet should remain the same.
- But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a `y` with a shift of `4` results in `C` and decrypting an `A` with a shift of `1` result in `z`.

## Technologies

- JavaScript (ES6)

## Setup

### Edit `script.js`

At line 70, a new `ShiftCipher` object has been declared named `cipher`. You can pass on the number of characters you would like the `cipher` object to have its methods shift at your preferred number of characters.

> Passing `1` would mean shifting the character 1 step to the right (e.g., from `A` to `B`, `M` to `N`, or `Z` to `A`), and passing `-1` would mean shifting the character 1 step to the left (e.g., from `A` to `Z`, `M` to `L`, or `Z` to `Y`).

Replace the string inside the method call (i.e., `cipher.encrypt()` or `cipher.decrypt()`).

Example:

```js
const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
```

You could also create new `ShiftCipher` objects that fits your preference.

### Run `script.js`

To run this program, you need to install [Node.js](https://nodejs.org/en/download/) to your machine.

Enter this command to the terminal:

```bash
node script.js 
```

## Sources

The techniques utilized was based on the lessons taught in [Codecademy's Learn JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript). The challenge is also provided by Codecademy.
