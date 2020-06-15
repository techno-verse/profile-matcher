"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = require("../../../model/location");
class TestLocation extends location_1.PLocation {
    constructor() {
        super();
    }
    test_set_longitude(data) {
        this.set_longitude(data);
    }
    test_set_latitude(data) {
        this.set_latitude(data);
    }
}
//# sourceMappingURL=testLocation.js.map