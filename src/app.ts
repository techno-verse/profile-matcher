import { Helper } from './lib/helper/helper'
import { Profiler } from './lib/profiler'
import { Profile } from './model/profile'

const helper = new Helper()

function main() {
  

    helper.load_csv("src/data/respondents_data_test.csv").then((person) => {

        // Initializing profiler object to perform profiling on each person for the closes job match 
        const profiler = new Profiler()
        // List for storing profiled scores data
        let profileList: Profile[] = []

        // Loads Project description data for the given data in the project.json
        let locations = helper.projectData.cities
        let industryList = helper.projectData.professionalIndustry
        let jobTitleList = helper.projectData.professionalJobTitles

        // Iteration over each person object list returned thorough load_csv
        person.forEach(data => {

            // Get the required person class properties to perform profiling 
            let name = data.get_name()
            let personLat = data.get_latitude()
            let personLong = data.get_longitude()
            let industry = data.get_industry()
            let jobTitle = data.get_jobTitle()

            let industrySet = helper.create_industry_set(industry)
            let industryScore = profiler.get_industry_score(industrySet, industryList)
            let jobTitleScore = profiler.get_job_title_score(jobTitleList, jobTitle.toLowerCase())

            let shortDist = profiler.get_closest_distance(locations, personLat, personLong)
            let profile = new Profile(name, shortDist, industryScore, jobTitleScore)
            profileList.push(profile)
        })
        profileList.sort((a,b) =>a.score > b.score ? -1 : a.score < b.score ? 1 : 0)
        profileList.forEach( data=>{
            console.log("Name: %s, Distance: %s, Score: %s",data.name, data.distance, data.score.toFixed())
        })
    });
}

// Main function to be triggered upon running npm start
main()
