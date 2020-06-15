import { expect, assert } from 'chai';
import { Helper } from '../../../lib/helper/helper';

describe('Helper Class Positive Tests', () => {
    let helper: Helper = new Helper();

    it('Test Degree to Radius Converter', () => {
        let radius = helper.deg2rad(1);
        expect(radius).to.be.equals(0.017453292519943295);
    });

    it('Test Industry  Set Is Being Generated Correctly', () => {
        let industry: string = "information technology services computer software banking computer programming";
        let actual: string[] = helper.create_industry_set(industry);
        let expected: string[] = ["information", "computer", "software", "banking", "programming"];
        expect(actual).to.be.deep.equals(expected);
    });

    it('Test Industry  Set Is Being Generated Correctly Without Services And Technology', () => {
        let industry: string = "information computer software banking computer programming";
        let actual: string[] = helper.create_industry_set(industry);
        let expected: string[] = ["information", "computer", "software", "banking", "programming"];
        expect(actual).to.be.deep.equals(expected);
    });
});

describe('Test GeoCode Distance Calculator Positive Tests', () => {
    let helper: Helper = new Helper();
    it('Test Distance Calculator Return 0 For The Same GeoCode', () => {

        let latitude: number = 40.6781784;
        let longitude: number = -73.9441579;

        let distance: number = helper.getDistanceFromLatLonInKm(latitude, longitude, latitude, longitude);
        expect(distance).to.be.eq(0);

    });

    it('Test The Distance Between Brooklyn Museums And Empire State Building', () => {

        let latitudeA: number = 40.6730987;
        let longitudeA: number = -73.972232;

        let latitudeB: number = 40.7484405;
        let longitudeB: number = -73.9878531;

        let distance: number = helper.getDistanceFromLatLonInKm(latitudeA, longitudeA, latitudeB, longitudeB);
        distance = Math.round(distance);
        
        // This is the google's calculate distance between  
        //  Empire State Building, 20 W 34th St, New York, NY 10001, United States and Brooklyn Museum, 200 Eastern Pkwy, Brooklyn, NY 11238, United States
        let expectedDistance = Math.round(10.1);
        assert.approximately(distance, expectedDistance, 2, 'numbers are close');

    })
});

describe('Test Data Load Positive Tests', () => {
    let helper: Helper = new Helper();
    const fs = require('fs');
    let rawdata = fs.readFileSync('src/data/project.json');
    let projectData = JSON.parse(rawdata);

    it('Test Project Data Loaded Matches With Data Loaded By The Test', async () => {
        expect(helper.projectData).to.be.deep.eq(projectData);
    });

    it('Test CSV To Person Object Data Serialization', async () => {

        helper.load_csv("src/data/respondents_data_test.csv").then(data => {
            expect(data.length).to.be.greaterThan(0);
            expect(data.length).to.be.eq(500);
        })
    });

});