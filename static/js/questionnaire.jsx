'use strict';


//All questions can be broken down by how many options are on the radio
function Ask2optQuestion(props) {

	return (
		<form class="container">
			<label class="row">{props.question}
				<input type="radio" value="a" class="col" onClick={props.actionA}>a. {props.a}</input>
				<input type="radio" value="b" class="col" onClick={props.actionB}>b. {props.b}</input>
			</label>
		</form>
	);
}


function Ask5optQuestion(props) {

	return(
		<form class="container">
			<label class="row">{props.question}
				<input type="radio" value="a" class="row">a. {props.a}</input>
				<input type="radio" value="b" class="row">a. {props.b}</input>
				<input type="radio" value="c" class="row">a. {props.c}</input>
				<input type="radio" value="d" class="row">a. {props.d}</input>
				<input type="radio" value="e" class="row">a. {props.e}</input>
			</label>
		</form>
	);
}


function Ask4optQuestion(props) {

	return (
		<form class="container">
			<label class="row">{props.question}</label>
			<div class="row">
				<input type="radio" class="col">a. {props.a}</input>
				<input type="radio" class="col">b. {props.b}</input>
			</div>
			<div class="row">
				<input type="radio" class="col">c. {props.c}</input>
				<input type="radio" class="col">d. {props.d}</input>
			</div>
		</form>
	);
}


//2 answer questions have speciallized events to handle

//unfinished
function PromptYes(props) {
	// add a state hook here to track the number of times "No" selected
	// message should change depending on click num
	let message = "click Yes / No, seriously click Yes";
	return alert(message);
}


function PromoteLearning() {

	return alert("Correct! You will LEARN to thrive in a fast paced environment! BANR loves improvement :)");
}


//unfinished
function Skip5() {
	//when growing this out, this will advance the question count
}


function ShowPityMessage() {

	return alert("I knew it was too early to say that. Stupidstupidstupid");
}


//unfinished
function HandleButtonTest() {
	//set a timer
	//if the timer doesn't make it to 5 display "Um.. we’re not moving forward until we know we’re in this together. Give it another shot."
	//do not progress until button is held for 5 count
}


//objects contains all questions, their answers, the event functions and any pop ups they call upon
const questionsAndAnswers = {
	question1: {
		q:"Do you love work?",
		a: "Yes",
		b: "No",
		actionB: PromptYes(),
		//TODO: do I need to add an option B?
	},
	question2: {
		q:"Do you thrive in a fast paced environment?",
		a: "Yes",
		b: "No",
		actionB: PromoteLearning(),
	},
	question3: {
		q:"We love you! Do you love us?",
		a: "Yes!",
		b: "That's nice of you to say",
		actionA: Skip5(),
		actionB: ShowPityMessage(),
	},
	question4: {
		q:"We value commitment here at BANR. Please commit to clicking and holding this button for 5 secconds.",
		action: HandleButtonTest(),
	},
	question5: {
		q:"We're not a group of workers, we're a BANR family, which family member are you?",
		a: "Snide father",
		b: "Joyful mother",
		c: "Estranged uncle",
		d: "Loyal, slightly overweight dog",
		e: "Wacky, untethered aunt",
	},
	question6: {
		q:"Where do you see yourself in 5 years?",
		a: "BANR",
		b: "BANR",
		c: "BANR",
		d: "BANR",
	},
	question7: {
		q:"How much coffee have you had today?",
		a:"I am present and comfortably energized",
		b:"Don't talk to me you're moving too slow for my little coffee brain",
		c:"I forgot to eat earlier and now I am about to jump out of my fucking skin",
		d:"Am I dying? There's water in coffee right? RIGHT?!",
		e:"I have transcended. I am the purest form of light. I no longer need material objects, maybe one more coffee",
	},
	question8: {
		q: "Close your eyes. Feel the warm air against your skin. Remember when you were a child of the summer. The feeling of the sun pressing against you, the wind breathing life into you. Remember when you played pretend in the woods. You had a treehouse. It was a pirate ship, a mansion, and a secret base. You were a princess. You were a dragon. Your laugh was loud and unafraid. You were innocent. You measured each day by the strength of sunlight. You measured each night by the number of stars and the drifting weight of your eyelids. You closed your eyes and dreamed of magic. What happened to you?",
		a: "Too much",
		b: "Not enough",
	}
};

//the closing text
const closeText = "Yay! After reviewing your answers, we would love to offer you a position with BANR Level 3! This is an exciting opportunity for us. And for you, I guess. As a way of saying thank you for your devotion, here's a special gift…\nEnter the code 'SINCEDAYONE' when purchasing your ticket to receive a discount";


const root = 
ReactDom.createRoot(document.getElementById('questBox'));
// root.render() 


const Q1 = <Ask2optQuestion question={questionsAndAnswers[question1][q]} a={questionsAndAnswers[question1][a]} b={questionsAndAnswers[question1][b]} actionB={questionsAndAnswers[question1][action]} />;
const Q2 = <Ask2optQuestion question={questionsAndAnswers[question2][q]} a={questionsAndAnswers[question2][a]} b={questionsAndAnswers[question2][b]} actionB={questionsAndAnswers[question2][action]} />;
const Q3 = <Ask2optQuestion question={questionsAndAnswers[question3][q]} a={questionsAndAnswers[question3][a]} b={questionsAndAnswers[question3][b]} actionA={questionsAndAnswers[question3][actionA]} actionB={questionsAndAnswers[question3][actionB]} />;

//this needs to be built
const Q4 = <HandleButtonTest />;

const Q5 = <Ask5optQuestion question={questionsAndAnswers[question5][q]} a={questionsAndAnswers[question5][a]} b={questionsAndAnswers[question5][b]} c={questionsAndAnswers[question5][c]} d={questionsAndAnswers[question5][d]} e={questionsAndAnswers[question5][e]} />;
const Q6 = <Ask5optQuestion question={questionsAndAnswers[question6][q]} a={questionsAndAnswers[question6][a]} b={questionsAndAnswers[question6][b]} c={questionsAndAnswers[question6][c]} d={questionsAndAnswers[question6][d]} />;
const Q7 = <Ask5optQuestion question={questionsAndAnswers[question7][q]} a={questionsAndAnswers[question7][a]} b={questionsAndAnswers[question7][b]} c={questionsAndAnswers[question7][c]} d={questionsAndAnswers[question7][d]} e={questionsAndAnswers[question7][e]} />;
const Q8 = <Ask5optQuestion question={questionsAndAnswers[question8][q]} a={questionsAndAnswers[question8][a]} b={questionsAndAnswers[question8][b]} />;

root.render(Q1);