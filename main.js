const stateModule = StateModule();

stateElement = document.getElementById("states");

document.getElementById("search-state").addEventListener("click", function () {
  stateElement.innerHTML = "";
  let searchCriteria = document.getElementById("search").value;
  stateModule
    .getState(searchCriteria)
    .then((stateRes) =>
      stateRes.forEach(
        (state) => (stateElement.innerHTML += getStateHTML(state))
      )
    );
});

document.getElementById("add-state").addEventListener("click", function () {
  stateElement.innerHTML = "";
  stateModule
    .getStates()
    .then((stateRes) =>
      stateRes.forEach(
        (state) => (stateElement.innerHTML += getStateHTML(state))
      )
    );
});

function getStateHTML(state) {
  return `
  <div class='col-3 card p-4'>
      <h2>${state.name}</h2>
      <h5>${state.topLevelDomain}</h5>
      <h5>${state.capital}</h5>
      <span>${listcurrencies(state.currencies)} currency</span>
      <img class='img-fluid' src='${state.flag}'>
      <smal>Borders</smal>
      <h6>${state.borders}</h6>
  </div>
    `;
}

 

function listcurrencies(currencyList) {
  let currencies = currencyList.map((elem) => elem.code);
  return currencies;
}


