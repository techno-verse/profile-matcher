import { expect } from 'chai';
import { FuzzyMacth } from '../../../lib/nlp/fuzzy';
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

describe('Fuzzy Match Postivie Cases', () => {
    it('Test Fuzzy Match Scoreing', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software'];
        let fuzzyMatch: any = new FuzzyMacth(options, data);
        let score: number[] = fuzzyMatch.get_score("computer software");
        expect(score.length).to.be.above(0);
    });

});

describe('Fuzzy Match Negative Cases', () => {
    it('Test Fuzzy Match Scoreing with bad Spelling', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software', "UI/UX"];
        let fuzzyMatch: any = new FuzzyMacth(options, data);
        let score: any[] = fuzzyMatch.get_score("cumputer softwere");
        score.forEach(data => {
            let acutualVal: number = data.score;
            let expectVal: number = 0.5882352941176471;
            expect(acutualVal).to.be.equals(expectVal);
        });
    });


    // it('async function returns true', async () => {
    //     const result = await barAsync();
    //     expect(result).to.be.true;
    // });
});