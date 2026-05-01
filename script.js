document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("processBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", async () => {
    const file = document.getElementById("fileInput").files[0];
    const mode = document.getElementById("mode").value;

    if (!file) {
      result.innerHTML = "Sube un archivo primero";
      return;
    }

    result.innerHTML = "Procesando...";

    try {
      const text = await file.text();

      const response = await fetch("https://studyai-backend-yb0s.onrender.com/process/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text, mode })
      });

      const data = await response.json();

      result.innerHTML = data.result;

    } catch (error) {
      result.innerHTML = "❌ Error: " + error.message;
    }
  });
});
