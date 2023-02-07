import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries, clearEl } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(getInputValue, DEBOUNCE_DELAY));

function getInputValue(evt) {
  const searchData = evt.target.value.trim();
  if (!searchData) {
    clearEl();
    return;
  }
  fetchCountries(searchData);
}
