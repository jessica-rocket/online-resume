var bio = {
  "name" : "Jessica Rocha",
  "role" : "Front End Web Developer",
  "contacts" : {
    "mobile" : "512-484-5243",
    "email" : "jessicarocha3786@gmail.com",
    "github" : "jessica_rocket",
    "linkedin" : "linkedin.com/in/j-rocha/",
    "location" : "San Antonio, Texas"
  },
  "welcomeMessage" : "The only way to do great work is to love what you do.",
  "skills" : [
    "JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", "WordPress"],
  "biopic" : "images/me.jpg"
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);
  var formattedbioPic = HTMLbiopic.replace("%data%", bio.biopic);
  $("#header").append(formattedbioPic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedLinkedIn, formattedGithub, formattedLocation);

  $("#lets-connect").append(formattedMobile, formattedEmail, formattedLinkedIn, formattedGithub, formattedLocation);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(var i=0; i < bio.skills.length; i++) {
      $('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
};

bio.display();


var education = {
  "schools": [
    {
      "name" : "The University of Texas at Austin",
      "location" : "Austin, Texas",
      "degree" : "Bachelor of Science",
      "dates" : "May 2011",
      "url" : "https://www.utexas.edu",
      "majors": ["Physical Culture and Sport, Minor in Business"]
    }
  ],
  "onlineCourses": [
    {
      "title" : "Front End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2017",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title" : "Intro to Programming Nanodegree",
      "school" : "Udacity",
      "dates" : "2017",
      "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ]
};

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var school = 0; school < education.schools.length; school++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

			$(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(school = 0; school < education.onlineCourses.length; school++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title).replace("#", education.onlineCourses[school].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url).replace("#", education.onlineCourses[school].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
};

education.display();

var work = {
  "jobs" : [
    {
      "employer": "New York Life Insurance",
      "title": "Senior Representative",
      "location" : "San Antonio, Texas",
      "dates" : "October 2012 - June 2017",
      "description":  "Supported 10 senior level managers with recruiting new agents and compiling new hire paperwork for Home Office, acting as communications liaison between new agents and our Home Office. Trained all new agents in our life insurance underwriting requirements and e-application process in weekly classroom environments that involved live demonstrations, small group meetings and one-on-one sessions."
  },
  {
      "employer": "Rocket Tier Mobile Development",
      "title": "Operatons Manager",
      "location" : "San Antonio, Texas",
      "dates" : "August 2011- September 2012",
      "description":  "Involved in testing applications on different mobile platforms such as iOS and Android devices. Oversaw the planning, execution, and finalization of 15 mobile app projects. Performed initial client assessment and analysis to begin development process. Obtained documents, clearances, certificates, and approvals from local, state, and federal agencies. Balanced company’s financial transactions and handled all accounting aspects."
  }
 ]
};

work.display = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

var projects = {
  "projects" : [
    {
      "title": "Classic Arcade Game Clone",
      "dates": "2017",
      "description":  "Created a version of “Frogger” practicing Object-Oriented JavaScript. Use the arrow keys on keyboard to move the player. Key objective of the game is that the player must avoid enemies and reach the water. If you collide with an enemy, the game will be restarted; if you reach the water, you win!",
      "images" : ["images/clone1.png", "images/clone2.png"]
  },
  {
    "title": "Austin Neighborhood Map",
    "dates": "2017",
    "description":  "Integrated Google Maps with Foursquare API to showcase information about popular Austin Restaurants.",
    "images" : ["images/neighborhood1.png", "images/neighborhood2.png"]
  }
 ]
};

projects.display = function() {
  for(var project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for(var image = 0; image < projects.projects[project].images.length; image++){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
