document.getElementById("translate-button")
	.addEventListener("click", function(){
		var textInput = document.getElementById("input-text");
		var textOutput = document.getElementById("output-text");
		var languageSelect = document.getElementById("lang-select");

		var userInputArray = textInput.value.split(" ");
		var translationArray = [];
		switch(languageSelect.value) {
			case "lang-croatian":
				translationArray = Translator.translateToCroatian(userInputArray);
				break;
			case "lang-french":
				translationArray = Translator.translateToFrench(userInputArray);
				break;
			case "lang-klingon":
				translationArray = Translator.translateToKlingon(userInputArray);
				break;
		}

		textOutput.innerHTML = translationArray.join(" ");
	});
