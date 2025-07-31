function multiplicar(){
const numeroUsuario = Number(document.getElementById("numeroUsuario").value);
let resultadoFinal = "";
for(let i = 1 ; i <= 10 ; i++){
resultadoFinal += `${numeroUsuario} x ${i} = ${numeroUsuario * i}\n`; 
}
document.getElementById("resultado").textContent = resultadoFinal;
}
