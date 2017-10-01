$("body").keypress(function(event) {
    var code = event.keyCode;

    if(code == 49) { //1
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#oh").trigger("pause");
        $("#laugh").trigger("pause");
        $("#ya").trigger("pause");
        location.href = "/";
    } else if(code == 50) { //2
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#oh").trigger("pause");
        $("#laugh").trigger("pause");
        $("#ya").trigger("pause");
        location.href = "/tweet/view";
    } else if(code == 51) { //3
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#oh").trigger("pause");
        $("#laugh").trigger("pause");
        $("#ya").trigger("pause");
        location.href = "/timer";
    } else if(code == 52) { //4
        $("#sexy").trigger("pause");
        $("#laugh").trigger("pause");
        $("#oh").trigger("pause");
        $("#mb").trigger("play");
        $("#ya").trigger("pause");
    } else if(code == 53) { //5
        $("#mb").trigger("pause");
        $("#laugh").trigger("pause");
        $("#oh").trigger("pause");
        $("#sexy").trigger("play");
        $("#ya").trigger("pause");
    } else if(code == 54) { //6
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#oh").trigger("pause");
        $("#laugh").trigger("play");
        $("#ya").trigger("pause");
    } else if(code == 55) { //7
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#laugh").trigger("pause");
        $("#oh").trigger("play");
        $("#ya").trigger("pause");
    } else if(code == 48) { //0
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#laugh").trigger("pause");
        $("#oh").trigger("pause");
        $("#ya").trigger("pause");
    } else if(code == 56) { //8
        $("#sexy").trigger("pause");
        $("#mb").trigger("pause");
        $("#laugh").trigger("pause");
        $("#oh").trigger("pause");
        $("#ya").trigger("play");
    }

});