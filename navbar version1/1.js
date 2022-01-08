if (window.innerWidth <= 900) {
    $(document).ready(function() {
        // console.log("done");
        $(".bars").click(function() {
            $("nav").css("width", "300px");

            setTimeout(() => {
                $(".logo").css("display", "flex");
            }, 120);
            $(".times").css("display", "flex");
            $("ul").css("display", "flex");
        });
        $(".times").click(function() {
            $("nav").css("width", "0");

            $(".logo").css("display", "none");

            $(".times").css("display", "none");
            $("ul").css("display", "none");
        });
    });
}
window.addEventListener("resize", () => {
    location.reload();
});