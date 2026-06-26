function calcularDose(){

    let peso = parseFloat(document.getElementById("peso").value);

    if(isNaN(peso) || peso<=0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose prescrita
    let dose = peso * 0.25;

    // Diluição:
    // 50 mg em 20 ml
    // concentração = 2,5 mg/ml

    let ml = dose / 2.5;

    let resultado = document.getElementById("resultado");

    resultado.style.display="block";

    resultado.innerHTML = `
        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>
        ${dose.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>
        ${ml.toFixed(2)} ml
    `;

}

function calcularDose() {

    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(peso) || peso <= 0) {
        alert("Introduza um peso válido.");
        return;
    }

    let dose = peso * 0.25;
    let ml = dose / 2.5;

    document.getElementById("resultado").style.display = "block";

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Dose:</strong> ${dose.toFixed(2)} mg</p>
        <p><strong>Administrar:</strong> ${ml.toFixed(2)} ml</p>
    `;
}
<!-- ================= BOTAO CALCULAR  ================= -->

function calcularFentanil() {

    let peso = parseFloat(document.getElementById("pesoFentanil").value);

    if (isNaN(peso) || peso <= 0) {
        alert("Introduza um peso válido.");
        return;
    }

    let dose = peso;

    if (dose > 50) {
        dose = 50;
    }

    // 250 mcg em 10 ml = 25 mcg/ml
    let ml = dose / 25;

    document.getElementById("resultadoFentanil").style.display = "block";

    document.getElementById("resultadoFentanil").innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Dose:</strong> ${dose.toFixed(0)} mcg</p>
        <p><strong>Administrar:</strong> ${ml.toFixed(2)} ml</p>
    `;
}
