<?php
    header("content-type:text/plain;charset=utf-8");
    //verifiche sui parametri
    if(!isset($_REQUEST["cFiliale"]))
    {
        http_response_code(422);
        die("Parametro mancante [cFiliale].");
    }
    //my connetto al db
    require("connection.php");
    $cFiliale = $con->real_escape_string($_REQUEST["cFiliale"]);
    if(!is_numeric($cFiliale))
    {
        $con->close();
        http_response_code(400);
        die("Il parametro cFiliale deve essere numerico");
    }

    //faccio la query
    $sql = "SELECT correntisti.cCorrentista, correntisti.Nome AS nomeCorrentista, ".
        "comuni.Nome as comuneCorrentista, correntisti.Telefono, conti.cConto, conti.Saldo ".
        "FROM correntisti, comuni, conti WHERE correntisti.cComune = comuni.cComune AND ".
        "correntisti.cCorrentista = conti.cCorrentista AND conti.cFiliale=".$cFiliale;
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