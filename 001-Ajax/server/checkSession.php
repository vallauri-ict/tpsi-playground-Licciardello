<?php
    session_start();
    if(!isset($_SESSION["idUtente"]))
    {
        header("location:login.php");
        exit(); // = break
    }
    if(!isset($_SESSION["scadenza"]) ||
            $_SESSION["scadenza"] < time())
    {
        session_unset();
        session_destroy(); //distruggono tutte le info su
                            //questa sessione
        header("location:login.php");
        exit(); // = break
    }
    $_SESSION["scadenza"] = time() + 600; // 600 secondi = 10min
    setcookie(session_name(), session_id(),
                        $_SESSION["scadenza"], '/');
?>