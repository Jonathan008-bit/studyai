async function processFile() {
  const file = document.getElementById("fileInput").files[0];
  const mode = document.getElementById("mode").value;

  const text = await file.text();

  const response = await fetch("https://qqpmdk-3000.csb.app/process", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, mode }),
  });

  const data = await response.json();

  document.getElementById("result").innerHTML = data.result;
}
