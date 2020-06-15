import { Profile } from "../../../model/profile"
import { expect } from 'chai';

describe('Profile Model Positive Tests', () => {

    it('Test Profile Model Can Set Values', () => {
        let name: string = "Batman"
        let distance: number = 0
        let industryScore: number = 1
        let jobTitleScore: number = 1
        let profile: Profile = new Profile(name, distance, industryScore, jobTitleScore)
        expect(profile.name).to.be.eq(name)
        expect(profile.distance).to.be.eq(distance)
        expect(profile.score).to.be.eq(100)
    });
});


describe('Profile Model Negative Tests', () => {

    it('Test Profile Model Can Set Values', () => {
        let name: string = "Super Mans"
        let distance: number = 100
        let industryScore: number = 0
        let jobTitleScore: number = 0
        let profile: Profile = new Profile(name, distance, industryScore, jobTitleScore)
        expect(profile.name).to.be.eq(name)
        expect(profile.distance).to.be.eq(distance)
        expect(profile.score).to.be.eq(0)
    });
});