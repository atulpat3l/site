---
title: Complete Guide to Destructuring in Javscript for Begginers
permalink: destructuring-in-js/index.html
image: atulpatel.jpg
date: 2022-03-25
featured: true
---

**Destructuring assignment** is ES6 expression which allow us to destructure properties of an object or items of an array into individual variables.

## Destructuring Arrays in Javascript

Here is an example of how normally you would have assigned each item from an array into seperate variable.

```js
let arr = ["Atul", "Patel", "atulpatel.in"];

let firstName = arr[0];
let lastName = arr[1];
let site = arr[2];
```

And here is how we can do exact same with destructuring assignment.

```js
let arr = ["Atul", "Patel", "atulpatel.in"];

let [firsName, lastName, site] = arr;

console.log(firstName); // "Atul"
console.log(lastName); // "Patel"
console.log(site); // "atulpatel.in"
```

### Ignore Items from assignment

we can Ignore unwanted items of an array using an extra comma.

```js
let arr = ["Atul", "Patel", "atulpatel.in"];

// last name is not needed
let [firsName, , site] = arr;

console.log(firstName); // "Atul"
console.log(site); // "atulpatel.in"
```

### swapping variables with destructuring assignmet

We can use **_array destructuring_** trick to swap variables which otherwise requires a temprorary variable.

```js
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Setting default values in array destructuring

A varaible can be given a default value in case the value from array is `undefined`.

```js
let [a, b, c = 3, d] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined
```

In the exapmple above variable c has taken default assigned value 3, and though there were only two items in the array at right hand side the value of variable d will be `undefined`.

### Rest Parameter

If the array has more items than the varibles the extra items will be ignored.

for example here only two items are assigned and rest is ignored.

```js
let [fruit1, fruit2] = ["Apple", "Banana", "Orange", "Grapes"];

console.log(fruit1); // Apple
console.log(fruit2); // Banana
```

If we want to gather all the reamining items from array we can use the rest parameter using three dots "`...`".

```js
let [fruit1, fruit2, ...rest] = ["Apple", "Banana", "Orange", "Grapes"];

console.log(fruit1); // Apple
console.log(fruit2); // Banana
conslole.log(rest); // ["Orange", "Grapes"]
```

The `rest` is array of all ramaining elements. Any name can be used in place of rest it must have three dots before it and should go last in destructuring assignment.

```js
console.log(rest[0]); // Orange
console.log(rest[1]); // Grapes
```

#### Syntax Error:

Always use `...rest` operator as the last item, else syntax error will be thrown if a trailing comma is used on right side of rest element.

```js
let [fruit1, fruit2, ...rest] = ["Apple", "Banana", "Orange", "Grapes"];
// Uncaught SyntaxError: rest element may not have a trailing comma
```

### Destructuring array returned from function

Any function returning arrays can be assigned to variables in single line with destructuring.

```js
function fruits() {
  return ["Apple", "Banana"];
}

let [fruit1, fruit2] = fruits();
console.log(fruit1); // Apple
console.log(fruit2); // Bananan
```

In above example `fruit1` and `fruit2` diretly catches the values returned from function.

## Destructuring Objects in Javascript

With object destructuring you can assign properties of an object to seperate variables easily and more conviniently.

let's say you have an `user` object with properties `firstName` and `lastName` and you want to assign this properties to individual variables of the same name.

```js
let user = {
  firstName: "Atul",
  lastName: "Patel",
};
```

Prior to ES6, you woul assign properties of an object to seperate variables like this:

```js
let firstName = user.firstName; // 'Atul'
let lastName = user.lastName; // 'Patel'
```

With ES6 **_object destructuring_** you can assign properties like this:

```js
let { firstName, lastName } = user;

console.log(firstName); // 'Atul'
console.log(lastName); // 'Patel'
```

The left side contain an object like pattern for corresponding properties of an exsisting object at the right side.

Properties `user.firstName` and `user.lastName` are assigned to corresponding variables.

The Order does not matter in the pattern on left side below example is same as we've seen earlier

```js
let { lastName, firstName } = user;

console.log(firstName); // 'Atul'
console.log(lastName); // 'Patel'
```

### Assign properties to variables with different name than object keys

If you want to assign property `user.firstName` and `user.lastName` to variable `name` and `surname`, we can set the variable name using `":"`

```js
let { firstName: name, lastName: surname } = user;

console.log(name); // 'Atul'
console.log(surname); // 'Patel'
```

### Separate declaration and assignment

In previous examples variables were declared right in the assignments like: `let { lastName, firstName } = user` but this will through an syntax error if variable is assigned its value with destructuring without declaration.

```js
let one, two;

{one, two} = {one: 1, two: 2};
// syntax error
```

This throws a syntax error because `{one, two}` on the left hand side is considered a block and not an object literal.

To show js it's not a code block we need to wrap the expression in parentheses `(...)`

```js
let one, two;

({ one, two } = { one: 1, two: 2 });

console.log(one, two); // 1, 2
```

### Setting default values in object destructuring

We can set default values of properties missing from the object on right side using `"="` like this:

```js
let { firstName, lastName, email = "me@atulpatel.in" } = user;

console.log(email); // 'me@atulpatel.in'
```

In above example since the email property was not present in user object it has taken the default value we've provided.

### Nested Object destructuring

If an object contain conatain nested object and arrays we can yous more complex left side object pattern to assign properties.

In code below object `user` has another object `twitterId` and an array in property `intrest`, now for destructuring pattern at left side should also have same structure (in any order) to extract values from them.

```js
let user = {
  name: {
    firstName: 'Atul'
    lastName: 'Patel'
  },
  twitterId: 'atulpat3l'
  intrest: [coding, reading]
}
```

**Destructurig object** `user` in code below.

```js
let {
  name: {
    firstName,
    lastName
  },
  twitterId: 'atulpat3l',
  intrest: [intrestOne, intrestTwo]
} = user

console.log(firstName) // 'Atul'
console.log(lastName) // 'Patel'
console.log(intrestOne) // coding
console.log(intrestTwo) // 'reading
```

### Object in function parameters

We can pass objects into function parameters from which properties can be assigned to variables and used within the function body.

Below is how to assign a property of a passed object into variavle with same name. The parameter `{twitterId}`extract the value from `twitterId` property of the passed object to the function.

```js
// below function returns twitter id of user
function getTwitterId({ twitterId }) {
  return twitterId;
}

console.log(getTwitterId(user)); // 'atulpat3l'
```

Below is how to assign a property of a passed object into variavle with different name name. Here `twitterId` is used as `id` in function body.

```js
function getTwitterId({ twitterId: id }) {
  return id;
}

console.log(getTwitterId(user)); // 'atulpat3l'
```

We can also set default values in function parameters

```js
let anotherUser = {
  firstName: 'arun';
}

function getTwitterId({ twitterId = 'not available' }) {
  return twitterId;
}

console.log(getTwitterId(anotherUser));
// 'not available'
```

Since `twitterId` property is not defined in `anotherUser` object function `getTwitterId` used default value provided to the parameter.

### Rest in object destructuring

We can use Rest pattern similar to we did in array destructuring, rest collect all remaining properties that are not already extracted.

```js
let { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(rest); // {c: 3, d: 4}
```

This covers most of the object destructuring concepts and usecases.
