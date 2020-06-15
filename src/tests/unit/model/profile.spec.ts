import { Profile } from "../../../model/profile"
import { expect } from 'chai';

describe('Profile Model Test', () => {

    it('Test Profile Model Can Set Values', () => {
        let name: string = "Batman"
        let distane: number = 0
        let industryScore: number = 0
        let jobeTitleScore: number = 0
        let profile: Profile = new Profile(name, distane, industryScore, jobeTitleScore)
        console.log(profile.name)
        console.log(profile.distSc)
        console.log(profile.score)
    });
});