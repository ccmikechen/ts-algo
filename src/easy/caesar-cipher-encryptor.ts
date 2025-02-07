export function caesarCipherEncryptor(string: string, key: number) {
  const asciiArray = Array.from(string).map(
    (char) => 97 + ((char.charCodeAt(0) - 97 + key) % 26),
  );
  return String.fromCharCode(...asciiArray);
}
