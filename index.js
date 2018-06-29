function theBeatlesPlay(musicians,instruments) {
  var l = musicians.length;
  var sentences = [];
  var i;
  for (i = 0; i < l; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[1]}`);
}
  return sentences;
}
