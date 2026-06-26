function calcularParacetamol(){

    let peso = parseFloat(document.getElementById("pesoParacetamol").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    let dose = peso * 15;

    document.getElementById("resultadoParacetamol").style.display="block";

    document.getElementById("resultadoParacetamol").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose a administrar</strong>

        <br><br>

        <span style="font-size:34px;color:#0057B8;">

            ${dose.toFixed(0)} mg

        </span>

    `;

}

function calcularCetamina(){

    let peso = parseFloat(document.getElementById("pesoCetamina").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.25;

    // Diluição:
    // 50 mg em 20 ml = 2,5 mg/ml
    let volumeMl = doseMg / 2.5;

    document.getElementById("resultadoCetamina").style.display = "block";

    document.getElementById("resultadoCetamina").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>
        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>
        ${volumeMl.toFixed(2)} ml

    `;

}


function calcularFentanil(){

    let peso = parseFloat(document.getElementById("pesoFentanil").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose: 1 mcg/kg
    let doseMcg = peso * 1;

    // Dose máxima
    if(doseMcg > 50){
        doseMcg = 50;
    }

    // Diluição:
    // 5 ml de Fentanil + 15 ml NaCl = 20 ml
    // 250 mcg em 20 ml = 12,5 mcg/ml

    let volumeMl = doseMcg / 12.5;

    document.getElementById("resultadoFentanil").style.display = "block";

    document.getElementById("resultadoFentanil").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMcg.toFixed(0)} mcg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

    `;

}

function calcularMorfina(){

    let peso = parseFloat(document.getElementById("pesoMorfina").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.05;

    // Diluição:
    // 10 mg em 10 ml = 1 mg/ml

    let volumeMl = doseMg / 1;

    document.getElementById("resultadoMorfina").style.display = "block";

    document.getElementById("resultadoMorfina").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

    `;

}