function StateModule() {
  const SERVER_URL = "https://restcountries.eu/rest/v2/all";
  const SERVER_URL_STATE = "https://restcountries.eu/rest/v2/name/";

  function Country(name, topLevelDomain, capital, currencies, flag, borders) {
    this.named = name;
    this.topLevelDomain = topLevelDomain;
    this.capital = capital;
    this.currencies = currencies;
    this.flag = flag;
    this.borders = borders;
  }

  function getState(state) {
    return fetch(`${SERVER_URL_STATE}${state}`).then((res) => res.json());
  }

  function getStates() {
    return fetch(SERVER_URL).then((res) => res.json());
  }

  return {
    Country: Country,
    getState: getState,
    getStates: getStates,
  };
}
