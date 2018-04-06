import { connect } from 'react-redux'
import Home from '../components/Home'
import { getCharacters } from "../actions/marvel";

const mapStateToProps = state => {
  return { 
    characters: state.marvel.characters,
    searchText: state.marvel.searchText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: (name) => {
      dispatch(getCharacters(name))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer