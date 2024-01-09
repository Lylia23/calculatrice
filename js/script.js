var a = 0;
var operationOk = false;
var op = '+';

let boutonsNum = document.querySelectorAll('#numeros button');

for(let btn of boutonsNum) {
    btn.addEventListener('click', eventCatcher, false);
}

function eventCatcher(e){
    let btn = e.target;
    let btnValue = btn.innerHTML;
    if(btnValue == '=') {
        resultat();
    }else{
        affectNum(btnValue);
    }
}

function affectNum(x){
    var valEcrant = document.getElementById('ecrant');
    if (valEcrant.innerHTML == 0 || operationOk){
        valEcrant.innerHTML = x;
        operationOk = false;
    } else if (x === '.' && !valEcrant.innerHTML.includes('.')) {
        valEcrant.innerHTML = valEcrant.innerHTML + x;
    } else if(x !== '.') {
        valEcrant.innerHTML = valEcrant.innerHTML + x;
    }
}

function resultat(){
    var valEcrant = document.getElementById('ecrant');
   if (op === '+'){
    valEcrant.innerHTML = a + Number(valEcrant.innerHTML);
   } else if (op === '-'){
    valEcrant.innerHTML = a - Number(valEcrant.innerHTML);
   } else if (op === '*'){
    valEcrant.innerHTML = a * Number(valEcrant.innerHTML);
   } else {
    valEcrant.innerHTML = a / Number(valEcrant.innerHTML);
   }
}

function screenClear(){
    document.getElementById('ecrant').innerHTML = '0';
}

function operation(operateur) {
    a = Number(document.getElementById('ecrant').innerHTML);
    op = operateur;
    operationOk = true;
}