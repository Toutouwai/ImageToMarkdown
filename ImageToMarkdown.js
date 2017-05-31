$(function(){
	$('.InputfieldImage').on('click', '.gridImage', function(event) {
		if(event.altKey) {
			var $thumb = $(this).find('img').first();
			var path = $thumb.attr('data-original').split('?')[0];
			var alt = $(this).find('.InputfieldFileDescription').children('input').val();
			var string = '![' + alt + '](' + path + ')';
			copyToClipboard(string);
			return false;
		}
	});
});

function copyToClipboard(string) {
	var $temp = $('<input type="text" value="' + string + '">');
	$('body').append($temp);
	$temp.select();
	document.execCommand('copy');
	$temp.remove();
}
