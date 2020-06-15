import { expect } from "chai";
import { NlpTfIdf } from "../../../lib/nlp/tfidf";

describe('TFIDF Positive Cases', () => {
    it('Test TFIDF Match Scoring Document List', () => {
        let dataList: string[] = ["information", "technology", "services", "automotive", "computer", "software", "farming", "graphic", "design"];
        let data: string = "automotive";

        // Total score for project industry's data for a given user.
        let total: number = 0;
        // Average amount of word frequency in user profile for the given project industry's  
        let avg: number = 0;
        // Total number of words in industry string from both project and csv per data per user
        let totalWords: number = dataList.length;
        let nlpTfIdf = new NlpTfIdf();

        /* Adds the industry data for a given user profile to TfIdf for measuring the word frequency of 
        the project's industry data.
        */
        nlpTfIdf.add_document_list(dataList);

        let actualScore: number = nlpTfIdf.get_score(data);
        let expectedScore: number = 0.3068528194400547;
        expect(actualScore).to.be.equals(expectedScore);
    });
    it('Test TFIDF Match Scoring Document String', () => {
        let dataString: string = "information, technology, services, automotive, computer, software, farming, graphic, design";
        let data: string = "automotive";

        // Total score for project industry's data for a given user.
        let total: number = 0;
        // Average amount of word frequency in user profile for the given project industry's  
        let avg: number = 0;
        // Total number of words in industry string from both project and csv per data per user
        let nlpTfIdf = new NlpTfIdf();

        /* Adds the industry data for a given user profile to TfIdf for measuring the word frequency of 
        the project's industry data.
        */
        nlpTfIdf.add_document_string(dataString);

        let actualScore: number = nlpTfIdf.get_score(data);
        let expectedScore: number = 0.3068528194400547;
        expect(actualScore).to.be.equals(expectedScore);
    });

});