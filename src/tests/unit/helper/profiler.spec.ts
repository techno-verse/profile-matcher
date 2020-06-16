import { expect, assert } from 'chai';
import { Profiler } from '../../../lib/profiler';
import { Helper } from '../../../lib/helper/helper';
import { get_industries, get_job_titles, get_locations } from '../../fixtures/project';

const options = {
    isCaseSensitive: false,
    includeScore: true,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    keys: [""],
};

describe('Test Profiler Positive Tests', () => {
    let profiler: Profiler = new Profiler();
    let helper: Helper = new Helper();
    it('Test Job Title Average Score', () => {
        let query: string = "software architect"
        let score: number = profiler.get_job_title_score(get_job_titles(), query)

        expect(score).to.be.lessThan(0.5)
    });

    it('Test Job Title Average Score For The Exact Match', () => {
        let query: string = "software engineer"
        let score: number = profiler.get_job_title_score(get_job_titles(), query)
        expect(score).to.be.eq(1)
    });


    it('Test Job Title Average Score For The Job Title That Has Not Applicable', () => {
        let query: string = "not applicable"
        let score: number = profiler.get_job_title_score(get_job_titles(), query)
        expect(score).to.be.eq(0)
    });


    it('Test Industry Average Score', () => {
        let industry: string = "banking financial services government administration insurance retail supermarkets automotive computer software"
        let industrySet = helper.create_industry_set(industry)
        let score: number = profiler.get_industry_score(industrySet, get_industries())
        expect(score).to.be.eq(1)
    });

    it('Test Distance Calculator Returns 0 For The Same GeoCode', () => {
        let latitude: number =  32.7766642;
        let longitude: number = -96.7969879
        let distance: number = profiler.get_closest_distance(get_locations(), latitude, longitude)
        expect(distance).to.be.eq(0)
    })
    
});


describe('Test Profiler Negative Tests', () => {
    let profiler: Profiler = new Profiler();
    let helper: Helper = new Helper();

    it('Test Job Title Average Score With Wrong Spelling And Out Of Scope Title', () => {

        let query: string = "infrastructure engeeneer"
        let score: number = profiler.get_job_title_score(get_job_titles(), query)

        expect(score).to.be.lessThan(0.4)
    });

    it('Test Job Title Average Score With Accent Character', () => {

        let query: string = "softwåre enginèér"
        let score: number = profiler.get_job_title_score(get_job_titles(), query)

        expect(score).to.be.approximately(0.8, 0.1, "close to 0.7-0.8")
    });

    it('Test Job Title Average Score When The Title Does Not Match', () => {

        let query: string = "infrastructure analyst"
        let score: number = profiler.get_job_title_score(get_job_titles(), query)

        expect(score).to.be.eq(0)
    });

    it('Test Industry Average Score With Out Of Scope Data', () => {
        let industry: string = "finetech mobile ecommerse"
        let industrySet = helper.create_industry_set(industry)
        let score: number = profiler.get_industry_score(industrySet, get_industries())
        expect(score).to.be.approximately(0.1, 0.1, 'close to 0-0.1')
    });

    it('Test Industry Average Score For Really Bad Industry String With Accent Character', () => {
        let industry: string = "software engineer insurance ban king finåncial"
        let industrySet = helper.create_industry_set(industry)
        let score: number = profiler.get_industry_score(industrySet, get_industries())
        console.log(score)
        expect(score).to.be.approximately(0.3, 0.1, 'close to 0.2-0.3')
    });

    it('Test Distance Calculator Returns 0 For The GeoCode Greater Than 100', () => {
        let latitude: number =   43.6448016;
        let longitude: number = -79.395897;
        let distance: number = profiler.get_closest_distance(get_locations(), latitude, longitude)
        expect(distance).to.be.eq(100)
    })
});