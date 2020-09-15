<?php
    header("content-type:text/plain;charset=utf-8");
    //my connetto al db
    require("connection.php");
    //faccio la query
    $sql = "SELECT cBanca, nome FROM banche";
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