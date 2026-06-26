function calcularAdrenalina(){

    let peso = parseFloat(document.getElementById("pesoAdrenalina").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    // Dose
    let doseMg = peso * 0.01;

    // Concentração após diluição:
    // 1 mg em 10 ml = 0,1 mg/ml

    let volumeMl = doseMg / 0.1;

    // Seringa de insulina
    let unidades = volumeMl * 100;

    document.getElementById("resultadoAdrenalina").style.display = "block";

    document.getElementById("resultadoAdrenalina").innerHTML = `

        <h3>Resultado</h3>

        <br>

        <strong>Dose:</strong><br>

        ${doseMg.toFixed(2)} mg

        <br><br>

        <strong>Administrar:</strong><br>

        ${volumeMl.toFixed(2)} ml

        <br><br>

        <strong>Seringa de insulina:</strong><br>

        ${unidades.toFixed(0)} Unidades

    `;

}