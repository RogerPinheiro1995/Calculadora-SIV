function calcularTXA(){

    let peso = parseFloat(document.getElementById("pesoTXA").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose 15 mg/kg
    let doseMg = peso * 15;

    // Máximo 1000 mg
    if(doseMg > 1000){
        doseMg = 1000;
    }

    // Concentração
    // 100 mg/ml

    let volumeMl = doseMg / 100;

    document.getElementById("resultadoTXA").style.display = "block";

    document.getElementById("resultadoTXA").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(0)} mg

        <br><br>

        <strong>Aspirar:</strong><br>

        ${volumeMl.toFixed(2)} ml

        <br><br>

        <strong>Diluir em:</strong><br>

        50 ml NaCl 0,9%

        <br><br>

        <span style="color:red;font-weight:bold;">
        Administrar EV/IO durante 10 minutos
        </span>

    `;

}