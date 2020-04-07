import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchGlobalData} from '../store/actions/globalActions'

const Global = props => {

  const {updData, cases, deaths, recovered} = props

  useEffect(() => {
    updData()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="Global">
      <div className="stats">
        <h4>Total Cases:</h4> 
        <p>{cases.toLocaleString()}</p>
        <h4>Total Deaths:</h4>
        <p>{deaths.toLocaleString()}</p>
        <h4>Total Recovered:</h4>
        <p>{recovered.toLocaleString()}</p>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cases: state.global.cases,
    deaths: state.global.deaths,
    recovered: state.global.recovered
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updData: () => dispatch(fetchGlobalData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Global)
