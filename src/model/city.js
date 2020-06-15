"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = require("./location");
class City extends location_1.PLocation {
    constructor() {
        super();
        this.id = "";
        this.city = "";
        this.state = "";
        this.country = "";
    }
    set_city(city) {
        this.city = city;
    }
    set_state(state) {
        this.state = state;
    }
    set_country(country) {
        this.country = country;
    }
    get_city() {
        return this.city;
    }
    get_state() {
        return this.state;
    }
    get_country() {
        return this.country;
    }
}
exports.City = City;
//# sourceMappingURL=city.js.map