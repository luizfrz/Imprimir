
function impressao(printra) {     
const impressao = document.getElementById("imprimir").innerHTML;
const print= document.body.innerHTML;
    document.body.innerHTML = impressao;

    window.print();

    document.body.innerHTML = print;
}
