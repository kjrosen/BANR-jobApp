const Q1opts = document.querySelectorAll('#quest1 input');
const Q2opts = document.querySelectorAll('#quest2 input');
const Q3opts = document.querySelectorAll('#quest3 input');
const Q4 = document.querySelector('#quest4 button');
const Q5opts = document.querySelectorAll('#quest5 input');
const Q6opts = document.querySelectorAll('#quest6 input');
const Q7opts = document.querySelectorAll('#quest7 input');
const Q8opts = document.querySelectorAll('#quest8 input');

const questBox1Class = document.getElementById('quest1').classList;
const questBox2Class = document.getElementById('quest2').classList;
const questBox3Class = document.getElementById('quest3').classList;
const questBox4Class = document.getElementById('quest4').classList;
const questBox5Class = document.getElementById('quest5').classList;
const questBox6Class = document.getElementById('quest6').classList;
const questBox7Class = document.getElementById('quest7').classList;
const questBox8Class = document.getElementById('quest8').classList;
const closerBoxClass = document.getElementById('closer').classList;

let start;
let end;
let timeHold;
let clickCount = 0;


for (const answer of Q1opts) {
	answer.addEventListener('click', (evt) => {
		clickCount += 1;

		if (answer.value == 'a'){
			questBox1Class.add('hide');
			questBox2Class.remove('hide');
		} else if (clickCount <= 1) {
			clickCount += 1
			alert('click Yes');
		} else if (clickCount > 1) {
			alert('No, seriously click Yes');
		}
	});
}

for (const answer of Q2opts) {
	answer.addEventListener('click', (evt) => {
		if (answer.value == 'b') {
			alert('Correct! You will LEARN to thrive in a fast paced environment! BANR loves improvement :)');
		}
		questBox2Class.add('hide');
		questBox3Class.remove('hide');
	});
}

for (const answer of Q3opts) {
	answer.addEventListener('click', (evt) => {
		if (answer.value == 'a'){
			questBox3Class.add('hide');
			questBox5Class.remove('hide');
		} else {
			alert('I knew it was too early to say that. Stupidstupidstupid');
			questBox3Class.add('hide');
			questBox4Class.remove('hide');
		}
	});
}


Q4.addEventListener('mousedown', (evt) => {
	// evt.preventDefault()

	start = new Date();
});

Q4.addEventListener('mouseup', (evt) => {
	// evt.preventDefault()

	end = new Date();
	holdTime = end-start;

	if (holdTime < 5000) {
		alert("Um...we're not moving forward until we know we're in this together. Give it another shot.")
	} else if (holdTime > 5000) {
		questBox4Class.add('hide');
		questBox5Class.remove('hide');
	} 
});


for (const answer of Q5opts) {
	answer.addEventListener('click', (evt) => {
		
		questBox5Class.add('hide');
		questBox6Class.remove('hide');
	});
}

for (const answer of Q6opts) {
	answer.addEventListener('click', (evt) => {
		
		questBox6Class.add('hide');
		questBox7Class.remove('hide');
	});
}

for (const answer of Q7opts) {
	answer.addEventListener('click', (evt) => {
		
		questBox7Class.add('hide');
		questBox8Class.remove('hide');
	});
}

for (const answer of Q8opts) {
	answer.addEventListener('click', (evt) => {
		
		questBox8Class.add('hide');
		closerBoxClass.remove('hide');
	});
}