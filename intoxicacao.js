function calcularFlumazenilo(){

    let peso = parseFloat(document.getElementById("pesoFlumazenilo").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.01;

    // Máximo por bólus
    if(doseMg > 0.2){
        doseMg = 0.2;
    }

    // Concentração:
    // 0,5 mg em 10 ml = 0,05 mg/ml

    let volumeMl = doseMg / 0.05;

    document.getElementById("resultadoFlumazenilo").style.display = "block";

    document.getElementById("resultadoFlumazenilo").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

        <br><br>

        <span style="color:red;font-weight:bold;">
        Máximo por bólus: 0,2 mg
        </span>

    `;

}function calcularNaloxona(){

    let peso = parseFloat(document.getElementById("pesoNaloxona").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.1;

    // Máximo por bólus
    if(doseMg > 0.4){
        doseMg = 0.4;
    }

    // Diluição:
    // 0,4 mg em 10 ml = 0,04 mg/ml

    let volumeMl = doseMg / 0.04;

    document.getElementById("resultadoNaloxona").style.display = "block";

    document.getElementById("resultadoNaloxona").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

        <br><br>

        <span style="color:red;font-weight:bold;">
        Máximo por bólus: 0,4 mg
        </span>

    `;

}