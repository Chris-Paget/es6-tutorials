const person = {
    name: 'Mosh',
    walk: function() {  
    },
    // New simpler notation:
    talk() {console.log('hello')}
}

person.talk();
person['name'] = 'John';
console.log(person.name);


// dynamic ways of accessing fields in objects depending on input fields.
const targetMember = 'name';
person[targetMember] = 'Chris'
console.log(person.name);


// arrow function example
const person2 = {
    name: 'Chris',
    walk: function() {  
    },
    // New simpler notation:
    talk(input) {console.log(input)},
    arrowTalk: input => console.log(input)
}

person2.talk('hi');
person2.arrowTalk('helllooo');