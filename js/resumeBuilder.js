/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "michael nolte",
	"role": "web developer",
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
	"welcome message": "hello, i am michael. i learn coding. that is why i take classes at udacity. but i am not only a web developer. i am also a training specialist and an academic. you can see my resumees by clicking on the buttons in the navigation bar above."
};

/*alternative roles for other cv profiles*/
var webRole = bio.role;
var corpRole = "training specialist";
var academicRole = "historian";

/*alternative welcome messages for other cv profiles*/

var webWelcome = bio["welcome message"];
var corpWelcome = "i work at the intersection of internal communication and hr. i develop e-learnings and adapt international trainings to the requirements of the d|a|ch region. i am also in charge of administrating the hr section of our intranet, organizing events, and supporting hr projects.";
var academicWelcome = "i pursue my ph.d. in modern european history at clark university. i successfully passed my comps and reached the abd phase. my dissertation is about the hadamar asylum and killing center during national socialism.";




var work = {
	"jobs": [
		{
			"employer": "sodexo services gmbh",
			"title": "training coordinator",
			"dates": "march 2016-today",
			"location": "rüsselsheim, germany",
			"description": "developed e-learning content, administrated the company's intranet, organised trainings, adapted international trainings to german requirements"
		},
		{
			"employer": "sodexo services gmbh",
			"title": "e-learning specialist",
			"dates": "june 2014-march 2016",
			"location": "rüsselsheim, germany",
			"description": "developed e-learning content, administrated sodexo’s learning management system, supported hr projects"
		},
		{
			"employer": "abc-clio",
			"title": "independent contractor",
			"dates": "june 2014-march 2016",
			"location": "santa barbara, california",
			"description": "contributing writer for the database modern genocide understanding causes and consequences"
		},
		{
			"employer": "fu berlin, center für digitale systeme (cedis)",
			"title": "freelance collaborator",
			"dates": "june 2012",
			"location": "berlin, germany",
			"description": "indexed concentration camps for the online portal “zeugen der shoah” (“witnesses to the shoah”)"
		},
		{
			"employer": "clark university",
			"title": "seminar instructor",
			"dates": "september 2011-june 2013",
			"location": "worcester, massachusetts",
			"description": "prepared and gave seminars, graded students"
		},
		{
			"employer": "mkn finanzdienstleistungen",
			"title": "office assistant",
			"dates": "october 2008-august 2010",
			"location": "marburg, germany",
			"description": "customer care, preparation of client seminars, office administration"
		},
		{
			"employer": "yad vashem, givatayim branch",
			"title": "research assistant",
			"dates": "june 2006-january 2007",
			"location": "givatayim, israel",
			"description": "instructed interns and volunteers, contributed to articles in german and english language, conducted archival research, held oral history interviews"
		},
		{
			"employer": "studienkreis deutscher widerstand",
			"title": "intern",
			"dates": "october 2001-march 2002",
			"location": "frankfurt, germany",
			"description": "prepared and published the book:<br>gertrud müller: die erste hälfte meines lebens. erinnerungen 1915-1950. nach gesprächen aufgezeichnet von michael nolte und ursula krause-schmitt. herausgegeben von der lagergemeinschaft ravensbrück/ freundeskreis e.v."
		}
	]
};

var teaching = {
	"courses": [
		{
			"title": "europe in the age of extremes",
			"professor": "prof. thomas kühne",
			"department": "department of history, clark university",
			"date": "spring semester 2013"
		},
		{
			"title": "european mind: history and theory",
			"professor": "prof. olga litvak",
			"department": "department of history, clark university",
			"date": "fall 2012"
		},
		{
			"title": "writing history",
			"professor": "prof. nina kushner",
			"department": "department of history, clark university",
			"date": "spring 2012"
		},
		{
			"title": "german film and frankfurt school",
			"professor": "prof. robert tobin",
			"department": "department of foreign languages and literatures, clark university",
			"date": "spring 2012"
		},
		{
			"title": "introduction to history of genocide",
			"professor": "prof. taner akçam",
			"department": "department of history, clark university",
			"date": "fall 2011"
		},
		{
			"title": "holocaust: agency and action",
			"professor": "prof. debórah dwork",
			"department": "department of history, clark university",
			"date": "fall 2010"
		}
	]
};

var publicTalks = {
	"publicTalks": [
		{
			"title": "magicians, crooks, and lunatics: images of jews in german expressionist film",
			"data": "the association for the study of nationalities, 2015 world convention, columbia university, new york city",
			"date": "april 2015"
		},
		{
			"title": "jewish lunatics in nazi germany: female patients at hadamar 1933-1939",
			"data": "invited guest lecture, corcoran department of history, university of virginia",
			"date": "april 2015"
		},
		{
			"title": "magicians, crooks, and lunatics: images of jews in german expressionist film (paper presented by co-author)",
			"data": "association for jewish studies 46th annual conference, hilton baltimore",
			"date": "december 2014"
		},
		{
			"title": "remembering nazism in germany and france (panel discussion)",
			"data": "invited talk, institut culturel franco-allemand, universität tübingen",
			"date": "may 2014"
		},
		{
			"title": "the nazi system of mass murder: from euthanasia to the holocaust",
			"data": "invited guest lecture, worcester state university",
			"date": "february 2013"
		},
		{
			"title": "encounters of victims and perpetrators of genocide (panel chair)",
			"data": "second international graduate students’ conference for holocaust and genocide studies, clark university",
			"date": "march 2012"
		},
		{
			"title": "gertrud müller: die erste hälfte meines lebens. erinnerungen 1915-1950 (book presentation).",
			"data": "annual conference of the german ravensbrück committee, fürstenberg",
			"date": "september 2005"
		}
	]
};


var publications = {
	"books": [
		{
			"title": "gertrud müller: die erste hälfte meines lebens. erinnerungen 1915 – 1950. nach gesprächen aufgezeichnet von michael nolte und ursula krause-schmitt",
			"data": "renchen: druckwerkstatt renchen, 2004"
		}
	],
	"articlesEssaysOthers": [
		{
			"title": "verbrechen auch über das ende des krieges hinaus. das „euthanasieprogramm“ in der endphase des nationalsozialismus",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 80 (2014)"
		},
		{
			"title": "nosferatu (f.w. murnau, 1922)",
			"data": "german cinema: a critical filmography to 1945, ed. todd herzog (montréal: caboose, forthcoming)"
		},
		{
			"title": "waxworks (paul leni, 1924) (together with thomas nolte)",
			"data": "german cinema: a critical filmography to 1945, ed. todd herzog (montréal: caboose, forthcoming)"
		},
		{
			"title": "hitler and the holocaust: the role of the german people",
			"data": "modern genocide: understanding causes and consequences. abc-clio, 2013"
		},
		{
			"title": "bureaucracy",
			"data": "modern genocide: understanding causes and consequences. abc-clio, 2013"
		},
		{
			"title": "compensation",
			"data": "modern genocide: understanding causes and consequences. abc-clio, 2013"
		},
		{
			"title": "theodor körner im kz: wie die mahn- und gedenkstätten wöbbelin den nationalsozialismus relativieren",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 61 (2005)"
		},
		{
			"title": "siegen für den frieden (together with saskia wenger",
			"data": "konkret 10/2004"
		},
		{
			"title": "ig farben aufgelöst (together with saskia wenger",
			"data": "ravensbrückblätter 118 (march 2004)"
		}
	],
	"bookReviews": [
		{
			"title": "barbara stelzl-marx, das lager graz-liebenau in der ns zeit (graz: leykam, 2012)",
			"data": "global war studies (forthcoming))"
		},
		{
			"title": "anthony julius, trials of the diaspora: a history of antisemitism in england (oxford university press, 2010)",
			"data": "human rights review 16 (4)"
		},
		{
			"title": "daniel blatman, the death marches (cambridge, ma: harvard university press, 2011)",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 75 (2012)"
		},
		{
			"title": "thomas faltin, im angesicht des todes: das kz-außenlager echterdingen 1944/45 (landeszentrale für politische bildung baden-württemberg: filderstadt; leinfelden-echterdingen, 2009)",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 71 (2010)"
		},
		{
			"title": "peter gingold, paris – boulevard st. martin no. 11: ein jüdischer antifaschist und kommunist in résistance und bundesrepublik, ed. ulrich schneider (köln: papyrossa, 2009)",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 70 (2009)"
		}
	],
	"interviews": [
		{
			"title": "‘auf dem schnellsten weg nach deutschland’ (teil 2). peter gingold im gespräch mit saskia wenger und michael nolte (together with saskia wenger)",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 63 (2006)"
		},
		{
			"title": "‘auf dem schnellsten weg nach deutschland’ (teil 1). peter gingold im gespräch mit saskia wenger und michael nolte (together with saskia wenger)",
			"data": "informationen. wissenschaftliche zeitschrift des studienkreises deutscher widerstand 1933-1945 62 (2005)"
		},
	],
	"blogEntries": [
		{
			"title": "the conduct of jazz",
			"data": "jazzaddikt.tumblr.com, december 2015",
			"url": "jazzaddikt.tumblr.com/post/134822662614/the-conduct-of-jazz-a-review-by-michael-nolte"
		},
		{
			"title": "the beauty of breaking stuff",
			"data": "flowersinagun.com, 2 may 2015",
			"url": "www.flowersinagun.com/the-beauty-of-breaking-stuff/"
		},
		{
			"title": "neneh cherry @ palmengarten frankfurt",
			"data": "flowersinagun.com, 11 august 2014",
			"url": "www.flowersinagun.com/neneh-cherry-palmengarten-frankfurt/"
		},
		{
			"title": "phantogram @ zoom club",
			"data": "flowersinagun.com, 19 july 2014",
			"url": "http://www.flowersinagun.com/phantogram/"
		},
		{
			"title": "lana del rey @ zitadelle spandau",
			"data": "flowersinagun.com, 28 june 2014",
			"url": "http://www.flowersinagun.com/lana-del-rey-zitadelle-spandau-berlin/"
		}
	]
};


var projects = {
	"projects": [
		{
			"title": "portfolio page",
			"dates": "december 2015-january 2016",
			"description": "a page to showcase my work",
			"images": ["#", "#", "#"]
		},
		{
			"title": "interactive resumee",
			"dates": "february 2016",
			"description": "an interactive resume page",
			"images": ["#", "#", "#"]
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
			"degree": "phd (entered abd phase)",
			"major": "modern european history",
			"dates": "2009-today"
		}
	],
	"online courses": [
		{
			"title": "javascript basics",
			"school": "udacity",
			"dates": "february 2016",
			"url": "https://www.udacity.com/courses/ud804"
		},
		{
			"title": "responsive images",
			"school": "udacity",
			"dates": "october 2015",
			"url": "https://www.udacity.com/courses/ud882"
		},
		{
			"title": "responsive web design fundamentals",
			"school": "udacity",
			"dates": "october 2015",
			"url": "https://www.udacity.com/courses/ud893"
		},
		{
			"title": "intro to html and css",
			"school": "udacity",
			"dates": "september 2015",
			"url": "https://www.udacity.com/courses/ud304"
		},
		{
			"title": "the abcs of instructional design",
			"school": "udemy",
			"dates": "august 2015",
			"url": "https://ude.my/UC-EHAVXK9B"
		},
		{
			"title": "introduction to java programming - part 1",
			"school": "edx",
			"dates": "january 2016",
			"url": "https://verify.edx.org/cert/d2b7ed1728294fde9af522e4ca6a1a58"
		},
		{
			"title": "introduction to programming with java part 1: starting to program in java",
			"school": "edx",
			"dates": "july 2015",
			"url": "https://verify.edx.org/cert/0550f9092a8248d9905c04ee748658bd"
		},
		{
			"title": "computer science 101",
			"school": "stanford online",
			"dates": "may 2015",
			"url": "https://verify.lagunita.stanford.edu/SOA/a25d73f06d544ce9a1b83c646fe9e19a"
		},
		{
			"title": "behavioral economics in action",
			"school": "edx",
			"dates": "december 2013",
			"url": "https://verify.edx.org/cert/94f4d7d50eb24f2682ed5b0971300c3f"
		},
		{
			"title": "understanding media by understanding google",
			"school": "coursera",
			"dates": "november 2013",
			"url": "https://www.coursera.org/course/googlemedia"
		},
		{
			"title": "intro to descriptive statistics",
			"school": "udacity",
			"dates": "august 2013",
			"url": "https://www.udacity.com/courses/ud827"
		}
	]
};


/*set display variables*/


var web = document.getElementById('web');
var corp = document.getElementById('corp');
var academic = document.getElementById('academic');

var cvType = "web";

web.onclick = function() {
	cvType = "web";
};

corp.onclick = function() {
	cvType = "corp";
};

academic.onclick = function() {
	cvType = "academic";
};

/*toggle buttons*/
exp.onclick = function() {
	$(".hiddenExperienceContent").toggle();
};

teach.onclick = function() {
	$(".hiddenTeachingContent").toggle();
};

pubTa.onclick = function() {
	$(".hiddenPtalksContent").toggle();
};

publ.onclick = function() {
	$(".hiddenPublicationsContent").toggle();
};

felAaw.onclick = function() {
	$(".hiddenFellowshipsContent").toggle();
};

proj.onclick = function() {
	$(".hiddenProjectsContent").toggle();
};

edu.onclick = function() {
	$(".hiddenEducationContent").toggle();
};

onlClass.onclick = function() {
	$(".hiddenClassesContent").toggle();
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
	var j = 0;
	for(var variable in obj) { //go over every element of object

		$(HTMLlocationArray[0]).append(HTMLformatArray[0])

		for(i=0;i<countProperties(elementArray); i++) { //go over every item in object element

			if(obj===publicTalks.publicTalks&&i===1 || obj===teaching.courses&&i===0 || obj===teaching.courses&&i===2 || obj===work.jobs&&i===0 || obj===education.schools && i===0 || obj === education["online courses"] && i === 0) {
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

/*display header ---> put code in function*/
$("#header").append(formatLine(HTMLheaderName, bio.name));
$("#header").append(formatLine(HTMLheaderRole, bio.role));


var contactsHTMLformatsArray = [HTMLmobile, HTMLemail, HTMLgithub, HTMLlinkedin, HTMLlocation]

var i = 0;
$("#header").append(HTMLcontactStart);
	for(var contact in bio.contacts){
	$("#contacts").append(formatLine(contactsHTMLformatsArray[i], bio.contacts[contact]));
	i++
}

$("#header").append(formatLine(HTMLbioPic, bio.pictureURL));
$("#header").append(formatLine(HTMLwelcomeMsg, bio["welcome message"]));
$("#header").append(HTMLskillsStart);

if(bio.skills.length > 0) {
	for(i = 0; i < bio.skills.length; i++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	};
};


/*display workExperience*/
var workObj = work.jobs;
var workHTMLlocationArray = [".hiddenExperienceContent", ".work-entry:last"];
var workHTMLformatArray = [HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
var workElementArray = ["employer", "title", "dates", "location", "description"];

formatColumn(workHTMLformatArray, workHTMLlocationArray, workElementArray, workObj);

/*display teaching*/


var teachingObj = teaching.courses;
var teachingHTMLlocationArray = [".hiddenTeachingContent", ".teaching-entry:last"];
var teachingHTMLformatArray = [HTMLteachingStart, HTMLteachingTitle, HTMLteachingProfessor, HTMLteachingDepartment, HTMLteachingDate];
var teachingElementArray = ["title", "professor", "department", "date"];

formatColumn(teachingHTMLformatArray, teachingHTMLlocationArray, teachingElementArray, teachingObj);


/*display public talks*/

var pTalksObj = publicTalks.publicTalks;
var pTalksHTMLlocationArray = [".hiddenPtalksContent", ".ptalks-entry:last"];
var pTalksHTMLformatArray = [HTMLpTalksStart, HTMLpTalksTitle, HTMLpTalksData, HTMLpTalksDate];
var pTalksElementArray = ["title", "data", "date"];

formatColumn(pTalksHTMLformatArray, pTalksHTMLlocationArray, pTalksElementArray, pTalksObj);

/*display publications*/
/*books*/
$(".hiddenPublicationsContent").append(HTMLpublicationsBooks);
var booksObj = publications.books;
var booksHTMLlocationArray = [".hiddenPublicationsContent", ".books-entry:last"];
var booksHTMLformatArray = [HTMLbooksStart, HTMLpublicationsTitle, HTMLpublicationsData];
var booksElementArray = ["title", "data"];

formatColumn(booksHTMLformatArray, booksHTMLlocationArray, booksElementArray, booksObj);

/*articles, essays, other contributions*/
$(".hiddenPublicationsContent").append(HTMLpublicationsArtEssOth);
var artEssOthObj = publications.articlesEssaysOthers;
var artEssOthHTMLlocationArray = [".hiddenPublicationsContent", ".artEssOth-entry:last"];
var artEssOthHTMLformatArray = [HTMLartEssOthStart, HTMLpublicationsTitle, HTMLpublicationsData];
var artEssOthElementArray = ["title", "data"];

formatColumn(artEssOthHTMLformatArray, artEssOthHTMLlocationArray, artEssOthElementArray, artEssOthObj);

/*bookReviews*/
$(".hiddenPublicationsContent").append(HTMLpublicationsReviews);
var reviewsObj = publications.bookReviews;
var reviewsHTMLlocationArray = [".hiddenPublicationsContent", ".review-entry:last"];
var reviewsHTMLformatArray = [HTMLreviewsStart, HTMLpublicationsTitle, HTMLpublicationsData];
var reviewsElementArray = ["title", "data"];

formatColumn(reviewsHTMLformatArray, reviewsHTMLlocationArray, reviewsElementArray, reviewsObj);

/*interviews*/
$(".hiddenPublicationsContent").append(HTMLpublicationsInterviews);
var interviewsObj = publications.interviews;
var interviewsHTMLlocationArray = [".hiddenPublicationsContent", ".interview-entry:last"];
var interviewsHTMLformatArray = [HTMLinterviewsStart, HTMLpublicationsTitle, HTMLpublicationsData];
var interviewsElementArray = ["title", "data"];

formatColumn(interviewsHTMLformatArray, interviewsHTMLlocationArray, interviewsElementArray, interviewsObj);

/*blog entries*/
/* $("#publications").append(HTMLpublicationsBlogs);
var blogsObj = publications.blogEntries;
var blogsHTMLlocationArray = ["#publications", ".blog-entry:last"];
var blogsHTMLformatArray = [HTMLblogsStart, HTMLpublicationsTitle, HTMLpublicationsData, HTMLpublicationsURL];
var blogsElementArray = ["title", "data", "url"];

formatColumn(blogsHTMLformatArray, blogsHTMLlocationArray, blogsElementArray, blogsObj); */

/*display projects*/
var projectsObj = projects.projects;
var projectsHTMLlocationArray = [".hiddenProjectsContent", ".project-entry:last"];
var projectsHTMLformatArray = [HTMLprojectStart, HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage];
var projectElementArray = ["title", "dates", "description", "image"];

formatColumn(projectsHTMLformatArray, projectsHTMLlocationArray, projectElementArray, projectsObj);

/*display education*/
var schoolsObj = education.schools;
var schoolsHTMLlocationArray = [".hiddenEducationContent", ".school-entry:last"];
var schoolsHTMLformat = [HTMLschoolStart, HTMLschoolName, HTMLschoolDegree, HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor];
var schoolsElements = ["name", "degree", "dates", "city", "major"];

formatColumn(schoolsHTMLformat, schoolsHTMLlocationArray, schoolsElements, schoolsObj);

/*display online classes*/
var onlineCoursesObj = education["online courses"];
var onlineCoursesHTMLlocationArray = [".hiddenClassesContent", ".class-entry:last"];
var onlineCoursesHTMLformat = [HTMLonlineStart, HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL];
var onlineCoursesElements = ["title", "school", "dates", "url"];

formatColumn(onlineCoursesHTMLformat, onlineCoursesHTMLlocationArray, onlineCoursesElements, onlineCoursesObj);


/*only display stuff for web-dev*/
$("#teaching").hide();
$("#publicTalks").hide();
$("#fellowships-and-awards").hide();
$("#publications").hide();

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
