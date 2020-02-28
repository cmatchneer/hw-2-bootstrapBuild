$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".collapse").slideToggle(1000);

    })
    $("#submit").on("click", function() {

        var userInput = {
            fullName: $("#fullName").val().trim(),
            companyName: $("#companyName").val().trim(),
            email: $("#email").val().trim(),
            questions: $("#questions").val().trim()
        };

        $.post("/api/email", userInput).then(function(response) {
            console.log(response);
        })

    })
})