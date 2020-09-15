<?php
    header("content-type:text/plain;charset=utf-8");
    //verifiche sui parametri
    if(!isset($_REQUEST["cBanca"]))
    {
        http_response_code(422);
        die("Parametro mancante [cBanca].");
    }
    //my connetto al db
    require("connection.php");
    $cBanca = $con->real_escape_string($_REQUEST["cBanca"]);
    if(!is_numeric($cBanca))
    {
        $con->close();
        http_response_code(400);
        die("Il parametro cBanca deve essere numerico");
    }

    //faccio la query
    $sql = "SELECT cFiliale, nome as nomeFiliale FROM filiali WHERE cBanca=".$cBanca;
    $rs = $con->query($sql);
    //se non ho errori di query
    require("checkRs.php");
    //prendo i dati dal db
    $dati = mysqli_fetch_all($rs, MYSQLI_ASSOC);
    //codifico i dati da oggetto ritornato dal db a stringa json
    echo json_encode($dati);
    //chiudo connessione
    $con->close();
?>