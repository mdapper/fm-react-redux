import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Match } from 'react-router'

import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

import Landing from './Landing'
import Search from './Search'
import Details from './Details'

const App = () => (
  <Router>
    <div className='app'>
      <Match exactly pattern='/' component={Landing} />
      <Match
        pattern='/search'
        component={(props) => <Search shows={preload.shows} {...props} />}
      />
      <Match
        pattern='/details/:id'
        component={(props) => {
          const shows = preload.shows.filter(show => props.params.id === show.imdbID)
          return <Details show={shows[0]} {...props} />
        }}
      />
    </div>
  </Router>
)

render(<App />, document.getElementById('app'))
