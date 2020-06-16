# Profile Matcher
## Introduction
This simple application will score each row defined in the `src/data/respondents_data_test.csv` which represents the candidate data with their job title, industries they worked in, and their residence.

The scoring will be performed based on the data match between the project data provided in the `src/data/project.json` and the ideal candidates that matches those data with the relevant fields such as industries, job title, and the distance between the project location and candidates location.

## Description
### Term Frequency–Inverse Document Frequency for industrial experience scoring
We will be leveraging the [TFIDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) algorithm to evaluate the weight of the industries that represents the expected industrial experience an idea candidate `should possesses` to the industrials experience a candidate `actually possess`. We will measure the average frequency of each expected project industry in the candidate's profile data to get the final matching score.

### Fuzzy Match for Job Title Scoring
We will be using a fuzzy match to score the possible match to match the expected job titles with the title a candidate possesses.

### Scoring Distance
We will be using [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula) to measure the distance between two geo coordinates. Once we measure the distance, we want to score it and scale it to match the other scores so we can get some accurate results. To do this, we will subtract the closest distance with 1 so we get a number close to 1. We are also filtering distance that is more than 100KM as per the requirements.

### Final Score
The final scoring will be nothing but an average of all three scores.

### Developer Productivity
We are using `Docker` and `docker-compose` to ease the application packaging and deploying process.

### Testing
We are using `Mocha` and `Chai` for performing unit testing and assertion. To measure and generate the coverage report, we are using `Istanbul`.

## Implementation Details

The engineering of the application leverages the `TypeScript`'s Object Oriented functionalities. We are using concepts such as Inheritance, and Encapsulation to make the application strictly typed, more resilient, and secure.

The engineered application project structure looks like the following tree:

```
.
├── app.ts
├── data
│   ├── project.json
│   └── respondents_data_test.csv
├── lib
│   ├── helper
│   │   └── helper.ts
│   ├── nlp
│   │   ├── fuzzy.ts
│   │   ├── normalizer.ts
│   │   └── tfidf.ts
│   └── profiler.ts
├── model
│   ├── city.ts
│   ├── location.ts
│   ├── person.ts
│   └── profile.ts
└── tests
   ├── fixtures
   │   └── project.ts
   └── unit
       ├── helper
       │   ├── helper.spec.ts
       │   └── profiler.spec.ts
       ├── model
       │   ├── person.spec.ts
       │   └── profile.spec.ts
       └── nlp
           ├── fuzzy.spec.ts
           ├── normalizer.spec.ts
           └── tfidf.spec.ts

11 directories, 21 files
```
The following block will describe what each directory in the project structure represents.

- The file `app.ts` holds the main function which will drive the full flow from data ingestion to scoring and result printing.

- The `lib` directory will hold all the classes that are required to perform candidate profiling.
   - The *Helper* class in `src/lib/helper/helper.ts` holds utilities for all the basic tasks required to be shared by multiple classes such as loading CSV and JSON files, measuring distance and radius.

   -  The *FuzzyMatch* class in `src/lib/nlp/fuzzy.ts` will provide fuzzy matching related functionalities.

   -  The *Normalizer* class in `src/lib/nlp/normalizer.ts` will provide test normalization functionality.

   - The *NlpTfIdf* class in `src/lib/nlp/tfidf.ts` will provide functionality to perform tfidf on any given documents.

   - The *Profiler* class in `src/lib/profiler.ts` will provide ability to perform profiling on any given candidate profile and calculate the final score.

- The `model` directory will hold all the data models for modeling city, location, person, and profile data.

- The `tests` directory has all the unit tests and it's required fixtures to perform testing.

## Running the app locally
```
# Clone the Git Repo
> git clone https://github.com/shreyaspatel7/profile-matcher.git

> cd profile-matcher/

# Via NPM
> npm install -D
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


###  Running the unit tests with coverage
```
PROFILE_DATA=src/data/respondents_data_test.csv PROJECT_DATA=src/data/project.json npm run coverage
```

###  Running the unit tests with coverage via Docker compose
```
> docker-compose run coverage
```
We will be able to get the coverage report in both  HTML and CLI format. If we run the coverage via docker compose,  the results will be available in the `results` directory.
