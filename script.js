function cleanText() {
  const inputEl = document.getElementById("inputText");
  const outputEl = document.getElementById("outputText");

  let text = inputEl.value;

  text = text.replace(/[\u064B-\u0652]/g, "");

  text = text
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");

  text = text.replace(/[^\u0600-\u06FF\s]/g, "");

  text = text.replace(/\s+/g, " ").trim();

  outputEl.value = text;
}

document.getElementById("cleanBtn").addEventListener("click", cleanText);