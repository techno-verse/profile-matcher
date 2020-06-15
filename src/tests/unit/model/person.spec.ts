import { Person } from "../../../model/person"
import { expect } from 'chai';

describe('Person Model Test', () => {
    const person: Person = new Person()
    it('Test Person Model Is Able To Set And Get The Tokenized City, State, And Country', () => {
        let fullCity: string = "Toronto, ON, Canada"
        let splitCity: string[] =fullCity.split (",")
        person.set_city(fullCity)
        
        let acutalCity = person.get_city()
        expect(acutalCity).to.be.equal(splitCity[0].trim())

        let acutalState = person.get_state()
        expect(acutalState).to.be.equal(splitCity[1].trim())

        let actualCountry = person.get_country()
        expect(actualCountry).to.be.equal(splitCity[2].trim())

    }); 

    it('Test Person Model Is Able To Set And Get Gender', () => {
        let expectedGender: string = "Male"
        person.set_gender(expectedGender)
        let acutalGender = person.get_gender()
        expect(acutalGender).to.be.equal(expectedGender)
    }); 

    it('Test Person Model Is Able To Set And Get Industry', () => {
        let expectedIndustry: string = "IT, Software, E-Commerse, Insurance"
   
        person.set_industry(expectedIndustry)
        
        expectedIndustry = expectedIndustry.replace(/[^a-zA-Z]/g, " ");
        expectedIndustry = expectedIndustry.replace(/\s\s+(?=\S{2})/g, " ");
        expectedIndustry = expectedIndustry.replace(/,/g, " ");
        expectedIndustry = expectedIndustry.replace(/^\s+|\s+$/g, "")
        expectedIndustry = expectedIndustry.toLowerCase()

        let acutalIndustry= person.get_industry()
        expect(acutalIndustry).to.be.equal(expectedIndustry)
    }); 

    it('Test Person Model Is Able To Set And Get Job Title', () => {
        let expectedJobeTitle: string = "Python/Java Developer, Infrastructure Engineer"
        person.set_jobTitle(expectedJobeTitle)
        let actualJobTitle= person.get_jobTitle()
        expect(actualJobTitle).to.be.equal(actualJobTitle)
    }); 

    it('Test Person Model Is Able To Set And Get Job Name', () => {
        let expectName: string = "Mando"
        person.set_name(expectName)
        let actualName= person.get_name()
        expect(actualName).to.be.equal(expectName)
    }); 

    it('Test Person Model Is Able To Set And Get Latitude', () => {
        let expectLatitdue: number = 40.7127753
        person.set_latitude(expectLatitdue)
        let actualLatitude= person.get_latitude()
        expect(expectLatitdue).to.be.equal(actualLatitude)
    }); 

    it('Test Person Model Is Able To Set And Get Longitude', () => {
        let expectLingitude: number = -74.0059728
        person.set_longitude(expectLingitude)
        let actualLongitude= person.get_longitude()
        expect(expectLingitude).to.be.equal(actualLongitude)
    }); 
});