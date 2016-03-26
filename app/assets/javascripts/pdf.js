$(document).ready(function () {

   $('.btn.btn-primary.pdf').click( function() {
    var doc = new jsPDF('p', 'pt', 'a4');
  

    var line = 90;
    var bulletX = 60;
    var titleX = 40;
    var titleTopMargin = 25;
    var titleBottomMargin = 25;
    var bulletMargin = 20;


    var titleSize = 17;
    var nameSize = 30;
    var detailSize = 12;
    var bulletSize = 10;
    var subHeadSize = 12;

   	var buttonId = $(this).attr('data');

    var name = $('.name.name'+buttonId).html();
    var email = $('.email.name'+buttonId).html();
    var phone = $('.phone.name'+buttonId).html();
    var experiences = $('.experiences.name'+buttonId).children();
    var skills = $('.skills.name'+buttonId).children();
    var projects = $('.projects.name'+buttonId).children();
    var awards = $('.awards.name'+buttonId).children();
    var activities = $('.activities.name'+buttonId).children();
    var educations = $('.education.name'+buttonId).children();

    line+=titleTopMargin + 10;
    doc.setFontSize(titleSize);
    doc.setFont("Georgia", "bold");
    doc.text(titleX, line, "Experiences");
    line+=titleBottomMargin;

    doc.setFontSize(bulletSize);
    doc.setFont("Georgia", "normal");
    experiences.each(function(){
    	var experience = $(this).html();
    	doc.text(bulletX,line, experience);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });
    
    line+=titleTopMargin;

	doc.setFontSize(titleSize);
    doc.setFont("Georgia", "bold");
    doc.text(titleX, line, "Skills");
    line+=titleBottomMargin;

    doc.setFontSize(bulletSize);
    doc.setFont("Georgia", "normal");
    skills.each(function(){
    	var skill = $(this).html();
    	doc.text(bulletX,line,skill);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.setFont("Georgia", "bold");
    doc.text(titleX, line, "Projects");
    line+=titleBottomMargin;

    doc.setFontSize(bulletSize);
    doc.setFont("Georgia", "normal");
    projects.each(function(){
        if($(this).is('h3')){
            doc.setFontSize(subHeadSize);
            doc.setFontStyle("bold");
            var project = $(this).html();
            doc.text(bulletX,line,project);
            line+=bulletMargin;
            doc.setFontSize(bulletSize);
        } else {
            var project = $(this).html();
            doc.setFontStyle("normal");
            doc.text(bulletX+20,line,project);
            doc.ellipse(bulletX+10,line-5,2,2);
            line+=bulletMargin;
        }
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.setFont("Georgia", "bold");
    doc.text(titleX, line, "Awards");
    line+=titleBottomMargin;

    doc.setFontSize(bulletSize);
    doc.setFont("Georgia", "normal");
    awards.each(function(){
        if($(this).is('h3')){
            doc.setFontSize(subHeadSize);
            doc.setFontStyle("bold");
            var award = $(this).html();
            doc.text(bulletX,line,award);
            line+=bulletMargin;
            doc.setFontSize(bulletSize);
        } else {
            var award = $(this).html();
            doc.setFontStyle("normal");
            doc.text(bulletX+20,line,award);
            doc.ellipse(bulletX+10,line-5,2,2);
            line+=bulletMargin;
        }
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.setFont("Georgia", "bold");
    doc.text(titleX, line, "Activities");
    line+=titleBottomMargin;

    doc.setFontSize(bulletSize);
    doc.setFont("Georgia", "normal");
    activities.each(function(){
    	var activity = $(this).html();
    	doc.text(bulletX,line,activity);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });

    line+=titleTopMargin;
	doc.setFontSize(titleSize);
    doc.setFont("Georgia", "bold");
    doc.text(titleX, line, "Education");
    line+=titleBottomMargin;

    doc.setFontSize(bulletSize);
    doc.setFont("Georgia", "normal");
    educations.each(function(){
    	var education = $(this).html();
    	doc.text(bulletX,line,education);
    	doc.ellipse(bulletX-10,line-5,2,2);
    	line+=bulletMargin;
    });
    
    
    
    var headerY = 60;
    var lineMargin = 10;
    var detailMargin = 15;
    var lineLength = 540;
    var lineRightMargin = bulletX - bulletMargin;
  
    // Header //
    doc.setFontSize(nameSize);
    doc.setFont("Georgia", "bold");
  	doc.text(240,headerY, name);
    doc.line(lineRightMargin, headerY + lineMargin, lineLength, headerY + lineMargin);

  	doc.setFontSize(detailSize);
    doc.setFontStyle("normal");
  	doc.text(lineRightMargin,headerY + lineMargin + detailMargin, email);
  	doc.text(lineLength-65,headerY + lineMargin + detailMargin, phone);

   	



    doc.save((name.toUpperCase()).split(' ').join('_')+"_RESUME.pdf"); 
    
 })
   
})


