import React, { Component } from 'react';
import "./NavHeader.css";
import Button from '../Button.js';

// navigation bar header for displaying options specific to a page
export class NavHeader extends Component {
	
	render() {
		return (
			<div className="navheader">
				<h1 className="navheader-h1">Booking</h1>
				<div>
					<Button>Calender</Button>
					<Button>Map</Button>
				</div>
			</div>
		)
	}
}

export default NavHeader
