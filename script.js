document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("processBtn");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", async () => {
    resultDiv.innerHTML = "1️⃣ Iniciando...";

    try {
      const response = await fetch("https://studyai-backend-yb0s.onrender.com/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: "La administración organiza recursos",
          mode: "summary"
        })
      });

      resultDiv.innerHTML += "<br>2️⃣ Respuesta recibida";

      const text = await response.text(); // 👈 CAMBIO CLAVE

      resultDiv.innerHTML += "<br>3️⃣ Contenido:<br><br>" + text;

    } catch (error) {
      resultDiv.innerHTML = "❌ ERROR: " + error.message;
    }
  });
});
