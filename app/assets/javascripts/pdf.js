$(document).ready(function () {

   $('.btn.btn-primary.pdf').click( function() {
    var doc = new jsPDF('p', 'pt', 'a4');
  

    var line = 90;
    var bulletX = 50;
    var titleX = 30;
    var titleTopMargin = 40;
    var titleBottomMargin = 20;
    var bulletMargin = 20;

    var titleSize = 22;
    var nameSize = 25;
    var bulletSize = 14;

   	var buttonId = $(this).attr('data');

    var name = $('.name.name'+buttonId).html();
    var email = $('.email.name'+buttonId).html();
    var phone = $('.phone.name'+buttonId).html();
    var experiences = $('.experiences.name'+buttonId).children();
    var skills = $('.skills.name'+buttonId).children();
    var projects = $('.projects.name'+buttonId).children();
    var awards = $('.awards.name'+buttonId).children();
    var activities = $('.activities.name'+buttonId).children();
    var educations = $('.educations.name'+buttonId).children();

    line+=titleTopMargin;
    doc.setFontSize(titleSize);
    doc.text(titleX, line, "Experiences");
    line+=titleBottomMargin;
    doc.setFontSize(bulletSize);
    experiences.each(function(){
    	var experience = $(this).html();
    	doc.text(bulletX,line,experience);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.text(titleX, line, "Skills");
    line+=titleBottomMargin;
    doc.setFontSize(bulletSize);
    skills.each(function(){
    	var skill = $(this).html();
    	doc.text(bulletX,line,skill);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.text(titleX, line, "Projects");
    line+=titleBottomMargin;
    doc.setFontSize(bulletSize);
    projects.each(function(){
    	var project = $(this).html();
    	doc.text(bulletX,line,project);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.text(titleX, line, "Awards");
    line+=titleBottomMargin;
    doc.setFontSize(bulletSize);
    awards.each(function(){
    	var award = $(this).html();
    	doc.text(bulletX,line,award);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.text(titleX, line, "Activities");
    line+=titleBottomMargin;
    doc.setFontSize(bulletSize);
    activities.each(function(){
    	var activity = $(this).html();
    	doc.text(bulletX,line,activity);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.text(titleX, line, "Education");
    line+=titleBottomMargin;
    doc.setFontSize(bulletSize);
    educations.each(function(){
    	var education = $(this).html();
    	doc.text(bulletX,line,education);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });
    
    
    
  
    // Header //
    doc.setFontSize(nameSize);
  	doc.text(400,40, name);

  	doc.setFontSize(14);
  	doc.text(20,60, email);
  	doc.text(700,60, phone);

   	



    doc.save((name.toUpperCase()).split(' ').join('_')+"_RESUME.pdf"); 
    
 })
   
})


