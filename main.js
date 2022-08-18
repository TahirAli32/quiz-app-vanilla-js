const data = {
	html:[
		{
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'Hyper Text Merge Language', answerScore: 0 },
				{ answerText: 'Hyper Text Markup Language', answerScore: 1 },
				{ answerText: 'Hyper Text Markup Logic', answerScore: 0 },
				{ answerText: 'Hyper Test Markup Language', answerScore: 0 },
			],
		},
		{
			questionText: '&lt;br /&gt; is used for?',
			answerOptions: [
				{ answerText: 'Line Break', answerScore: 1 },
				{ answerText: 'Make Heading', answerScore: 0 },
				{ answerText: 'Make Paragraph', answerScore: 0 },
				{ answerText: 'Make Unordered List', answerScore: 0 },
			],
		},
		{
			questionText: '&lt;body&gt; is an opening tag or a closing tag',
			answerOptions: [
				{ answerText: 'Opening Tag', answerScore: 1 },
				{ answerText: 'Self Closing Tag', answerScore: 0 },
				{ answerText: 'Closing Tag', answerScore: 0 },
				{ answerText: 'None of Above', answerScore: 0 },
			],
		},
		{
			questionText: 'Attributes is given in which Tag',
			answerOptions: [
				{ answerText: 'Opening Tag', answerScore: 1 },
				{ answerText: 'Self Closing Tag Only', answerScore: 0 },
				{ answerText: 'Closing Tag', answerScore: 0 },
				{ answerText: 'All of Above', answerScore: 0 },
			],
		},
	],
	css:[
		{
			questionText: 'What does CSS stands for?',
			answerOptions: [
				{ answerText: 'Casing Style Sheet', answerScore: 0 },
				{ answerText: 'Collating Style Sheet', answerScore: 0 },
				{ answerText: 'Cascading Style Sheets', answerScore: 1 },
				{ answerText: 'Cascaded Style Sheets', answerScore: 0 },
			],
		},
		{
			questionText: 'What is the extension filename for CSS?',
			answerOptions: [
				{ answerText: '.css', answerScore: 1 },
				{ answerText: '.txt', answerScore: 0 },
				{ answerText: '.html', answerScore: 0 },
				{ answerText: '.styles', answerScore: 0 },
			],
		},
		{
				questionText: 'Class "a" is target is CSS by',
				answerOptions: [
				{ answerText: '.a', answerScore: 1 },
				{ answerText: 'class[a]', answerScore: 0 },
				{ answerText: '#a', answerScore: 0 },
				{ answerText: 'a', answerScore: 0 },
			],
		},
		{
			questionText: 'ID "b" is target is CSS by',
			answerOptions: [
				{ answerText: '.b', answerScore: 0 },
				{ answerText: '#b', answerScore: 1 },
				{ answerText: 'class[b]', answerScore: 0 },
				{ answerText: 'b', answerScore: 0 },
			],
		},
		{
			questionText: 'Color property can be given by',
			answerOptions: [
				{ answerText: 'changeColor: red;', answerScore: 0 },
				{ answerText: 'color = red;', answerScore: 0 },
				{ answerText: 'red = color;', answerScore: 0 },
				{ answerText: 'color: red;', answerScore: 1 },
			],
		},
	],
	javascript:[
		{
			questionText: 'JavaScript File Has An Extension of:',
			answerOptions: [
				{ answerText: '.css', answerScore: 0 },
				{ answerText: '.html', answerScore: 0 },
				{ answerText: '.txt', answerScore: 0 },
				{ answerText: '.js', answerScore: 1 },
			],
		},
		{
			questionText: 'Method Prompt() Contain ____ Number of Parameters.',
			answerOptions: [
				{ answerText: 'One', answerScore: 0 },
				{ answerText: 'Two', answerScore: 1 },
				{ answerText: 'Three', answerScore: 0 },
				{ answerText: 'None of Above', answerScore: 0 },
			],
		},
		{
			questionText: 'Inside which HTML element do we put the JavaScript?',
			answerOptions: [
				{ answerText: 'js', answerScore: 0 },
				{ answerText: 'style', answerScore: 0 },
				{ answerText: 'script', answerScore: 1 },
				{ answerText: 'scripting', answerScore: 0 },
			],
		},
		{
			questionText: 'Corrent Syntax of "IF" Condition is',
			answerOptions: [
				{ answerText: 'if(condition){statement}', answerScore: 1 },
				{ answerText: 'if{condition}(statement)', answerScore: 0 },
				{ answerText: 'if{condtion + statement}', answerScore: 0 },
				{ answerText: 'None of Above', answerScore: 0 },
			],
		},
	]
}

let score = 0
let pointer = 0
let timeIntervel
let main = document.getElementById('main')

function fetchQuestion(topic, q){
	let qaSection = ""
	let answerOptions = ""
	let optionNo = 1
	let questions = data[topic]

	for (const answers of questions[q].answerOptions){
		answerOptions += `
			<div class="answer">
				<span>${optionNo++}.</span>
				<button class="ansBtn" onclick="handleSubmit(${answers.answerScore}, ${questions.length}, '${topic}')">${answers.answerText}</button>
			</div>
		`
	}
	qaSection += `
		<div class='top'>
			<div class='questionSection'>
				<div class='questionCount'>
					<span>Question ${Number(q)+1}</span>/${questions.length}
				</div>
				<div class='questionText'>${questions[q].questionText}</div>
			</div>
			<div id="timer">
                <div class="circle">
                    <svg>
                        <circle cx="50" cy="50" r="50"></circle>
                        <circle cx="50" cy="50" r="50" id="ss"></circle>
                    </svg>
                    <div id="seconds"></div>
                </div>
            </div>
		</div>
		<div class='answerSection'>
			${answerOptions}
		</div>
	`
	let s = 30
	// let s = 5
	timeIntervel = setInterval(() => {
		if(s>=0){
			let seconds = document.getElementById('seconds')
			let ss = document.getElementById('ss')
			s = (s < 10) ? "0" + s : s
			seconds.innerHTML = s + "<br/><span>Seconds</span>"
			ss.style.strokeDashoffset = 314 - (314 * s) / 30
			s--
		}
		else{
			clearInterval(timeIntervel)
			handleSubmit(0, questions.length, topic)
		}
	}, 1000)

	main.innerHTML = qaSection
}
// fetchQuestion('javascript', pointer)

function handleSubmit(answerScore, arrLength, topicName){
	answerScore && score++
	pointer++
	clearInterval(timeIntervel)
	if(pointer <= arrLength-1){
		fetchQuestion(topicName, pointer)
	}
	else{
		let percentage = (score/arrLength)*100
		percentage = percentage.toFixed(2)
		main.innerHTML = `
			<div class='score-section'>
				<span>You scored ${score} out of ${arrLength}</span>
				<span>Your percentage is ${percentage}%</span>
				<button class="btn" onclick="showTopics()">Go to Home</button>
			</div>
		`
	}
}

function handleLogin(){
	let loginEmail = document.getElementById('loginEmail').value
	let loginPassword = document.getElementById('loginPassword').value
	let showError = document.getElementsByClassName('emptyError')
	let flag = false;
	// let loggedInUser;

	if(!loginEmail.match(/([^\s])/) || !loginPassword.match(/([^\s])/)){
		showError[0].style.display = "initial"
		return
	}
	else{
		showError[0].style.display = "none"
		if(localStorage.getItem('authJson')){	
			showError[1].style.display = "none"
			authJsonArrayData = localStorage.getItem('authJson')
			authJsonArray = JSON.parse(authJsonArrayData)
			for(const user of authJsonArray){
				if(loginEmail === user.email && loginPassword === user.password){
					// loggedInUser = user
					showTopics()
					return
				}
				else{
					flag = true
				}
			}
		}
		else{
			flag = true
		}	
	}
	if(flag){
		showError[1].style.display = "initial"
	}
	document.getElementById('loginEmail').value = ""
	document.getElementById('loginPassword').value = ""
}

function handleSignup(){
	let regName = document.getElementById('regName').value
	let regEmail = document.getElementById('regEmail').value
	let regPassword = document.getElementById('regPassword').value
	let showError = document.getElementsByClassName('emptyError')
	
	if(!regName.match(/([^\s])/) || !regEmail.match(/([^\s])/) || !regPassword.match(/([^\s])/)){
		showError[2].style.display = "initial"
		return
	}
	else{
		showError[2].style.display = "none"
		if (localStorage.getItem('authJson') == null){
			authJsonArray = []
			authJsonArray.push({"name": regName, "email": regEmail, "password": regPassword})
			localStorage.setItem('authJson', JSON.stringify(authJsonArray))
		}
		else{
			authJsonArrayData = localStorage.getItem('authJson')
			authJsonArray = JSON.parse(authJsonArrayData)
			authJsonArray.push({"name": regName, "email": regEmail, "password": regPassword})
			localStorage.setItem('authJson', JSON.stringify(authJsonArray))
		}
		document.getElementById('regName').value = ""
		document.getElementById('regEmail').value = ""
		document.getElementById('regPassword').value = ""
		changeAuthScreen('login', 'signup')
	}
}

function changeAuthScreen(to, from){
	document.getElementById(to).style.display = "flex"
	document.getElementById(from).style.display = "none"
	let showError = document.getElementsByClassName('emptyError')
	
	showError[0].style.display = "none"
	showError[1].style.display = "none"
	showError[2].style.display = "none"
}

function showTopics(){
	score = 0
	pointer = 0
	main.innerHTML = `
		<div class="subjectSection">
            <h1>Select Subject:</h1>
            <div class="subject">
                <p>HTML</p>
                <button onclick="fetchQuestion('html', 0)" class="btnQuiz">Take Quiz</button>
            </div>
            <div class="subject">
                <p>CSS</p>
                <button onclick="fetchQuestion('css', 0)" class="btnQuiz">Take Quiz</button>
            </div>
            <div class="subject">
                <p>Javascript</p>
                <button onclick="fetchQuestion('javascript', 0)" class="btnQuiz">Take Quiz</button>
            </div>
        </div>
	`
}