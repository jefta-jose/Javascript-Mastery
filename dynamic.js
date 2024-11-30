Javascript is a Dynamically-typed language
the interpreter assigns variables a type at runtime based on the variable's value at the time.

some of JavaScript's **dynamic capabilities**, meaning the language can perform certain tasks at **runtime**
 (while the program is running) that allow for flexibility and adaptability. Let’s break it down:

1. **Runtime Object Construction**:
   - JavaScript allows objects to be created dynamically during the execution of a program. You can create objects and modify their properties on the fly.
   - Example:
     ```javascript
     const obj = {};  // Object created at runtime
     obj.name = "Alice";  // Property added at runtime
     console.log(obj);  // Output: { name: "Alice" }
     ```

2. **Variable Parameter Lists**:
   - Functions in JavaScript can accept a variable number of arguments. This can be done using the `arguments` object or, in modern JavaScript, the `rest parameters` syntax (`...`).
   - Example:
     ```javascript
     function sum(...numbers) {
       return numbers.reduce((total, num) => total + num, 0);
     }
     console.log(sum(1, 2, 3, 4));  // Output: 10
     ```

3. **Function Variables**:
   - In JavaScript, functions are first-class citizens, meaning they can be treated like variables. They can be passed as arguments to other functions, returned from functions, or assigned to variables.
   - Example:
     ```javascript
     const greet = function(name) {
       return "Hello " + name;
     };
     console.log(greet("Alice"));  // Output: Hello Alice
     ```

4. **Dynamic Script Creation (via `eval`)**:
   - The `eval()` function allows you to execute a string of JavaScript code at runtime. This means you can dynamically generate and run JavaScript code.
   - Example:
     ```javascript
     const code = 'console.log("Hello from eval!")';
     eval(code);  // Output: Hello from eval!
     ```
   - **Warning**: `eval` can be risky as it allows execution of arbitrary code, which could lead to security vulnerabilities.

5. **Object Introspection (via `for...in` and `Object` Utilities)**:
   - JavaScript allows you to inspect objects dynamically during runtime. 
   - **`for...in`**: Loops through the properties of an object.
   - **`Object` utilities**: Functions like `Object.keys()`, `Object.values()`, `Object.entries()` allow you to retrieve the properties or values of an object.
   - Example:
     ```javascript
     const person = { name: "Alice", age: 25 };
     for (let key in person) {
       console.log(key, person[key]);
     }
     // Output: 
     // name Alice
     // age 25
     ```

6. **Source-Code Recovery (via `toString()`)**:
   - JavaScript functions store their source code as text. You can retrieve the source code of a function using the `toString()` method, which returns the function’s code as a string.
   - Example:
     ```javascript
     function greet() {
       return "Hello!";
     }
     console.log(greet.toString());  // Output: function greet() { return "Hello!"; }
     ```

These **dynamic capabilities** highlight how JavaScript allows for flexibility and adaptability in how programs are written and executed. It can dynamically generate objects, handle functions as variables, introspect object properties, execute code on the fly, and even retrieve the source code of functions—all at runtime. These features make JavaScript a very powerful and versatile language for building dynamic, interactive applications.