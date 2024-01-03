const person = {
    name: 'Chris',
    talk() {
        // delays the call of the log for 1000ms (so the line beneath executes first).
        // because the callback function is a new object that is being called (setTimeout), it is not bound to the person object itself.
        setTimeout(function() {console.log(this)},1000);
        console.log(this)
    },
}

person.talk();


const personBound = {
    name: 'ChrisP',
    talk() {
        var self = this;
        // var has been defined in the function (at the time at which it was called as the person object), so now it displays the person object when setTimeout is called.
        setTimeout(function() {console.log(self)},1000);
    },
}

personBound.talk();


const personBoundArrow = {
    name: 'ChrisPaget',
    talk() {
        // arrow functions do not rebind this, it inherits 'this' in the context which it was defined.
        setTimeout( () => {console.log(this)},1000);
    },
}

personBoundArrow.talk();