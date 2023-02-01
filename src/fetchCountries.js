const listEl = document.querySelector('.country-list');
const wrappEl = document.querySelector('.country-info');

// fetchCountries(name);

const url = fetch('https://restcountries.com/v3.1/name/peru')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(countrys => {
    console.log(countrys[0]);
    const country = countrys[0];
    const countriesInfo = `<img src="${country.flags.svg}"   width="100"
     height="50" alt="${country.flags.alt}" /><h1>${country.name.official}</h1>`;
    const countriesList = ` <li><h2>Capital:</h2><p>${country.capital}</p></li>
        <li><h2>Population:</h2><p>${country.population}</p></li>
        <li><h2>Languages:</h2><p>${Object.values(country.languages)}</p></li>`;
    wrappEl.insertAdjacentHTML('beforeend', countriesInfo);
    listEl.insertAdjacentHTML('beforeend', countriesList);
  })
  .catch(error => {
    console.log(error);
  });

export { fetchCountries };
