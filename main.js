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

		window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
		var msg = new SpeechSynthesisUtterance();
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];
		msg.text = translationArray.join(" ");
		speechSynthesis.speak(msg);

	});
window.speechSynthesis.getVoices();
