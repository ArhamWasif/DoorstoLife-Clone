// src/translateHelper.js
import i18n from "./i18n";

const translateToSpanish = async (text) => {
  const apiKey = "AIzaSyAikl5rTmhg-UJJ4CDgZ3heseJTbHXDZAw"; // Use your actual Google API key here
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: "es", // Spanish language code
      }),
    });
    const data = await response.json();
    return data?.data?.translations[0]?.translatedText || text;
  } catch (error) {
    console.error("API request failed:", error);
    return text;
  }
};

export const loadSpanishTranslations = async () => {
  const texts = {
    welcome: "Welcome to our application",
    description: "This is an English page.",
  };

  const translations = {};
  for (const key in texts) {
    translations[key] = await translateToSpanish(texts[key]);
  }
  i18n.addResources("es", "translation", translations); // Load Spanish translations into i18n
};
