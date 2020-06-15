import { Profile } from "../../../model/profile"
import { expect } from 'chai';

describe('Profile Model Tests', () => {

    it('Test Profile Model Can Set Values', () => {
        let name: string = "Batman"
        let distance: number = 0
        let industryScore: number = 0
        let jobTitleScore: number = 0
        let profile: Profile = new Profile(name, distance, industryScore, jobTitleScore)
        console.log(profile.name)
        console.log(profile.distSc)
        console.log(profile.score)
    });
});