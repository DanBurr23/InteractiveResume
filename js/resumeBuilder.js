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
	"bioPic" : "images/danPic.JPG",

}

bio.displayContacts = function () {

	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPicture);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
}

bio.displaySkills = function () {

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++) {
    		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      		$("#skills").append(formattedSkill);
      	}
      }

}

bio.displayContacts();
bio.displaySkills();

var work = {
	"jobs" : [
		{"employer" : "AT&T",
		"title" : "Senior Scrum Master",
		"dates" : "1999-Present",
		"location" : ["San Ramon, CA"],
		"description" : ["2012-Present: Scrum Master for a variety of applications, facilitating the Agile process to implement mobile apps as well as Desktop apps",
		"2006-2012: Senior Technical Team Lead on numerous application teams. Responsible for assigning and monitoring tasks, communicating status" +
		" to Upper Management, validating our adherence to defined processes, as well as conducting performance reviews",
		"1999-2006: Technical Architect in the Billing Application area. Responsible for evaluating requirements, creating designs, " +
		"coding and testing, as well as supporting the implementation in the production environment"
		]
		},
		{"employer" : "Integrated Business Solutions",
		"title" : "Contractor",
		"dates" : "1997-1999",
		"location" : ["San Ramon, CA"],
		"description" : ["Developer working on Y2K initiative"]
		},
		{"employer" : "Andersen Consulting",
		"title" : "Consultant",
		"dates" : "1994-1997",
		"location" : ["Denver, CO", "Seattle, WA"], 
		"description" : ["1994-1996: Consultant at Pacific Bell, working as a developer in the Billing Area",
		"1996-1997: Consultant commuting between Seattle and Denver for US West, analyzing their current testing processes " +
		"identifying gaps and recommending solutions"
		]
		}
	]
}

work.displayWork = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);


		if (work.jobs[job].description.length > 0) {
				for (desc in work.jobs[job].description) {
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[desc]);
					$(".work-entry:last").append(formattedDescription);
				}
			}
		}
}

work.displayWork();

var projects = {
	"projects" : [
		{"title" : "Digital Locker",
		"dates" : 2014,
		"description" : "Scrum Master for a Cloud storage app, implemented multiple releases over an 18 month period",
		"images" : ["images/locker1.jpg"]
		},
		{"title" : "Python Quiz",
		"dates" : 2016,
		"description" : "Created a quiz in Python for the Intro to Programming nanodegree",
		"images" : ["images/IPND_Stage2Project.jpg"]
		}
	]
}

projects.display = function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
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
		"major" : "Computer Science",
		"minor" : "Business Administration",
		"dates" : "1994",
		"url" : "www.chico.com"
		},
		{
		"name" : "Udacity",
		"location" : "San Francisco, CA",
		"degree" : "Introduction to Programming",
		"major" : "Nanodegree",
		"minor" : "N/A",
		"dates" : "2016",
		"url" : "www.udacity.com"
		}
	]
}

education.displayEducation = function () {
	for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			//console.log(school);
			//console.log("Trying to add education entry : " + education.schools[school].name);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			console.log("School dates : " + education.schools[school].dates)	
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
			$(".education-entry:last").append(formattedSchoolMinor);
	}
}

education.displayEducation();

function locationizer(work_obj) {
    var loc_array = [];
    for (job in work.jobs) {
 //   	console.log(work.jobs[job].location)
        var new_loc = work.jobs[job].location;
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

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));
//console.log(inName("Dan Burrus"));


