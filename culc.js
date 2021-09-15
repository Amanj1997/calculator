// Numbers
function getNine() {
    var number = document.getElementById('nine').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getEight() {
    var number = document.getElementById('eight').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getSeven() {
    var number = document.getElementById('seven').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getSex() {
    var number = document.getElementById('sex').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getFive() {
    var number = document.getElementById('five').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getFour() {
    var number = document.getElementById('four').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getThree() {
    var number = document.getElementById('three').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getTwo() {
    var number = document.getElementById('two').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getOne() {
    var number = document.getElementById('one').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

function getZero() {
    var number = document.getElementById('zero').value;
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + number;
}

// operator

function clearBox() {
    document.getElementById('str').value = "0";
    document.getElementById('str-top').value = "";


}

function dot2() {
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + "."

}


function add() {
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }

    document.getElementById('str').value = str + "+";

}

function subtract() {
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + "-";

}

function divide() {
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + "/";

}

function multiply() {
    var str = document.getElementById('str').value;
    if (str == 0) {
        str = "";
    }
    document.getElementById('str').value = str + "*";

}

function equal11() {
    var str = document.getElementById('str').value;
    var result = eval(str);
    document.getElementById('str').value = result;

}