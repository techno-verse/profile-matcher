# Profile Matcher
## Introduction
This simple application will score each row defined in the `src/data/respondents_data_test.csv` which represents the candidate data with their job title, industries they worked in, and their residence. 

The scoring will be performed based on the data match between the project data provided in the `src/data/project.json` and the ideal candidates that matches those data with the relevant fields such as industries, job title, and the distance between the project location and candidates location. 

## Description
### Term Frequency–Inverse Document Frequency for industrial experience scoring
We will be leveraging the [TFIDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) algorithm to evaluate the weight of the industries that represents the expected industrial experience an idea candidate `should possess` to the industrials experience a candidate `actually posses`. We will measure the average frequency of each expected project industries in the candidate's profile data to get the final matching score.

### Fuzzy Match for Job Title Scoring
We will be using fuzzy match to score the possible  match to match the expected job titles with the title a candidate posses. 

### Scoring Distance
We will be using [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula) to measure the distance between two Geo Logical points. Once we measure the distance, we want to score it and scale it to match the other scores so we can get some accurate results. To do this, we will subtract the closes distance with 1  so we get number close to 1. We are also filtering distance that is more tha 100KM as per the requirements.

### Final Score
The final scoring will be nothing but an average of all three scores.

## Running the app locally
```
# Clone the Git Repo
> git clone https://github.com/shreyaspatel7/profile-matcher.git

> cd profile-matcher/

# Via NPM
> env PROFILE_DATA=src/data/respondents_data_test.csv PROJECT_DATA=src/data/project.json  npm start

# Via Docker Compose
> docker-compose run profiler
```


## Running the tests

###  Running the unit tests CLI
```
> PROFILE_DATA=src/data/respondents_data_test.csv PROJECT_DATA=src/data/project.json npm test
```


###  Running the unit tests via Docker compose
```
> docker-compose run test
```


###  Running unit tests with coverage
```
PROFILE_DATA=src/data/respondents_data_test.csv PROJECT_DATA=src/data/project.json npm run coverage
```

###  Running the unit tests with coverage via Docker compose
```
> docker-compose run coverage
```
We will be able to get coverage report in both  HTML and CLI format. If we run the coverage via docker composer,  the results will be available in `results` directory.
