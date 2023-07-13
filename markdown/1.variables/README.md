# VAR

Var declaration was used before ES6 was introduced.
There werw issues with varible declaration with var.
So, here we can discuss with the issue related with var.

```js
var greet = "hello";

var time = 13;

if (time >= 12 && time <= 18) {
  var greet = "Good Afternoon";
}
console.log(greet); // Result = Good Afternoon. this is the problem with var .it redefine the value in local scope as well as global scope.
```

In the below example hoisting and redeclaration of var declaration is shown.

```js
console.log(a); //Result = UNDEFINED because Var declaration is hoisted and initialized in top level.
var a;
var a = 5;
console.log(a); //Result = 5
var a = 6;
console.log(a); //Result = 6 because var can be reinitilized and redeclared.
```

## Scope of var

Scope generally means where the variable are available to use. Var declaration is globally or fucntional/local scoped. Global scope means if the var declaration is used outside of the function it can be used from anywhere whereas if var is scoped inside a function it can be used with in that fucntion only.

```js
var firstName = "Komal";
const lastName = () => {
  var lName = "Shrestha";
  console.log(firstName); //Result = Komal. Global variable var is accessible inside of a fucntion.
};
console.log(lName); //Error. Var defined inside of the function isn't accessible outside of a function.
firstName();
```

In above example, lName is declared inside the function lastName. So, it is only available to use inside that function. If we use it outside of the function it throws an error. `Uncaught ReferenceError: lName is not defined`

## LET

After the release of ES6 let is prefered as variable declaration. It solves most of the problems with var. Let cannot be redeclared but its value can be updated.

```js
console.log(a); //Error in initialization. JS doesn't initilize let at top level like in var.
let a;
let a = 5;
console.log(a); //Result = 5. Declared in above line.
a = 6;
console.log(a); //Result = 6. Let can be updated.
let a = 7;
console.log(a); // Error. Let cannot be redeclared.
```

## Scope of Let

Let is block scpoed as shown in example below. So, variable declaration with let is only available to use within the block in which it is used.

```js
let greet = "Hello";
let time = 13;

if(time >= 12 && time <= 18){
  let greet = "Good Afternoon";
  console.log(greet); //Result = Good Afternoon. Since, let has been declared in this block.
}
console.log(greet); //Result = Hello. Let is block scoped. The let defined in then above block isnnot accessible outside of the block.

```

## CONST

Variable that has constant value must be declared with const declaration. Const declaration shares similarity with let declaration. The value of const neither can be redeclared or reupdate.

```js
console.log(a);       //Error in initialization. JS doesn't initilize const at top level like in var.
const a;
const a = 5;
console.log(a);      //Result = 5. Declared in above line.
a = 6;
console.log(a);      //Error. Const canot be updated.
const a = 7;
console.log(a);      // Error. Const cannot be redeclared.
```

## Scope of CONST

Similar to let scope of const is block scpoed.

## Differences of var, let & const

| Var                                                                                  | Let                                                     | Const                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------- |
| 1. Var is hoisted at top level of their scope and initilized with the value undefined | 1. Let value is not initizlied at top level as undefined | 1. const value is not initizlied at top level as undefined |
| 2. Var is local/functional scoped.                                                    | 2. Let is block scoped.                                  | 2. Const is block scoped.                                  |
| 3. Var can be redeclared                                                              | 3. Let can be updated but cannot be redeclared           | 3. Const cannot be redeclared                              |
| 4. Var can be reinitilized                                                            | 4. Let cannot be reinitialized                           | 4. Const cannot be reinilialized                           |
