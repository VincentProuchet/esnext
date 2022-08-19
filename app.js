let favoriteCityId = 'rome';

console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
console.log(citiesId);

// citiesId = [];
citiesId.push('tokyo');
console.log(citiesId);

function getWeather(cityId = "") {
    return {
        city: cityId.toLocaleUpperCase(),
        temperature: 20
    };
}

const weather = getWeather(favoriteCityId);

console.log(weather);
let { temperature, city } = weather;
console.log(temperature);
console.log(city);

const [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);


class Trip {
    id;
    name;
    imageURL;
    constructor(id, name, imageURL) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
    }
}
parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);