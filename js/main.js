$(document).ready(function() {
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({
        delay: 50
    });
});




$(document).ready(function(){
    (new Date).getFullYear();
    $("#curYear").text((new Date).getFullYear());
});