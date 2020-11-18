function deleteTask(task_id) {
    var x = document.getElementById(task_id);
    var removedTask = taskList[task_id];
// delete task from front-end received task
    taskList.splice( $.inArray(removedTask, taskList), 1 );

    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: "deleteTask/" + task_id,
        success: function (result) {
            x.style.display = "none";
        },
        error: function () {
            alert("Freelance service down !!!");
        }
    });
}