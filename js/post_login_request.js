$(document).ready(
    function () {
        $('#freelanceLogin').modal('show');

        // SUBMIT FORM
        $("#login-form").submit(function (event) {
            // Prevent the form from submitting via the browser.
            event.preventDefault();
            if ($('#email').val() == "") {
                alert("You must enter email!");
                return;
            }
            if ($('#password').val() == "") {
                alert("You must enter password!");
                return;
            }
            ajaxPost();
        });

        function ajaxPost() {

            // PREPARE FORM DATA
            var formData = {
                username: $("#username").val(),
                password: $("#password").val()
            };
            console.log("Before post req");
            // DO POST

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "login",
                data: JSON.stringify(formData),
                statusCode: {
                    200: function() {
                        history.go(0);
                        },
                    401: function(){
                        $('#login_error').text("Bad credentials or user not activated");
                        $('#username').val("");
                        $('#password').val("");
                    }
                }
            });
        }
    }
    );
