import * as actiontype from '../actiontype';

/**
 * 行为+数据
 * @param {数据} text 
 */
export function addTodo(text) {
    return { type: actiontype.ADD_TODO, text }
}
export function toggleTodo(index) {
    return { type: actiontype.TOGGLE_TODO, index }
}
export function setVisibilityFilter(filter) {
    return { type: actiontype.SET_VISIBILITY_FILTER, filter }
}