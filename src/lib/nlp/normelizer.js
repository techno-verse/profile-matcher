"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const natural = require("natural");
var sw = require('stopword');
//This class provides utility to normalizer the given string 
class Normalizer {
    constructor() {
        this.normalized = "";
    }
    // Removes stops words such as and,is..etc 
    remove_stop_words(data) {
        let splitted = sw.removeStopwords(data.split(' '));
        this.normalized = splitted.join();
    }
    // User to remove special characters and additional space
    remove_special_characters(data) {
        data = data.replace(/[^a-zA-Z]/g, " ");
        data = data.replace(/\s\s+(?=\S{2})/g, " ");
        data = data.replace(/,/g, " ");
        data = data.replace(/^\s+|\s+$/g, "");
        this.normalized = data.trim();
    }
    remove_stem(data) {
        let splitted = data.split(',');
        let newList = [];
        splitted.forEach(data => {
            newList.push(natural.PorterStemmer.stem(data));
        });
        this.normalized = newList.join();
    }
    // NA and n/a with not applicatble to perform better socring 
    replaceeNA() {
        this.normalized = this.normalized.replace(/^(na|n\/a)/g, "not applicatble");
    }
    // This method will apply the normalization based on the user configured flags 
    normalize(data, stopWord = false, stem = false, specialChar = false, loweCase = false) {
        this.normalized = data;
        if (stopWord) {
            this.remove_stop_words(this.normalized);
        }
        if (stem) {
            this.remove_stem(this.normalized);
        }
        if (loweCase) {
            this.normalized = this.normalized.trim().toLowerCase();
        }
        if (specialChar) {
            this.remove_special_characters(this.normalized);
        }
        this.replaceeNA();
        return this.normalized;
    }
}
exports.Normalizer = Normalizer;
//# sourceMappingURL=normelizer.js.map