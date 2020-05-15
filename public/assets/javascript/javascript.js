$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
    $('.collapse').collapse({
        toggle: false
    });
    $("#submit").on("click", function() {

        var userInput = {
            fullName: $("#fullName").val().trim(),
            companyName: $("#companyName").val().trim(),
            email: $("#email").val().trim(),
            questions: $("#questions").val().trim()
        };
        console.log(userInput.fullName.length)
        if (userInput.fullName.length > 0 && userInput.companyName.length > 0 && userInput.email.length > 0 && userInput.questions.length > 0) {
            console.log("test");
            $.post("/api/email", userInput).then(function(response) {
                console.log(response);
            })
        } else {
            alert("please fill out whole form")
        }


    })
})