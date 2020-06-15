import { expect, assert } from 'chai';
import { Profiler } from '../../../lib/profiler';
import { Helper } from '../../../lib/helper/helper';

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
let jobTitles: string[] = [
    "developer",
    "software engineer",
    "software developer",
    "programmer",
    "java developer",
    "javaj2ee developer",
    "java full stack developer",
    "java software engineer",
    "java software developer",
    "application architect",
    "application developer"
]

let industryList: string[] = [
    "Banking",
    "Financial Services",
    "Government Administration",
    "Insurance",
    "Retail",
    "Supermarkets",
    "Automotive",
    "Computer Software"
]

describe('Test Profiler Positive Tests', () => {
    let profiler: Profiler = new Profiler();
    let helper: Helper = new Helper();
    it('Test Job Title Average Score', () => {
        let query: string = "software architect"
        let score: number = profiler.get_job_title_score(jobTitles, query)

        expect(score).to.be.lessThan(0.5)
    });

    it('Test Industry Average Score', () => {
        let industry: string = "banking financial services government administration insurance retail supermarkets automotive computer software"
        let industrySet = helper.create_industry_set(industry)
        let score: number = profiler.get_industry_score(industrySet, industryList)
        console.log(score)
        expect(score).to.be.eq(1)
    });
});


describe('Test Profiler Negative Tests', () => {
    let profiler: Profiler = new Profiler();
    let helper: Helper = new Helper();

    it('Test Job Title Average Score With Wrong Spelling And Out Of Scope Title', () => {

        let query: string = "infrastructure engeeneer"
        let score: number = profiler.get_job_title_score(jobTitles, query)

        expect(score).to.be.lessThan(0.4)
    });

    it('Test Industry Average Score With Out Of Scope Data', () => {
        let industry: string = "finetech mobile ecommerse"
        let industrySet = helper.create_industry_set(industry)
        let score: number = profiler.get_industry_score(industrySet, industryList)
        console.log(score)
        expect(score).to.be.approximately(0.1, 0.1, 'close to 0.1')
    });
});