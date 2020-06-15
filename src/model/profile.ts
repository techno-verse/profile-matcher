export class Profile {
    name: string;
    distance: number;
    industrySc: number
    jobTitleSc: number
    score: number;
    distSc: number;

    constructor(name: string, distance: number, industryScore: number, jobTitleScore: number) {
        this.name = name;
        this.distance = distance;
        this.industrySc = industryScore;
        this.jobTitleSc = jobTitleScore;
        //here we are scaling the distance to how close it is from being 100%
        this.distSc = ((100 - distance) / 100);
        // Average score combining all three fetors 
        this.score = this.calculate_average()
    }

    calculate_average(){
        let results:  number = Math.round(((this.industrySc + this.jobTitleSc + this.distSc) / 3)*100)
        return results
    }
}