// define a Node module that exports a constructor for creating basic flashcards
// The constructor accepts two arguments: `front` and `back`.
// object has a `front` property that contains the text on the front of the card.
// object has a `back` property that contains the text on the back of the card.

module.exports = function BasicCard(front, back){
	this.front = front, // "text on front"
	this.back = back  // "text on back"
}



// export function CkizeCard(text, cloze){

// }