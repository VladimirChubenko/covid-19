import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Country} from '../components/country'
import {serchCountries} from '../store/actions/globalActions'
import {Link} from 'react-router-dom'
import {fetchAllCountries} from '../store/actions/globalActions'

const Countries = props => {

  const {allCountries, countries, serchCountries, defaultCountries} = props
  
  useEffect(() => {
    allCountries()
    // eslint-disable-next-line 
  }, [])
  
  const [list, setList] = useState(countries)
  
  return (
    <div className="Countries">
      <input
        className="Search"
        type="text"
        placeholder="Search"
        onFocus={() => setList(defaultCountries)}
        onChange={event => {serchCountries(list, event.target.value.toLowerCase())}  
      }
      />
      {countries.map(country =>(
        <Link
        to={country.country}
        key={country.country}
        >
          <Country data={country} />
        </Link>
      ))} 
    </div>
  )
}

function mapStateToProps(state) {
  return {
    countries: state.global.countries,
    defaultCountries: state.global.defaultCountries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    serchCountries: (array, search) => dispatch(serchCountries(array, search)),
    allCountries: () => dispatch(fetchAllCountries())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)