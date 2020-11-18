function deleteUser(user_id) {
    var x = document.getElementById(user_id);
    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: "deleteUser/" + user_id,
        statusCode: {
            202: function() {
                x.style.display = "none";
            },
              403: function () {
                  $('#deleteAdminModal').modal('show');
            }
        }
    });
}

function triggerDeleteUserModal(userId){
    $('#deleteUserModal' + userId).modal('show');
}