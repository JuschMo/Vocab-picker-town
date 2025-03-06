document.addEventListener("DOMContentLoaded", function () {
    const vocabulary = [
        { german: "Ich wohne ...", english: "I live ..." },
        { german: "in einem Dorf.", english: "in a village." },
        { german: "in einer Kleinstadt.", english: "in a small town." },
        { german: "in einer Großstadt.", english: "in a city." },
        { german: "in der Stadtmitte.", english: "in the city centre." },
        { german: "in den Bergen.", english: "in the mountains." },
        { german: "am Stadtrand.", english: "on the outskirts." },
        { german: "auf dem Land.", english: "in the countryside." },
        { german: "an einem See.", english: "by a lake." },
        { german: "an der Küste.", english: "on the coast." },
        { german: "Das liegt ...", english: "It lies / is situated ..." },
        { german: "im Norden von ...", english: "in the north of ..." },
        { german: "im Osten von ...", english: "in the east of ..." },
        { german: "im Süden von ...", english: "in the south of ..." },
        { german: "im Westen von ...", english: "in the west of ..." },
        { german: "Der Ort ist ...", english: "The place is ..." },
        { german: "Die Gegend ist ...", english: "The region, area is ..." },
        { german: "Die Landschaft ist ...", english: "The countryside is ..." },
        { german: "besonders", english: "especially" },
        { german: "echt", english: "really" },
        { german: "ganz", english: "quite" },
        { german: "Es gibt ...", english: "There is ..." },
        { german: "einen Flughafen.", english: "an airport." },
        { german: "eine Bank.", english: "a bank." },
        { german: "eine Bibliothek.", english: "a library." },
        { german: "eine Post.", english: "a post office." },
        { german: "ein Kino.", english: "a cinema." },
        { german: "ein Krankenhaus.", english: "a hospital." },
        { german: "ein Museum.", english: "a museum." },
        { german: "ein Schwimmbad.", english: "a swimming pool." },
        { german: "viel Verkehr.", english: "a lot of traffic." }
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
