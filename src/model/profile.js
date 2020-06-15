"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(name, distance, industryScore, jobTitleScore) {
        this.name = name;
        this.distance = distance;
        this.industrySc = industryScore;
        this.jobTitleSc = jobTitleScore;
        //here we are scalling the distance to how close it is from being 100%
        this.distSc = ((100 - distance) / 100);
        // Avrage score combining all three fectors 
        this.score = (this.industrySc + this.jobTitleSc + this.distSc) / 3;
    }
}
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map