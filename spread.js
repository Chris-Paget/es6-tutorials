const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

// spread makes adding elements in between arrays more simple.
const combinedSpread = [...first, 'a', ...second, 'b'];
console.log(combinedSpread);


console.log('Clones:')

const clonedFirst = [...first];
console.log(first);
console.log(clonedFirst);



// spread on objects
const obj = { name: 'Mosh'};
const obj2 = { job: 'Instructor'};

const objCombined = {...obj, ...obj2, location: 'Australia'}; 
console.log(objCombined);