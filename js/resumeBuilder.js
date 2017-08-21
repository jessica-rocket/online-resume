var bio = {
  "name" : "Jessica Rocha",
  "role" : "Front End Web Developer",
  "contacts" : {
    "mobile" : "512-484-5243",
    "email" : "jessicarocha3786@gmail.com",
    "github" : "jessica_rocket",
    "twitter" : "jess_rocha18",
    "location" : "San Antonio, Texas"
  },
  "welcomeMessage" : "The only way to do great work is to love what you do.",
  "skills" : [
    "JavaScript", "HTML", "CSS", "Python"],
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
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

  $("#lets-connect").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

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
      "dates" : "October 2012 - May 2017",
      "description":  "Provided administrative support to the Managing Partner; assisting with preparing reports, PowerPoint presentations, coordinating meetings, and screening phone calls and emails. Supported 10 senior level managers with recruiting new agents and compiling new hire paperwork for Home Office, acting as communications liaison to ensure all paperwork was submitted correctly and efficiently. Managed bank balancing and agent tracking spreadsheets, updated and distributed various monthly reports, and maintained file system for employee personnel records. Organized and led multiple work events, including company award ceremonies, agent trainings, and outside office meetings.Trained all new agents in our life insurance underwriting requirements and e-application process in weekly classroom environments that involved live demonstrations, small group meetings and one-on-one sessions."
  },
  {
      "employer": "Rocket Tier Mobile Development",
      "title": "Operatons Manager",
      "location" : "San Antonio, Texas",
      "dates" : "August 2011- September 2012",
      "description":  "Oversaw the planning, execution, and finalization of 15 mobile app projects. Utilized and spearheaded the company’s social media strategy across all platforms to establish our company’s brand. Contributed towards establishing Rocket Tier as a legal business entity within the state of Texas by filing all official paperwork. Balanced company’s financial transactions and handled all accounting aspects. Filed quarterly and yearly taxes for the entity by complying with State Tax Regulations."
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
      "title": "Memory Game",
      "dates": "2017",
      "description":  "The game starts with 16 cards flipped face down. On the other side of the card are images of animals. The player chooses two card by clicking on them. The goal of the game is to match all the cards on the game board. The game is timed and also tracks the number of moves it takes you to complete the game. We also have a star rating in the game that is determined by how many moves the players takes. You start with 3 stars, once the player goes over 10 moves, you lose a star. When the player goes over 14 moves, you lose another star. Once the game is over, the pop up shows how much time you took to complete the game, shows how many moves you took, and shows your final star rating.",
      "images" : ["images/memory1.png", "images/memory2.png"]
  },
  {
    "title": "Portfolio Site Project",
    "dates": "2017",
    "description":  "For this project, I was given a design mockup as a PDF file that I replicated into a website using HTML and CSS. I used Bootstrap to help framework the design and also utilized it to make the website and images responsive on all display sizes. The website also displays link so each of the portfolio projects.  ",
    "images" : ["images/portfolio1.png", "images/portfolio2.png"]
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
