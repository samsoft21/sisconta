(function(){
cargarEmpleados()

function cargarEmpleados() {
    $.ajax({
        url: './php/empleados_listar.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let fila = "";
            let i = 1;
            data.forEach(emp => {
                fila += `
                    <tr>
                        <td>${i++}</td>
                        <td>${emp.ape_empleado}  ${emp.nom_empleado}</td>
                        <td>${emp.car_empleado}</td>
                        <td class="d-flex justify-content-end gap-2" > 
                         <button class="btn btn-info btn-sm btn_edita" data-id="${emp.ced_empleado}">Editar</button>
                        <button class="btn btn-danger btn-sm btn_elimina" data-id="${emp.ced_empleado}">Eliminar</button>
                        
                        </td>  
                    </tr>
                `;
            });
            $("#tablaempleado").html(fila);
        },
        error: function(xhr, status, error) {
            console.log(error);
            alert("Error al cargar empleados");
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
     $(".tablaempleado").removeClass("d-none")
        $(".formEmpleados").addClass("d-none")

cargarEmpleados()

    })
})



$(document).on("click", ".btn_edita", function (e) {
    let codigo= e.currentTarget.dataset.id
    $.ajax({
        type:'GET',
        url:'./php/consulta.php',
        data:{codigo},
        dataType:'JSON'
    }).done(function(resp){
        $(".formEmpleados").removeClass("d-none")
        $(".tablaempleado").addClass("d-none")

        $("#cedula").val(resp.ced_empleado)
            $("#apellido").val(resp.ape_empleado)
            $("#nombre").val(resp.nom_empleado)
            $("#cargo").val(resp.car_empleado)
        cargarEmpleados()

        })

})


$(document).on("click", ".btn_elimina", function (e) {
    let codigo= e.currentTarget.dataset.id
    $.ajax({
        type:'GET',
        url:'./php/elimina.php',
        data:{codigo},
        dataType:'JSON'
    }).done(function(resp){
        alert(resp.mensaje)
        cargarEmpleados()


    })
})




})();

