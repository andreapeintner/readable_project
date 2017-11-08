import { GET_CATEGORY } from '../actions/actionCreators'

function categories(state = [], action) {

    switch(action.type) {
        case GET_CATEGORY:
            return action.categories

        default:
            return state
    }
}

export default categories
