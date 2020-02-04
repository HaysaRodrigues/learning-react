/**
 * # Exercising Map, Filter and Reduce.
 * 1. Companies created after 2000 year.
 * 2. The name of each company and its CEO.
 * 3. The value of all companies sum up.
 */

const companies = [
    {name: 'Samsung', valueOnTheMarket: 50, CEO: 'Kim Hyun Suk', yearOfCreation: 1938},
    {name: 'Microsoft', valueOnTheMarket: 415, CEO: 'Satya Nadella', yearOfCreation: 1975},
    {name: 'Intel', valueOnTheMarket: 117, CEO: 'Brian Krzanich', yearOfCreation: 1968},
    {name: 'Facebook', valueOnTheMarket: 383, CEO: 'Mark Zuckerberg', yearOfCreation: 2004},
    {name: 'Spotify', valueOnTheMarket: 30, CEO: 'Daniel Ek', yearOfCreation: 2006},
    {name: 'Apple', valueOnTheMarket: 845, CEO: 'Tim Cook', yearOfCreation: 1976},
    {name: 'Morg', valueOnTheMarket: 566, CEO: 'Nobody Cook', yearOfCreation: 2000}
];

function filterCompaniesCreatedAfter2000Year() {
    const companiesCreatedAfter2000Year = companies.filter(company => company.yearOfCreation >= 2000);
    companiesCreatedAfter2000Year.forEach(company => console.log(company.name));
}

function createListWithCompanyNameAndItsCEO() {
    const companiesAndItsCEOs = companies.map(company => `${company.name}` + ' CEO: ' + `${company.CEO}`);
    companiesAndItsCEOs.forEach(company => console.log(company))
}

function sumUpCompaniesValue() {
    const companiesValue = companies.map(company => company.valueOnTheMarket);
    const sumAllValues = (accumulator, currentValue) => accumulator + currentValue;
    console.log(companiesValue.reduce(sumAllValues));
}

console.log('Companies created after 2000 year:');
filterCompaniesCreatedAfter2000Year();
console.log('The name of each company and its CEO:');
createListWithCompanyNameAndItsCEO();
console.log('The value of all companies sum up:');
sumUpCompaniesValue();


