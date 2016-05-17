var Translator = (function(trans) {

	var croatian = {
		"a": "", "an": "", "and": "i", "best": "najbolje", "birthday": "rođendan",
		"christmas": "Božić", "family": "obitelj", "filled": "ispunjen", "good": "dobro",
		"greetings": "pozdravi", "happy": "sretan", "holidays": "pranznici", "joy":"radost",
		"merry":"veseo", "new": "novi", "presents":"predstavlja", "seasons": "godisnja doba",
		"the": "", "wishes":"zelje", "year":"godina"
	};

	trans.translateToCroatian = function(input) {
		var output = [];
		for(var word of input) {
			output.push(croatian[word.toLowerCase()]);
		}
		return output;
	}

	return trans;

}(Translator || {}));
