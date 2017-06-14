// the Node module that will exports a constructor for creating cloze-deletion flashcards, e.g.:
// accepts two arguments: `text` and `cloze`.
// The `cloze` property contains _only_ the cloze-deleted portion of the text.
// The `partial` property contains _only_ the partial text.
// The `fullText` property contains _only_ the full text.
// The constructor throw or log an error when the cloze deletion does _not_ appear in the input text.

module.exports = function ClozeCard(cloze, text){
	this.cloze = cloze  // "cloze-deleted portion",
	this.partial = text,  //"partial text",
	this.fullText = cloze + " " + text  //"full text"
};

