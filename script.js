document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("processBtn");
  const resultDiv = document.getElementById("result");

  if (!button) {
    alert("❌ Botón no encontrado");
    return;
  }

  button.addEventListener("click", async () => {
    resultDiv.innerHTML = "1️⃣ Iniciando...";

    try {
      const response = await fetch("https://qqpmdk-3000.csb.app/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: "Prueba de conexión",
          mode: "summary"
        })
      });

      resultDiv.innerHTML += "<br>2️⃣ Backend OK";

      const data = await response.json();

      resultDiv.innerHTML += "<br>3️⃣ Resultado:<br><br>" + data.result;

    } catch (error) {
      resultDiv.innerHTML = "❌ ERROR: " + error.message;
    }
  });
});
