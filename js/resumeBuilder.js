var skills=["Agile","Python", "HTML5", "CSS3", "Javascript"];

var bio = {
	"name": "Daniel P. Burrus",
	"role" : "Scrum Master",
	"contacts" : { 
		"mobile" : "925.719.0034",
		"email" : "danburrus@sbcglobal.net",
		"github" : "DanBurr23",
		"twitter" : "@danburrus",
		"location" : "San Ramon, CA"
	},	
	"welcomeMessage" : "Eager to find a job as a Scrum Master where I can leverage my rekindled development skillset!",
	"skills" : skills,
	"biopic" : "images/danPic.JPG",
	
	display : function () {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPicture);

		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);
	
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (i = 0; i < bio.skills.length; i++) {
    			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      			$("#skills").append(formattedSkill);
      		}
      	}
    }
}

bio.display();

var work = {
	"jobs" : [
		{"employer" : "AT&T",
		"title" : "Senior Scrum Master",
		"location" : ["San Ramon, CA"],
		"dates" : "1999-Present",
		"description" : ["2012-Present: Scrum Master for a variety of applications, facilitating the Agile process to implement mobile apps as well as Desktop apps",
		"2006-2012: Senior Technical Team Lead on numerous application teams. Responsible for assigning and monitoring tasks, communicating status" +
		" to Upper Management, validating our adherence to defined processes, as well as conducting performance reviews",
		"1999-2006: Technical Architect in the Billing Application area. Responsible for evaluating requirements, creating designs, " +
		"coding and testing, as well as supporting the implementation in the production environment"
		]
		},
		{"employer" : "Integrated Business Solutions",
		"title" : "Contractor",
		"location" : ["San Ramon, CA"],
		"dates" : "1997-1999",
		"description" : ["Developer working on Y2K initiative"]
		},
		{"employer" : "Andersen Consulting",
		"title" : "Consultant",
		"location" : ["Denver, CO", "Seattle, WA"], 
		"dates" : "1994-1997",
		"description" : ["1994-1996: Consultant at Pacific Bell, working as a developer in the Billing Area",
		"1996-1997: Consultant commuting between Seattle and Denver for US West, analyzing their current testing processes " +
		"identifying gaps and recommending solutions"
		]
		}
	],

	display : function() {

	for (i = 0; i<work.jobs.length;i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);


		if (work.jobs[i].description.length > 0) {
				for (j=0; j<work.jobs[i].description.length; j++) {
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[j]);
					$(".work-entry:last").append(formattedDescription);
				}
			}
		}
	}
}

work.display();

var projects = {
	"projects" : [
		{"title" : "Digital Locker",
		"dates" : "2014",
		"description" : "Scrum Master for a Cloud storage app, implemented multiple releases over an 18 month period",
		"images" : ["images/locker1.jpg"]
		},
		{"title" : "Python Quiz",
		"dates" : "2016",
		"description" : "Created a quiz in Python for the Intro to Programming nanodegree",
		"images" : ["images/IPND_Stage2Project.jpg"]
		}
	],

	display : function() {
		for (i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[i].images.length > 0) {
				for (j=0; j< projects.projects[i].images.length; j++) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}
projects.display();


var education = { 
	"schools" : [
		{"name" : "Chico State University",
		"location" : "Chico, CA",
		"degree" : "BA",
		"majors" : ["Computer Science"],
		"dates" : "1994",
		"url" : "http://www.csuchico.edu/"
		}
	],
	"onlineCourses" : [
		{
		"name" : "Udacity",
		"location" : "San Francisco, CA",
		"degree" : "Introduction to Programming",
		"majors" : ["Nanodegree"],
		"dates" : "2016",
		"url" : "http://www.udacity.com/"
		}
	],

	display : function () {
		console.log("Number of schools is " + education.schools.length);
		for (i=0; i<education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			//console.log(school);
			//console.log("Trying to add education entry : " + education.schools[school].name);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolName2 = formattedSchoolName.replace("#", education.schools[i].url);
			console.log("school name " + formattedSchoolName2 );
			$(".education-entry:last").append(formattedSchoolName2);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			console.log("School dates : " + education.schools[i].dates)	
			$(".education-entry:last").append(formattedSchoolDates);

			for (j=0; j<education.schools[i].majors.length; j++) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
			
			
		}
		/*console.log("Number of online classes is " + education.schools.length);
		for (k=0; k<education.onlineCourses.length; k++) {
			$("#education").append(HTMLonlineClasses);
			console.log("in the online loop");
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].name);
			var formattedOnlineTitle2 = formattedOnlineTitle.replace("#", education.onlineCourses[k].url);
			console.log("school title " + formattedOnlineTitle2 );
			$(".education-entry:last").append(formattedOnlineTitle2);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].degree);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
			$(".education-entry:last").append(formattedOnlineDates);

		} */
	}
}

education.display();

function locationizer(work_obj) {
    var loc_array = [];
    for (i=0; i<work.jobs.length; i++) {
 //   	console.log(work.jobs[job].location)
        var new_loc = work.jobs[i].location;
        loc_array.push(new_loc);
    }
    return loc_array;
        
}

function inName(fullName) {
	var name_split = fullName.trim().split(" ");
	var firstName = name_split[0];
	var lastName = name_split[1];
	lastName = lastName.toUpperCase();
	interName = firstName + " " + lastName;
	return interName;
}

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));
//console.log(inName("Dan Burrus"));


var roadmapText = "Click on the nodes below to see the roadmap of my career!";
$("#roadmap").append(roadmapText);