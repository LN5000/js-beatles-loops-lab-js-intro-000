function theBeatlesPlay(musicians,instruments) {
  var l = musicians.length;
  var sentences = [];
  var i;
  for (i = 0; i < l; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return sentences;
}
