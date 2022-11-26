function renderPage2() {
    for (let i=1; i<7; i++) {
        const buttonName = '#SB' + i.toString();
        $(buttonName).css({
            'left': (i*15-6).toString() + "%",
            'opacity': 0
        });
    }
}
$(document).ready(function(){
    renderPage2();
});
$('.MainPageButton').mouseover(function(){
    this.style.color = "#0089A6";
    this.style.fontWeight = "bold";
});
$('.MainPageButton').mouseout(function(){
    this.style.color = "#000000";
    this.style.fontWeight = "normal";
});
$('#lenses').mouseover(function(){
    this.style.color = "#0089A6";
});
$('#lenses').mouseout(function(){
    this.style.color = "#000000";
});
$("#lenses").mousedown(function(){
    let intro = $("#intro");
    let lake = $("#lake");
    lake.animate({'opacity': 0});
    intro.animate({'opacity': 100},3000);
    lake.removeClass("Page1_out");
    intro.addClass("Page1_out");
})
$("#whoIam").mousedown(function(){
    open("https://drive.google.com/file/d/1uunavh3XPXhGhCIxZoYglOMkDA1HhkE_/view?usp=sharing","blank");
});
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let height = $(window).height();
    let opacity1 = (scrollTop * 0.002 - 1 < 0)? ((scrollTop * 0.002 - 1)*(scrollTop * 0.002 - 1)):0;
    let opacity2 = scrollTop * 0.003 - 0.5;
    let opacity3 = scrollTop * 0.006 - 2.5;
    $('.Page1_out').css({
        'opacity': opacity1,
    });
    $('.Page2_in').css({
        'opacity': opacity2,
    });
    $('.Page2_linein').css({
        'opacity': opacity3,
    });
    if (scrollTop < 0.749*height) {
        $("#darkBackground").css({
            'opacity' : 0,
        });
    }
});
$('.SectionButton').mouseenter(function(){
    if ($(window).scrollTop() >= 0.749* $(window).height()) {
        const dark = $("#darkBackground");
        dark.stop(true, true);
        dark.animate({
            'opacity' : 100,
        }, 3000);
        $('.SectionButton').each(function() {
            this.style.color = "lightgray";
        })
        $(this).css({
            'color' : "#0089A6",
            'font-weight' : "bold",
        });
    }
})
$('.SectionButton').mouseleave(function(){
    const dark = $("#darkBackground");
    dark.stop(true, true);
    dark.animate({
        'opacity' : 0,
    });
    $('.SectionButton').each(function() {
        this.style.color = "black";
    })
    $(this).css({
        'font-weight' : "normal",
    }, 3000);
})