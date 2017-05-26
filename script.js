
$(document).ready(function() {
    init();
    handelNavigation();
    spyScrollAndToggleSidebarFix();
});

function init() {
    $("#main").load("partial-views/overview.html");
    $(".nav-btn:first").addClass("active");
}

function handelNavigation() {
    $(".nav-btn").on("click", function() {
        havdelActiveNavigationButton(this);
        var fileName = "partial-views/" + this.innerText.toLowerCase() + ".html";
        $("#main").load(fileName);
    });
}

function havdelActiveNavigationButton(navBtn) {
    $(".navbar").find("a.nav-btn").removeClass("active");
    $(navBtn).addClass("active");
}

function spyScrollAndToggleSidebarFix() {
    $(window).on("scroll", function() {
        console.log(this.scrollY);
        if (this.scrollY > 340) {
            $("aside").removeClass("col-left").addClass("col-left-fixed");
        } else {
            $("aside").removeClass("col-left-fixed").addClass("col-left");
        }
    });
}
