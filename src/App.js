import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import dashboard from './Pages/dashboard'
import home from './Pages/home'
import peliculas from './Pages/peliculas'
import series from './Pages/series'

import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact
            path="/"
            component={home} />
          <Route exact
            path="/dashboard"
            component={dashboard} /> 
          <Route exact
            path="/dashboard/pelis" 
            component={peliculas} />
          <Route exact
            path="/dashboard/series"
            component={series} />
        </Switch> 
      </Router> 
    </div>
  )
}

export default App

