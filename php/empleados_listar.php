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

    $sql = "SELECT ced_empleado, ape_empleado, nom_empleado, car_empleado FROM tbl_empleado";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $empleados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($empleados);

