//FIXME: Synchronous example
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");

//FIXME: Asynchronous example
console.log("One");
console.log("Two");
setTimeout(() => {
    console.log("Hello");
}, 1500);
console.log("Three");
console.log("Four");
