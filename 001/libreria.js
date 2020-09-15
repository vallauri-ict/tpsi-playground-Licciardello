//farò un metodo CHE RIUSIAMO SEMPRE per fare chiamate ajax

function inviaRichiesta(url, method, parameters)
{
    return $.ajax({
        type: method,
        url: url,
        data: parameters,
        dataType: "json",
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        timeout: 4000
    });
}

function error(jqXHR, text_status, string_error)
{
    //jqXHR stands for jquery xml http request
    if(jqXHR.status == 0)
        alert("SERVER TIMED OUT.");
    else
        alert("Server error - " + jqXHR.status + "\n"+
                        jqXHR.responseText);
}