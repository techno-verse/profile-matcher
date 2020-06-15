"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = require("../../../model/city");
class TestCity extends city_1.City {
    constructor() {
        super();
    }
    test_set_city(data) {
        this.set_city(data);
    }
    test_set_country(data) {
        this.set_country(data);
    }
    test_set_state(data) {
        this.set_state(data);
    }
}
//# sourceMappingURL=testCity.js.map