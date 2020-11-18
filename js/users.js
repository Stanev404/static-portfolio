function appendUsersToUserContainer(usersContainer, usersList) {

    for (i = 0; i < usersList.length; i++) {
        var html = "<div class=\"table-row row text-center\"";
            html += "id=\"" + usersList[i].userId + "\"> \n" +
         "        <div class=\"col-md-2\">\n" +
         "        <span class=\"mobile-details\">ID: </span>\n" +
         "    <span class=\"badge badge-pill badge-primary\">" + usersList[i].userId + "</span></div>\n" +
         "    <div class=\"col-md-4\">\n" +
         "        <span class=\"mobile-details\">Email: </span>\n" +
         "    <span class=\"badge badge-pill badge-secondary\">" + usersList[i].email + "</span></div>\n" +
         "    <div class=\"col-md-2\">\n" +
         "        <span class=\"mobile-details\">Name: </span>\n" +
         "    <span class=\"badge badge-pill badge-secondary\" >" + usersList[i].name + "</span></div>\n" +
         "    <div class=\"col-md-2\">\n" +
         "        <span class=\"mobile-details\">Enabled: </span>\n" +
         "    <span class=\"badge badge-pill badge-secondary\">" + usersList[i].enabled + "</span></div>\n" +
         "    <div class=\"col-md-2 justify-content-center\">\n" +
         "        <span class=\"mobile-details\">Delete: </span>\n" +
         "    <button onClick=\"triggerDeleteUserModal(" + usersList[i].userId + ")\"\n" +
         "    type=\"button\" class=\"close\" style=\"color:red;\" aria-label=\"Close\">\n" +
         "        <span aria-hidden=\"true\">&times;</span>\n" +
         "    </button>\n" +
         "    </div>\n" +
         "    </div>";

            // modal logic
            html += "    <div class=\"modal fade\" id=\"deleteUserModal" + usersList[i].userId +"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n" +
                "        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
                "            <div class=\"modal-content\">\n" +
                "                <div class=\"modal-header\">\n" +
                "                    <h5 class=\"modal-title\" id=\"exampleModalCenterTitle2\">Delete</h5>\n" +
                "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
                "                        <span aria-hidden=\"true\">&times;</span>\n" +
                "                    </button>\n" +
                "                </div>\n" +
                "                <div class=\"modal-body\">\n" +
                "                    Do you really want to delete this user?\n" +
                "                </div>\n" +
                "                <div class=\"modal-footer\">\n" +
                "                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n" +
                "                    <button type=\"button\" id=\"deleteUserYesButton\" onClick=\"deleteUser(" + usersList[i].userId + ")\" " + "class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>";

        usersContainer.append(html);
    }

}

$(document).ready(function () {
    var usersContainer = $('#usersContainer');

    appendUsersToUserContainer(usersContainer, usersList);

});