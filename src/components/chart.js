import React from 'react'
import {Doughnut} from 'react-chartjs-2'

export const Chart = props => {

const {active, deaths, recovered} = props

  const data = {
    datasets: [{
      data: [active, deaths, recovered],
      backgroundColor: ['#c495fd', '#fc8181', '#02dac5'],
      borderWidth: '55px',
      borderColor: '#000',
    }],
    labels: ['Active cases', 'Deaths', 'Recovered'],
  }

  const options = {
    legend: {
      display: true,
      labels: {
        ontColor: '#eee'
      },
      position: 'left'
    },
    cutoutPercentage: 60,
    borderColor: '#fff'
  }

  return (
    <div className="Chart">
      <Doughnut
        data = {data}
        options = {options}
      />
    </div>
  )
}