import { SET_FILTER } from '../actions/actionTypes'

const filter = (state = 'all', action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
}
export default filter