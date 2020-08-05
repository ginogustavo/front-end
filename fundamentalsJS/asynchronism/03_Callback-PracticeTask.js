//specific status within date range
//https://api.covid19api.com/country/peru/status/confirmed?from=2020-08-01T00:00:00Z&to=2020-08-03T00:00:00Z

//all statuses within date range
//https://api.covid19api.com/country/peru?from=2020-08-01T00:00:00Z&to=2020-08-03T00:00:00Z

//Task: Last 3 days covit-19 report for a country
//TODO: UI to select the last 2-10 days
//TODO: UI to select the country (latam or south america presumibly)

//Test Peru, last 3 days
const COUNTRY = "peru";
const LAST_DAYS = 3;

let dateTO = new Date();
dateTO.setTime(dateTO.getTime() - 24 * 60 * 60 * 1000);
let dateFROM = new Date();
dateFROM.setTime(dateFROM.getTime() - (LAST_DAYS + 1) * 24 * 60 * 60 * 1000);

//https://api.covid19api.com/country/peru?from=2020-08-01T00:00:00Z&to=2020-08-03T00:00:00Z
const API_URL = "https://api.covid19api.com/";
let PARAM_COUNTRY = "country/:selectedCountry";
PARAM_COUNTRY = PARAM_COUNTRY.replace(":selectedCountry", COUNTRY);
let DATE_FILTER = "?from=:date1&to=:date2";
DATE_FILTER = DATE_FILTER.replace(":date1", dateFROM.toISOString());
DATE_FILTER = DATE_FILTER.replace(":date2", dateTO.toISOString());

const REQUEST_URL = API_URL + PARAM_COUNTRY + DATE_FILTER;

fetch(REQUEST_URL)
  .then((res) => res.json())
  .then((data) => {
    let confirmed_cases = [];
    let death_cases = [];
    let recovered_cases = [];

    for (const obj of data) {
      let { Confirmed, Deaths, Recovered } = obj;
      confirmed_cases.push(Confirmed);
      death_cases.push(Deaths);
      recovered_cases.push(Recovered);
    }

    let confirmedStr = "Confirmed: ";
    confirmed_cases.forEach((element) => {
      confirmedStr += " => " + element;
    });
    let deathStr = "Death: ";
    death_cases.forEach((element) => {
      deathStr += " => " + element;
    });
    let recoveredStr = "Recovered: ";
    confirmed_cases.forEach((element) => {
      recoveredStr += " => " + element;
    });

    console.log(
      `Reported Covid-19 for ${COUNTRY.toUpperCase()} in the last ${LAST_DAYS} days`
    );
    console.log(confirmedStr);
    console.log(deathStr);
    console.log(recoveredStr);

    let str = `Reported Covid-19 for ${COUNTRY.toUpperCase()} in the last ${LAST_DAYS} days`;
    str += "<br>" + confirmedStr + "<br>" + deathStr + "<br>" + recoveredStr;
    document.getElementById("demo").innerHTML = str;
  });
