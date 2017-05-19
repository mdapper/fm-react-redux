import React from 'react'
import { Link } from 'react-router'

const Landing = () => (
  <div className='landing'>
    <h1>svideo</h1>
    <input type='text' placeholder='Search' />
    <Link to='/search'>or Browe All</Link>
  </div>
)

export default Landing
