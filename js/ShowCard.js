import React from 'react'
import { Link } from 'react-router'

const ShowCard = props => {
  const { poster, title, year, description, imdbID } = props

  return (
    <Link to={`/details/${imdbID}`}>
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

const { string } = React.PropTypes
ShowCard.propTypes = {
  poster: string,
  title: string,
  year: string,
  description: string,
  imdbID: string
}

export default ShowCard
