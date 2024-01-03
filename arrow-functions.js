const square = function(number) {
    return number * number;
}

// arrow function example
const squareArrow = number => number * number;

console.log(square(2));
console.log(squareArrow(2));




const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: true},
    { id: 4, isActive: false}
]

const activeJobs = jobs.filter(function(job) {return job.isActive});
console.log('Active Jobs:');
console.log(activeJobs);


// arrow function example
const inactiveJobs = jobs.filter(job => !job.isActive);
console.log('Inactive Jobs: ');
console.log(inactiveJobs);