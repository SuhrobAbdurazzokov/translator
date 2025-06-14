async function translateText() {
  const text = document.getElementById("inputText").value;

  const from = "uz";
  const to = "en";

  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=${from}|${to}`
    );
    const data = await res.json();
    console.log(data);
    document.getElementById("result").innerText =
      data.responseData.translatedText;
  } catch (error) {
    console.error("Xatolik:", error.message);
    document.getElementById("result").innerText =
      "Tarjima qilishda xatolik yuz berdi.";
  }
}
