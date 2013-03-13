$(document).on('click', 'div.item', function(){
	if ($(this).hasClass('selected')) {
		$(this).removeClass('selected');
	}
	else {
		$(this).addClass('selected');
	}
});


$(document).on('click', 'img.add-item', function(){
	var $selected = $('div.selector-chosen div.selector-items');
	var $selection = $('div.selector-available div.selector-items');
	var $picker = $selection.find('.selected');
	var $picked = $picker;

	$picker.each(function() {
		var $el = $(this).clone();
		$el.removeClass('selected');
		$selected.append($el.hide().fadeIn(500));
	});

	$picker.fadeOut(500, function() {
        $(this).remove();
    });
});


$(document).on('click', 'img.remove-item', function(){
	var $selected = $('div.selector-chosen div.selector-items');
	var $selection = $('div.selector-available div.selector-items');
	var $picker = $selected.find('.selected');
	var $picked = $picker;

	$picker.each(function() {
		var $el = $(this).clone();
		$el.removeClass('selected');
		$selection.append($el.hide().fadeIn(500));
	});

	$picker.fadeOut(500, function() {
        $(this).remove();
    });
});