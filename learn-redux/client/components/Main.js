import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">PhotoShare</Link>
				</h1>
				 {/* This passes props down from Main to the first child*/}
				{ React.cloneElement(this.props.children, this.props)}
			</div>
			)
	}
})

export default Main
