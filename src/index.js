import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const wrappEl = document.querySelector('.country-info');
inputEl.addEventListener('input', debounce(getInputValue, DEBOUNCE_DELAY));

function getInputValue(evt) {
  const searchData = evt.target.value;
  console.log(searchData);
}

// function createMarkup() {
//   const countriesList = ` <li><h2>Capital:</h2><p>${capital}</p></li>
//     <li><h2>Population:</h2><p>${population}</p></li>
//     <li><h2>Languages:</h2><p>${languages}</p></li>`;
//   const countriesInfo = `<img src="${flags.svg}" alt="${flags.alt}" /><h1>${name.official}</h1>`;
//   listEl.insertAdjacentHTML('beforeend', countriesList);
//   wrappEl.insertAdjacentHTML('beforeend', countriesInfo);
// }
