import {createStore} from 'redux';
import rootReducers from '../reducers/index';
export default function store(){
    const newStore=createStore(rootReducers,window.devToolsExtension ? window.devToolsExtension() : undefined);
    return newStore;
}