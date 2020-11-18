function appendTaskToContainer(taskDetails, task) {


    var html = "\n" +
        "            <div class=\"col-md-12\">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-md-12 text-center\">\n";
    if(authorities.includes("ROLE_ADMIN")){
        html += "<label class=\"label-input100\"><b>Status</b></label>";
        html += "     <div class=\"custom-radios\">\n" +
            "  <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pending\">\n" +
            "    <input type=\"radio\" id=\"pending\" name=\"status\" value=\"Pending\" ";
        if(task.status === "Pending"){
            html += "checked";
        }
        html +=">\n" +
            "    <label for=\"pending\">\n" +
            "      <span>\n" +
            "        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg\" alt=\"Checked Icon\" />\n" +
            "      </span>\n" +
            "    </label>\n" +
            "  </div>\n" +
            "  \n" +
            "  <div data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Accepted\">\n" +
            "    <input type=\"radio\" id=\"accepted\" name=\"status\" value=\"Accepted\"";
        if(task.status === "Accepted"){
            html += "checked";
        }
        html += ">\n" +
            "    <label for=\"accepted\">\n" +
            "      <span>\n" +
            "        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg\" alt=\"Checked Icon\" />\n" +
            "      </span>\n" +
            "    </label>\n" +
            "  </div>\n" +
            "  \n" +
            "  <div data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Rejected\">\n" +
            "    <input type=\"radio\" id=\"rejected\" name=\"status\" value=\"Rejected\"";
        if(task.status === "Rejected"){
            html += "checked";
        }
        html += ">\n" +
            "    <label for=\"rejected\">\n" +
            "      <span>\n" +
            "        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg\" alt=\"Checked Icon\" />\n" +
            "      </span>\n" +
            "    </label>\n" +
            "  </div>\n" +
            "\n" +
            "  <div data-toggle=\"tooltip\" data-placement=\"top\" title=\"Finished\">\n" +
            "    <input type=\"radio\" id=\"finished\" name=\"status\" value=\"Finished\"";
        if(task.status === "Finished"){
            html += "checked";
        }
        html += ">\n" +
            "    <label for=\"finished\">\n" +
            "      <span>\n" +
            "        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg\" alt=\"Checked Icon\" />\n" +
            "      </span>\n" +
            "    </label>\n" +
            "  </div>\n" +
            "</div>";
    }
    else{
    switch (task.status) {
        case 'Pending': {
            html += "            <span class=\"badge badge-warning\" id=\"status\" style=\"font-size: 20px;\">Pending</span>\n";
            break;
        }
        case 'Accepted': {
            html += "            <span class=\"badge badge-success\" id=\"status\" style=\"font-size: 20px;\">Accepted</span>\n";
            break;
        }
        case 'Rejected': {
            html += "            <span class=\"badge badge-danger\" id=\"status\" style=\"font-size: 20px;\">Rejected</span>\n";
            break;
        }
        case 'Finished': {
            html += "            <span class=\"badge badge-info\" id=\"status\" style=\"font-size: 20px;\">Finished</span>\n";
        }

    }
    }

    html += "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" + "            <form id=\"task\">\n" +
        "            <div class=\"col-md-12\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-md-9\">\n" +
        "                <label class=\"label-input100\" for=\"title\"><b>title</b></label>\n" +
        "                <div class=\"input-group mb-3\">\n" +
        "                    <div class=\"input-group-append\">\n" +
        "                        <span class=\"input-group-text\"><i class=\"fas fa-thumbtack\"></i></span>\n" +
        "                    </div>\n" +
        "                    <input type=\"text\" placeholder=\"Your Task Title\" class=\"form-control\" id=\"title\" name=\"title\" value=\"" + task.title + "\" disabled aria-label=\"Amount (to the nearest dollar)\">\n" +
        "                </div>\n" +
        "                </div>\n" +
        "                    <div class=\"col-md-3\">\n" +
        "                        <label class=\"label-input100\" id=\"priceLabel\" for=\"price\"><b>price</b></label>\n" +
        "                        <div class=\"input-group mb-3\" id=\"priceAmount\">\n" +
        "                            <input type=\"text\" class=\"form-control\" id=\"price\" value=\"" + task.price + "\" disabled name=\"price\" aria-label=\"Amount\">\n" +
        "                            <div class=\"input-group-append\">\n" +
        "                                <span class=\"input-group-text\"><i class=\"fas fa-dollar-sign\"></i></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"col-md-12\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-md-12\">\n" +
        "                <label class=\"label-input100\" for=\"description\"><b>Description</b></label>\n" +
        "                <span class=\"contact100-form-description\" style=\"padding-bottom: 10px; display: block;\">This is the text that Ivan is going to see</span>\n" +
        "                <div class=\"wrap-input100\">\n" +
        "                    <textarea id=\"description\" class=\"input100\" name=\"description\" style=\"min-height: 144px;\" disabled placeholder=\"Describe your idea here...\">"
        + task.description + "</textarea>\n" +
        "                    <span class=\"focus-input100\"></span>\n" +
        "                </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"col-md-12\">\n" +
        "            <div class=\"row\">\n" +
        "                    <div class=\"col-md-8\">\n" +
        "                        <label class=\"label-input100\"><i class=\"fa fa-file-word\"></i> <b>Attached files ~ ";
    if (task.locationOfFiles.substr(0, 1) >= '0' && task.locationOfFiles.substr(0, 1) <= 10) {
        html += task.locationOfFiles.substr(0, 1) + "/10MB</b></label>\n";
        html += "<span class=\"contact100-form-description\" style=\"padding-bottom: 10px; display: block;\">" + task.locationOfFiles.substr(1, task.locationOfFiles.length) + "</span>\n";
    } else {
        html += "0/10MB</b></label>\n";
        html += "<span class=\"contact100-form-description\" style=\"padding-bottom: 10px; display: block;\">" + task.locationOfFiles + "</span>\n";
    }

    html += "\n" +
        "                    </div>\n" +
        "                    <div id=\"uploadFilesDiv\" style=\"display: none;\" class=\"col-md-4\">\n" +
        "                        <label class=\"label-input100\" for=\"upload-files\" ><b>Add more</b></label>\n" +
        "                        <input type=\"file\" name=\"files\" id=\"upload-files\" multiple style=\"color:transparent;\" onchange=\"this.style.color = 'black';\" />\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"col-md-12\" style=\"padding-top: 10px;\">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col-md-4\">\n" +
        "                        <label class=\"label-input100\"><i class=\"fas fa-chevron-right\"></i> <b>Project type</b></label>\n";

    switch (task.projectType) {
        case 'Ongoing project': {
            html += "                        <span class=\"contact100-form-description\" id=\"typeOfProjectText\" style=\"padding-bottom: 10px; display: block;\">Ongoing</span>\n" +
                "\n" +
                "                        <div class=\"input-group mb-3\" id=\"typeOfProject\" style=\"display: none;font-size: 14px;\">\n" +
                "                            <div class=\"custom-control custom-radio\">\n" +
                "                                <input type=\"radio\" id=\"radioTypeProject\" checked name=\"radioTypeProject\" class=\"custom-control-input\" value=\"Ongoing project\" >\n" +
                "                                <label class=\"custom-control-label\" for=\"radioTypeProject\">Ongoing</label>\n" +
                "                            </div>\n" +
                "                            <div class=\"custom-control custom-radio\">\n" +
                "                                <input type=\"radio\" id=\"customRadioInline2\" name=\"radioTypeProject\" class=\"custom-control-input\" value=\"One-time project\">\n" +
                "                                <label class=\"custom-control-label\" for=\"customRadioInline2\">One-time</label>\n" +
                "                            </div>\n" +
                "                        </div>\n";
            break;
        }
        case 'One-time project' : {
            html += "                        <span class=\"contact100-form-description\" id=\"typeOfProjectText\" style=\"padding-bottom: 10px; display: block;\">One-time</span>\n" +
                "\n" +
                "                        <div class=\"input-group mb-3\" id=\"typeOfProject\" style=\"display: none;font-size: 14px;\">\n" +
                "                            <div class=\"custom-control custom-radio\">\n" +
                "                                <input type=\"radio\" id=\"radioTypeProject\" name=\"radioTypeProject\" class=\"custom-control-input\" value=\"Ongoing project\" >\n" +
                "                                <label class=\"custom-control-label\" for=\"radioTypeProject\">Ongoing</label>\n" +
                "                            </div>\n" +
                "                            <div class=\"custom-control custom-radio\">\n" +
                "                                <input type=\"radio\" id=\"customRadioInline2\" checked name=\"radioTypeProject\" class=\"custom-control-input\" value=\"One-time project\">\n" +
                "                                <label class=\"custom-control-label\" for=\"customRadioInline2\">One-time</label>\n" +
                "                            </div>\n" +
                "                        </div>\n";
            break;
        }
    }

    html += "                    </div>\n" +
        "                    <div class=\"col-md-4\">\n" +
        "                        <label class=\"label-input100\"><i class=\"fas fa-sticky-note\"></i> <b>Job category</b></label>\n" +
        "                        <select class=\"custom-select\" disabled id=\"job_categories\" name=\"jobCategory\">\n";

    html += "<option selected value=\"";
    html += task.jobCategory + "\">" + task.jobCategory + "</option>\n";

    for(var i = 0;i < jobCategories.length;i++){
        if(jobCategories[i].nameOfCategory !== task.jobCategory){
            html +="<option value=\"" + jobCategories[i].nameOfCategory + "\">" + jobCategories[i].nameOfCategory + "</option>\n";
        }
    }
    // html += "                            <option value=\"MySQL\">MySQL</option>\n" +
    //             "                            <option value=\"C++\">C++</option>\n" +
    //             "                            <option value=\"Advanced Programming\">Advanced Programming</option>\n" +
    //             "                            <option value=\"Microservices\">Microservices</option>\n" +
               html +=  "                        </select>\n";


    html += "\n" +
        "                    </div>\n" +
        "                    <div class=\"col-md-4\">\n" +
        "                        <label class=\"label-input100\"><i class=\"fas fa-calendar-check\"></i> <b>Finish date</b></label>\n" +
        "                        <span class=\"contact100-form-description\" id=\"dateOfTask\" style=\"padding-bottom: 10px; display: block;\">" +
        task.finishTime + "</span>\n" +
        "                        <div class=\"input-group mb-3\" id=\"datePicker\">\n" +
        "                        <input type=\"text\" id=\"picker\" style=\"display: none;\" name=\"finishDate\" class=\"form-control\">\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"col-md-12\">\n";
    if (!authorities.includes("ROLE_ADMIN")) {

    html += "            <div class=\"row\" style=\"padding-top: 15px;\">\n" +
        "            <div class=\"col-md-6 text-center\">\n" +
        "                <button type=\"button\" id=\"editTask\" class=\"btn btn-secondary\" style=\"width: 67%;display: none;\">Edit</button>\n" +
        "            </div>\n" +
        "                <div class=\"col-md-6 text-center\">\n" +
        "                    <button type=\"submit\" id=\"saveTask\" class=\"btn btn-primary\" style=\"display: none;width: 67%;\">Save</button>\n" +
        "                </div>\n" +
        "            </div>\n";
}
        html += "            </div>\n" +
        "            </form>\n";

    html += "\n" +
        "    <!-- Modal - File size exceed = -->\n" +
        "    <div class=\"modal fade\" id=\"fileSizeExceedModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fileSizeExceedModal\" aria-hidden=\"true\">\n" +
        "        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
        "            <div class=\"modal-content\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <h5 class=\"modal-title\" id=\"successfulRegisterModalTitle\">Maximum file size exceeded!</h5>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    The total size of the uploaded files should be maximum <b>10 MB</b>.\n" +
        "                </div>\n" +
        "                <div class=\"modal-footer\">\n" +
        "                    <button class=\"btn btn-primary\" data-dismiss=\"modal\" role=\"button\">Ok</button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- End of Modal -->";

    html += "\n" +
        "    <!-- Modal - Successfully updated status = -->\n" +
        "    <div class=\"modal fade\" id=\"updateStatusSuccessModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateStatusSuccessModal\" aria-hidden=\"true\">\n" +
        "        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
        "            <div class=\"modal-content\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <h5 class=\"modal-title\" id=\"updateStatusSuccessModalTitle\">Update Successfull!</h5>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    You have successfully updated users task status.\n" +
        "                </div>\n" +
        "                <div class=\"modal-footer\">\n" +
        "                    <button class=\"btn btn-primary\" data-dismiss=\"modal\" role=\"button\">Ok</button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- End of Modal -->";




    taskDetails.append(html);
}

function editAttributes() {
    $("#title").prop("disabled", false);
    $("#description").prop("disabled", false);
    $("#price").prop("disabled", false);
    $("#typeOfProjectText").css("display", "none");
    $("#typeOfProject").css("display", "inline");
    $("#job_categories").prop("disabled", false);
    $("#uploadFilesDiv").css("display", "inline");
    $("#dateOfTask").css("display", "none");
    $("#picker").css("display", "inline");
    $("#saveTask").css("display", "inline");
    $("#title").css("border", "black 2px solid");
    $("#description").css("border", "black 2px solid");
    $("#price").css("border", "black 2px solid");
}

$(document).ready(function () {

    var taskDetails = $('#taskDetails');
    appendTaskToContainer(taskDetails,task);

    // for admin to set the status
    $("input[name='status']").change(function(){
        switch ($(this).val()) {
            case 'Pending': {
                $.ajax({
                    type: "POST",
                    url: "/updateTaskStatus/" + task.id + "/" + "Pending",
                    statusCode: {
                        200: function() {
                            $('#updateStatusSuccessModal').modal('show');
                            },
                        401: function(){
                            alert("Not updated message");
                        }
                    }
                });
                break;
            }

            case 'Accepted': {
                $.ajax({
                    type: "POST",
                    url: "/updateTaskStatus/" + task.id + "/" + "Accepted",
                    statusCode: {
                        200: function() {
                            $('#updateStatusSuccessModal').modal('show');
                        },
                        401: function(){
                            alert("Not updated message");
                        }
                    }
                });

                break;
            }
            case 'Rejected': {

                $.ajax({
                    type: "POST",
                    url: "/updateTaskStatus/" + task.id + "/" + "Rejected",
                    statusCode: {
                        200: function() {
                            $('#updateStatusSuccessModal').modal('show');
                        },
                        401: function(){
                            alert("Not updated message");
                        }
                    }
                });

                break;
            }
            case 'Finished': {

                $.ajax({
                    type: "POST",
                    url: "/updateTaskStatus/" + task.id + "/" + "Finished",
                    statusCode: {
                        200: function() {
                            $('#updateStatusSuccessModal').modal('show');
                        },
                        401: function(){
                            alert("Not updated message");
                        }
                    }
                });

            }

        }
    });

    $('#picker').datetimepicker({
        timepicker: false,
        datepicker: true,
        format : 'Y-m-d',
        value: task.finishTime,
        weeks : true
    });


    let editParam = new URLSearchParams(window.location.search);
    // ?edit attributes
    if(editParam.has('edit') && task.status === 'Pending'){
        editAttributes();
        $("#saveTask").css("display", "inline");
    }




    if($("#status").text() === 'Pending'){
        $("#editTask").css("display","inline");
    }

    $("#editTask").click(function () {
        editAttributes();
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
            if(task.locationOfFiles.substr(0,1) >= '0' && task.locationOfFiles.substr(0,1) <= 10) {
            var allFilesSize = parseInt(totalFileSize);
            allFilesSize += parseInt(task.locationOfFiles.substr(0,1));
                if (allFilesSize >= 10) {
                $('#upload-files').val('');
                $('#upload-files').css('border','2px solid red');
                $('#fileSizeExceedModal').modal('show');
            }
                else{
                    $("#upload-files").css("border","2px solid #2bd82b");
                }
            }
            else{
                if (totalFileSize > 10) {
                $('#upload-files').val('');
                $('#upload-files').css('border','2px solid red');
                $('#fileSizeExceedModal').modal('show');
                }
                else{
                    $("#upload-files").css("border","2px solid #2bd82b");
                }
            }
        });

    $("#task").on("submit", function (e) {

        e.preventDefault();

        var check = true;

        if($("#title").val().trim().length < 8){
            $("#title").css("border","2px solid red");
            check = false;
        }
        else{
            $("#title").css("border","2px solid #2bd82b");
        }
        if($("#description").val().trim().length < 30) {
            $("#description").css("border", "2px solid red");
            check = false;
        }
        else{
            $("#description").css("border","2px solid #2bd82b");
        }
        if($("#price").val() === 0 || $("#price").val() <= 0 || !$.isNumeric($("#price").val())) {
            $("#price").css("border", "2px solid red");
            check = false;
        }
        else{
            $("#price").css("border","2px solid #2bd82b");
        }
        var currentDate = new Date().toJSON().slice(0, 10);

        console.log("date: " + currentDate);
        if($("#picker").val() <= currentDate) {
            $("#picker").css("border", "2px solid red");
            check = false;
        }
        else{
            $("#picker").css("border","2px solid #2bd82b");
        }

        if(check){
            var formData = new FormData(this);
            formData.append("userId", task.userId);
            formData.append("taskId", task.id);


            $.ajax({
                url: "/updateTask",
                type: "POST", // required
                processData: false, // required
                contentType: false, // required
                cache: false,
                data: formData,
                enctype: 'multipart/form-data',
                success: function(data) {
                    window.location.replace(task.id);
                    console.log("Uploaded.", arguments)
                },
                error: function() {
                    console.log("Error Uploading.", arguments)
                }
            });


        }
        });


    $('[data-toggle="tooltip"]').tooltip();

    });