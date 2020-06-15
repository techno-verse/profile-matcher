"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normelizer_1 = require("./normelizer");
const fuse_js_1 = __importDefault(require("fuse.js"));
// This class facilitate "FuzzyMacth" module functionality
class FuzzyMacth {
    // Contructs the fuzzy match instacce with Project data for job titles
    constructor(options, data) {
        // The following block is for configuring normalizer
        this.normalizer = new normelizer_1.Normalizer();
        this.stopWord = true;
        this.stem = false;
        this.specialChar = true;
        this.loweCase = true;
        let tmp = [];
        data.forEach(data => {
            let tmpData = this.normalizer.normalize(data, this.stopWord, this.stem, this.specialChar, this.loweCase);
            tmp.push(tmpData);
        });
        this.data = tmp;
        this.options = options;
        this.fuse = new fuse_js_1.default(this.data, this.options);
    }
    get_score(query) {
        query = this.normalizer.normalize(query, this.stopWord, this.stem, this.specialChar, this.loweCase);
        let result = this.fuse.search(query.toLowerCase());
        return result;
    }
}
exports.FuzzyMacth = FuzzyMacth;
//# sourceMappingURL=fuzzy.js.map