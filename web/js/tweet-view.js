$(document).ready(function() {
    var num = 0;
    checkTweet();

    function checkTweet() {
        $.ajax({
            dataType: "json",
            method: 'post',
            data: {'num' : num},
            url: "/tweet/check", 
            success: function(data) {
                num = data.num;
                tweets = data.new_tweets;
                var str = "";
                tweets.forEach(function(element) {
                    str += "<div class='row z-depth-2'>";
                    str += "<div style='padding:1px; background-color: #ffb74d; border-bottom:1px solid gray'>" + element.name + "</div>"; 
                    str += "<div style='padding:10px;'>" + element.message + "</div>";
                    str += "</div>";
                });
                $('#tweets').append(str);
            }
        });
        
        setTimeout(checkTweet,3000);
    }
});