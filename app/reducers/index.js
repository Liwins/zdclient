import { combineReducers } from 'redux';
import * as actionType from '../actiontype';
// import { stat } from 'fs';
const initState = {
    visibilityFilter:"SHOW_ALL",
    todos: []
}
function todos(state = ["fas","fas"], action) {
    switch (action.type) {
        case actionType.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case actionType.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default:
            return state
    }
}

function visibilityFilter(state =["af","fas"], action) {
    switch (action.type) {
        case actionType.SET_VISIBILITY_FILTER:
            return action.filter
        default: return state;
    }
}

const rootReducer = combineReducers({
    visibilityFilter,todos});
export default rootReducer;