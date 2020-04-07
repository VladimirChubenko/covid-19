import {UPD_GLOBAL_DATA, UPD_ALL_COUNTRIES, FILTER_ALL_COUNTERIES} from '../actions/actionsType'

const initialState = {
  cases: '', 
  deaths: '', 
  recovered: '',
  countries: [],
  defaultCountries: []
}

export default function globalReducer(state = initialState, action) {
  switch(action.type) {
    case UPD_GLOBAL_DATA:
      return {
        ...state, 
        cases: action.payload.cases, 
        deaths: action.payload.deaths, 
        recovered: action.payload.recovered
      }
    case UPD_ALL_COUNTRIES:
      return {...state, countries: action.payload, defaultCountries: action.payload}
    case FILTER_ALL_COUNTERIES:
      return {...state, countries: action.payload}
    default:
      return state
  }
}