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
$elimina=$pdo->query("DELETE FROM tbl_empleado where ced_empleado ='$cedula'");

if($elimina){
  echo json_encode([
        "success" => true,
        "mensaje" => "Empleado eliminado correctamente"
    ]);

} else {
    echo json_encode([
        "success" => false,
        "mensaje" => "Empleado no fue eliminado"
    ]);
}

