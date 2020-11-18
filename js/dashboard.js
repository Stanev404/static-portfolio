function sortByUpPrice(taskList) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].price < taskList[j].price) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }
}

function sortByLowPrice(taskList) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].price > taskList[j].price) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }
}

function sortByStatus(taskList, status) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].status !== status && taskList[j].status === status) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }

}

function sortByUpFinishDate(taskList) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].finishTime < taskList[j].finishTime) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }
}
function sortByLowFinishDate(taskList) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].finishTime > taskList[j].finishTime) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }
}
function sortByUpPostDate(taskList) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].postedTime < taskList[j].postedTime) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }
}
function sortByLowPostDate(taskList) {
    for (i = 0; i < taskList.length; i++) {
        for (j = i + 1; j < taskList.length; j++) {
            if (taskList[i].postedTime > taskList[j].postedTime) {
                var currentTask = taskList[i];
                taskList[i] = taskList[j];
                taskList[j] = currentTask;
            }

        }
    }
}



function appendLoggedInUserTasksToContainer(taskContainer, taskList) {
    for (i = 0; i < taskList.length; i++) {

            var html = "<li class=\"table-row row\"id=\"" + taskList[i].id + "\">\n";
            html += "<div class=\"col-md-4\">\n";
            html += "<h4 id=\"titleLabel\" ><a href=\"/task/" + taskList[i].id +"\">" + taskList[i].title + "</a></h4>";
            html += "<p>" + taskList[i].description.substr(0, 20) + '...' + "</p>";
            html += "</div>";

        html += "<div class=\"col-md-1 d-flex align-items-center justify-content-center font-size\" data-label=\"Amount\">\n" +
            "                <span class=\"badge badge-pill badge-primary \" id='priceLabel' >$" + taskList[i].price + "</span>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-1 d-flex align-items-center justify-content-center font-size\" >";
        switch(taskList[i].status) {
            case 'Pending':{
            html += "<span class=\"badge badge-warning status-badge\">" + taskList[i].status + "</span>";
            break;
            }
            case 'Accepted':{
            html += "<span class=\"badge badge-success status-badge\">" + taskList[i].status + "</span>";
            break;
            }
            case 'Rejected':{
            html += "<span class=\"badge badge-danger status-badge\">" + taskList[i].status + "</span>";
            break;
            }
            case 'Finished':{
            html += "<span class=\"badge badge-info status-badge\">" + taskList[i].status + "</span>";
            break;
            }
        }
            html += "</div>\n" +
            "            <div class=\"col-md-1 d-flex align-items-center justify-content-center font-size new-line\" >" + "FinishDate"
                + "&#10;";
            var finishDate = new Date(taskList[i].finishTime);
            var finishMonth = finishDate.getMonth() + 1;
            var finishDateFormat = finishDate.getDate() +'/'+ finishMonth + '/' + finishDate.getFullYear( );
            html += finishDateFormat;

            html    += "</div>\n";
            html +=  "<div class=\"col-md-1 d-flex align-items-center justify-content-center font-size new-line\" >" + "PostDate"
                + "&#10;";
            var postDate = new Date(taskList[i].postedTime);
            var postMonth = postDate.getMonth() + 1;
            var postDateFormat = postDate.getDate() +'/'+ postMonth + '/' + postDate.getFullYear();
            html += postDateFormat;
            html += "</div>\n" +
            "            <div class=\"col-md-2 row d-flex align-items-center justify-content-center icon-container-size\" >\n" +
            "                <div class=\"col-md-4 font-size \">\n";
            html += "                <a href=\"/task/" + taskList[i].id +"\"><i class=\"fas fa-info\"></i></a>\n" +
            "                </div>\n";

            if(taskList[i].status === 'Pending'){
                html += "                <div class=\"col-md-4 font-size\">\n";
                html +=                 "<a href='#' onClick=\"triggerModal(" + taskList[i].id + ");return false;\"><i style=\"color:#b40000;\" class=\"far fa-trash-alt\"></i></a>";
                html += "                </div>\n";
        html += "                <div class=\"col-md-4 font-size\">\n";
        html +="                    <a href=\"/task/" + taskList[i].id + "?edit" + "\"><i class=\"far fa-edit\"></i></a>\n";
        html += "                </div>\n";
        html += "                            <!-- Modal - Delete Task -->\n" +
            "                            <div class=\"modal fade\" id=\"deleteModal" + taskList[i].id +"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"successfulRegisterModalTitle\" aria-hidden=\"true\">\n" +
            "                                <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
            "                                    <div class=\"modal-content\">\n" +
            "                                        <div class=\"modal-header\">\n" +
            "                                            <h5 class=\"modal-title\" id=\"successfulRegisterModalTitle\">Delete </h5>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"modal-body\">\n" + "Are you sure you want to delete task <b>" + taskList[i].title + "</b>?" +
            "                                        </div>\n" +
            "                                        <div class=\"modal-footer\">\n" +

            "                                            <button class=\"btn btn-secondary\" data-dismiss=\"modal\" type=\"button\">No</button>\n" +
                "                                            <button onClick=\"deleteTask(" + taskList[i].id + ")\" " +
                "                                               class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">Yes</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>"
            };
        html +=            "            </div>\n" +
            "        </li>";
        taskContainer.append(html);
    }
    }
function triggerModal(modalId){
$('#deleteModal' + modalId).modal('show');
}

function appendAllTaskFromAllUsersToContainer(taskContainer, taskList, users) {

    for (i = 0; i < taskList.length; i++) {

        var html = "<li class=\"table-row row\"id=\"" + taskList[i].id + "\">\n";
        html += "<div class=\"col-md-3\">\n";
        html += "<h4 id=\"titleLabel\" ><a href=\"/task/" + taskList[i].id +"\">" + taskList[i].title + "</a></h4>";
        html += "<p>" + taskList[i].description.substr(0, 20) + '...' + "</p>";
        html += "</div>";

        var publisherName;
        for (j = 0; j < users.length; j++) {
        if(taskList[i].userId === users[j].userId){
            publisherName = users[j].name;
            break;
        }
        }



        html += "<div class=\"col-md-1\">\n";
        html += "<h4>FROM</h4>";
        html += "<p>" + publisherName + "</p>";
        html += "</div>";

        html += "<div class=\"col-md-1 d-flex align-items-center justify-content-center font-size\" data-label=\"Amount\">\n" +
            "                <span class=\"badge badge-pill badge-primary \" id='priceLabel' >$" + taskList[i].price + "</span>\n" +
            "            </div>\n" +
            "            <div class=\"col-md-1 d-flex align-items-center justify-content-center font-size\" >";
        switch(taskList[i].status) {
            case 'Pending':{
                html += "<span class=\"badge badge-warning status-badge\">" + taskList[i].status + "</span>";
                break;
            }
            case 'Accepted':{
                html += "<span class=\"badge badge-success status-badge\">" + taskList[i].status + "</span>";
                break;
            }
            case 'Rejected':{
                html += "<span class=\"badge badge-danger status-badge\">" + taskList[i].status + "</span>";
                break;
            }
            case 'Finished':{
                html += "<span class=\"badge badge-info status-badge\">" + taskList[i].status + "</span>";
                break;
            }
        }
        html += "</div>\n" +
            "            <div class=\"col-md-1 d-flex align-items-center justify-content-center font-size new-line\" >" + "FinishDate"
            + "&#10;";
        var finishDate = new Date(taskList[i].finishTime);
        var finishMonth = finishDate.getMonth() + 1;
        var finishDateFormat = finishDate.getDate() +'/'+ finishMonth + '/' + finishDate.getFullYear( );
        html += finishDateFormat;
        html += "</div>\n";
        html +=  "<div class=\"col-md-1 d-flex align-items-center justify-content-center font-size new-line\" >" + "PostDate "
            + "&#10;";
        var postDate = new Date(taskList[i].postedTime);
        var postMonth = postDate.getMonth() + 1;
        var postTimeFormat = postDate.getDate() + '/'+ postMonth + '/' + postDate.getFullYear();
        html += postTimeFormat;
        html += "</div>\n" +
            "            <div class=\"col-md-2 row d-flex align-items-center justify-content-center icon-container-size\" >\n" +
            "                <div class=\"col-md-4 font-size \" >\n";
        html += "                <a href=\"/task/" + taskList[i].id +"\"><i class=\"fas fa-info\"></i></a>\n" +
            "                </div>\n";

        html +=            "            </div>\n" +
            "        </li>";
        taskContainer.append(html);
    }
}

function clearOtherSortOptions(sortedItem) {
    switch (sortedItem) {
        case 'Search': {
            var status = $('#status');
            status.removeClass("btn-success");
            status.removeClass("btn-danger");
            status.removeClass("btn-warning");
            status.removeClass("btn-info");

            status.addClass("btn-secondary");
            status.html("Status");

            var finishDate = $('#finishDate');
            finishDate.html('Finish Date');
            var postDate = $('#postDate');
            postDate.html('Post Date');
            var price = $('#price');
            price.html('Price');

            break;
        }
        case 'Price': {
            var status = $('#status');

            status.removeClass("btn-success");
            status.removeClass("btn-danger");
            status.removeClass("btn-warning");
            status.removeClass("btn-info");

            status.addClass("btn-secondary");
            status.html("Status");

            var finishDate = $('#finishDate');
            finishDate.html('Finish Date');
            var postDate = $('#postDate');
            postDate.html('Post Date');

            break;
        }
        case 'Finish Date': {
            var status = $('#status');

            status.removeClass("btn-success");
            status.removeClass("btn-danger");
            status.removeClass("btn-warning");
            status.removeClass("btn-info");

            status.addClass("btn-secondary");
            status.html("Status");
            var postDate = $('#postDate');
            postDate.html('Post Date');
            var price = $('#price');
            price.html('Price');
            break;
        }
        case 'Post Date': {
            var status = $('#status');

            status.removeClass("btn-success");
            status.removeClass("btn-danger");
            status.removeClass("btn-warning");
            status.removeClass("btn-info");

            status.addClass("btn-secondary");
            status.html("Status");
            var finishDate = $('#finishDate');
            finishDate.html('Finish Date');
            var price = $('#price');
            price.html('Price');
            break;
        }
        case 'Status': {
            var postDate = $('#postDate');
            postDate.html('Post Date');
            var finishDate = $('#finishDate');
            finishDate.html('Finish Date');
            var price = $('#price');
            price.html('Price');
            break;
        }
    }
}

function sortBySearchKeyword(allTasks) {
    
}

function showSearchResult() {
    var searchDetails = $("#searchDetails").val();
    var taskContainer = $('#taskContainer');

    var noResult = true;
    var searchResultList = [];
    if(!isAdmin) {
        for (i = 0; i < taskList.length; i++) {
            if (taskList[i].description.toLowerCase().includes(searchDetails.toLowerCase()) ||
                taskList[i].title.toLowerCase().includes(searchDetails.toLowerCase())) {

                noResult = false;
                searchResultList.push(taskList[i]);
            }
        }
    }
    else{
        for (i = 0; i < allTasks.length; i++) {
            if (allTasks[i].description.toLowerCase().includes(searchDetails.toLowerCase()) ||
                allTasks[i].title.toLowerCase().includes(searchDetails.toLowerCase())) {

                noResult = false;
                searchResultList.push(allTasks[i]);
            }
        }
    }
        if(isAdmin && noResult === false){
            taskContainer.empty();
            appendAllTaskFromAllUsersToContainer(taskContainer,searchResultList,users);
        }
        else if (isAdmin === false && noResult === false){
            taskContainer.empty();
            appendLoggedInUserTasksToContainer(taskContainer,searchResultList);
        }

    clearOtherSortOptions("Search");
    if(noResult){
        $( ".searchbar" ).css( "border", "2px solid red" );
        $( ".search_input" ).css( "color", "red" );
        console.log("nothing found");
    }
    else{
        $( ".searchbar" ).css( "border", "none" );
        $( ".search_input" ).css( "color", "white" );
    }
}

function addNewCategory() {
        var newCategory = $('#newCategory').val();
    for (i = 0; i < jobCategories.length; i++) {
    if(newCategory === jobCategories[i].nameOfCategory){
        $('.input-group').css("border","2px solid red");
        return;
    }
    }

        if($.trim(newCategory) !== ''){
        console.log(newCategory);
            // DO POST
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "jobCategory",
                data: JSON.stringify({nameOfCategory : newCategory}),
                dataType: 'json',
                statusCode:{
                    201: function() {
                    var jobCategoriesList = $('#jobCategoriesList');
                    jobCategoriesList.append("<b>, " + newCategory);
                    $('#newCategory').val("");
                    $('.input-group').css("border","none");
                    jobCategories.push({nameOfCategory : newCategory});
                    },
                    403: function(){
                        alert("Access denied");
                    }
                }});

        }
        else{
            $('.input-group').css("border","2px solid red");
        }
}

function addCategories() {
        var categoryBtn = $('#categoriesButton');
        categoryBtn.on('click', function () {
            var html = "<div class=\"modal fade\" id=\"categoriesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n" +
                "        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
                "            <div class=\"modal-content\">\n" +
                "                <div class=\"modal-header\">\n" +
                "                    <h5 class=\"modal-title\" id=\"exampleModalCenterTitle3\">Job categories</h5>\n" +
                "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
                "                        <span aria-hidden=\"true\">&times;</span>\n" +
                "                    </button>\n" +
                "                </div>\n" +
                "                <div class=\"modal-body\">\n" +
                // ajax get all categories and list them
                "<p style='margin-bottom: 0;'>Available:</p>" +
                "<div id=\"jobCategoriesList\" style='margin-bottom: 1rem;'>" +
                "<b>";

            for (i = 0; i < jobCategories.length; i++) {
                html += jobCategories[i].nameOfCategory;
                if(i !== jobCategories.length-1){
                    html += ", ";
                }
            }
                html += "</b>" +
                 "</div>" +
                "\n" +
                "<div class=\"input-group input-group-sm mb-3\" style='margin-bottom: 0 !important;width: 280px;'>\n" +
                "  <div class=\"input-group-prepend\">\n" +
                "    <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">New Category</span>\n" +
                "  </div>\n" +
                "  <input type=\"text\" id='newCategory' class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\">\n" +

            "</div>" +

                "                </div>\n" +
                "                <div class=\"modal-footer justify-content-between\">\n" +
                "                    <button type=\"button\" onClick=\"addNewCategory()\" class=\"btn btn-primary\" >Add</button>\n" +
                "                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>";
            var container = $('.container');
            container.append(html);
            $('#categoriesModal').modal('show');
        });

}

$(document).ready(function () {


    var taskContainer = $('#taskContainer');
    if (!isAdmin) {
        appendLoggedInUserTasksToContainer(taskContainer, taskList);
    } else {
        appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
    }
    // search logic
    $(".search_icon").click(function () {
        showSearchResult();
    });
    $("#searchDetails").keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);

        if (code === 13) {
            e.preventDefault();
            showSearchResult();
        }

    });

    $('#price').click(function () {
        clearOtherSortOptions("Price");
        var price = $('#price');
        var valueOfPrice = price.text();
        if (valueOfPrice === 'Price' || valueOfPrice === 'Price ↑') {
            price.html('Price ↓');
            if (isAdmin) {
                sortByLowPrice(allTasks);
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByLowPrice(taskList);
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
            return;
        }

        if (valueOfPrice === 'Price ↓') {
            price.html('Price ↑');
            if (isAdmin) {
                sortByUpPrice(allTasks);
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByUpPrice(taskList);
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
        }

    });

    $('#finishDate').click(function () {
        clearOtherSortOptions("Finish Date");

        var finishDate = $('#finishDate');
        var valueOfFinishDate = finishDate.text();
        if (valueOfFinishDate === 'Finish Date' || valueOfFinishDate === 'Finish Date ↑') {
            finishDate.html('Finish Date ↓');
            if (isAdmin) {
                sortByLowFinishDate(allTasks);
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByLowFinishDate(taskList);
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
            return;
        }
        if (valueOfFinishDate === 'Finish Date ↓') {
            finishDate.html('Finish Date ↑');
            if (isAdmin) {
                sortByUpFinishDate(allTasks);
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByUpFinishDate(taskList);
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
        }
    });

    $('#postDate').click(function () {
        clearOtherSortOptions('Post Date');
        var postDate = $('#postDate');
        var valueOfPostDate = postDate.text();
        if (valueOfPostDate === 'Post Date' || valueOfPostDate === 'Post Date ↑') {
            postDate.html('Post Date ↓');
            if (isAdmin) {
                sortByLowPostDate(allTasks);
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByLowPostDate(taskList);
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
            return;
        }
        if (valueOfPostDate === 'Post Date ↓') {
            postDate.html('Post Date ↑');
            if (isAdmin) {
                sortByUpPostDate(allTasks);
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByUpPostDate(taskList);
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
        }
    });

    $('#status').click(function () {
        clearOtherSortOptions('Status');

        var status = $('#status');

        if (status.hasClass("btn-secondary") || status.hasClass("btn-info")) {
            status.removeClass("btn-secondary");
            status.removeClass("btn-info");
            status.addClass("btn-warning");
            status.html("Pending");
            if (isAdmin) {
                sortByStatus(allTasks, 'Pending');
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByStatus(taskList, 'Pending');
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
            return;
        }
        if (status.hasClass("btn-warning")) {
            status.removeClass("btn-warning");
            status.addClass("btn-success");
            status.html("Accepted");
            if (isAdmin) {
                sortByStatus(allTasks, 'Accepted');
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByStatus(taskList, 'Accepted');
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
            return;
        }
        if (status.hasClass("btn-success")) {
            status.removeClass("btn-success");
            status.addClass("btn-danger");
            status.html("Rejected");
            if (isAdmin) {
                sortByStatus(allTasks, 'Rejected');
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByStatus(taskList, 'Rejected');
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
            return;
        }
        if (status.hasClass("btn-danger")) {
            status.removeClass("btn-danger");
            status.addClass("btn-info");
            status.html("Finished");
            if (isAdmin) {
                sortByStatus(allTasks, 'Finished');
                taskContainer.empty();
                appendAllTaskFromAllUsersToContainer(taskContainer, allTasks, users);
            } else {
                sortByStatus(taskList, 'Finished');
                taskContainer.empty();
                appendLoggedInUserTasksToContainer(taskContainer, taskList);
            }
        }
    });

    if (isAdmin) {
        addCategories();
    }

});