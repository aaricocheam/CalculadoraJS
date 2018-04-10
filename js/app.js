
var numero0 = 0;
numero1 = 0;
operador = 0; // 1 +;2 -;3 *;4 /;
count = 0;

setDisplay(0);
function getDisplay() {
    return document.getElementById("display").textContent;
}
function setDisplay(val) {
    document.getElementById("display").textContent = val;
}

document.getElementById("on").onclick = function () {
    setDisplay("0");
    numero0 = 0;
    numero1 = 0;
    operador = 0;
    count = 0;
};
document.getElementById("sign").onclick = function () {
    setDisplay(((parseIntFloat(getDisplay()) * -1) + "").substr(0, 8));
    count = 0;
};
document.getElementById("raiz").onclick = function () {
    alert("Metodo no implementado.");
};
document.getElementById("dividido").onclick = function () {
    operador = 4;
    numero0 = parseIntFloat(getDisplay());
    setDisplay("");
    count = 0;
};

document.getElementById("7").onclick = function () {
    addNumber("7");
};
document.getElementById("8").onclick = function () {
    addNumber("8");
};
document.getElementById("9").onclick = function () {
    addNumber("9");
};
document.getElementById("por").onclick = function () {
    operador = 3;
    numero0 = parseIntFloat(getDisplay());
    setDisplay("");
    count = 0;
};

document.getElementById("4").onclick = function () {
    addNumber("4");
};
document.getElementById("5").onclick = function () {
    addNumber("5");
};
document.getElementById("6").onclick = function () {
    addNumber("6");
};
document.getElementById("menos").onclick = function () {
    operador = 2;
    numero0 = parseIntFloat(getDisplay());
    setDisplay("");
    count = 0;
};

document.getElementById("1").onclick = function () {
    addNumber("1");
};
document.getElementById("2").onclick = function () {
    addNumber("2");
};
document.getElementById("3").onclick = function () {
    addNumber("3");
};

document.getElementById("0").onclick = function () {
    addNumber("0");
};
document.getElementById("punto").onclick = function () {
    var index = getDisplay().indexOf(".");
    if (index < 0) {
        setDisplay(getDisplay() + ".");
    }
};
document.getElementById("igual").onclick = function () {
    count = count + 1;
    var result = 0;
    if (count > 1) {
        numero0 = parseIntFloat(getDisplay());
    } else {
        numero1 = parseIntFloat(getDisplay());
    }
    switch (operador) {
        case 1:
            result = numero0 + numero1; break;
        case 2:
            result = numero0 - numero1; break;
        case 3:
            result = numero0 * numero1; break;
        case 4:
            result = numero0 / numero1; break;
    }
    setDisplay((parseIntFloat(result) + "").substr(0, 8));
};

document.getElementById("mas").onclick = function () {
    operador = 1;
    numero0 = parseIntFloat(getDisplay());
    setDisplay("");
    count = 0;
};

function addNumber(value) {
    count = 0;
    var number = parseIntFloat(getDisplay());
    if (number == 0) {
        if (getDisplay().indexOf(".") > 0) {
            setDisplay(getDisplay() + value);
        } else {
            setDisplay(value);
        }
    } else {
        if (getDisplay().indexOf(".") > 0) {
            setDisplay((getDisplay() + value).substr(0, 8));
        } else {
            setDisplay((parseIntFloat(number + value) + "").substr(0, 8));
        }
    }
}

function parseIntFloat(number) {
    if (number == "") { number = 0; }
    var aux = number + "";
    if (aux.indexOf(".") > 0) {//decimal
        number = parseFloat(number);
    } else {//entero
        number = parseInt(number);
    }
    return number;
}
