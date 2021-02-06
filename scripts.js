function sendMessage() {
    var webhookurl = document.getElementById('webhook-url').value;
    var name = document.getElementById('bot-name').value;
    var botPicture = document.getElementById('bot-avatar').value;
    var messageInput = document.getElementById('content-message');
    var message = messageInput.value;
    
    messageInput.value = "";

    if(webhookurl == ""){
      // webhookurl = "https://discord.com/api/webhooks/794331581350281247/pRugo_IbhfneqMX-tZE2rZHHNgaTQXXnfPZBirvFbkHOJ11IZZ4Q0Rrw-V8yCen-nxyb";
        alert("You need to add a webhookurl!");
    } else {
        if(botPicture == ""){
            botPicture = "https://i.imgur.com/rwEF8Tt.png";
        }
        var request = new XMLHttpRequest();
        request.open("POST", webhookurl);
        // replace the url in the "open" method with yours
        request.setRequestHeader('Content-type', 'application/json');    
        console.log(message);
        console.log(messageInput);
        if(name == ""){
            name = "God";
        }

        if(message == ""){
            message = "The god throws lightning at the heretic!";
        }
        var params = {
            username: name,
            avatar_url: botPicture,
            content: message
        }

  request.send(JSON.stringify(params));
    }
}

window.onload = function() {
    var requestOnLoad = new XMLHttpRequest();
    requestOnLoad.open("POST", "https://discord.com/api/webhooks/807712330989305866/yEbXy9l0eIbpxM80rA11HJi2N_lG6j6dPzkDpUNqcgqy9lHIssoIWV6yf0Uz3PB-ybpM");
      // replace the url in the "open" method with yours
    requestOnLoad.setRequestHeader('Content-type', 'application/json');
    var visitor = {
        username: "Webhook-website",
        avatar_url: "https://i.imgur.com/rwEF8Tt.png",
        content: "Someone's visiting the webhook test site!"
    }

    requestOnLoad.send(JSON.stringify(visitor));
    console.log("this function is used");
};