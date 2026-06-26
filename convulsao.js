function calcularDiazepam(){

    let idade = parseFloat(document.getElementById("idadeDiazepam").value);

    let peso = parseFloat(document.getElementById("pesoDiazepam").value);

    if(isNaN(idade) || isNaN(peso) || idade < 0 || peso <= 0){

        alert("Introduza idade e peso válidos.");

        return;

    }

    // Dose
    let doseMg = peso * 0.2;

    // Máximo conforme idade
    let doseMaxima = idade < 5 ? 5 : 10;

    if(doseMg > doseMaxima){
        doseMg = doseMaxima;
    }

    // Diluição:
    // 10 mg em 10 ml = 1 mg/ml

    let volumeMl = doseMg;

    document.getElementById("resultadoDiazepam").style.display = "block";

    document.getElementById("resultadoDiazepam").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

        <br><br>

        <span style="color:red;font-weight:bold;">
        Dose máxima aplicada: ${doseMaxima} mg
        </span>

    `;

}