// accordion services
$(".list-bar a").click(function() {
    if ($(this).hasClass("attention")) {
        $(this).removeClass("attention");
    } else {
        $(".list-bar a").removeClass("attention");
        $(this).addClass("attention");
    }
});
$(".list-bar a").click(function() {
    if ($(".info-1").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-1").addClass("visible-info");
    } else if ($(".info-2").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-2").addClass("visible-info");
    } else if ($(".info-3").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-3").addClass("visible-info");
    } else if ($(".info-4").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-4").addClass("visible-info");
    } else if ($(".info-5").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-5").addClass("visible-info");
    } else if ($(".info-6").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-6").addClass("visible-info");
    } else if ($(".info-7").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-7").addClass("visible-info");
    } else if ($(".info-8").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-8").addClass("visible-info");
    } else if ($(".info-9").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-9").addClass("visible-info");
    } else if ($(".info-10").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-10").addClass("visible-info");
    } else if ($(".info-11").hasClass("attention")) {
        $(".text-appear").removeClass("visible-info");
        $(".text-appear-11").addClass("visible-info");
    };
});

// staff in slider-map
$(".photo-col li").click(function() {
        $(".photo-col li").removeClass("touched");
        $(this).addClass("touched");
});
$(".photo-col li").click(function() {
    if ($(".info-tokareva").hasClass("touched")) {
        $(".kolomenskaya").removeClass("visible-info");
        $("#tokareva").addClass("visible-info");
    } else if ($(".info-soloveva").hasClass("touched")) {
        $(".kolomenskaya").removeClass("visible-info");
        $("#soloveva").addClass("visible-info");
    } else if ($(".info-mavlyanova").hasClass("touched")) {
        $(".volokolamskaya").removeClass("visible-info");
        $("#mavlyanova").addClass("visible-info");
    } else if ($(".info-archiley").hasClass("touched")) {
        $(".volokolamskaya").removeClass("visible-info");
        $("#archiley").addClass("visible-info");
    } else if ($(".info-gurganchov").hasClass("touched")) {
        $(".volokolamskaya").removeClass("visible-info");
        $("#gurganchov").addClass("visible-info");
    } else if ($(".info-selezneva").hasClass("touched")) {
        $(".belomorskaya").removeClass("visible-info");
        $("#selezneva").addClass("visible-info");
    } else if ($(".info-mezin").hasClass("touched")) {
        $(".belomorskaya").removeClass("visible-info");
        $("#mezin").addClass("visible-info");
    } else if ($(".info-smirnov").hasClass("touched")) {
        $(".belomorskaya").removeClass("visible-info");
        $("#smirnov").addClass("visible-info");
    } else if ($(".info-menchikova").hasClass("touched")) {
        $(".udaltsova").removeClass("visible-info");
        $("#menchikova").addClass("visible-info");
    } else if ($(".info-peganova").hasClass("touched")) {
        $(".udaltsova").removeClass("visible-info");
        $("#peganova").addClass("visible-info");
    } else if ($(".info-prusakov").hasClass("touched")) {
        $(".udaltsova").removeClass("visible-info");
        $("#prusakov").addClass("visible-info");
    } else if ($(".info-lapot").hasClass("touched")) {
        $(".tulskaya").removeClass("visible-info");
        $("#lapot").addClass("visible-info");
    } else if ($(".info-zinin").hasClass("touched")) {
        $(".tulskaya").removeClass("visible-info");
        $("#zinin").addClass("visible-info");
    } else if ($(".info-artemova").hasClass("touched")) {
        $(".tulskaya").removeClass("visible-info");
        $("#artemova").addClass("visible-info");
    } else if ($(".info-lazarev").hasClass("touched")) {
        $(".universitet").removeClass("visible-info");
        $("#lazarev").addClass("visible-info");
    } else if ($(".info-maria").hasClass("touched")) {
        $(".universitet").removeClass("visible-info");
        $("#maria").addClass("visible-info");
    } else if ($(".info-jarovaya").hasClass("touched")) {
        $(".moskovskaya").removeClass("visible-info");
        $("#jarovaya").addClass("visible-info");
    } else if ($(".info-konstantinov").hasClass("touched")) {
        $(".moskovskaya").removeClass("visible-info");
        $("#konstantinov").addClass("visible-info");
    } else if ($(".info-lugunaya").hasClass("touched")) {
        $(".moskovskaya").removeClass("visible-info");
        $("#lugunaya").addClass("visible-info");
    } else if ($(".info-tkachuk").hasClass("touched")) {
        $(".moskovskaya").removeClass("visible-info");
        $("#tkachuk").addClass("visible-info");
    } else if ($(".info-morozova").hasClass("touched")) {
        $(".moskovskaya").removeClass("visible-info");
        $("#morozova").addClass("visible-info");    
    };
});

// callback
$("#form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        alert("Спасибо за заявку! Скоро мы с Вами свяжемся!");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});

// comments
$("a.full-comment").click(function() {
    if ($("#carousel-comments").hasClass("show-full")) {
        $("#carousel-comments").removeClass("show-full");
        $(".full").removeClass("visible-comment");
        $(".preview").removeClass("hidden-comment");
    } else {
        $("#carousel-comments").addClass("show-full");
        $(".full").addClass("visible-comment");
        $(".preview").addClass("hidden-comment");
    }
});