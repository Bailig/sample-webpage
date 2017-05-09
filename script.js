
$(document).ready(function() {

    spyScrollAndToggleSidebarFix();

});


function spyScrollAndToggleSidebarFix() {
    $(window).on("scroll", function() {
        console.log(this.scrollY);
        if (this.scrollY > 145) {
            $("aside").removeClass("col-left").addClass("col-left-fixed");
        } else {
            $("aside").removeClass("col-left-fixed").addClass("col-left");
        }
    });
}
