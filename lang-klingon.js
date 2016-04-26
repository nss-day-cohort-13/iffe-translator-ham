var Translator = (function(trans) {
  var lex = {
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

  trans.translateToKlingon = function(input) {
    var output = [];
    for(var word of input) {
      output.push(lex[word.toLowerCase()]);
    }
    return output;
  }

  return trans;
}(Translator));
