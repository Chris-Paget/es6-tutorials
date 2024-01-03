const colors = ['red', 'green', 'blue'];

const listOfColours = colors.map(color => '<li>' + color + '</li>');
console.log(listOfColours);


const listOfColoursWithTemplateLiterals = colors.map(color => `<li>${color}</li>`);
console.log(listOfColoursWithTemplateLiterals);