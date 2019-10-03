$(function(){
	
	$('#slider').on('change', function(){
			var currentDesc = $('#description').find('.section-wrapper > div').filter(':visible');
			var matchedDesc = $('#description').find('.section-wrapper > div').filter(':nth-child(' + (Number($('#slider').val()) + 1 ) + ')');

			$(currentDesc).hide();
			$(matchedDesc).fadeIn();
	});
	
});
