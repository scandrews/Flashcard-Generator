// the inquirer npm package
var inquirer = require("inquirer");

var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var arrayOfQuestions = require("./basic.json");

var basicQuestion = [];
var clozeQuestion = [];

for (i=0; i<arrayOfQuestions.length; i++){
	basicQuestion[i] = new basicCard(arrayOfQuestions[i].front, arrayOfQuestions[i].back);
	clozeQuestion[i] = new clozeCard(arrayOfQuestions[i].back, arrayOfQuestions[i].cloze);
}
	console.log(basicQuestion);
	console.log(clozeQuestion);

loopCount = 0;

// prompts the user with a question gets the answer and checks if correct
function gameQuestions2(){
	if (loopCount < clozeQuestion.length)
		inquirer.prompt([
			{
				name: "answer",
				message: clozeQuestion[loopCount].cloze
			}
			]).then(function(answers) {
				if (clozeQuestion[loopCount].partial === answers.answer){
					console.log("Good answer")
				}else{
					console.log("Sorry Wrong Answer")
				}
				loopCount++;
				gameQuestions2()
		});
};

gameQuestions2();
