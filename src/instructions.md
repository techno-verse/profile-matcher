# Respondent Software Engineer Backend
## Technical Test
We believe this should take less than 2-3 hours to complete, but understand you may have other commitments and time constraints. Please let us know (roughly) when we should expect your solution.

Please submit code as if you intended to ship it to production. The details matter. **Tests are expected**, well written and simple code.

We’d prefer you submit your test using Javascript/NodeJS as these are the languages we use. Feel to share your code with a repository or a private gist.

### Task 1 - Matching
Matching Respondents With Projects (Paid Opportunities)
Central to the Respondent platform is a matching algorithm that matches research participants with paid opportunities launched by researchers.

We have some respondents/participants data in a text file (respondents.csv attached) and data attributes we know about them (one respondent per line). We would like to evaluate whether they match (a good fit) with a project (paid opportunities) (project.json attached).

Write a matching score function that calculates their likelihood to be picked based on the following data points:
- Industry
- Job title
- Location (max 100km)

Write a program that will read the full list of respondents and output the **names, distance and matching score** of matching respondents (within 100km), sorted by matching score.
Please refer to this [Wikipedia Article](https://en.wikipedia.org/wiki/Great-circle_distance) to calculate the distance. Remember to convert degrees to radians when calculating the distance. Please include some unit tests to cover your code and functions.
