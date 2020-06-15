"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tfidf_1 = require("./nlp/tfidf");
const fuzzy_1 = require("./nlp/fuzzy");
const helper_1 = require("./helper/helper");
class Profiler {
    constructor() {
        this.helper = new helper_1.Helper();
    }
    /*
    Calculates industry score for a given user. We will calculate the average word frequency per each string in
    the professionalIndustry from the project to determine the closets possible prospect.
    */
    get_industry_score(data, dataList) {
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
        nlpTfIdf.add_document_list(data);
        dataList.forEach((query) => {
            query = query.toLowerCase();
            total += nlpTfIdf.get_score(query);
            let queryList = query.split(" ");
            totalWords += queryList.length;
        });
        // Multiplying the avrage with 10 to scale with other scores
        avg = (total / totalWords) * 10;
        return avg;
    }
    // This method calculates job tite score for a given user
    get_job_title_score(data, query) {
        let score = 0;
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
        let fuzzyMatch = new fuzzy_1.FuzzyMacth(options, data);
        let scoreList = [];
        // Automatically scores the direct match with 1 to reduce unnecessary data processing 
        if (query in data) {
            score = 1;
        }
        // Automatically "not applicatble" score to 0 
        if (query.includes("not applicatble")) {
            score = 0;
        }
        // Get the fuzzyMatch score for the job title
        else {
            const result = fuzzyMatch.get_score(query);
            if (result.length > 0) {
                result.forEach((data) => {
                    if (data.score != null) {
                        let score = data.score;
                        scoreList.push(score);
                    }
                });
                // FuzzyMatch returns value closest to 0 as best score
                let minScore = Math.min(...scoreList);
                // We need to scalseit to match with other scores which considers value closest to 1 asthe best score
                score = 1 - minScore;
            }
        }
        return score;
    }
    // Get's the closes distance from list of distances for a given used
    get_closest_disctance(locations, personLat, personLong) {
        let distList = [];
        locations.forEach((element) => {
            let profileLat = element.location.location.latitude;
            let profileLong = element.location.location.longitude;
            let dist = this.helper.getDistanceFromLatLonInKm(personLat, personLong, profileLat, profileLong);
            if (dist < 100) {
                distList.push(dist);
            }
        });
        let shortDist = 100;
        if (distList.length > 0) {
            shortDist = Math.min(...distList);
        }
        return shortDist;
    }
}
exports.Profiler = Profiler;
//# sourceMappingURL=profiler.js.map