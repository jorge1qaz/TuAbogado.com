$(document).ready(function(){
    $("#imgOpt1Def").hide();
    $("#imgOpt2Def").hide();
    $("#imgOpt3Def").hide();
    $("#imgOpt4Def").hide();
    $("#imgOpt5Def").hide();
    $("#imgOpt6Def").hide();
    $("#btnVolverContent").hide();
    //$(".col.m4.s12").hide();
    $("#bloque1").hide();
    $("#bloque2").hide();
    $("#bloque3").hide();
    $("#bloque4").hide();
    $("#bloque5").hide();
    //Bloque colores
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .addClass("blue")
            .find(".card-content label")
            .removeClass("black-text")
            .addClass("white-text");
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
        .removeClass("blue")
        .find(".card-content label")
        .removeClass("white-text")
        .addClass("black-text");
    });
    //Bloque imagenes opt1
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt1").hide();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt1Def").hide();
    });
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt1Def").show();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt1").show();
    });
    //Fin bloque opt1
    //Bloque imagenes opt2
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt2").hide();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt2Def").hide();
    });
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt2Def").show();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt2").show();
    });
    //Fin bloque opt2
    //Bloque imagenes opt3
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt3").hide();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt3Def").hide();
    });
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt3Def").show();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt3").show();
    });
    //Fin bloque opt3
    //Bloque imagenes opt4
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt4").hide();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt4Def").hide();
    });
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt4Def").show();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt4").show();
    });
    //Fin bloque opt4
        //Bloque imagenes opt5
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt5").hide();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt5Def").hide();
    });
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt5Def").show();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt5").show();
    });
    //Fin bloque opt5
        //Bloque imagenes opt6
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt6").hide();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt6Def").hide();
    });
    $(".col.m4.s12").mouseenter(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt6Def").show();
    });
    $(".col.m4.s12").mouseleave(function(){
        $(this).find(".card")
            .find(".card-content #imgOpt6").show();
    });
    //Fin bloque opt6
    //Efectos configuración
    $(".col.m4.s12").click(function(){
        $(".col.m4.s12").hide();
        $(this).show()
            .animate({"margin-left":"+=300px"},500)
            $(this).fadeOut(250);
            $("#btnVolverContent").fadeIn(500);
    });
    $("#bloqueVista1").click(function(){
        $("#bloque1").fadeIn(500);
    });
    $("#bloqueVista2").click(function(){
        $("#bloque2").fadeIn(500);
    });
    $("#bloqueVista3").click(function(){
        $("#bloque3").fadeIn(500);
    });
    $("#bloqueVista4").click(function(){
        $("#bloque4").fadeIn(500);
    });
    $("#bloqueVista5").click(function(){
        $("#bloque5").fadeIn(500);
    });
    $("#btnVolver").click(function(){
        location.reload();
    });
})