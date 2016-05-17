var Translator= (function(trans) {
	var french= {
		a: "un",
		an: "un",
		and: "et",
		better: "meilleur",
		birthday: "anniversaire",
		christmas: "Noël",
		family: "la famille",
		filled: "rempli",
		well: "bien",
		greeting: "salutations",
		happy: "bonnes",
		holidays: "vacances",
		joy: "joie",
		merry: "joyeux",
		new: "nouveau",
		presents: "cadeaux",
		seasons: "saisons",
		the: "le",
		wishes: "voeux",
		year: "année"
	}

	trans.addFrench= function(englishWord, frenchWord) {
		french[englishWord]= frenchWord;
	};
	trans.translateToFrench= function(input) {
		var output=[];
		for(var word of input) {
			output.push(french[word]);
		}
		return output;
	}
	return trans;
	}(Translator || {}));



