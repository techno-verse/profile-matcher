"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normelizer_1 = require("../../../lib/nlp/normelizer");
const chai_1 = require("chai");
// The following block is for configuring normalizer
describe('Normelizer Postivie Cases', () => {
    var normalizer = new normelizer_1.Normalizer();
    it('Test Normalizer Can Remove Stem Words From A Stirng', () => {
        let stopWord = false;
        let stem = true;
        let specialChar = false;
        let loweCase = false;
        let data = "This is the unit test for Normelizer";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.contain("normel");
    });
    it("Test Normalizer Can Convert String To Lower Case", () => {
        let stopWord = false;
        let stem = false;
        let specialChar = false;
        let loweCase = true;
        let data = "Hello Lower Case";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("hello lower case");
    });
    it("Test Normalizer Can Remove Special Characters", () => {
        let stopWord = false;
        let stem = false;
        let specialChar = true;
        let loweCase = false;
        let data = "Removed @sasa (ssa) 9ss9";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("Removed sasa ssa ss");
    });
    it("Test Normalizer Can Remove Stop Word Characters", () => {
        let stopWord = true;
        let stem = false;
        let specialChar = false;
        let loweCase = false;
        let data = "This is the unit and coverage tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("unit,coverage,tests");
    });
    it("Test Normalizer Can Apply All Of The Normalization", () => {
        let stopWord = true;
        let stem = true;
        let specialChar = true;
        let loweCase = true;
        let data = "This is the Unit And @ Coverage 99 tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("unit coverag test");
    });
    it("Test Normalizer Can Remove Stop Words And Converts To Lower Case", () => {
        let stopWord = true;
        let stem = false;
        let specialChar = false;
        let loweCase = true;
        let data = "This is the Unit And @ Coverage 99 tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("unit,@,coverage,99,tests");
    });
    it("Test Normalizer Can Remove Stem Words And Converts To Lower Case", () => {
        let stopWord = false;
        let stem = true;
        let specialChar = false;
        let loweCase = true;
        let data = "This is the unit test for Normelizer";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("this is the unit test for normel");
    });
    it("Test Normalizer Can Remove Special Characters And Converts To Lower Case", () => {
        let stopWord = false;
        let stem = false;
        let specialChar = true;
        let loweCase = true;
        let data = "This is the Unit And @ Coverage 99 tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("this is the unit and coverage tests");
    });
    it("Test Normalizer Can Remove Stop Words And Stem words", () => {
        let stopWord = true;
        let stem = true;
        let specialChar = false;
        let loweCase = false;
        let data = "This is the Unit And @ Coverage 99 for Normelizer";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        chai_1.expect(normelisedString).to.be.equals("unit,@,coverag,99,normel");
    });
    it("Test Normalizer Does Not Apply Normalization", () => {
        let data = "This is the Unit And @ Coverage 99 for Normelizer";
        let normelisedString = normalizer.normalize(data);
        chai_1.expect(normelisedString).to.be.equals("This is the Unit And @ Coverage 99 for Normelizer");
    });
});
//# sourceMappingURL=normelizer.spec.js.map