import React, { Component } from 'react';
import "./Calender.css";
import "../default.css";
import Button from '../Button.js';

// calender component for booking system
export class Calender extends Component {
	render() {
		return (
			<div className="calender-background">
				<div className="calender-wrapper">
					<CalenderObj>
					</CalenderObj>
					<CalenderSidebar>
					</CalenderSidebar>
				</div>
			</div>
		)
	}
}

export default Calender

// central calender for showing booking dates / time
class CalenderObj extends Component {	
	render() {		
		return (
			<div className="calender-calender">
				<div className="calender-calender-title noselect">
					<div className="calender-arrow left"><a></a></div>
					<div>
						<h1>sample_location</h1>
						<h2>week_x</h2>
					</div>
					<div className="calender-arrow right"><a></a></div>
				</div>
				<CalenderDayTitle>
				</CalenderDayTitle>
				<CalenderCardContent>
				</CalenderCardContent>
			</div>
		)
	}
}

// calender days of week
class CalenderDayTitle extends Component {
	render() {
		// title card for the entire week
		const daysOfWeek = ['', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
		const dates = ['', '7/2', '8/2', '9/2', '10/2', '11/2', '12/2', '13/3'];
		const items = []
		for (const [index, value] of dates.entries()) {
			items.push(<CalenderCardTitle day={daysOfWeek[index]} date={value}></CalenderCardTitle>)
		}
		
		return (
			<div className="calender-item-wrapper">
			{items}
			</div>
		)
	}
}

class CalenderCardTitle extends Component {
	constructor(props) {
		super(props);
		this.day = props.day;
		this.date = props.date;
	}
	
	render() {
		return (
			<div className="calender-card-title noselect">
				<h1>{this.day}</h1>
				<h2>{this.date}</h2>
			</div>
		)
	}
}

// generates each row of calender
class CalenderCardContent extends Component {
	render() {
		// timeslots
		const timeSlots = [
		  { time: "10.00AM-11.00AM", mon: "booked", tues: "booked", wed: "empty", thurs: "empty", fri: "empty", sat: "empty", sun: "empty" },
		  { time: "11.00AM-12.00PM", mon: "booked", tues: "booked", wed: "empty", thurs: "empty", fri: "empty", sat: "empty", sun: "empty" },
		  { time: "12.00PM-1.00PM", mon: "booked", tues: "booked", wed: "empty", thurs: "empty", fri: "empty", sat: "empty", sun: "empty" },
		  { time: "1.00PM-2.00PM", mon: "booked", tues: "booked", wed: "empty", thurs: "empty", fri: "empty", sat: "empty", sun: "empty" },
		  { time: "2.00PM-3.00PM", mon: "booked", tues: "booked", wed: "empty", thurs: "empty", fri: "empty", sat: "empty", sun: "empty" },
		  { time: "3.00PM-4.00PM", mon: "booked", tues: "booked", wed: "empty", thurs: "empty", fri: "empty", sat: "empty", sun: "empty" }
		];
		const items = [];
		for (const [index, value] of timeSlots.entries()) {
			items.push(<CalenderCardItem data={value}></CalenderCardItem>);
		}
		
		return (
			<div className="calender-timesidebar">
				{items}
			</div>
		)
		
	}
}

class CalenderCardItem extends Component {
	constructor(props) {
		super(props);
		this.data = props.data;
	}
	
	render() {
		const items = []
		
		return(
			<div className="calender-card-row-wrapper noselect">
				<div className="calender-content-item empty noselect"><h1>{this.data['time']}</h1></div>
				<CalenderCardItemCell time={this.data['time']} data={this.data['sun']}></CalenderCardItemCell>
				<CalenderCardItemCell time={this.data['time']} data={this.data['mon']}></CalenderCardItemCell>
				<CalenderCardItemCell time={this.data['time']} data={this.data['tues']}></CalenderCardItemCell>
				<CalenderCardItemCell time={this.data['time']} data={this.data['wed']}></CalenderCardItemCell>
				<CalenderCardItemCell time={this.data['time']} data={this.data['thurs']}></CalenderCardItemCell>
				<CalenderCardItemCell time={this.data['time']} data={this.data['fri']}></CalenderCardItemCell>
				<CalenderCardItemCell time={this.data['time']} data={this.data['sat']}></CalenderCardItemCell>
			</div>
		)
	}	
}

class CalenderCardItemCell extends Component {
	constructor(props) {
		super(props);
		this.data = props.data;
		this.time = props.time;
		this.selected = -1;
	}
	
	render() {
		const item = [];
		if (this.data == "empty")
			return (<a className="calender-content-item empty noselect"><h1>{this.data}</h1></a>)
		else
			return (<a className="calender-content-item booked noselect"><h1>{this.data}</h1></a>)
	}
}

// menu sidebar for options
class CalenderSidebar extends Component {
	// pass in the data later on
	/*
	constructor(props) {
		super(props);
		this.data = props.data;
	}
	*/
	
	render() {
		const data = ['location_1', 'location_2', 'location_3'];
		
		return (
			<div className="calender-sidebar">
				<BookingLocations data={data}></BookingLocations>
			</div>
		)
	}
}

// gets the list of booking locations, expects a list of unique locations
class BookingLocations extends Component {
	constructor(props) {
		super(props);
		this.data = props.data;
	}
	
	render() {
		const items = []
		for (const [index, value] of this.data.entries()) {
			items.push(<option>{value}</option>)
		}
		
		return (
			<div className="calender-sidebar-wrapper">
				<div>
					<label for="bookLocation">Location:</label>
					<select id="bookLocation" className="calender-content-dropdown">
						{items}
					</select>
				</div>
				<div>
					<label for="bookerName">Book for:</label>
					<input className="calender-sidebar-input" type="text" id="bookerName" name="name" required
						   minlength="4" maxlength="64">
					</input>
				</div>
				<div>
					<h1>Comments</h1>
					<div className="calender-sidebar-comment">comment_text</div>
				</div>
			</div>
		)
	}
	
	
}
