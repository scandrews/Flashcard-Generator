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

var loopcount = 0;

// prompts the user with a question gets the answer and checks if correct
function gameQuestions(){
	if (loopcount < basicQuestion.length)
		inquirer.prompt([
			{
				name: "answer",
				message: basicQuestion[loopcount].front
			}
			]).then(function(answers) {
				if (basicQuestion[loopcount].back === answers.answer){
					console.log("Good answer")
				}else{
					console.log("Sorry Wrong Answer")
				}
				loopcount++;
				gameQuestions()
		});
};

gameQuestions();
