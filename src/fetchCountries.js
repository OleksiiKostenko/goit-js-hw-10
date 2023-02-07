const listEl = document.querySelector('.country-list');
const wrappEl = document.querySelector('.country-info');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const ENDPOINT = 'https://restcountries.com/v3.1/name/';

function fetchCountries(searchData) {
  fetch(`${ENDPOINT}/${searchData}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(countries => {
      clearEl();
      console.log(countries);
      if (countries.length > 10) {
        return Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length >= 2 && countries.length <= 10) {
        return countries.map(createMarkupNameAndFlag);
      } else if (countries.length === 1) {
        return (
          createMarkupCountrysInfo(countries) +
          countries.map(createMarkupNameAndFlag)
        );
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      clearEl();
    });
}

function createMarkupNameAndFlag(country) {
  const { name, flags } = country;
  const countriesInfo = `<img src="${flags.svg}"   width="200"
     height="100" alt="${flags.alt}" /><h1>${name.official}</h1>`;
  return wrappEl.insertAdjacentHTML('beforeend', countriesInfo);
}
function createMarkupCountrysInfo(countries) {
  return countries.map(country => {
    const { capital, population, languages } = country;
    const countriesList = ` <li class="country-list-item"><h2>Capital:</h2><p>${capital}</p></li>
        <li class="country-list-item"><h2>Population:</h2><p>${population}</p></li>
        <li class="country-list-item"><h2>Languages:</h2><p>${Object.values(
          languages
        )}</p></li>`;
    return listEl.insertAdjacentHTML('beforeend', countriesList);
  });
}
function clearEl() {
  wrappEl.innerHTML = '';
  listEl.innerHTML = '';
}
export { fetchCountries, clearEl };
