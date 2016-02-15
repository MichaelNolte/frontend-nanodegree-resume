/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = [
	jobs: {
		"title": "training coordinator",
		"employer": "sodexo services gmbh",
		"dates": "march 2016-today",
		"city": "rüsselsheim"
	},
	jobs: {
		"title": "e-learning specialist",
		"employer": "sodexo services gmbh",
		"dates": "june 2014-march 2016",
		"city": "rüsselsheim"
	}
];

var projects = [
	"projects": {
		"title": "",
		"dates": "",
		"description": "",
		"images": []
	},
	{
		"title": "",
		"dates": "",
		"description": "",
		"images": []
	},
];

var education = [
	"schools": {
		"name": "philipps universität marburg",
		"city": "marburg, germany",
		"degree": "dipl.-pol.",
		"major": "political science",
		"dates": "2002-2008"
	},
	"name": "clark university",
		"city": "worcester, massachusetts",
		"degree": "abd",
		"major": "modern european history"
		"dates": "2009-today"
	}
	"online courses": {
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
	},
	{
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
	}
];


var bio = {
	"name": "michael nolte",
	"role": "udacity student",
	"skills": [
		"html", "css", "jacaScript", "jQuery", "bootstrap"],
	"contacts": {
		"mobile": "+49-178-5335968"
		"email": "michaelnolte0815@gmail.com",
		"github": "michaelnolte",
		"linkedin": "michael-nolte-870016b4",
		"location": "frankfurt, germany"

	},
	"pictureURL": "images/fry.jpg",
	"welcome message": "hello. i am michael, and i take courses at udacity."
};

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

