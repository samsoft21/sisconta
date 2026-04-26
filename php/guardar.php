<?php
$host = "localhost";
$db   = "contabilidad";
$user = "root";
$pass = "";
try {
    $pdo = new PDO("mysql:
host=$host;
dbname=$db;
charset=utf8", 
$user, $pass
);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die(" Error de conexión: " . $e->getMessage());
}

$ced= $_POST['cedula'];
$nombre =$_POST['nombre'];
$ape= $_POST['apellido'];
$car = $_POST['cargo'];



$insertar = $pdo->query("INSERT INTO tbl_empleado 
(ced_empleado, ape_empleado, nom_empleado, car_empleado) 
VALUES ('$ced', '$ape', '$nombre', '$car')");

if($insertar){
echo json_encode([
        "success" => true,
        "mensaje" => "Empleado registardo correctamente"
    ]);

} else {
    echo json_encode([
        "success" => false,
        "mensaje" => "Usuario no fue registrado correctamente"
    ]);
}




?>

