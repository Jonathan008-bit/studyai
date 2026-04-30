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
      const response = await fetch("https://studyai-backend-yb0s.onrender.com", {
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

      const textResponse = await response.text();
console.log(textResponse);
document.getElementById("result").innerHTML = textResponse;
      
      resultDiv.innerHTML += "<br>3️⃣ Resultado:<br><br>" + data.result;

    } catch (error) {
      resultDiv.innerHTML = "❌ ERROR: " + error.message;
    }
  });
});
