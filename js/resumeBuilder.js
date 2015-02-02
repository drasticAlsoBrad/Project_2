var bio = {
	"name": "Brad Bottoms",
	"role": "Geospatial Analyst",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "bottomsba@gmail.com",
		"github": "drasticAlsoBrad",
		"twitter": "@drasticAlsoBrad",
		"location": "Washington, D.C."
	},
	"welcomeMessage": "Welcome to the den of non-suckness!",
	"skills": [
		"spatial analysis", "python", "javascript", "html", "css"
	],
	"picture": "images/biopic.jpg",
	"display": function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);        
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);        
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);        

        var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
        $("#header").append(formattedPicture);

        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        // If statement that cycles through all skills in bio and appends them to the skills section
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(skill in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkills);
            }
        }      

    }
};

var education = {
	"schools": [
	{
		"name": "Middle Tennessee State University",
		"location": "Murfreesboro, TN",
		"degree": "B.Sc.",
		"majors": ["Geography", " Geographic Techniques"],
		"dates": 2009,
		"url": "http://www.psu.edu/"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/"
	},
	{
		"title": "Geospatial Intelligence Graduate Certificate",
		"school": "Penn State",
		"dates": 2012,
		"url": "http://www.worldcampus.psu.edu/"
	}
	],
	"display" : function(){
		for (row in education.schools){
			$("#education").append(HTMLschoolStart);

			var formName = HTMLschoolName.replace("%data%", education.schools[row].name);
			var formDegree = HTMLschoolDegree.replace("%data%", education.schools[row].degree);
			var formNameDegree = formName + formDegree;
			$(".education-entry:last").append(formNameDegree);
			var formDates = HTMLschoolDates.replace("%data%", education.schools[row].dates);
			$(".education-entry:last").append(formDates);
			var formLocation = HTMLschoolLocation.replace("%data%", education.schools[row].location);
			$(".education-entry:last").append(formLocation);
			var formMajor = HTMLschoolMajor.replace("%data%", education.schools[row].majors);
			$(".education-entry:last").append(formMajor);
		}
		$("#education").append(HTMLonlineClasses);
		for (row in education.onlineCourses){
			
			$("#education").append(HTMLschoolStart);

			var formTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[row].title);
			var formOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[row].school);
			var formTitleOnlineSchool = formTitle + formOnlineSchool;
			$(".education-entry:last").append(formTitleOnlineSchool);
			var formOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[row].dates);
			$(".education-entry:last").append(formOnlineDates);
			var formURL = HTMLonlineURL.replace("%data%", education.onlineCourses[row].url);
			$(".education-entry:last").append(formURL);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer": "New Light Technologies",
			"title": "Lead Geospatial Analyst",
			"location": "Washington, D.C.",
			"dates": "October, 2014 - Current",
			"description": "Disaster mapping and humanitarian crisis work."
		},
		{
			"employer": "Marine Corps Intelligence Activity",
			"title": "Geographer",
			"location": "Quantico, Virginia",
			"dates": "June, 2012 - October, 2014",
			"description": "Awesome maker of awesome maps and analysis."
		},
		{
			"employer": "Wiser Company",
			"title": "GIS Analyst",
			"location": "Murfreesboro, Tennessee",
			"dates": "October, 2010 - May, 2012",
			"description": "Data, data, data."
		},
		{
			"employer": "City of Brentwood",
			"title": "GIS Intern",
			"location": "Brentwood, Tennessee",
			"dates": "October, 2008 - October, 2010",
			"description": "Master of driving sweet trucks and creeping people out while I poked around in their yard."
		}
	],
	"display" : function (){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formEmployerTitle = formEmployer + formTitle;
			$(".work-entry:last").append(formEmployerTitle);

			var formLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formLocation);

			var formDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formDates);

			var formDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formDescription);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title": "Drone building for habitat monitoring",
			"dates": "2014 - Current",
			"description": "Currently drafting designs for low cost drones to be used in habitat monitoring for endangered species.",
			"images": ["images/drone.jpg"]
		}
	],
	"display" : function(){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formTitle);

			var formDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formDates);

			var formDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formDescription);

			if(projects.projects[project].images.length > 0){
				for(image in projects.projects[project].images){
					var formImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formImage);
				}
			}
		}
	}
};
//Group of functions to call the display methods contained in the 4 objects (bio, education, work, projects) vital to the page.
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);