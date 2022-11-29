function renderPage2() {
    for (let i=1; i<9; i++) {
        const buttonName = '#SB' + i.toString();
        $(buttonName).css({
            'left': (i*14-12).toString() + "%",
            'opacity': 0
        });
    }
}
$(document).ready(function(){
    renderPage2();
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
let sectionActive = false;
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
    if (scrollTop < 0.7*height) {
        sectionActive = false;
        $('.row').css({'display': 'none'});
        const dark = $("#darkBackground");
        dark.stop(true, true);
        dark.animate({
            'opacity': 0,
        });
        $('.SectionButton').each(function () {
            this.style.color = "black";
            this.style.fontSize = "2.2vmax";
            this.style.fontWeight = "normal";
        })
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
            this.style.color = "gray";
        })
        $(this).css({
            'color' : "#0089A6",
            'font-weight' : "bold",
        });
    }
})
$('.SectionButton').mouseleave(function(){
    if (!sectionActive){
        const dark = $("#darkBackground");
        dark.stop(true, true);
        dark.animate({
            'opacity': 0,
        });
        $('.SectionButton').each(function () {
            this.style.color = "black";
        })
        $(this).css({
            'font-weight': "normal",
        });
    }
    if (sectionActive){
        $('.SectionButton').each(function () {
            this.style.color = "gray";
        })
    }
})
$('.SectionButton').mousedown(function(){
    if ($(window).scrollTop() >= 0.749* $(window).height()) {
        const dark = $("#darkBackground");
        dark.css({
            'opacity': 0,
        });
        $('.SectionButton').each(function() {
            this.style.color = "gray";
            this.style.fontSize = "2.2vmax";
            this.style.fontWeight = "normal";
        })
        $(this).animate({
            'font-size': "3.5vmax"
        });
        $(this).css({
            'font-weight': "bold"
        });
        let name;
        switch (this.id) {
            case "SB1":
                name = ".photography";
                break;
            case "SB2":
                name = ".theater";
                break;
            case "SB3":
                name = ".games";
                break;
            case "SB4":
                name = ".lighting";
                break;
            case "SB5":
                name = ".engineering";
                break;
            case "SB6":
                name = ".exhibition";
                break;
            case "SB7":
                name = ".design";
                break;
        }
        $('.row').css({'display': 'none'});
        $(name).css({'display': 'block'});
        // for (let i=1; i<5; i++) {
        //     const column = "#column" + i.toString();
        //     $(column).empty();
        // }
        // $(name).each(function(i){
        //     const column = "#column" + (i % 4 + 1).toString();
        //     $(column).append($(this));
        // })
        // $(name).css({'display': 'block'});
    }
    sectionActive = true;
})
