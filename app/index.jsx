import {IndexRoute, Route, Router, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import {createStore} from 'redux'
import reducer from './reducer'

let store = createStore(reducer)

ReactDOM.render(<App store={store}/>
		, document.getElementById('app'));

