function multiplicar(){
    const numeroUsuario = Number(document.getElementById("numeroUsuario").value);

    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numeroUsuario} x ${i} = ${numeroUsuario * i}\n`;
    }

    document.getElementById("resultado").textContent = resultado;
}
 