const Q1opts = document.querySelectorAll('#quest1 input');
const Q2opts = document.querySelectorAll('#quest2 input');
const Q3opts = document.querySelectorAll('#quest3 input');
const Q4 = document.querySelector('#quest4 button');
const Q5opts = document.querySelectorAll('#quest5 input');
const Q6opts = document.querySelectorAll('#quest6 input');
const Q7opts = document.querySelectorAll('#quest7 input');

const questBox1Class = document.getElementById('quest1').classList;
const questBox2Class = document.getElementById('quest2').classList;
const questBox3Class = document.getElementById('quest3').classList;
const questBox4Class = document.getElementById('quest4').classList;
const questBox5Class = document.getElementById('quest5').classList;
const questBox6Class = document.getElementById('quest6').classList;
const questBox7Class = document.getElementById('quest7').classList;
const questBox8Class = document.getElementById('quest8').classList;


for (const answer of Q1opts) {
	answer.addEventListener('click', (evt) => {
		let clickCount = 1;

		if (answer.value == 'a'){
			questBox1Class.push('hide');
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
		questBox2Class.push('hide');
		questBox3Class.remove('hide');
	});
}

for (const answer of Q3opts) {
	answer.addEventListener('click', (evt) => {
		if (answer.value == 'a'){
			questBox3Class.push('hide');
			questBox5Class.remove('hide');
		} else {
			alert('I knew it was too early to say that. Stupidstupidstupid');
			questBox3Class.push('hide');
			questBox4Class.remove('hide');
		}
	});
}


//

