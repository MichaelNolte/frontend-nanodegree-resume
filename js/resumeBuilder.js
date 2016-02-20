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
			"location": "rüsselsheim, germany",
			"description": "Lorem Ipsum Lorem Dorem"
		},
		{
			"employer": "sodexo services gmbh",
			"title": "e-learning specialist",
			"dates": "june 2014-march 2016",
			"location": "rüsselsheim, germany",
			"description": "Lorem Ipsum Lorem Dorem"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "title1",
			"dates": "dates1",
			"description": "description1",
			"images": ["#", "#", "#"]
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
			"title": "1",
			"school": "1",
			"dates": "1",
			"url": "1"
		},
		{
			"title": "2",
			"school": "2",
			"dates": "2",
			"url": "2"
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


/*functions used to display page elements*/
function countProperties(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
}

function formatLine(htmlform, content) {
	return htmlform.replace("%data%", content);
}


function formatColumn(HTMLformatArray, HTMLlocationArray, elementArray, obj) {
	for(var variable in obj) { //go over every element of object

		$(HTMLlocationArray[0]).append(HTMLformatArray[0])
		console.log(variable)

		for(i=0;i<countProperties(elementArray); i++) { //go over every item in object element

			if(obj===work.jobs&&i===0 || obj===education.schools && i===0) {
				var store1 = formatLine(HTMLformatArray[i+1], obj[variable][elementArray[i]]);
				var store2 = formatLine(HTMLformatArray[i+2], obj[variable][elementArray[i+1]]);
				var store3 = store1 + store2
				$(HTMLlocationArray[1]).append(store3);
				i++
			}
			else {
				var storeHTMLformat;
				storeHTMLformat = formatLine(HTMLformatArray[i+1], obj[variable][elementArray[i]]);
				$(HTMLlocationArray[1]).append(storeHTMLformat);
			}
		}
	}
}


/*display workExperience*/
var workObj = work.jobs;
var workHTMLlocationArray = ["#workExperience", ".work-entry"];
var workHTMLformatArray = [HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
var workElementArray = ["employer", "title", "dates", "location", "description"];

formatColumn(workHTMLformatArray, workHTMLlocationArray, workElementArray, workObj);

/*display projects*/
var projectsObj = projects.projects;
var projectsHTMLlocationArray = ["#projects", ".project-entry:last"];
var projectsHTMLformatArray = [HTMLprojectStart, HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage];
var projectElementArray = ["title", "dates", "description", "image"];

formatColumn(projectsHTMLformatArray, projectsHTMLlocationArray, projectElementArray, projectsObj);

/*display education*/
/*schools*/
var schoolsObj = education.schools;
var schoolsHTMLlocationArray = ["#education", ".education-entry:last"];
var schoolsHTMLformat = [HTMLschoolStart, HTMLschoolName, HTMLschoolDegree, HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor];
var schoolsElements = ["name", "degree", "dates", "city", "major"];

formatColumn(schoolsHTMLformat, schoolsHTMLlocationArray, schoolsElements, schoolsObj);

/*online classes*/
$("#education").append(HTMLonlineClasses);

var onlineCoursesObj = education["online courses"];
var onlineCoursesHTMLlocationArray = ["#education", ".education-entry:last"];
var onlineCoursesHTMLformat = [HTMLschoolStart, HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL];
var onlineCoursesElements = ["title", "school", "dates", "url"];

formatColumn(onlineCoursesHTMLformat, onlineCoursesHTMLlocationArray, onlineCoursesElements, onlineCoursesObj);

/*gather click locations*/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});


/*gathers locations from work object*/
function locationizer(work_obj) {
    var locations = [];
    for(job in work_obj.jobs) {
    	var newLocation = work_obj.jobs[job].location;
        locations.push(newLocation);

    }
    return locations;
}

/*capitalize last name */
function inName(bio_obj) {
	var nameArray = bio_obj.name.split(' ');
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase()
	nameArray[1] = nameArray[1].toUpperCase();
	return nameArray[0] + " " + nameArray[1];
}

console.log(inName(bio));



$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
