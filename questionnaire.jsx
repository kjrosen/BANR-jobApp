'use strict';

const question1 = "Do you love work?";
const question2 = "Do you thrive in a fast paced environment?";
const question3 = "We love you! Do you love us?";
const question4 = "We value commitment here at BANR. Please commit to clicking and holding this button for 5 secconds.";
const question5 = "We're not a group of workers, we're a BANR family, which family member are you?";
const question6 = "Where do you see yourself in 5 years?";
const question7 = "How much coffee have you had today?";
const question8 = "Close your eyes. Feel the warm air against your skin. Remember when you were a child of the summer. The feeling of the sun pressing against you, the wind breathing life into you. Remember when you played pretend in the woods. You had a treehouse. It was a pirate ship, a mansion, and a secret base. You were a princess. You were a dragon. Your laugh was loud and unafraid. You were innocent. You measured each day by the strength of sunlight. You measured each night by the number of stars and the drifting weight of your eyelids. You closed your eyes and dreamed of magic. What happened to you?";

const closeText = "Yay! After reviewing your answers, we would love to offer you a position with BANR Level 3! This is an exciting opportunity for us. And for you, I guess. As a way of saying thank you for your devotion, here's a special gift…\nEnter the code 'SINCEDAYONE' when purchasing your ticket to receive a discount";

function AskYorNQuestion(props) {
	//add a state to keep track of quick question
	//on submit check the answer to see if alert needs to be called
	//add 1 to question count and progress in a loop
	function HandleClick(props) {

		alert(props.message)
	}

	return (
		<form class="container">
			<label>{props.question}</label>
			<input type="radio" value="a" class="row">a. Yes</input>
			<input type="radio" value="b" class="row">b. No</input>
		</form>
	)
}

const root = 
ReactDom.createRoot(document.getElementById('questBox'));

// root.render() 