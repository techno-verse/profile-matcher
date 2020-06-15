"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const tfidf_1 = require("../../../lib/nlp/tfidf");
describe('TFIDF Postivie Cases', () => {
    it('Test TFIDF Match Scoring Document List', () => {
        let dataList = ["information", "technology", "services", "automotive", "computer", "software", "farming", "graphic", "design"];
        let data = "automotive";
        // Total score for project industry's data for a given user.
        let total = 0;
        // Average amount of word frequency in user profile for the given project industry's  
        let avg = 0;
        // Total number of words in industry string from both project and csv per data per user
        let totalWords = dataList.length;
        let nlpTfIdf = new tfidf_1.NlpTfIdf();
        /* Adds the industry data for a given user profile to TfIdf for measuring the word frequency of
        the project's industry data.
        */
        nlpTfIdf.add_document_list(dataList);
        let actualScore = nlpTfIdf.get_score(data);
        let expectedScore = 0.3068528194400547;
        chai_1.expect(actualScore).to.be.equals(expectedScore);
    });
    it('Test TFIDF Match Scoring Document String', () => {
        let dataString = "information, technology, services, automotive, computer, software, farming, graphic, design";
        let data = "automotive";
        // Total score for project industry's data for a given user.
        let total = 0;
        // Average amount of word frequency in user profile for the given project industry's  
        let avg = 0;
        // Total number of words in industry string from both project and csv per data per user
        let nlpTfIdf = new tfidf_1.NlpTfIdf();
        /* Adds the industry data for a given user profile to TfIdf for measuring the word frequency of
        the project's industry data.
        */
        nlpTfIdf.add_document_string(dataString);
        let actualScore = nlpTfIdf.get_score(data);
        let expectedScore = 0.3068528194400547;
        chai_1.expect(actualScore).to.be.equals(expectedScore);
    });
});
//# sourceMappingURL=tfidf.spec.js.map