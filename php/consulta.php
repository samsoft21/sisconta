<?php
header('Content-Type: application/json');

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

$cedula=$_GET['codigo'];

$consulta=$pdo->query("SELECT ced_empleado, ape_empleado, nom_empleado, car_empleado FROM tbl_empleado where ced_empleado ='$cedula'");
    $empleados = $consulta->fetch();
    echo json_encode($empleados);

