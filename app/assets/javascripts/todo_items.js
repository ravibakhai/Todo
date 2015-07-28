// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// var main = function () {
//     $('.main').onClick(function () {
//         $(this).toggle();
//         console.log("hello");
//     });
// };
var main = function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
};
$(document).ready(main);
