/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "michael nolte",
	"role": "udacity student",
	"skills": [
		"html", "css", "javaScript", "jQuery", "bootstrap"],
	"contacts": {
		"mobile": "+49-178-5335968",
		"email": "michaelnolte0815@gmail.com",
		"github": "michaelnolte",
		"linkedin": "michael-nolte-870016b4",
		"location": "frankfurt, germany"

	},
	"pictureURL": "images/fry.jpg",
	"welcome message": "hello. i am michael, and i take courses at udacity."
};

var work = {
	"jobs": [
		{
			"employer": "sodexo services gmbh",
			"title": "training coordinator",
			"dates": "march 2016-today",
			"location": "rüsselsheim",
			"description": "Lorem Ipsum Lorem Dorem"
		},
		{
			"employer": "sodexo services gmbh",
			"title": "e-learning specialist",
			"dates": "june 2014-march 2016",
			"location": "rüsselsheim",
			"description": "Lorem Ipsum Lorem Dorem"
		}
	]
};

var projects = {
	"projects": [
		{
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
		}
	]
};

var education = {
	"schools": [
		{
			"name": "philipps universität marburg",
			"city": "marburg, germany",
			"degree": "dipl.-pol.",
			"major": "political science",
			"dates": "2002-2008"
		},
		{
			"name": "clark university",
			"city": "worcester, massachusetts",
			"degree": "abd",
			"major": "modern european history",
			"dates": "2009-today"
		}
	],
	"online courses": [
		{
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
	]
};






/*header*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedContact = HTMLcontactGeneric.replace("%date%", bio.contact);


$("#header").append(HTMLskillsStart);
if(bio.skills.length > 0) {
	for(i = 0; i < bio.skills.length; i++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	};
};


/*work*/

for(job in work.jobs) {

	if(work.jobs.hasOwnProperty(job)) {

		$("#workExperience").append(HTMLworkStart);

		/*employer title and job title*/
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		/*work dates*/
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		/*work location*/
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		/*work experience*/
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};


