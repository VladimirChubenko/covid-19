import React from 'react'
import {Informations} from '../store/info'
import {Chart} from '../components/chart'
import {ReactComponent as Angle} from '../assets/angle.svg'

 export const Info = props => {
   
   const {country, cases, deaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion, totalTests} = props.stat

  return (
    <div className="Info">
      <div className={"header " + country}>
        <div className="flag"></div>
        <h1>{country}</h1>
      </div>

      <div className="contact">
        <p>Official information from the government</p>
        <a 
          href={Informations[country] || Informations.WHO}
          target="_blank"
          rel="noopener noreferrer"
        >INFO</a>
      </div>

      <h2>TOTAL CASES IN {country.toUpperCase()}: &nbsp;
        <span>{cases.toLocaleString()}</span>
      </h2>

      <Chart active={active} deaths={deaths} recovered={recovered} />

      <div className="stats">
        <h4 style={{color: '#c495fd'}}>
          <span>Active casses: </span>
          {active.toLocaleString()}
        </h4>
        <h4 style={{color: '#fc8181'}}>
          <span>Deaths: </span>
          {deaths.toLocaleString()}
        </h4>
        <h4 style={{color: '#02dac5'}}>
          <span>Recovered: </span>
          {recovered.toLocaleString()}
        </h4>

        <hr/>

        <h4>
          <span>Critical: </span>
          {critical.toLocaleString()}
        </h4>
        {totalTests 
          ? <h4>
              <span>Total tests performed: </span>
              {totalTests.toLocaleString()}
            </h4>
          : null
        }
        
        <h4>
          <span>Cases per one million: </span>
          {casesPerOneMillion.toLocaleString()}
        </h4>
        <h4>
          <span>Deaths per one million: </span>
          {deathsPerOneMillion.toLocaleString()}
        </h4>
      </div>

      <a 
        className="Back"
        href="/countries"
      >
        <Angle />
      </a>
    </div>
  )
 }