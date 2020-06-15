"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv = require("csvtojson");
const person_1 = require("../../model/person");
class Helper {
    constructor() {
        this.projectData = this.read_json_file();
    }
    read_json_file() {
        const fs = require('fs');
        let rawdata = fs.readFileSync('src/data/project.json');
        let project = JSON.parse(rawdata);
        return project;
    }
    // Serialize csv data to Person class
    load_csv(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonObj = yield csv().fromFile(path);
            let results = [];
            jsonObj.forEach((data) => {
                let person = new person_1.Person();
                person.set_city(data.city);
                person.set_name(data.firstName);
                person.set_gender(data.gender);
                person.set_industry(data.industry);
                person.set_jobTitle(data.jobTitle);
                person.set_latitude(data.latitude);
                person.set_longitude(data.longitude);
                results.push(person);
            });
            return results;
        });
    }
    // Calculates the distance between two GeoCode ponits
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    // Converteds degree to radius
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    // Toeknizes, clean, and removes duplicates from the industry array
    create_industry_set(industry) {
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
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map