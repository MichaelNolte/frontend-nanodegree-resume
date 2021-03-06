/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<div class="title-field"><h1 id="name">%data%<br></h1>';
var HTMLheaderRole = '<span class="subtitle-text">%data%</span></div>';

var HTMLcontactStart = '<div class="contact-frame"><ul id="contacts" class="flex-box"></ul></div>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile: </span><span class="black-text">%data%  </span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">E-Mail: </span><span class="black-text">%data%  </span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">Twitter: </span><span class="black-text">%data%  </span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">Github: </span><span class="black-text">%data%  </span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">Location: </span><span class="black-text">%data%</span></li>';

var HTMLbioPic = '<div class = bio-row><div class="image-box"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<div class="message-box"><span class="welcome-message">%data%</span></div></div>';

var HTMLskillsStart = '<div class="skill-box"><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li></div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLteachingStart = '<div class="teaching-entry"></div>';
var HTMLteachingTitle = '<a href="#">%data%';
var HTMLteachingProfessor = ' (%data%)</a>';
var HTMLteachingDepartment = '<p>%data%';
var HTMLteachingDate = '-- %data%</div></p>'; /*the last line's a hack; not a good one i admit; deal with css layout later and erase last line*/

var HTMLpTalksStart = '<div class="ptalks-entry"></div>';
var HTMLpTalksTitle = '<a href="#">%data%</a>';
var HTMLpTalksData = '<p>%data%';
var HTMLpTalksDate = ' -- %data%<br></p>'; /*the last line's a hack; not a good one i admit; deal with css layout later and erase last line*/


var HTMLpublicationsBooks = '<div class="books-entry"><h3>books</h3></div>';
var HTMLpublicationsArtEssOth = '<div class="artEssOth-entry"><h3>articles, essays, and other contributions</h3><div>';
var HTMLpublicationsReviews = '<div class="review-entry"><h3>book reviews</h3></div>';
var HTMLpublicationsInterviews = '<div class="interview-entry"><h3>interviews</h3></div>';
var HTMLpublicationsBlogs = '<div class="blog-entry"><h3>blog entries</h3></div>';
var HTMLbooksStart = '<div class="books-entry"></div>';
var HTMLartEssOthStart = '<div class="artEssOth-entry"></div>';
var HTMLreviewsStart = '<div class="review-entry"></div>';
var HTMLinterviewsStart = '<div class="interview-entry"></div>';
var HTMLblogsStart = '<div class="blog-entry"></div>';

var HTMLpublicationsTitle = '<a href="#">%data%</a>';
var HTMLpublicationsData = '<p>%data%</p>';
var HTMLpublicationsURL = '<a href="#">%data%</a>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="school-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineStart = '<div class="class-entry"></div>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var googleMap = '<div id="map"></div>';









$(document).ready(function() {
  $('button').click(function() {
    if(cvType === "web") {
      $('#header').find('span').first().text(webRole);
      $('.welcome-message').text(webWelcome);
      $("#group3").hide();
      $("#group4").hide();
      $("#group6").hide();
      $("#group7").show();
      $("#group5").hide();
      $("#group9").show();

      $("#buffer_teach").hide();
      $("#buffer_publ").hide();
      $("#buffer_proj").show();
      $("#buffer_courses").show();

      if ($("#group8 div.parallax__layer").hasClass("parallax__layer--back")) {
        $("#group8 div.parallax__layer--back").removeClass('parallax__layer--back').addClass('parallax__layer--deep');
        $("#group8 div.parallax__layer--deep div.work_background_front").removeClass('work_background_front').addClass('work_background_back');

      }
      else {}

      if ($("#group10 div.parallax__layer").hasClass("parallax__layer--back")) {
        $("#group10 div.parallax__layer--back").removeClass('parallax__layer--back').addClass('parallax__layer--deep');
        $("#group11 div.parallax__layer--deep").removeClass('parallax__layer--deep').addClass('parallax__layer--back');


      }
      else {}

      $("#mapDiv").css("padding-top", "20vh").css("padding-bottom", "30vh").css("top", "-45vh");

      $("#group11 div.parallax__layer div.work_background_back_last").removeClass('work_background_back_last').addClass('work_background_front');

      $("#group8").css("z-index", "2");
      $("#group10").css("z-index", "3");
      $("#group11").css("z-index", "3");

      $("#group8 div.parallax__layer--base div.center button.btn-toggle-front").removeClass('btn-toggle-front').addClass('btn-toggle-back');

      $("#group10 div.parallax__layer div.center button.btn-toggle-front").removeClass('btn-toggle-front').addClass('btn-toggle-back');

    }

    else if(cvType === "corp") {
      $('#header').find('span').first().text(corpRole);
      $('.welcome-message').text(corpWelcome);

      $("#group3").show();
      $("#group4").hide();
      $("#group5").hide();
      $("#group6").hide();
      $("#group7").hide();
      $("#group9").hide();

      $("#buffer_teach").show();
      $("#buffer_publ").hide();
      $("#buffer_proj").hide();
      $("#buffer_courses").hide();

      if ($("#group8 div.parallax__layer").hasClass("parallax__layer--back")) {
        $("#group8 div.parallax__layer--back").removeClass('parallax__layer--back').addClass('parallax__layer--deep');
        $("#group8 div.parallax__layer--deep div.work_background_front").removeClass('work_background_front').addClass('work_background_back');

      }
      else {}

      if ($("#group10 div.parallax__layer").hasClass("parallax__layer--deep")) {
        $("#group10 div.parallax__layer--deep").removeClass('parallax__layer--deep').addClass('parallax__layer--back');
        $("#group11 div.parallax__layer--back").removeClass('parallax__layer--back').addClass('parallax__layer--deep');
      }
      else {}

      $("#group8").css("z-index", "2");
      $("#group10").css("z-index", "3");
      $("#group11").css("z-index", "1");

      $("#mapDiv").css("padding-bottom", "10vh").css("padding-top", "10vh").css("top", "0");

      $("#group10 div.parallax__layer div.center button.btn-toggle-back").removeClass('btn-toggle-back').addClass('btn-toggle-front');


      $("#group11 div.parallax__layer div.work_background_front").removeClass('work_background_front').addClass('work_background_back_last');

      $("#group8 div.parallax__layer--base div.center button.btn-toggle-front").removeClass('btn-toggle-front').addClass('btn-toggle-back');

    }
    else {
      $('#header').find('span').first().text(academicRole);
      $('.welcome-message').text(academicWelcome);
      $("#group3").show();
      $("#group4").show();
      $("#group5").show();
      $("#group6").show();
      $("#group7").hide();
      $("#group9").hide();

      $("#buffer_teach").show();
      $("#buffer_publ").show();
      $("#buffer_proj").hide();
      $("#buffer_courses").show();

      if ($("#group8 div.parallax__layer").hasClass("parallax__layer--deep")) {
        $("#group8 div.parallax__layer--deep").removeClass('parallax__layer--deep').addClass('parallax__layer--back');
        $("#group8 div.parallax__layer--back div.work_background_back").removeClass('work_background_back').addClass('work_background_front');

      }
      else {}

      if ($("#group10 div.parallax__layer").hasClass("parallax__layer--back")) {
        $("#group10 div.parallax__layer--back").removeClass('parallax__layer--back').addClass('parallax__layer--deep');
        $("#group11 div.parallax__layer--deep").removeClass('parallax__layer--deep').addClass('parallax__layer--back');

      }
      else {}

      $("#group11 div.parallax__layer div.work_background_back_last").removeClass('work_background_back_last').addClass('work_background_front');

      $("#mapDiv").css("padding-top", "20vh").css("padding-bottom", "30vh").css("top", "-45vh");

      $("#group8").css("z-index", "4");
      $("#group10").css("z-index", "2");
      $("#group11").css("z-index", "3");

      $("#group8 div.parallax__layer--base div.center button.btn-toggle-back").removeClass('btn-toggle-back').addClass('btn-toggle-front');

      $("#group10 div.parallax__layer div.center button.btn-toggle-front").removeClass('btn-toggle-front').addClass('btn-toggle-back');



    }



  });
});


/*The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);




    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.city);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
    console.log(locations);
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
