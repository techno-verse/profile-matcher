"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fuzzy_1 = require("../../../lib/nlp/fuzzy");
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
        let fuzzyMatch = new fuzzy_1.FuzzyMacth(options, data);
        let score = fuzzyMatch.get_score("computer software");
        chai_1.expect(score.length).to.be.above(0);
    });
});
describe('Fuzzy Match Negative Cases', () => {
    it('Test Fuzzy Match Scoreing with bad Spelling', () => {
        const data = ['banking',
            'information',
            'transportation/trucking/railroad',
            'computer',
            'software', "UI/UX"];
        let fuzzyMatch = new fuzzy_1.FuzzyMacth(options, data);
        let score = fuzzyMatch.get_score("cumputer softwere");
        score.forEach(data => {
            let acutualVal = data.score;
            let expectVal = 0.5882352941176471;
            chai_1.expect(acutualVal).to.be.equals(expectVal);
        });
    });
    // it('async function returns true', async () => {
    //     const result = await barAsync();
    //     expect(result).to.be.true;
    // });
});
//# sourceMappingURL=fuzzy.spec.js.map