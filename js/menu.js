var
menuRight = document.getElementById('menu-base'),
    showRightPush = document.getElementById('menu-burger-wrapper'),
    body = document.body;


showRightPush.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'menu-base-open');
    disableOther('menu-burger-wrapper');
};

function disableOther(button) {

    if (button !== 'menu-burger-wrapper') {
        classie.toggle(showRightPush, 'disabled');
    }
}





// menu --------------------------------------------------------------

(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);


$(document).ready(function () {
    $('#menu-burger-wrapper, .menu-item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened is-closed');
    });
    $('.menu-item').on('click', 'li', function() {
        $('#menu-burger-wrapper').trigger('click');
    });
});
