
//$document.ready()

//onload -> carico banche
$(function(){
    //eseguita automatica al page onload
    var cmbBanche = $("#lstBanche");
    var cmbFiliali = $("#lstFiliali");
    var tabCorrentisti = $("#tabCorrentisti tbody");


    //fare la richiesta ajax
    let richiestaBanche = inviaRichiesta(
        "server/elencoBanche.php", "GET", "");

    richiestaBanche.done(function(data){
        //data -> i dati della risposta (dati db)
        console.log(data);
        for(let banca of data)
        {
            $("<option>", {
                "value": banca["cBanca"],
                "text": banca["nome"]
            }).appendTo(cmbBanche);
        }
        cmbBanche.prop("selectedIndex", -1);
    });
    richiestaBanche.fail(error);





//scelta la banca -> carico le filiali
cmbBanche.on("change", function(){

    $("#wrapCorrentisti").css("display","none");
    $("#wrapFiliali").css("display","none");
    cmbFiliali.html(""); //tolgo eventuali filiali ad ora caricate
    var cBanca = this.value;
    var richiestaFiliali = inviaRichiesta(
        'server/elencoFiliali.php', 'POST', "cBanca=" + cBanca);
    richiestaFiliali.fail(error);
    richiestaFiliali.done(function(data){
        for(let record of data)
        {
            $("<option>",{
                "value": record["cFiliale"],
                "text":record["nomeFiliale"]
            }).appendTo(cmbFiliali);
        }
        cmbFiliali.prop("selectedIndex", -1);
        $("#wrapFiliali").css("display","block");
    });
});

//scelta la filiale, dovrò visualizzare i correntisti!
cmbFiliali.on("change", function(){

    $("#wrapCorrentisti").css("display","none");
    tabCorrentisti.html(""); //tolgo eventuali correntisti ad ora caricati
    var cFiliale = this.value;
    var richiestaCorrentisti = inviaRichiesta(
        'server/elencoCorrentisti.php', 'POST', "cFiliale=" + cFiliale);
    richiestaCorrentisti.fail(error);
    richiestaCorrentisti.done(function(data){
        for(let record of data) {
            //creo le righe della tabella
            var tr = $("<tr>");
            for (let key in record)
                $("<td>", {
                    "text": record[key]
                }).appendTo(tr);
            tr.appendTo(tabCorrentisti);
        }
        $("#tabCorrentisti").DataTable();
        $("#wrapCorrentisti").css("display","block");
    });
});


});

