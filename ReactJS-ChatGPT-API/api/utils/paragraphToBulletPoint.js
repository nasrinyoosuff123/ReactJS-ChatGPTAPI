const natural = require('natural');

function convertToBulletPoints(paragraph) {
  const tokenizer = new natural.SentenceTokenizer();
  const sentences = tokenizer.tokenize(paragraph);
  
  const bulletPoints = sentences.map((sentence) => `- ${sentence}`);

  return bulletPoints;
}

module.exports = convertToBulletPoints;
