import React from 'react'

export const About = () => {
  return (
    <div className="About">
      <div className="wrapper">
        <h1>About this app</h1>
        <p>In this application, you can follow official statistics in the world and in individual countries.</p>
        <p>Each page of the country has a link to the ministry of health with official information from the government.</p>

        <p>Information from 
          <a href="https://www.worldometers.info/"
            target="_blank"
            rel="noopener noreferrer"
            > www.worldometers.info</a>
        </p>
        <p>Icons made by 
          <a href="https://www.flaticon.com/authors/freepik" 
            title="Freepik"
            target="_blank"
            rel="noopener noreferrer"
            > Freepik </a> 
          from  
          <a href="https://www.flaticon.com/" 
            title="Flaticon"
            target="_blank"
            rel="noopener noreferrer"
            > www.flaticon.com </a>
        </p>
      </div>
    </div>
  )
}