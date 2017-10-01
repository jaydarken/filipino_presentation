$("body").keypress(function(event) {
    var code = event.keyCode;

    if(code == 49) {
        $("#music").trigger("pause");
        location.href = "/";
    } else if(code == 50) {
        $("#music").trigger("pause");
        location.href = "/tweet/view";
    } else if(code == 51) {
        $("#music").trigger("pause");
        location.href = "/timer";
    } else if(code == 52) {
        $("#music").trigger("play");
    }
});