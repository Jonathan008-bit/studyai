async function processFile() {
  const file = document.getElementById("fileInput").files[0];
  const mode = document.getElementById("mode").value;
  const resultDiv = document.getElementById("result");

  // Validación
  if (!file) {
    alert("Sube un archivo primero");
    return;
  }

  try {
    resultDiv.innerHTML = "Procesando...";

    const text = await file.text();

    const response = await fetch("https://qqpmdk-3000.csb.app/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text, mode })
    });

    // Si el backend falla
    if (!response.ok) {
      throw new Error("Error en el servidor");
    }

    const data = await response.json();

    resultDiv.innerHTML = data.result;

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "❌ Error al procesar. Revisa la consola (F12)";
  }
}
