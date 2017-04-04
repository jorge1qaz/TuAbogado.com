function editarventas(codigo) {
       var venta;
       for (var i = 0; i < localStorage.length; i++) {
           var clave = localStorage.key(i);
           if(clave == codigo) {
               var venta = $.parseJSON(localStorage.getItem(clave));
               $("#codigo").val(venta.codigo);
               $("#producto").val(venta.producto);
               $("#cantidad").val(venta.cantidad);
               $("#fecha").val(venta.fecha);
           }
       }

   }
function eliminarRegistro(codigo) {
    localStorage.removeItem(codigo);
    listarVentas();
}
function listarVentas() {
    var tabla = "";
    var parrafo = $("#listarVentas");
    tabla += "<table class='bordered striped centered responsive-table'>";
    tabla += "<tr>";
        tabla += "<th>Codigo</th>";
        tabla += "<th>Producto(s)</th>";
        tabla += "<th>Cantidad</th>";
        tabla += "<th>Fecha</th>";
        tabla += "<th>Eliminar</th>";
        tabla += "<th>Editar</th>";
    tabla += "</tr>";
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var nota = $.parseJSON(localStorage.getItem(clave));
        tabla += "<tr>";
            tabla += "<td>" + nota.codigo + "</td>";
            tabla += "<td>" + nota.producto + "</td>";
            tabla += "<td>" + nota.cantidad + "</td>";
            tabla += "<td>" + nota.fecha + "</td>";
            tabla += "<td><a class='btn tooltipped'><i class='material-icons' onclick='eliminarRegistro(\"" + nota.codigo +"\");'>delete</i></a></td>";
            tabla += "<td><a class='btn tooltipped'><i class='material-icons' onclick='editarventas(\"" + nota.codigo + "\");'>mode_edit</i></a></td>";
        tabla += "</tr>";
        
    }
       tabla += "</table>";
       $(parrafo).html(tabla);   
   }
$(document).ready(function() {
    $('.tooltipped').tooltip({delay: 50});
    //Fijar el código
    var contador;
    if (localStorage.length > 0) {
        contador = localStorage.length + 1;
    } else {
        contador = 1;
    }
    $("#codigo").val("A00" + contador);

    $("#btnGuardar").click(function() {
        var codigo = $("#codigo").val();
        var producto = $("#producto").val();
        var cantidad = $("#cantidad").val();
        var fecha = $("#fecha").val();

        var venta = {
            codigo: codigo,
            producto: producto,
            cantidad: cantidad,
            fecha: fecha
        };      
        localStorage.setItem(codigo, JSON.stringify(venta));
        contador = localStorage.length + 1;
        listarVentas();
    });
    $("#btnLimpiar").click(function() {
        $("#producto").val("");
        $("#cantidad").val("");
        $("#fecha").val("");
    });

    listarVentas();
});