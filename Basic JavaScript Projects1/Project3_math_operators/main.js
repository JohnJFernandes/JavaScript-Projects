function addition_Function()  {
    var adddition = 2 + 2;
    document.getElementById("Math").innerHTMl = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Math1").innerHTMl = "5 - 2 =" + Subtraction;
}

function multiplication() {
    var simple_Math = 8 * 8;
    document.getElementById("Math2").innerHTMl = "8 * 8 =" + simple_Math;
}

function division() {
    var simple_Math = 8 / 2;
    document.getElementById("Math3").innerHTMl = "8 / 2 =" + simple_Math;
}

function more_Math()  {
    var simple_Math =(1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10;
    divided in half and then subtract 5 equals" + simple_Math; 
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have;
        remainder = " + simple_Math;"
}
