"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./lib/helper/helper");
const helper = new helper_1.Helper();
function main() {
    let profileList = [];
    helper.load_csv("src/data/respondents_data_test copy.csv").then((data) => {
        console.log(data);
        // const profiler = new Profiler()
        // let locations = helper.projectData.cities
        // let industryList = helper.projectData.professionalIndustry
        // let jobTitleList = helper.projectData.professionalJobTitles
        // data.forEach(data => {
        //     console.log(data)
        //     let name = data.get_name()
        //     let personLat = data.get_latitude()
        //     let personLong = data.get_longitude()
        //     let industry = data.get_industry()
        //     let jobTitle = data.get_jobTitle()
        //     let industrySet = helper.create_industry_set(industry)
        //     let industryScore = profiler.get_industry_score(industrySet, industryList)
        //     let jobTitleScore = profiler.get_job_title_score(jobTitleList, jobTitle.toLowerCase())
        //     let shortDist = profiler.get_closest_disctance(locations, personLat, personLong)
        //     let profile = new Profile(name, shortDist, industryScore, jobTitleScore)
        //     profileList.push(profile)
        // })
        // console.log(profileList)
    });
}
main();
//# sourceMappingURL=app.js.map