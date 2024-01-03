function sayHello() {
    for (var i =0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

sayHello();

// As can be seen above, var does not encapsulate 'i' in the for loop - it is accessible throughout the function
// 'let' is better, as it encapsulates it instead.
// 'const' is the same, but for constants.

function sayHelloEncapsulated() {
    for (let i =0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

sayHelloEncapsulated();