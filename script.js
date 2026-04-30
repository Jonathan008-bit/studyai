async function processFile() {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "1️⃣ Iniciando...";

  try {
    const response = await fetch("https://qqpmdk-3000.csb.app/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: "La administración organiza recursos",
        mode: "summary"
      })
    });

    resultDiv.innerHTML += "<br>2️⃣ Conectado al backend";

    const data = await response.json();

    resultDiv.innerHTML += "<br>3️⃣ Respuesta recibida<br><br>" + data.result;

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "❌ ERROR: " + error.message;
  }
}
