"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PLocation {
    constructor() {
        this.latitude = 0;
        this.longitude = 0;
    }
    set_latitude(latitude) {
        this.latitude = latitude;
    }
    set_longitude(longitude) {
        this.longitude = longitude;
    }
    get_latitude() {
        return this.latitude;
    }
    get_longitude() {
        return this.longitude;
    }
}
exports.PLocation = PLocation;
//# sourceMappingURL=location.js.map