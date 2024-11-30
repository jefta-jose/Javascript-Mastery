// WHAT ARE THREADS
/*
In computer science, a **thread** is a unit of execution used to perform tasks. 
Multiple threads can run simultaneously, allowing programs to handle multiple tasks at once.

Main Thread in Browsers:
- The **main thread** handles user interactions, webpage rendering, and most JavaScript code.
- If the main thread is busy (e.g., running a slow script or stuck in an infinite loop), it slows down or freezes the entire browser, leading to a poor user experience.

Additional Threads in JavaScript:
- JavaScript can create additional threads using tools like **web workers**.
- **Web workers** run tasks in parallel, separate from the main thread, improving performance by:
  - Handling slow or complex tasks independently.
  - Utilizing modern multi-core processors for faster execution.

Special Case: Service Workers
- A **service worker** is a type of web worker that can run in the background even when the user isn’t actively using the site.
- It enables features like push notifications (e.g., alerting about new emails).

Benefits of Threads:
- Reduce delays caused by switching between tasks.
- Enable efficient communication between tasks.
- Fully utilize multi-core processors for better performance.

Threads help make programs faster, smoother, and more efficient in modern computing.
*/


// JAVASCRIPT
/*
In JavaScript, **single-threaded** means that JavaScript executes code on a single thread, one task at a time. 
It processes instructions sequentially in the order they are encountered. 

Key Concepts of Single-Threaded JavaScript:
1. **One Task at a Time**:
   - Only one piece of code can execute at any given moment on the main thread.
   - This is why JavaScript is sometimes referred to as **synchronous by default**—it finishes one task before starting the next.

2. **The Call Stack**:
   - JavaScript uses a call stack to manage function execution.
   - Each function call is added to the stack and removed once completed. The program can't move to the next task until the current one finishes.

3. **Event Loop for Asynchronous Operations**:
   - Despite being single-threaded, JavaScript can handle asynchronous tasks (e.g., network requests, timers) using the **event loop**.
   - These tasks run outside the main thread (handled by the browser or Node.js), and their results are queued for execution in the call stack once the thread is free.

*/
// Example of Single-Threaded Execution:

console.log("Task 1");
setTimeout(() => {
  console.log("Task 2 (Asynchronous)");
}, 1000);
console.log("Task 3");

Output
Task 1
Task 3
Task 2 (Asynchronous)


/*
- The `setTimeout` task is handled outside the main thread. The main thread continues with `Task 3` and picks up `Task 2` after the timer finishes.

Advantages of Being Single-Threaded:
- **Simplified Coding Model**: Developers don't need to worry about complex thread management issues, like race conditions or deadlocks.
- **Predictability**: Since only one thing executes at a time, the behavior of code is easier to understand and debug.

Challenges:
- **Blocking Code**: If a task (like a large computation) takes too long, it can block the thread and freeze the application.
- **Reliance on Asynchronous Patterns**: To avoid blocking, developers often use asynchronous code, which can be harder to manage.

Summary:
JavaScript is single-threaded, meaning it processes one task at a time on the main thread. However, it uses asynchronous mechanisms 
and the event loop to handle tasks in a non-blocking manner, maintaining responsiveness in web applications.

*/