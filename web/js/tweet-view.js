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
                    str += "<div style='padding-bottom:10px;background-color:rgb(240,240,240); margin-top:35px;' class='z-depth-4 '>";
                    str += "<div style='padding:5px; font-style:italic; font-size:25px; background-color: #ffb74d; border-bottom:1px solid gray'>" + stripHTML(element.name) + "</div>"; 
                    str += "<div style='padding:10px; font-size:40px;'>" + stripHTML(element.message) + "</div>";
                    str += "</div>";
                });
                $('#tweets').append(str);
                $("html, body").animate({ scrollTop: $(document).height() }, 2000);
            }
        });
        
        setTimeout(checkTweet,3000);
    }
    function stripHTML(dirtyString) {
        var container = document.createElement('div');
        var text = document.createTextNode(dirtyString);
        container.appendChild(text);
        return container.innerHTML; // innerHTML will be a xss safe string
      }
      
});