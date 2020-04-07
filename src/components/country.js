import React from 'react'

export const Country = props => {

  const {country, cases, deaths, recovered} = props.data

  return (
    <div className={"Country " + country}>
      <div className="flag"></div>
      <div className="info">
        <h3>{country}</h3>
        <div className="stats">
          <p>C<span className="mob">ases</span>: <span className="num">{cases.toLocaleString()}</span></p>
          <p>D<span className="mob">eaths</span>: <span className="num">{deaths.toLocaleString()}</span></p>
          <p>R<span className="mob">ecovered</span>: <span className="num">{recovered.toLocaleString()}</span></p>
        </div>
      </div>
    </div>
  )
}