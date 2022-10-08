function Executar() {
  var valorArea = parseFloat(document.getElementById("area").value);
  var valorComprimento = parseFloat(
    document.getElementById("comprimento").value
  );
  var valorLargura = parseFloat(document.getElementById("largura").value);

  var areaDoPiso = valorLargura * valorComprimento;
  numero = valorArea / areaDoPiso;
  numeroComAcressimo = numero * 1.1;
  numeroArredondado = Math.ceil(numeroComAcressimo);

  var numeroHtml = document.getElementById("numeroConvertido");
  var numeroConvertido = "O número de pisos necessário é " + numeroArredondado;
  console.log(numeroConvertido);
  numeroHtml.innerHTML = numeroConvertido;
}