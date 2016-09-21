$(document).ready(function(){
	$('button.edit').click(function() {
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
});