import React from 'react'
import './App.scss'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Header} from './components/header'
import {Navigation} from './components/navigation' 
import Global from './containers/global'
import Countries from './containers/countries'
import {About} from './components/about' 
import {Info} from './components/info' 

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Global} exact/>
          <Route path="/countries" component={Countries} />
          <Route path="/about" component={About} />
          {props.countries.map(country => (
            <Route 
              key={country.country}
              path={'/'+country.country}
            >
              <Info stat={country}/>
            </Route>
          ))}
        </Switch>
        <Navigation />
      </BrowserRouter>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    countries: state.global.countries
  }
}

export default connect(mapStateToProps)(App);
