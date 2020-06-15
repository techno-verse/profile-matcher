import csv = require('csvtojson');
import { Person } from "../../model/person";


export class Helper {

    projectData: any;

    constructor() {
        this.projectData = this.read_json_file();
    }

    read_json_file() {
        const fs = require('fs');
        let rawdata = fs.readFileSync('src/data/project.json');
        let project = JSON.parse(rawdata);
        return project
    }

    // Serialize csv data to Person class
    async load_csv(path: string) {
        const jsonObj = await csv().fromFile(path)
        let results: Person[] = []
        jsonObj.forEach((data) => {
            let person = new Person()
            person.set_city(data.city)
            person.set_name(data.firstName)
            person.set_gender(data.gender)
            person.set_industry(data.industry)
            person.set_jobTitle(data.jobTitle)
            person.set_latitude(data.latitude)
            person.set_longitude(data.longitude)
            results.push(person)
        })
        return results;
    }

    // Calculates the distance between two GeoCode points
    getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    // Converted degree to radius
    deg2rad(deg: number) {
        return deg * (Math.PI / 180)
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


