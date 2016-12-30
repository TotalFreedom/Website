$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#loading').fadeOut(); // will first fade out the loading animation 
    $('#load_screen').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
})
$(document).ready(function() {
$(".skip").click(function() {
    $('#loading').fadeOut(); // will first fade out the loading animation 
    $('#load_screen').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});
});

$(document).ready(function() {
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({
        delay: 50
    });

    var interval = 15000;
    var autoRefresh = setTimeout(function() {
            refresh();
        },
        interval);

    var refresh = function() {
        $.getJSON("http://us.mc-api.net/v3/server/info/play.totalfreedom.me:28965", function(json) {
            if (json.online !== true) {
                $("#online").html('<span style="color: firebrick; font-weight: bolder;"> Server is Offline</span>');
                $(".button").hide();
            } else {
                $("#online").html('TotalFreedom has  <font color="green">' + json.players.online + '</font> players online!<br/>');
                $("#players-online").html(json.players.online + ' online players!');
                $('.button').show();
            }
        });
        autoRefresh;
    }
    refresh();
});

$(document).ready(function() {
    $('.brand-logo').typed({
        strings: ['<small class="hide-on-med-and-down">play.</small>TotalFreedom<small class="hide-on-med-and-down">.me</small>'],
        typeSpeed: 30
    });


    (new Date).getFullYear();
    $("#curYear").text((new Date).getFullYear())
});

$(document).ready(function(){
    (new Date).getFullYear();
    $("#curYear").text((new Date).getFullYear());
});
    $(document).ready(function(){
        $(".one").click(function(){
            $(".a").fadeToggle(300);
            $(".one i").toggleClass("fa-chevron-right",1e3);
            $(".one i").toggleClass("fa-chevron-down",1e3)
        });

        $(".two").click(function(){
            $(".b").fadeToggle(300);
            $(".two i").toggleClass("fa-chevron-right");
            $(".two i").toggleClass("fa-chevron-down");
        });

        $(".three").click(function(){
            $(".c").fadeToggle(300);
            $(".three i").toggleClass("fa-chevron-right");
            $(".three i").toggleClass("fa-chevron-down");
        });

        $(".four").click(function(){
            $(".d").fadeToggle(300);
            $(".four i").toggleClass("fa-chevron-right");
            $(".four i").toggleClass("fa-chevron-down")
        });

        $(".five").click(function(){
            $(".e").fadeToggle(300);
            $(".five i").toggleClass("fa-chevron-right");
            $(".five i").toggleClass("fa-chevron-down");
        });

        $(".six").click(function(){
            $(".f").fadeToggle(300);
            $(".six i").toggleClass("fa-chevron-right");
            $(".six i").toggleClass("fa-chevron-down");
        });

        $(".seven").click(function(){
            $(".g").fadeToggle(300);
            $(".seven i").toggleClass("fa-chevron-right");
            $(".seven i").toggleClass("fa-chevron-down");
        });

        $(".eight").click(function(){
            $(".h").fadeToggle(300);
            $(".eight i").toggleClass("fa-chevron-right");
            $(".eight i").toggleClass("fa-chevron-down");
        });

        $(".nine").click(function(){
            $(".i").fadeToggle(300);
            $(".nine i").toggleClass("fa-chevron-right");
            $(".nine i").toggleClass("fa-chevron-down");
        });
    });

$(document).ready(function() {
        $("#top").click(function() {
        $('html, body').animate({
            scrollTop: $("html, body").offset().top
        }, 1000);
    });
        $("#rules").click(function() {
        $('html, body').animate({
            scrollTop: $("#rules-sec").offset().top
        }, 1000);
    });
        $("#staff").click(function() {
        $('html, body').animate({
            scrollTop: $("#staff-sec").offset().top
        }, 1000);
    });
        $("#brand-top").click(function() {
        $('html, body').animate({
            scrollTop: $("html, body").offset().top
        }, 1000);
    });
});