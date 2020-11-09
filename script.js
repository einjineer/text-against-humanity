function randomMessage(array) {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}

const response = ["AIDS.",
  "Getting cummed on.",
  "Racism.",
  "Gloryholes.",
  "Black people.",
  "Masturbating.",
  "Child abuse.",
  "Anal beads.",
  "Slaughtering innocent civilians.",
  "A stray pube.",
  "Doin' it in the butt.",
  "Not wearing pants.",
  "Forced sterilization.",
  "An unwanted pregnancy.",
  "Harry Potter erotica.",
  "Memes.",
  "Sex with animals.",
  "Some guy.",
  "African children.",
  "Illegal immigrants.",
  "The clitoris.",
  "Announcing that I am about to cum.",
  "Balls.",
  "Grandma.",
  "Being a dick to children.",
  "Dying.",
  "The gays.",
  "Fake tits.",
  "A brain tumor.",
  "Jews, gypsies, and homosexuals."];

const prompt = ["Next from J.K. Rowling: Harry Potter and the Chamber of ___.",
  "I'm sorry, Professor, but I couldn't complete my homework because of ___.",
  "Dude, do not go in that bathroom. There's ___ in there.",
  "50% of all marriages end in ___.",
  "White people like ___.",
  "When I am President, I will create the Department of ___.",
  "During sex, I like to think about ___.",
  "But before I kill you, Mr. Bond, I must show you ___.",
  "War! What is it good for?",
  "Kids, I don't need drugs to get high. I'm high on ___."];

console.log(randomMessage(prompt));
console.log(randomMessage(response));