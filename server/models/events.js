let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let EventSchema = new mongoose.Schema ({
	events: {type: String, required: [true, "Name of event required"]},
	location: {type: String, required: [true, "Location is required"]},
	city: {type: String},
	state: {type: String, length: [2, "State should only have two letters"]},
	zipcode: {
		type: Number, required: [true, "Zipcode is required"],
		length: [5, "Zipcode allowed 5 numbers"]
	},
	date: {type: Date, required: [true, "Date is required"]},
	time: {type: String, required: [true, "Time is required"]},

}, {timestamps: true})


mongoose.model("Event", EventSchema);

let event = mongoose.model("Event");