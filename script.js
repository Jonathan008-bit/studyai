document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("processBtn");
  const result = document.getElementById("result");
  const fileInput = document.getElementById("fileInput");
  const modeSelect = document.getElementById("mode");

  button.addEventListener("click", async () => {
    const files = fileInput.files;
    const mode = modeSelect.value;

    if (files.length === 0) {
      result.innerHTML = "⚠️ Sube al menos un archivo primero";
      return;
    }

    result.innerHTML = "Procesando contenido... ⏳";

    // --- CAMBIO CLAVE AQUÍ ---
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]); // "files" debe coincidir con el backend
    }
    formData.append("mode", mode);

    try {
      const response = await fetch("https://studyai-backend-yb0s.onrender.com/process", {
        method: "POST",
        // NOTA: Al usar FormData NO debes poner el Header "Content-Type"
        body: formData 
      });

      if (!response.ok) {
        const error Text = await response.text();
        console.error("Respuesta del servidor:", errorText);
        throw new Error("El servidor respondió con error");
      }

      const data = await response.json();
      // Usamos innerHTML y reemplazamos saltos de línea para que se vea bien
      result.innerHTML = data.result ? data.result.replace(/\n/g, "<br>") : "Sin respuesta";

    } catch (error) {
      console.error("Error detallado:", error);
      result.innerHTML = "❌ Error: " + error.message;
    }
  });
});
