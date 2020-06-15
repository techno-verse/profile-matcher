import { City } from './city';
import { Normalizer } from '../lib/nlp/normalizer';
var normalizer = new Normalizer();

export class Person extends City {

    private firstName: string;
    private gender: string;
    private jobTitle: string;
    private industry: string;

    constructor() {
        super();
        this.firstName = "";
        this.gender = "";
        this.jobTitle = "";
        this.industry = "";
    }

    set_name(name: string) {
        if (name) {
            this.firstName = name;
        }
        else {
            throw "name is empty";
        }

    }

    set_gender(gender: string) {
        if (gender) {
            this.gender = gender;
        }
        else {
            throw "gender is empty";
        }
    }

    set_jobTitle(jobTitle: string) {
        if (jobTitle) {
            let stopWord = true;
            let stem = false;
            let specialChar = true;
            let loweCase = true
            this.jobTitle = normalizer.normalize(jobTitle, stopWord, stem, specialChar, loweCase);
        }
        else {
            throw "jobTitle is empty";
        }

    }

    set_industry(industry: string) {
        if (industry) {
            let stopWord = true;
            let stem = false;
            let specialChar = true;
            let loweCase = true
            this.industry = normalizer.normalize(industry, stopWord, stem, specialChar, loweCase);
        }
        else {
            throw "industry is empty";
        }

    }

    set_city(city: string) {
        if (city) {
            let splitData: string[] = city.split(",")
            super.set_city(splitData[0].trim())
            if (splitData[1]) {
                super.set_state(splitData[1].trim())
            }
            if (splitData[2]) {
                super.set_country(splitData[2].trim())
            }
        }
        else {
            throw "city is empty"
        }
    }

    set_latitude(latitude: number) {
        if (latitude != 0) {
            super.set_latitude(latitude)
        }
        else {
            throw "latitude can not be 0"
        }

    }

    set_longitude(longitude: number) {
        if (longitude != 0) {
            super.set_longitude(longitude)
        }
        else {
            throw "longitude can not be 0"
        }
    }

    get_name(): string {
        return this.firstName;
    }

    get_gender(): string {
        return this.gender;
    }

    get_jobTitle(): string {
        return this.jobTitle;
    }

    get_industry(): string {
        return this.industry;
    }

    get_latitude(): number {
        return super.get_latitude();
    }

    get_longitude(): number {
        return super.get_longitude();
    }

    get_city(): string {
        return super.get_city()
    }
    get_state(): string {
        return super.get_state();
    }
    get_country(): string {
        return super.get_country();
    }

}