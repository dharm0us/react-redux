import React, {Component} from 'react'
import { incrementCount } from '../actions'
import  CountWidget  from '../components/CountWidget.jsx'

export default class CountWidgetContainer extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				count: props.store.getState() 
			}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		this.props.store.subscribe(this.handleChange)
	}

	handleChange() {
		this.setState({
			count: this.props.store.getState()
		})
	}

	handleClick() {
		/*this.setState({
			count: this.state.count + 1
		})*/
		let action = incrementCount()
		this.props.store.dispatch(incrementCount())
		//console.log(action)
	}

	render() {
		return <CountWidget count={this.state.count} handleClick={this.handleClick} />
	}

	
}
