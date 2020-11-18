
function deleteComment(clicked_id){
    var x = document.getElementById(clicked_id);
    x.style.display = "none";

    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: "deleteComment/" + clicked_id,
            success: function (result) {
            console.log(result);
        }
    });

}

function triggerDeleteCommentModal(commentId){
    $('#deleteCommentModal' + commentId).modal('show');
}



function appendCommentsToCommentContainer(commentContainer, comments) {

    for (i = 0; i < comments.length; i++) {
        var html = "<div id=";
        html += comments[i].id + "";
        html += " class=\"row text-center\">\n" +
            "            <div class='col-12' style='text-align: center;margin: 20px 0;'>\n" +
            "                <div class='card'>\n";
            if(authorities.includes("ROLE_ADMIN")){
            html += "<button type=\"button\" onClick=\"triggerDeleteCommentModal(" + comments[i].id + ")\" class=\"deleteComment close\" style=\"color:red;padding:15px 10px 0px 0px\" aria-label=\"Close\">\n" +
                "                            <span aria-hidden=\"true\">&times;</span>\n" +
                "                        </button>\n";

            html += " <div class=\"modal fade\" id=\"deleteCommentModal" + comments[i].id + "\"" + " tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n" +
                "                <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
                "                    <div class=\"modal-content\">\n" +
                "                        <div class=\"modal-header\">\n" +
                "                            <h5 class=\"modal-title\" id=\"exampleModalCenterTitle2\">Delete</h5>\n" +
                "                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
                "                                <span aria-hidden=\"true\">&times;</span>\n" +
                "                            </button>\n" +
                "                        </div>\n" +
                "                        <div class=\"modal-body\">\n" +
                "                            Do you really want to delete this comment?\n" +
                "                        </div>\n" +
                "                        <div class=\"modal-footer\">\n" +
                "                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n" +
                "                            <button type=\"button\" id=\"deleteCommentYesButton\" " +
                "onClick=\"deleteComment(" + comments[i].id + ")\" " + "class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>"
            }

            html += "                    <div class='card-header'>\n" +
            "<h4>" + comments[i].id + "</h4>\n" +
            "                    </div>\n" +
            "\n" +
            "\n" +
            "                <div class='card-body'>\n" +
            "                    <blockquote class='blockquote text-center'>\n" +
            "                        <p class='mb-0' style=\"padding-bottom: 15px;\" >" + comments[i].contentOfComment + "</p>\n" +
            "                    <footer class='blockquote-footer text-center' style='color:#c7d8cd;height: 80px;' >\n" +
            "                        Said by:\n" +
            "                        <cite title='Source Title' style='color:#ffff;' >" + comments[i].publisherName +
            "                        </cite>\n" +
            "                    </footer>\n" +
            "                    </blockquote>\n" +
            "                </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";

        commentContainer.append(html);
    }
}

$(document).ready(function () {
    var commentContainer = $('#comment-container');

    appendCommentsToCommentContainer(commentContainer, comments);

});