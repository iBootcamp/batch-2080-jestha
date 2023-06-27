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
