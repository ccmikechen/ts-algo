export function generateDocument(characters: string, document: string) {
  const map: Map<string, number> = new Map();

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }

  for (let i = 0; i < document.length; i++) {
    const char = document[i];
    const count = map.get(char) || 0;
    if (count === 0) return false;
    map.set(char, count - 1);
  }

  return true;
}

const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";
console.log(generateDocument(characters, document));
