function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');

    $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
    $('.btn-hide-validate').each(function(){
        $(this).on('click',function(){
            hideValidate(this);
        });
    });
}
function validate (input) {
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }
    else {
        if($(input).val().trim() == ''){
            return false;
        }
        if($(input).attr('name') == 'title' && $(input).val().trim().length < 8){
            return false;
        }
        if($(input).attr('name') == 'description' && $(input).val().trim().length < 30){
            return false;
        }

    }
}



function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
    $(thisAlert).find('.btn-hide-validate').remove();
}

function addInvalidClassToHtml(check, id) {
    $(id).addClass("alert-validate");
    $(id).append('<span class="btn-hide-validate">&#xf136;</span>');
    //if he decides do enter bullshit after the first submit
    $(id).removeClass('true-validate');
    check = false;
    return check;
}

function removeInvalidClassFromHtml(id) {
    $(id).removeClass('alert-validate');
    $(id).addClass('true-validate');
    $(id).find('.btn-hide-validate').remove();
}


$(document).ready(
    function () {

        /*==================================================================
   [ Validate after type ]*/
        $('.validate-input .input100').each(function(){
            $(this).on('blur', function(){
                if(validate(this) == false){
                    showValidate(this);
                }
                else {
                    $(this).parent().addClass('true-validate');
                }
            })
        });

        $('#upload-files').on('change', function() {
            var files = $('#upload-files')[0].files;
            var totalFileSize = 0;
            for (var i = 0; i < files.length; i++) {
                var fileSize = parseFloat((files[i].size / 1024 / 1024).toFixed(2));
                console.log("file size:" + fileSize);
                totalFileSize += fileSize;
            }
            console.log(totalFileSize);
            if(totalFileSize > 10){
                $('#upload-files').val('');
                $('#fileSizeExceedModal').modal('show');
            }
        });

            /*==================================================================
            [ Validate ]*/
        var input = $('.validate-input .input100');

        $('.validate-form').on('submit',function(event){
            // Prevent the form from submitting via the browser.
            event.preventDefault();

            var check = true;

            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }



            const selectCategory = $( "#job_categories option:selected" ).text();
            const jobCategory = $("#jobCategory");
            if(selectCategory === "Choose one..."){
                check = addInvalidClassToHtml(check,jobCategory);
            }
            else{
                removeInvalidClassFromHtml(jobCategory);
            }


            const radioValueTypeProject = $("input[name='radioTypeProject']:checked").val();
            const typeOfProject = $("#typeOfProject");
            if(typeof radioValueTypeProject === "undefined"){
                check = addInvalidClassToHtml(check,typeOfProject);
            }
            else{
                removeInvalidClassFromHtml(typeOfProject)
            }

            const budgetAmountEntered = $('#amount').val();
            const budgetAmount = $("#budgetAmount");
            if(budgetAmountEntered === 0 || budgetAmountEntered <= 0 || !$.isNumeric(budgetAmountEntered)){
                check = addInvalidClassToHtml(check,budgetAmount);
            }
            else{
                removeInvalidClassFromHtml(budgetAmount)
            }

            const finishDateEntered = $('#picker').val();
            const finishDate = $('#datePicker');
            var currentDate = new Date().toJSON().slice(0, 10);

            console.log("date: " + currentDate);
            if(finishDateEntered <= currentDate){
                check = addInvalidClassToHtml(check,finishDate);
            }
            else{
                removeInvalidClassFromHtml(finishDate)
            }

            if(check) {
                var formData = new FormData(this);
                formData.append("postDate", currentDate);
                formData.append("userId", userId);

                $.ajax({
                    url: "saveTask",
                    type: "POST", // required
                    processData: false, // required
                    contentType: false, // required
                    cache: false,
                    data: formData,
                    enctype: 'multipart/form-data',
                    success: function(data) {
                        location.href = '/dashboard';
                        console.log("Uploaded.", arguments)
                    },
                    error: function() {
                        console.log("Error Uploading.", arguments)
                    }
                });

                console.log("Successfully filled form");


            }

        });


        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
                hideValidate(this);
                $(this).parent().removeClass('true-validate');
            });
        });


    }
);