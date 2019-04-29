const galacticStandardAlphabet = {
  a: '\u158b', // CANADIAN SYLLABICS WEST-CREE RI
  b: '\u154a', // CANADIAN SYLLABICS WEST-CREE LO
  c: '\u0e32\u0e4d', // THAI CHARACTER SARA AA + THAI CHARACTER NIKHAHIT
  d: '\u0a6e', // GURMUKHI DIGIT EIGHT
  e: '\u14b7', // CANADIAN SYLLABICS WEST-CREE MWA
  f: '\u{1d302}', // DIGRAM FOR HUMAN EARTH
  g: '\u2ade', // SHORT LEFT TACK
  h: '\u2ae7', // SHORT DOWN TACK WITH OVERBAR
  i: '\u00a6', // BROKEN BAR
  j: '\u205d', // TRICOLON
  k: '\u5fc4', // CJK UNIFIED IDEOGRAPH-5FC4
  l: '\u{1d106}', // MUSICAL SYMBOL LEFT REPEAT SIGN
  m: '\u27d3', // LOWER RIGHT CORNER WITH DOT
  n: '\u31fc', //  KATAKANA LETTER SMALL RI,
  o: '\u0a6d', // GURMUKHI DIGIT SEVEN
  p: '\u0021\u00a1', // EXCLAMATION MARK + INVERTED EXCLAMATION MARK
  q: '\u1451', // CANADIAN SYLLABICS TOO
  r: '\u2237', // PROPORTION
  s: '\u{200d1}', // CJK UNIFIED IDEOGRAPH-200D1
  t: '\u3131', // HANGUL LETTER KIYEOK, MacKorean: A4A1
  u: '\u2e1a', // HYPHEN WITH DIAERESIS
  v: '\u2ae8', // SHORT UP TACK WITH UNDERBAR
  w: '\u2234', // THEREFORE
  x: '\ua718', // MODIFIER LETTER DOT SLASH
  y: '\u{1d101}', // MUSICAL SYMBOL DOUBLE BARLINE
  y: '\u{1d361}', // COUNTING ROD UNIT DIGIT TWO
  z: '\u0548', // ARMENIAN CAPITAL LETTER VO
  ".": '._.'
}

const toGalacticStandardAlphabet = char =>
  galacticStandardAlphabet[char.toLowerCase()] || char;

const translate = text => text
  .split("")
  .map(toGalacticStandardAlphabet)
  .join("");

const [,,...args] = process.argv;
const text = args.join(" ");
const gsa = translate(text);
console.log(gsa);
