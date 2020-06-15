import { Normalizer } from "../../../lib/nlp/normelizer"
import { expect } from "chai";
// The following block is for configuring normalizer


describe('Normelizer Postivie Cases', () => {
    var normalizer = new Normalizer()
    it('Test Normalizer Can Remove Stem Words From A Stirng', () => { 
        let stopWord = false;
        let stem = true;
        let specialChar = false;
        let loweCase = false

        let data: string = "This is the unit test for Normelizer";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);

        expect(normelisedString).to.be.contain("normel");

    });

    it("Test Normalizer Can Convert String To Lower Case", () => { 
        let stopWord = false;
        let stem = false;
        let specialChar = false;
        let loweCase = true;

        let data: string = "Hello Lower Case";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        
        expect(normelisedString).to.be.equals("hello lower case");

    });

    it("Test Normalizer Can Remove Special Characters", () => { 
        let stopWord = false;
        let stem = false;
        let specialChar = true;
        let loweCase = false;

        let data: string = "Removed @sasa (ssa) 9ss9";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("Removed sasa ssa ss");

    });

    it("Test Normalizer Can Remove Stop Word Characters", () => { 
        let stopWord = true;
        let stem = false;
        let specialChar = false;
        let loweCase = false;

        let data: string = "This is the unit and coverage tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("unit,coverage,tests");
    });

    it("Test Normalizer Can Apply All Of The Normalization", () => { 
        let stopWord = true;
        let stem = true;
        let specialChar = true;
        let loweCase = true;

        let data: string = "This is the Unit And @ Coverage 99 tests"
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("unit coverag test");
    });

    it("Test Normalizer Can Remove Stop Words And Converts To Lower Case", () => { 
        let stopWord = true;
        let stem = false;
        let specialChar = false;
        let loweCase = true;

        let data: string = "This is the Unit And @ Coverage 99 tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("unit,@,coverage,99,tests");
    });

    it("Test Normalizer Can Remove Stem Words And Converts To Lower Case", () => { 
        let stopWord = false;
        let stem = true;
        let specialChar = false;
        let loweCase = true;

        let data: string = "This is the unit test for Normelizer";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("this is the unit test for normel");
    });

    it("Test Normalizer Can Remove Special Characters And Converts To Lower Case", () => { 
        let stopWord = false;
        let stem = false;
        let specialChar = true;
        let loweCase = true

        let data: string = "This is the Unit And @ Coverage 99 tests";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("this is the unit and coverage tests");
    });

    it("Test Normalizer Can Remove Stop Words And Stem words", () => { 
        let stopWord = true;
        let stem = true;
        let specialChar = false;
        let loweCase = false

        let data: string = "This is the Unit And @ Coverage 99 for Normelizer";
        let normelisedString = normalizer.normalize(data, stopWord, stem, specialChar, loweCase);
        expect(normelisedString).to.be.equals("unit,@,coverag,99,normel");
    });

    it("Test Normalizer Does Not Apply Normalization", () => { 
        let data: string = "This is the Unit And @ Coverage 99 for Normelizer";
        let normelisedString = normalizer.normalize(data);
        expect(normelisedString).to.be.equals("This is the Unit And @ Coverage 99 for Normelizer");
    });


});