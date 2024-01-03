const person = {
    name: 'Mosh',
    // New simpler notation:
    talk() {console.log(this)}
}

// returns a reference to the person object
person.talk();

// gets a reference to the function, and creates a new function object from it (bind ensures that 'this' is set to the value of the object, 
// rather than the window (which is what 'this' is outside of the object)).
const talk = person.talk.bind(person);
console.log(talk);
talk();