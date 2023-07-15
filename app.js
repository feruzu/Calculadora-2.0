function borrar() {
    document.getElementById("cuenta").value = "0";
    document.getElementById("resultado").value = "";
}

function borrarNumero() {
    var cuenta = document.getElementById("cuenta").value;
    if (cuenta.length > 1) {
        document.getElementById("cuenta").value = cuenta.slice(0, -1);
    } else {
        document.getElementById("cuenta").value = "0";
        document.getElementById("resultado").value = "";
    }
}

function boton(value) {
    if (document.getElementById("cuenta").value === "0" && value !== ".") {
        document.getElementById("cuenta").value = value;
    } else {
        document.getElementById("cuenta").value += value;
    }
}

function calculo() {
    var p = document.getElementById("cuenta").value;
    if (p !== "") {
        var q = eval(p);
        document.getElementById("resultado").value = q;
    }
}