$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

document.addEventListener('DOMContentLoaded', function () {

    // REVEAL ON SCROLL
    var revealerpoint = 100;
    window.addEventListener('scroll', reveal);
    reveal();

    function reveal() {
        //console.log("scrolling");
        var revealers = document.querySelectorAll('.revealer');
        for (var i = 0; i < revealers.length; i++) {
            var windowheight = window.innerHeight;
            var revealertop = revealers[i].getBoundingClientRect().top;
            var revealerbottom = revealers[i].getBoundingClientRect().bottom;
            //console.log("revealertop: " + revealertop);
            //console.log("revealerbottom: " + revealerbottom);
            if (revealertop < windowheight - revealerpoint) {
                revealers[i].classList.add('active')
            } else {
                revealers[i].classList.remove('active');
            };
            if (revealerbottom < 0 + revealerpoint) {
                revealers[i].classList.remove('active');
            }
        }
    };

});

// REVEAL BOX
let revealBox = document.querySelectorAll('.reveal-box');
let revealBoxInner = document.querySelectorAll('.reveal-box__inner');



for (let i = 0; i < revealBox.length; i++) {
    revealBox[i].addEventListener("click", () => {
        if (revealBox[i].classList.contains('enter')) {
            revealBox[i].classList.remove('enter');
            revealBox[i].classList.add('leave');
        }
        else {
            revealBox[i].classList.remove('leave');
            revealBox[i].classList.add('enter');
            revealBoxInner[i].classList.remove("hidden")
        }
    });

}



