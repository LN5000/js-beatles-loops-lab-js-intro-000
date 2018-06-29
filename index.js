function theBeatlesPlay(musicians,instruments) {
  var l = musicians.length;
  var sentences = [];
  var i;
  for (i = 0; i < l; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return sentences;
}

function johnLennonFacts(facts) {
  var output = [];
  var i = 0;
  while (i < facts.length) {
    output.push(`${facts[i]}!!!`)
    i++;
  }
  return output;
}

function iLoveTheBeatles(n) {
  var output = [];
  do {
    output.push('I love the Beatles!');
    i++;
  }
  while (i < n);
}
