/*global $*/

var scrollToElement = function (el) {
    var elem = el ? $(el) : []
    $('html, body').animate({
        scrollTop: elem.length > 0 ? elem.offset().top : 0
    }, 500);
};

export { scrollToElement }