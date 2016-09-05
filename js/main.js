$(document).ready(function() {
   $(".button-collapse").sideNav();
   $('.modal-trigger').leanModal();
        
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
                $("#online").html('TotalFreedom has  <font color="green">' + json.players.online +  '</font> players online!');
               $("#players-online").html(json.players.online + ' online players!');
                $('.button').show();
            }
        });
        autoRefresh;
    }
    refresh();
});

$(document).ready(function() {
 var currentYear = (new Date).getFullYear();

 $("#curYear").text((new Date).getFullYear());
});

$(document).ready(function() {
    $('.one').click(function() {
       $('.a').fadeToggle("slow");
       $(".one i").toggleClass('fa-chevron-right', 1000);
       $(".one i").toggleClass('fa-chevron-down', 1000);    
});
    $('.two').click(function() {
       $('.b').fadeToggle("slow");
       $(".two i").toggleClass('fa-chevron-right');
       $(".two i").toggleClass('fa-chevron-down');    
});
    $('.three').click(function() {
       $('.c').fadeToggle("slow");
       $(".three i").toggleClass('fa-chevron-right');
       $(".three i").toggleClass('fa-chevron-down');    
});
    $('.four').click(function() {
       $('.d').fadeToggle("slow");
       $(".four i").toggleClass('fa-chevron-right');
       $(".four i").toggleClass('fa-chevron-down');    
});
    $('.five').click(function() {
       $('.e').fadeToggle("slow");
       $(".five i").toggleClass('fa-chevron-right');
       $(".five i").toggleClass('fa-chevron-down');    
});
    $('.six').click(function() {
       $('.f').fadeToggle("slow");
       $(".six i").toggleClass('fa-chevron-right');
       $(".six i").toggleClass('fa-chevron-down');    
});
    $('.seven').click(function() {
       $('.g').fadeToggle("slow");
       $(".seven i").toggleClass('fa-chevron-right');
       $(".seven i").toggleClass('fa-chevron-down');    
});
    $('.eight').click(function() {
       $('.h').fadeToggle("slow");
       $(".eight i").toggleClass('fa-chevron-right');
       $(".eight i").toggleClass('fa-chevron-down');    
});
});