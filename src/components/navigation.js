import React from 'react'
import {NavLink} from 'react-router-dom'
import {ReactComponent as Global} from '../assets/World.svg'
import {ReactComponent as Country} from '../assets/nation.svg'
import {ReactComponent as Info} from '../assets/info.svg'

export const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink to="/" exact>
        <Global />
        Global
      </NavLink>
      <NavLink to="/countries">
        <Country />
        Countries
      </NavLink>
      <NavLink to="/about">
       <Info />
        About
      </NavLink>
    </div>
  )
}