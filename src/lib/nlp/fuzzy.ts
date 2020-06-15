
import { Normalizer } from "./normelizer"
import Fuse from "fuse.js";



// This class facilitate "FuzzyMacth" module functionality
export class FuzzyMacth {

    // Configures fuzzy mach criterias
    options: Object;
    fuse: any;
    data: string[];
    
    // The following block is for configuring normalizer
    normalizer = new Normalizer()
    // Contructs the fuzzy match instacce with Project data for job titles
    constructor(options: object, data: string[]) {
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