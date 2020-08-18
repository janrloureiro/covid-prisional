$().ready(function () {
    $('img[data-magnify-src]:visible').magnify();

    $(".accordion > .body").toggle();
    $(".accordion").on("click", function () {
        $(this).toggleClass("expanded");
        $($(this).find(".body")).slideToggle("fast", function () {
            // Animation complete.
        });
    });

    $("nav .prev").on("click", function () {
        var active = $(this).parent().find("li.active");
        var target = active.prev();
        if (target.find("a").length > 0) {
            var href = target.find("a").attr("href");
            top.location.href = href;
        }
    });
    $("nav .next").on("click", function () {
        var active = $(this).parent().find("li.active");
        var target = active.next();
        if (target.find("a").length > 0) {
            var href = target.find("a").attr("href");
            top.location.href = href;
        }
    });
    $(".container>nav>div>label").on("click", function () {
        $(".container>nav>div ul").toggleClass('visible');
    });
});