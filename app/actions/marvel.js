import MarvelService from "../services/Marvel";

const client = new MarvelService("characters");

export function getCharacters(name = "") {
    let search = "";
    if (name) {
        search = `${name}`;
    }

    return dispatch => {
        return client.getCharacters(search).then(
            response => {
                dispatch({ type: `GET_CHARACTERS_SUCCESS`, characters: response.data.data.results});
            }
        ).catch((error) => {
            dispatch({ type: `GET_CHARACTERS_FAIL`, characters: {fudge: "sfsf"}});
        })
    }

}

export function setSearchText(searchText = ""){
    return {
        type: "SET_SEARCH_TEXT",
        searchText:searchText,
    }
}