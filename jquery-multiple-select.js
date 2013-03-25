$(document).on('click', 'div.item', function(){
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $(this).draggable('destroy');
    }
    else {
        $(this).addClass('selected');
        var offset = $(this).offset();
        $(this).draggable({
            helper: 'original',
            cursor: 'move',
            revert: 'invalid',
            opacity: 0.5
        });
        $(this).offset(offset);
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


function multipleSelect () {
    init = function (opts) {
        var options = opts || {};
        var ids = opts.id || {};
    };

    console.log(this.init.options);
}

$(document).ready(function(){
    $('.selected').draggable({
        cursor: 'move',
        revert: 'invalid',
        revertDuration: 200,
        opacity: 0.5
    });

    $('.selector-chosen .selector-items').droppable({
        accept: 'div.selected',
        activeClass: 'drp',
        drop: function(event, ui) {
            ui.draggable.draggable('destroy');
            ui.draggable.removeClass('selected');
            ui.draggable.css({'opacity': 1});
            ui.draggable.clone(true).css('position', 'inherit').appendTo($(this));
            ui.draggable.remove();
        }
    });

    $('.selector-available .selector-items').droppable({
        accept: 'div.selected',
        activeClass: 'drp',
        drop: function(event, ui) {
            ui.draggable.draggable('destroy');
            ui.draggable.removeClass('selected');
            ui.draggable.css({'opacity': 1});
            ui.draggable.clone(true).css('position', 'inherit').appendTo($(this));
            ui.draggable.remove();
        }
    });
});