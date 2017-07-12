/*

   Copyright 2017 Aggelos Sarris and contributors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
*/

$(document).ready(function() {
   var interval = 15000;
    var autoRefresh = setTimeout(function() {
            refresh();
        },
        interval);

    var refresh = function() {
        $.getJSON("https://totalfreedom.me/status.php", function(json) {
            if (json.status !== true) {
                $("#online").html('<span style="color: firebrick; font-weight: bolder;"> Server is Offline</span><br/><small style="font-size: .5em;">Check out our <a href="status">Associated Servers</a>!</small>');
                $(".button").hide();
            } else {
                $("#online").html('TotalFreedom has  <font color="green" style="font-weight:300;">' + json.players.online + '</font> players online!<br/>');
                $("#players-online").html('<font color="green" style="font-weight:900;">' + json.players.online + '</font> Online Players!');
                $('.button').show();
            }
        });
        autoRefresh;
    }
    refresh();
});


    $(document).ready(function(){
        $(".one").click(function(){
            $(".a").fadeToggle(300);
            $(".one i").toggleClass("fa-chevron-right");
            $(".one i").toggleClass("fa-chevron-down");
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
            $(".four i").toggleClass("fa-chevron-down");
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


var ypos,cover1,cover2,cover3;

function parallax() {
    ypos = window.pageYOffset;
    cover1 = document.getElementById('header');

    cover1.style.top = ypos * .4 + 'px';
};

window.addEventListener('scroll', parallax);
