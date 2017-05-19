import React, {Component} from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

const { arrayOf, shape, string } = React.PropTypes

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    return (
      <div className='search'>
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(show => {
              return `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map(show => {
              return <ShowCard key={show.imdbID} {...show} />
            })}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: arrayOf(shape({
    title: string,
    description: string
  }))
}

export default Search
