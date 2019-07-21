import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Retro from './components/Retro'
import rootReducer from './reducers'
import './index.css';
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Retro />
    </Provider>,
    document.getElementById('root')
)