import { Normalizer } from "../../../lib/nlp/normalizer"
import { expect } from "chai";


describe('Normalizer Positive Cases', () => {

    var normalizer = new Normalizer()

    // The following block is for configuring normalizer rules
    it('Test Normalizer Can Remove Stem Words From A String', () => {
        let stopWord = false;
        let stem = true;
        let specialChar = false;
        let loweCase = false

        let data: string = "This is the unit test for Normalizer";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);

        expect(normalizedString).to.be.contain("norm");

    });

    it("Test Normalizer Can Convert String To Lower Case", () => {

        // The following block is for configuring normalizer rules
        let stopWord = false;
        let stem = false;
        let specialChar = false;
        let loweCase = true;

        let data: string = "Hello Lower Case";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);

        expect(normalizedString).to.be.equals("hello lower case");

    });

    it("Test Normalizer Can Remove Special Characters", () => {
        let stopWord = false;
        let stem = false;
        let specialChar = true;
        let loweCase = false;

        let data: string = "Removed @sasa (ssa) 9ss9";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("Removed sasa ssa ss");

    });

    it("Test Normalizer Can Remove Stop Word Characters", () => {
        let stopWord = true;
        let stem = false;
        let specialChar = false;
        let loweCase = false;

        let data: string = "This is the unit and coverage tests";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("unit,coverage,tests");
    });

    it("Test Normalizer Can Apply All Of The Normalization", () => {
        let stopWord = true;
        let stem = true;
        let specialChar = true;
        let loweCase = true;

        let data: string = "This is the Unit And @ Coverage 99 tests"
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("unit coverag test");
    });

    it("Test Normalizer Can Remove Stop Words And Converts To Lower Case", () => {
        let stopWord = true;
        let stem = false;
        let specialChar = false;
        let loweCase = true;

        let data: string = "This is the Unit And @ Coverage 99 tests";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("unit,@,coverage,99,tests");
    });

    it("Test Normalizer Can Remove Stem Words And Converts To Lower Case", () => {
        let stopWord = false;
        let stem = true;
        let specialChar = false;
        let loweCase = true;

        let data: string = "This is the unit test for Normalizer";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("this is the unit test for norm");
    });

    it("Test Normalizer Can Remove Special Characters And Converts To Lower Case", () => {
        let stopWord = false;
        let stem = false;
        let specialChar = true;
        let loweCase = true

        let data: string = "This is the Unit And @ Coverage 99 tests";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("this is the unit and coverage tests");
    });

    it("Test Normalizer Can Remove Stop Words And Stem words", () => {
        let stopWord = true;
        let stem = true;
        let specialChar = false;
        let loweCase = false

        let data: string = "This is the Unit And @ Coverage 99 for Normalizer";
        let normalizedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normalizedString).to.be.equals("unit,@,coverag,99,normal");
    });

    it("Test Normalizer Does Not Apply Normalization", () => {
        let data: string = "This is the Unit And @ Coverage 99 for Normalizer";
        let normalizedString = normalizer.normalize(data);
        expect(normalizedString).to.be.equals("This is the Unit And @ Coverage 99 for Normalizer");
    });

});