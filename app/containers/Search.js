import { connect } from 'react-redux'
import Search from '../components/Search'
import { setSearchText, getCharacters } from "../actions/marvel";

const mapStateToProps = state => {
  return { 
    searchText: state.marvel.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchText: (searchText) => {
      dispatch(setSearchText(searchText))
    },

    getCharacters: (name) => {
        dispatch(getCharacters(name))
    },
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer