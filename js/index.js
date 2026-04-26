(function(){


    cargarEmpleados();


function cargarEmpleados() {
    $.ajax({
        url: "./php/empleados_listar.php",
        type: "GET",
        dataType: "json",
        success: function (data) {

            let filas = "";
            let i = 1;

            data.forEach(emp => {
                filas += `
                    <tr>
                        <td>${i++}</td>
                        <td>${emp.ape_empleado} ${emp.nom_empleado}</td>
                        <td>${emp.car_empleado}</td>
                        <td>
                            <button class="btn btn-primary btn-sm">Editar</button>
                            <button class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                `;
            });

            $("#listaempleado").html(filas);
        },
        error: function (xhr, status, error) {
            console.log("Error AJAX:", error);
        }
    });
}

$(".btn_nuevo").click(function(){
    $(".formEmpleados").removeClass("d-none")
    $(".tablaempleado").addClass("d-none")
})

$(".btn_guarda").click(function(e){
    e.preventDefault();
     let cedula=$("#cedula").val()
     let apellido=$("#apellido").val()
     let nombre=$("#nombre").val()
     let cargo=$("#cargo").val()

    $.ajax({
        type:'POST',
        url:'./php/guardar.php',
        data:{cedula, apellido,nombre,cargo},
        dataType:"Json"
    }).done(function(resp){
         alert(resp.mensaje)



    })










})





})();