import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stroe/Store';
const pStore = store();
render(
    <Provider store={pStore}>
        <div>hello</div>
    </Provider>,
    document.getElementById('app')
)