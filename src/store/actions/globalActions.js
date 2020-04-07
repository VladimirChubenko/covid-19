import axios from '../../axios/axios'
import {UPD_GLOBAL_DATA, UPD_ALL_COUNTRIES, FILTER_ALL_COUNTERIES} from '../actions/actionsType'

export function fetchGlobalData() {
  return async dispatch => {
    const response = await axios.get("/all")

    dispatch(updateGlobalData(response.data))
  }
}

export function fetchAllCountries() {
  return async dispatch => {
    const response = await axios.get("/countries")

    dispatch(updateAllCountries(response.data))   
  }
}

export function serchCountries(array, search) {
  return dispatch => {
    dispatch(filterAllCountries(filteredCountries(array, search)))
  }
}

function filteredCountries(array, search) {   
  return array.filter(function(country) {
    return Object.keys(country).some(function(key) {
      return country[key].toString().toLowerCase().includes(search)
    })
  })
}

function filterAllCountries(newCountries) {
  return {
    type: FILTER_ALL_COUNTERIES,
    payload: newCountries
  }
}

function updateGlobalData(data) {
  return {
    type: UPD_GLOBAL_DATA,
    payload: data
  }
}

function updateAllCountries(countries) {
  return {
    type: UPD_ALL_COUNTRIES,
    payload: countries
  }
}