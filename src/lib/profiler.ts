import { NlpTfIdf } from './nlp/tfidf';
import { FuzzyMatch } from './nlp/fuzzy';
import { Helper } from './helper/helper';

export class Profiler {
    helper = new Helper();

    /* 
    Calculates industry score for a given user. We will calculate the average word frequency per each string in 
    the professionalIndustry from the project to determine the closets possible prospect. 
    */
    get_industry_score(data: string[], dataList: string[]) {

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
        nlpTfIdf.add_document_list(data);

        dataList.forEach((query: string) => {
            query = query.toLowerCase();
            total += nlpTfIdf.get_score(query);
            let queryList = query.split(" ");
            totalWords += queryList.length;
        })

        // Multiplying the average with 10 to scale with other scores
        avg = (total / totalWords) * 10;
        // Some of the good matches are over fitting and causing 
        // the score to be + 0.5 more which need to be scaled back to 1
        if (avg > 1) {
            avg = 1;
        }
        return avg;
    }

    // This method calculates job title score for a given user
    get_job_title_score(data: string[], query: string) {

        let score: number = 0;
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

        // Apply then following text normalization rules
        let stopWord: boolean = true;
        let stem: boolean = true;
        let specialChar: boolean = true;
        let loweCase: boolean = true;

        let fuzzyMatch = new FuzzyMatch(options, data, stopWord, stem, specialChar, loweCase);
        let scoreList: number[] = [];

        // Automatically scores the direct match with 1 to reduce unnecessary data processing 
        if (data.includes(query)) {
            score = 1;
        }

        // Automatically "not applicable" score to 0 
        if (query.includes("not applicable")) {
            score = 0;
        }

        // Get the fuzzyMatch score for the job title
        else {
            const result: any = fuzzyMatch.get_score(query)
            if (result.length > 0) {
                result.forEach((data: any) => {
                    let score = data.score;
                    scoreList.push(score);
                })
                // FuzzyMatch returns value closest to 0 as best score
                let minScore: number = Math.min(...scoreList);
                // We need to scale to match with other scores which considers value closest to 1 as the best score
                score = 1 - minScore;
            }
        }
        return score;
    }

    // Gets the closes distance from list of distances for a given used
    get_closest_distance(locations: object[], personLat: number, personLong: number) {
        let distList: number[] = []
        locations.forEach((location: any) => {
            let profileLat: number = location.location.location.latitude;
            let profileLong: number = location.location.location.longitude;
            let dist: number = this.helper.get_distance_from_lat_lon_in_km(personLat, personLong, profileLat, profileLong);
            if (dist < 100) {
                distList.push(dist);
            }
        });
        let shortDist: number = 100;
        if (distList.length > 0) {
            shortDist = Math.min(...distList);
        }
        return shortDist;
    }
}