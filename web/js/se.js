
/*
    $("#see").click(function() {
        $("#question2").show();

    });
    $("#soo").click(function() {
        $("#question2").hide();

    });*/
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#NextQuestion").click(function() {
        $("#question2").show();
        $(this).hide();
    });
    $("#NextQuestion2").click(function() {
        $("#question3").show();
        $(this).hide();
    });
    $("#NextQuestion3").click(function() {
        $("#question4").show();
        $(this).hide();
    });
    $("#NextQuestion4").click(function() {
        $("#question5").show();
        $(this).hide();
    });

    $('.modal').modal();