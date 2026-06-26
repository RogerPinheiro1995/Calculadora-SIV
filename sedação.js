// Funções da página Sedação

function calcularMidazolam(){

    let peso = parseFloat(document.getElementById("pesoMidazolam").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose: 0,1 mg/kg
    let doseMg = peso * 0.1;

    // Dose máxima
    if(doseMg > 10){
        doseMg = 10;
    }

    // Diluição:
    // 15 mg em 15 ml = 1 mg/ml

    let volumeMl = doseMg;

    document.getElementById("resultadoMidazolam").style.display = "block";

    document.getElementById("resultadoMidazolam").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

        ${doseMg >= 10 ? "<br><br><span style='color:red;font-weight:bold;'>⚠ Dose máxima atingida (10 mg)</span>" : ""}

    `;

}
function calcularMidazolamProcedimento(){

    let peso = parseFloat(document.getElementById("pesoMidazolamProcedimento").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.02;

    // Diluição:
    // 15 mg em 15 ml = 1 mg/ml

    let volumeMl = doseMg;

    document.getElementById("resultadoMidazolamProcedimento").style.display = "block";

    document.getElementById("resultadoMidazolamProcedimento").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

    `;

}
function calcularMidazolamVentilado(){

    let peso = parseFloat(document.getElementById("pesoMidazolamVentilado").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.1;

    // Sem diluição
    // Concentração = 5 mg/ml

    let volumeMl = doseMg / 5;

    document.getElementById("resultadoMidazolamVentilado").style.display = "block";

    document.getElementById("resultadoMidazolamVentilado").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

    `;

}