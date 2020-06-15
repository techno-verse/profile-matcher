
import { Normalizer } from "./normalizer"
import Fuse from "fuse.js";

// This class facilitate "FuzzyMatch" module functionality
export class FuzzyMatch {

    // Configures fuzzy mach criteria
    options: Object;
    fuse: any;
    data: string[];
    stopWord: boolean;
    stem: boolean;
    specialChar: boolean;
    loweCase: boolean;

    // The following block is for configuring normalizer
    normalizer: Normalizer;

    // Contracts the fuzzy match instance with Project data for job titles
    constructor(options: object, data: string[], stopWord: boolean, stem: boolean, specialChar: boolean, loweCase: boolean) {

        this.normalizer = new Normalizer()
        this.stopWord = stopWord;
        this.stem = stem;
        this.specialChar = specialChar;
        this.loweCase = loweCase;

        let tmp: string[] = []

        data.forEach(data => {
            let tmpData = this.normalizer.normalize(data)
            tmp.push(tmpData);
        })
        this.data = tmp;
        this.options = options
        this.fuse = new Fuse(this.data, this.options);
    }

    get_score(query: string) {
        query = this.normalizer.normalize(query)
        let result = this.fuse.search(query.toLowerCase());
        return result;
    }
}