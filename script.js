document.addEventListener("DOMContentLoaded", function () {
    const vocabulary = [
        { german: "ein Geschäft.", english: "a shop." },
        { german: "ein Kino.", english: "a cinema." },
        { german: "ein Krankenhaus.", english: "a hospital." }
    ];

    let currentWord = null;
    let currentLanguage = "";

    function getRandomWord(language) {
        const randomIndex = Math.floor(Math.random() * vocabulary.length);
        currentWord = vocabulary[randomIndex];
        currentLanguage = language;
        document.getElementById("randomWord").textContent = language === "german" ? currentWord.german : currentWord.english;
        document.getElementById("translation").textContent = "---";
        document.getElementById("showTranslation").disabled = false;
    }

    document.getElementById("getGermanWord").addEventListener("click", function() {
        getRandomWord("german");
    });

    document.getElementById("getEnglishWord").addEventListener("click", function() {
        getRandomWord("english");
    });

    document.getElementById("showTranslation").addEventListener("click", function() {
        if (currentWord) {
            document.getElementById("translation").textContent = currentLanguage === "german" ? currentWord.english : currentWord.german;
        }
    });
});
