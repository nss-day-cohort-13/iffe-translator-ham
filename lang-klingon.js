var Translator = (function(trans) {
  var lexicon = {
    "a": ".",
    "an": "ghaH",
    "and": "je",
    "best": "Qaghbe'meH",
    "birthday": "qoS",
    "christmas": "christmas",
    "family": "qorDu'",
    "filled": "Datebchugh",
    "good": "maj",
    "greetings": "ghaH 'ej Duvan",
    "happy": "Quch",
    "holidays": "QI'lop",
    "joy": "yImaq",
    "merry": "Quch",
    "new": "chu'",
    "presents": "SaH",
    "seasons": "maqtagh",
    "the": ".",
    "wishes": "vIneH",
    "year": "DIS"
  };

  //NOTE(adam): disordered to allow for simpler lookup
  var charMap = {
    "ch": "\uF8D2",
    "gh": "\uF8D5",
    "ng": "\uF8DC",
    "tlh": "\uF8E4",
    "a": "\uF8D0",
    "b": "\uF8D1",
    "D": "\uF8D3",
    "e": "\uF8D4",
    "H": "\uF8D6",
    "I": "\uF8D7",
    "j": "\uF8D8",
    "l": "\uF8D9",
    "m": "\uF8DA",
    "n": "\uF8DB",
    "o": "\uF8DD",
    "p": "\uF8DE",
    "q": "\uF8DF",
    "Q": "\uF8E0",
    "r": "\uF8E1",
    "S": "\uF8E2",
    "t": "\uF8E3",
    "u": "\uF8E5",
    "v": "\uF8E6",
    "w": "\uF8E7",
    "y": "\uF8E8",
    "'": "\uF8E9",
    "\\.": "."
  }

  trans.translateToKlingon = function(input) {
    return input.map((w) => { return lexicon[w.toLowerCase()]; });
  }

  trans.toKlingonAlphabet = function(text) {
      for(var alpha of Object.keys(charMap)) {
        text = text.replace(new RegExp(alpha, "g"), charMap[alpha]);
      }

      //NOTE(adam): cheat to replace nonexistant Klingon letters
      text = text.replace(/\w/g, "\uf8f1");

      return text;
  }

  return trans;
}(Translator || {}));
