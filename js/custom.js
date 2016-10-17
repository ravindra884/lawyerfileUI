$(document).ready(function(){
	$('button.edit').click(function() {
		$('.view.infolist').slideToggle();
		$('.edit.infolist').slideToggle();
	});
	$('.buttonWrapper .cancelBtn').click(function() {
		$('.view.infolist').slideToggle();
		$('.edit.infolist').slideToggle();
	});

	$('.changeviewBar .gridview').click(function() {
		$('.checkboxlist').addClass('checkboxgrid');
	});
	$('.changeviewBar .listview').click(function() {
		$('.checkboxlist').removeClass('checkboxgrid');
	});

	$('.screeningTitleBar .alignment').click(function(){
		$('.rightpanel').toggleClass('faderight');
		$('.middPanel').toggleClass('fullwidth');
	});
	$('.deals dl dt').click(function() {
		$(this).next('dd').next('.addStages').slideToggle();
	});
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})


	// new deal popup
	$('.blackoverlay').click(function() {
		$(this).fadeOut();
		$('#msform').fadeOut();
	});
	$('.newDeail').click(function() {
		$('.blackoverlay, #msform').fadeIn();
	});


	$('.menu a').click(function() {
		$('.menu').slideUp();
	});
	// main toggle menu
	$('.navbar-brand').click(function() {
		$('.menu').slideToggle();
	});
	

	$(".menu").on('click' , 'a#purchase' , function(){
	    $('.navbar-header .maintabs span').replaceWith('<span><i>P</i>Purchase</span>');
    });
    $(".menu").on('click' , 'a#sale' , function(){
	    $('.navbar-header .maintabs span').replaceWith('<span><i>S</i>Sale</span>');
    });
    $(".menu").on('click' , 'a#mortgage' , function(){
	    $('.navbar-header .maintabs span').replaceWith('<span><i>M</i>Mortgage</span>');
    });
    $(".menu").on('click' , 'a#transfer' , function(){
	    $('.navbar-header .maintabs span').replaceWith('<span><i>T</i>Title transfer</span>');
    });

});



//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})