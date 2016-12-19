
import React, {Component} from 'react'
import { incrementCount } from '../actions'
import  CountWidgetContainer  from '../containers/CountWidget.jsx'

export default class App extends React.Component {
	render() {
		return(
				<div>
				<CountWidgetContainer store={this.props.store}/>
				</div>
		      )
	}
}
