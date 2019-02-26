const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const formulario = document.querySelector(".formulario");
const totalBases = select1.options.length;
let valor1;
let valor2;
let base1;
let base2;

formulario.addEventListener("change", function () {
    update();
})

formulario.addEventListener("keyup", function () {
    update();
})

function update() {
    valor1 = input1.value;
    for (let i = 0; i < totalBases; i++) {
        if (select1.options[i].selected) {
            base1 = Number(select1.options[i].classList[0]);
        }
        if (select2.options[i].selected) {
            base2 = Number(select2.options[i].classList[0]);
        }
    }
    let baseConvertida = parseInt(valor1, base1).toString(base2);
    if (isNaN(baseConvertida)) {
        input2.value =  "";
    } else {
        input2.value = baseConvertida;
    }
}

update();
