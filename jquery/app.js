$(document).ready(function(){
	setBindings();
});

function setBindings(){

	$("nav a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop: $("#" + sectionID).offset().top
		}. 10000)
		return false;
	});
}

//function didn't work...why?!?