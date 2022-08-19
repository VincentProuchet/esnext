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
    _price;
    constructor(id, name, imageURL) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
    }
    tostring() {
        return `Trip {${this.id}, ${this.name}, ${this.imageURL},${this._price} }`
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio-de_janeiro', 'img/rio-de-janeiro.jpg');
    }

}
parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.tostring());
parisTrip.price = 100;
console.log(parisTrip.tostring());
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.tostring());


class FreeTrip extends Trip {
    constructor(id, name, imageURL, price = 0) {
        super(id, name, imageURL);
        super._price = 0;
    }
    tostring() {
        return `Free${super.tostring()}`;
    }
}

const freeTrip = new FreeTrip('nates', 'Nantes', 'img/nantes.jpg')
console.log(freeTrip.tostring());