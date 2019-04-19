export default function wordsPerMinute(words) {
  if (!!words || typeof words !== "string") return

  return words.split(" ") * 200
}
