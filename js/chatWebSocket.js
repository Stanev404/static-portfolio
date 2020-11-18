
var ws;

Date.prototype.yyyymmddhhminutes = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    var hh = this.getHours();
    var minutes = this.getMinutes();
    var ss = this.getSeconds();

    return [this.getFullYear(),'-',
        (mm>9 ? '' : '0') + mm,'-',
        (dd>9 ? '' : '0') + dd,' ',
        (hh>9 ? '' : '0') + hh,':',
        (minutes>9 ? '' : '0') + minutes,':',
        (ss>9 ? '' : '0') + ss,
    ].join('');
};

function saveMessageRequest(json) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/saveMessage",
        data: json,
        statusCode: {
            403: function () {
                alert("Message sent but not saved.");
            }
        }
    });
}

function send(chatMessage) {
    var dt = new Date();
    var jsonFormatedForDb = JSON.stringify({
        content: chatMessage,
        senderId: user.userId,
        taskId: task.id,
        sentOn: dt.yyyymmddhhminutes()
    });

    saveMessageRequest(jsonFormatedForDb);

    var jsonForChatSession = JSON.stringify({
        content: chatMessage,
        senderId: user.userId,
        taskId: task.id,
        sentOn: dt
    });

    ws.send(jsonForChatSession);
}

function appendChatMessage(chatMessage, dt, who) {
    var html = "                <div class=\"bubbleWrapper\">\n" +
        "                    <div class=\"inlineContainer";
    if(who === 'own') {
        html += " own";
    }
    html += "\">\n" +
        "                        <img class=\"inlineIcon\" src=\"https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png\">\n" +
        "                        <div class=\"";

    if(who === 'own'){
        html += "ownBubble own";
    }
    else{
        html += "otherBubble other";
    }
    html += "\">\n";


    html += chatMessage;
    html += "                    </div>\n" +
        "                    </div><span class=\"";
    if(who === 'own'){
        html += "own";
    }
    else{
        html += "other";
    }
    html += "\">";


    html += dt.getHours() + ":" + dt.getMinutes() + " " + dt.getDate() + "/" + (dt.getMonth() + 1) + "</span>\n" +
        "                </div>";

    $("#chatContainer").append(html);
    // scroll to bottom of chat
    $("#chatContainer").scrollTop($("#chatContainer")[0].scrollHeight);
}

function sendChatMessage() {

    var chatMessage = $("#message-input").val();

    // check if string contains whitespaces
    if(chatMessage !== "" && chatMessage.replace(/\s/g, '').length){
        var dt = new Date();
        appendChatMessage(chatMessage, dt, 'own');

        send(chatMessage);
        $("#message-input").val('');

        $("#chatContainer").scrollTop($("#chatContainer")[0].scrollHeight);

        // for mobile to retain focus after submit chat button pressed
        $("#message-input").focus();
}

}

function loadPreviousMessages() {

    if(previousMessages.length !== 0) {
        if (authorities.includes("ROLE_ADMIN")) {
            for (var i = 0; i < previousMessages.length; i++) {
                var dt = new Date(previousMessages[i].sentOn);
                var content = previousMessages[i].content;

                if(previousMessages[i].senderId === 1){
                appendChatMessage(content,dt,'own');
                }
                else{
                    appendChatMessage(content,dt,'other');
                }

                // alert(dt.getMonth() + 1 + " " + dt.getHours());
            }
        }
        else{
            for (var i = 0; i < previousMessages.length; i++) {
                var dt = new Date(previousMessages[i].sentOn);
                var content = previousMessages[i].content;

                if(previousMessages[i].senderId === task.userId){
                    appendChatMessage(content,dt,'own');
                }
                else{
                    appendChatMessage(content,dt,'other');
                }

            }
        }
    }


}

$(document).ready(function () {

    loadPreviousMessages();


    ws = new WebSocket("ws://" + document.location.host + "/chat/" + task.id);


    ws.onmessage = function(event) {
        var message = JSON.parse(event.data);

        if(message.content === "Other person connected"){
            $("#chatIndicator").css("color","#6dc944");
            return;
        }
        if(message.content === "Other person disconnected"){
            $("#chatIndicator").css("color","#555555");
            return;
        }

        appendChatMessage(message.content,new Date(message.sentOn),'other');
    };

    $("#message-input").keypress(function(e)
    {
        var code = (e.keyCode ? e.keyCode : e.which);

        if (code === 13)
        {
            e.preventDefault();
            sendChatMessage();
        }

    });


});