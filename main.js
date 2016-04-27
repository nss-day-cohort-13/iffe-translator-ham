document.getElementById("translate-button")
  .addEventListener("click", function(){
    var baseFontFamily = document.getElementsByTagName("body")[0].style.fontFamily;

    var textInput = document.getElementById("input-text");
    var textOutput = document.getElementById("output-text");
    var languageSelect = document.getElementById("lang-select");

    var userInputArray = textInput.value.split(" ");
    var translationString;
    switch(languageSelect.value) {
      case "lang-croatian":
        translationString = Translator.translateToCroatian(userInputArray).join(" ");
        textOutput.style.fontFamily = baseFontFamily;
        break;
      case "lang-french":
        translationString = Translator.translateToFrench(userInputArray).join(" ");
        textOutput.style.fontFamily = baseFontFamily ;
        break;
      case "lang-klingon":
        translationString = Translator.translateToKlingon(userInputArray).join(" ");
        translationString = Translator.toKlingonAlphabet(translationString);
        textOutput.style.fontFamily = "klingon";
        break;
    }

    textOutput.innerHTML = translationString;
  });
