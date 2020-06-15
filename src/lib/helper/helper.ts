import csv = require('csvtojson');
import { Person } from '../../model/person';


export class Helper {

    projectData: any;

    constructor() {
        let dataFilePath = "src/data/project.json"
        this.projectData = this.read_json_file(dataFilePath);
    }

    read_json_file(path: string ) {
        const fs = require('fs');
        let rawData = fs.readFileSync(path);
        let projectData = JSON.parse(rawData);
        return projectData;
    }

    // Serialize csv data to Person class
    async load_csv(path: string) {
        const jsonObj = await csv().fromFile(path);
        let results: Person[] = [];
        jsonObj.forEach((data) => {
            let person = new Person();
            person.set_city(data.city);
            person.set_name(data.firstName);
            person.set_gender(data.gender);
            person.set_industry(data.industry);
            person.set_jobTitle(data.jobTitle);
            person.set_latitude(data.latitude);
            person.set_longitude(data.longitude);
            results.push(person);
        })
        return results;
    }

    // Calculates the distance between two GeoCode points
    // Reference https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
    getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        let R = 6371; // Radius of the earth in km
        let lat1Degree = this.deg2rad(lat1)
        let lat2Degree = this.deg2rad(lat1)
        let dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        let dLon = this.deg2rad(lon2 - lon1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1Degree) * Math.cos(lat2Degree) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            let d = R * c; // Distance in km
        return d;
    }

    // Converted degree to radius
    deg2rad(deg: number) {
        return deg * (Math.PI / 180);
    }

    // Tokenized, clean, and removes duplicates from the industry array
    create_industry_set(industry: string) {
        let industrySet = [...new Set(industry.split(" "))];
        if (industrySet.indexOf("services") >= 0) {
            industrySet.splice(industrySet.indexOf("services"), 1);
        }
        if (industrySet.indexOf("technology") >= 0) {
            industrySet.splice(industrySet.indexOf("technology"), 1);
        }
        return industrySet;
    }
}


