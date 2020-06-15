
function read_json_file() {
    const  projectDataFilePath = "src/data/project.json";
    const fs = require('fs');
    let rawData = fs.readFileSync(projectDataFilePath);
    let projectData = JSON.parse(rawData);
    return projectData;
}

export function get_industries(){
    let industryList = read_json_file().professionalIndustry;
    industryList= industryList.map((industry: string) => industry.toLowerCase());
    return industryList;
}

export function get_job_titles(){
    let jobTitleList = read_json_file().professionalJobTitles;
    jobTitleList= jobTitleList.map((jobs: string) => jobs.toLowerCase());
    return jobTitleList;
}

export function get_locations(){
    let locations = read_json_file().cities;
    return locations;
}