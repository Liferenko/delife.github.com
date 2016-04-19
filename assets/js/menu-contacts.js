$(document).ready(function () {

// Выдвигающийся блок с меню
var selector_open = false;
$('.phone_selector').mouseover(function () {
    if (selector_open == false) {
        $(".phone_block").animate({
            top: "220px"
        }, 500);
        selector_open = true;
    }

});
$('.phone_block').mouseleave(function () {
    if (selector_open == true) {
        $(".phone_block").animate({
            top: "0px"
        }, 500);
        selector_open = false;
        }
    });




});
