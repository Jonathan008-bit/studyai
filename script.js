async function processFile() {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "Procesando...";

  try {
    const response = await fetch("https://studyai-backend-yb0s.onrender.com/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: "Prueba de administración",
        mode: "summary"
      })
    });

    const data = await response.json(); // 👈 AQUÍ se define

    resultDiv.innerHTML =
      data.result || (data.error + "<br>" + data.detalle);

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "❌ ERROR: " + error.message;
  }
}
