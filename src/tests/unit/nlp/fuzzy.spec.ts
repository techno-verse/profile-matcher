import { expect } from 'chai';
import { FuzzyMatch } from '../../../lib/nlp/fuzzy';
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

describe('Fuzzy Match Positive Test Cases', () => {
    it('Test Fuzzy Match Scorning', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software'];
        let fuzzyMatch: any = new FuzzyMatch(options, data, true, false, true, true);
        let score: number[] = fuzzyMatch.get_score("computer software");
        expect(score.length).to.be.above(0);
    });

});

describe('Fuzzy Match Negative Test Cases', () => {
    it('Test Fuzzy Match Scorning with bad Spelling', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software', "UI/UX"];
        let fuzzyMatch: any = new FuzzyMatch(options, data, true, false, true, true);
        let score: any[] = fuzzyMatch.get_score("cumputer softwere");
        score.forEach(data => {
            let acutalVal: number = data.score;
            let expectVal: number = 0.5882352941176471;
            expect(acutalVal).to.be.equals(expectVal);
        });
    });

    it('Test Fuzzy Match Scorning with bad Spelling And Without Removing Special Character ', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software', "UI/UX"];
        let fuzzyMatch: any = new FuzzyMatch(options, data, true, false, true, false);
        let score: any[] = fuzzyMatch.get_score("cumputer softwere");
        score.forEach(data => {
            let acutalVal: number = data.score;
            let expectVal: number = 0.5882352941176471;
            expect(acutalVal).to.be.equals(expectVal);
        });
    });

    it('Test Fuzzy Match Scorning with bad Spelling And Without Normalization ', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software', "UI/UX"];
        let fuzzyMatch: any = new FuzzyMatch(options, data, true, false, true, false);
        let score: any[] = fuzzyMatch.get_score("cumputer softwere");
        score.forEach(data => {
            let acutalVal: number = data.score;
            let expectVal: number = 0.5882352941176471;
            expect(acutalVal).to.be.equals(expectVal);
        });
    });

});