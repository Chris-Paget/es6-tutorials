const address = {
    street: '66',
    city: 'NY',
    country: '',
}

// this is repetetive.
// const st = address.street;
// const city = address.city;
// const country = address.country;

// street is aliased as st here.
const {street: st, city, country} = address;
console.log(city);
console.log(st);