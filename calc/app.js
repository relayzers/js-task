
"use strict";

const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const clearBtn = document.getElementById('clear');
const opminus = document.getElementById('-');
const oppluslama = document.getElementById('+');
const opcalc = document.getElementById('hesablabtn');
const opbolme = document.getElementById('/');
const opvurma = document.getElementById('*');
const opfaiz = document.getElementById('faiz');
const input = document.getElementById("Total");
const result = document.getElementById('result');



n0.value = "0"
n1.value = "1"
n2.value = "2"
n3.value = "3"
n4.value = "4"
n5.value = "5"
n6.value = "6"
n7.value = "7"
n8.value = "8"
n9.value = "9"
oppluslama.value = '+'
opminus.value = "-"
opbolme.value = "/"
opvurma.value = "*"
clearBtn.value = ""
opfaiz.value = "%"

n0.onclick = () => {
   input.value += n0.value;
};

n1.onclick = () => {
   input.value += n1.value;
};

n2.onclick = () => {
   input.value += n2.value;
};

n3.onclick = () => {
   input.value += n3.value;
};

n4.onclick = () => {
   input.value += n4.value;
};

n5.onclick = () => {
   input.value += n5.value;
};

n6.onclick = () => {
   input.value += n6.value;
};

n7.onclick = () => {
   input.value += n7.value;
};

n8.onclick = () => {
   input.value += n8.value;
};

n9.onclick = () => {
   input.value += n9.value;
};

clearBtn.onclick = () => {
   input.value = "";
};
opfaiz.onclick = () => {
   input.value += opfaiz.value;
};
oppluslama.onclick = () => {
   input.value += oppluslama.value;
};

opminus.onclick = () => {
   input.value += opminus.value;
};

opvurma.onclick = () => {
   input.value += opvurma.value;
};

opbolme.onclick = () => {
   input.value += opbolme.value;
};

opcalc.onclick = () => {
};

