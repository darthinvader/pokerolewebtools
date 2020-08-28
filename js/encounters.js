$('.pokemon li').click(function () {

    if (event.shiftKey) {
        $(this).siblings('li').removeClass('tmp');
        $(this).addClass('tmp');
        $(this).prevAll('li').addClass('tmp');
    }
    else if (event.ctrlKey) {
        $(this).siblings('li').removeClass('base');
        $(this).addClass('base');
        $(this).prevAll('li').addClass('base');
    }
    else {
        $(this).siblings('li').removeClass('increased');
        $(this).addClass('increased');
        $(this).prevAll('li').addClass('increased');
    }
    valueAppear($(this));
})


$('.pokemon ul p').click(function () {
    if (event.shiftKey) {
        $(this).siblings('li').removeClass('tmp');
    }
    else if (event.ctrlKey) {
        $(this).siblings('li').removeClass('base');
    }
    else {
        $(this).siblings('li').removeClass('increased');
    }
    valueAppear($(this));
})

function valueAppear(clicked) {
    var parent = clicked.parent();
    var parentClassName = parent.attr('class');
    increasedLength = parent.children('li.increased').length;
    tmpLength = parent.children('li.tmp').length;
    baseLength = parent.children('li.base').length;
    if (tmpLength != 0) {
        parent.children('p').empty();
        parent.children('p').append(parentClassName + " " + tmpLength);
    }
    else if (increasedLength > baseLength) {
        parent.children('p').empty();
        parent.children('p').append(parentClassName + " " + increasedLength);
    }
    else {
        parent.children('p').empty();
        parent.children('p').append(parentClassName + " " + baseLength);
    }
}