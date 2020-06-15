"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = require("./city");
const normelizer_1 = require("../lib/nlp/normelizer");
var normalizer = new normelizer_1.Normalizer();
class Person extends city_1.City {
    constructor() {
        super();
        this.firstName = "";
        this.gender = "";
        this.jobTitle = "";
        this.industry = "";
    }
    set_name(name) {
        if (name) {
            this.firstName = name;
        }
        else {
            throw "name is empty";
        }
    }
    set_gender(gender) {
        if (gender) {
            this.gender = gender;
        }
        else {
            throw "gender is empty";
        }
    }
    set_jobTitle(jobTitle) {
        if (jobTitle) {
            let stopWord = true;
            let stem = false;
            let specialChar = true;
            let loweCase = true;
            this.jobTitle = normalizer.normalize(jobTitle, stopWord, stem, specialChar, loweCase);
        }
        else {
            throw "jobTitle is empty";
        }
    }
    set_industry(industry) {
        if (industry) {
            let stopWord = true;
            let stem = false;
            let specialChar = true;
            let loweCase = true;
            this.industry = normalizer.normalize(industry, stopWord, stem, specialChar, loweCase);
        }
        else {
            throw "industry is empty";
        }
    }
    set_city(city) {
        if (city) {
            let splitData = city.split(",");
            super.set_city(splitData[0].trim());
            if (splitData[1]) {
                super.set_state(splitData[1].trim());
            }
            if (splitData[2]) {
                super.set_country(splitData[2].trim());
            }
        }
        else {
            throw "city is empty";
        }
    }
    set_latitude(latitude) {
        if (latitude != 0) {
            super.set_latitude(latitude);
        }
        else {
            throw "latitude can not be 0";
        }
    }
    set_longitude(longitude) {
        if (longitude != 0) {
            super.set_longitude(longitude);
        }
        else {
            throw "longitude can not be 0";
        }
    }
    get_name() {
        return this.firstName;
    }
    get_gender() {
        return this.gender;
    }
    get_jobTitle() {
        return this.jobTitle;
    }
    get_industry() {
        return this.industry;
    }
    get_latitude() {
        return super.get_latitude();
    }
    get_longitude() {
        return super.get_longitude();
    }
    get_city() {
        return super.get_city();
    }
    get_state() {
        return super.get_state();
    }
    get_country() {
        return super.get_country();
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map