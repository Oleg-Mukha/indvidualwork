document.body.innerHTML =`
<header class="header">
    <div class="container">
    <div class="header_inner">
<div><img class="logo" src="img/playerr.gif" alt="logo"></div>
<div class="menu">
<img class="menu_icon" src="img/menu.png" alt="menu">
</div>
<div class="nav">
<div class="list">
<div> <div class="nav_link active" id="home" href="#" onclick="HomeShow()">Magic Ball</div></div>
<div> <div class="nav_link" href="#" id="rev" onclick="RevShow()">Card Game</div> </div>
<div> <div class="nav_link" href="#" id="about" onclick="BlackJackShow()">BlackJack</div></div>
<div> <div class="nav_link" id="slotmach" href="#" onclick="SlotMachine()">SlotMachine</div></div>
</div>
</div>
</div> </div>
</header>

<!-- home_page -->
<div class="ball">
<div class="shadow">
  <input class="field" id="question" type="text" placeholder="задати питання">
  <div class="circle" id="crcl"><img class = "circleImg" src="img/rabbit.gif"></div>
  <div class="answer" id="predict"></div>
</div>
</div>

<!-- cardGame_page -->
<div class="cardGame">
  <div class="background">
      <div class="segment">
        <img class="avatar" id="avatar-player">
        <div class="name" id="name-player"></div>
        <div class="scores" id="score1"></div>
        <div class="card" id="card-player"></div>
      </div>
      <div class="segment buttons">
      <button class="button btn1" id="butStart" onClick="playGame();"><span class="link-content">PLAY</span></button>
      <button class="button btn2" id="butReset" onClick="resetGame();"><span class="link-content">RESET<span></button>
      </div>
      <div class="segment bot">
      <img class="avatar" id="avatar-bot">
      <div class="name" id="name-bot"></div>
      <div class="scores" id="score2"></div>
      <div class="card" id="card-bot"></div>
      </div>
  </div>
</div>

<!-- blackjack -->
<div class="BlackJack">
  <div class="bgrnd">
    <div class="seg">
      <img class="ava" id="player-ava"/>
      <div class="nam" id="player-name"></div>
      <div class="scr" id="scorePlayer"></div>
      <img class="crd" id="player-card"/>
    </div>
    <div class="seg bbtns">
    <button class="btn btnn1" id="startBut" onClick="GamePlay();"><span class="lnk-content">PLAY</span></button>
    <button class="btn btnn2" id="resBut" onClick="GameReset();"><span class="lnk-content">RESET<span></button>
    </div>
    <div class="seg bot">
    <img class="ava" id="bot-avatar"/>
    <div class="nam" id="bot-name"></div>
    <div class="scr" id="scoreBot"></div>
    <img class="crd" id="bot-card"/>
    </div>
</div>
</div>
<!-- blackjack -->
<!-- slotmachine -->
<div class="slot">
  <div class="slotMachine">
  	<div id="infoboard">... SLOT MACHINE ...</div>
  	<div id="reels">
  		<div id="reel1" class="c7"></div>
  		<div id="reel2" class="c7"></div>
  		<div id="reel3" class="c7"></div>
  	</div>
  	<button class="knopka" id="play" onClick="playSpin()">SPIN</button>
  	<div>
  		<div class="info" id="balance">50<img id="photo" class="img coin" src="img/casino-chip.png" alt="casino-chips"/></div>
  		<div class="info" id="spins">0<img id="photo" class="img" src="img/replay.png" alt="circle arrows"/></div>
  		<div class="info" id="wins">0<img id="photo" class="img" src="img/winner.png" alt="win icon"/></div>
  	</div>
  	<button class="knopka" onclick="addChips();" id="borrow">GET CHIPS</button>
  </div>
</div>
<!-- slotmachine -->
`

var title = document.title;
var char = 0;
function writetitle() {
  document.title = title.substring(0, char);
  if(char==title.length) {
    char = 0;
		setTimeout("writetitle();", 3000);
  } else {
    char++;
    setTimeout("writetitle();", 200);
  }
}
writetitle();


let home = document.querySelector(".ball"),
    rev = document.querySelector(".cardGame"),
    about = document.querySelector(".BlackJack");
    slot = document.querySelector(".slot");
function HomeShow(){
    document.getElementById('home').classList.add('active');
    document.getElementById('rev').classList.remove('active');
    document.getElementById('about').classList.remove('active');
    document.getElementById('slotmach').classList.remove('active')

    about.style.display = 'none';
    rev.style.display = 'none';
    home.style.display = 'flex';
    slot.style.display = 'none';
}
function RevShow(){
    document.getElementById('rev').classList.add('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('about').classList.remove('active');
    document.getElementById('slotmach').classList.remove('active');

    home.style.display = 'none';
    about.style.display = 'none';
    rev.style.display = 'flex';
    slot.style.display = 'none';
}

function BlackJackShow(){
    document.getElementById('about').classList.add('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('rev').classList.remove('active');
    document.getElementById('slotmach').classList.remove('active');
    home.style.display = 'none';
    rev.style.display = 'none';
    about.style.display = 'flex';
    slot.style.display = 'none';
}

function SlotMachine(){
    document.getElementById('slotmach').classList.add('active');
    document.getElementById('about').classList.remove('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('rev').classList.remove('active');
    home.style.display = 'none';
    rev.style.display = 'none';
    about.style.display = 'none';
    slot.style.display = 'flex';
}
// ----- Magic Ball ---- //

const answers = [
"Так", "Звісно", "Безумовно", "Чому ні?", "Мабуть так", "Ймовірно", "Варто спробувати",
"Спробуй", "Сумнівно", "Не знаю", "Можливо", "Не треба", "Навіщо?", "Можливо... Але ні",
"Ні", "Звісно ні", "Не думаю, що це гарна ідея", "Не варто"];

document.getElementById('crcl').onclick = function (){
    if (document.getElementById("question").value == ""){
        alert ("Заповніть, будь-ласка, вище зазначене поле");
        document.getElementById("question").style.background = "#ed37379e";
        }
    else if (document.getElementById("question").value.indexOf("?") == -1){
        alert("Ви ввели не питання))\n Потрібно з '?'");
        }
    else{
        document.getElementById("question").style.background = "#3d49828d";
        document.getElementById("predict").style.animation = "text 5s ease";
        let random = Math.floor(Math.random() * answers.length);
        document.getElementById("predict").innerHTML = answers[random];
        document.getElementById('crcl').classList.add('shakeAnim');
        setTimeout(function(){document.getElementById('crcl').classList.remove('shakeAnim');}, 1000);
      }
}

// ----- Magic Ball ---- //
// ---- Card Game -- //

var playerName = prompt('Enter your name:');
var namePlayer = document.getElementById('name-player').innerHTML = playerName;

const botName = ['BOT Itsuki', "BOT Ren", "BOT Bryan", "BOT Charles", "BOT Richard", "BOT Jack", "BOT John"];

var counterPlayer = 0;
var counterBot = 0;

var chooseEnemy = prompt('Please, choose an opponent:\nEnter "1" - Cat - easy level\nEnter "2" - Rabbit - medium level\nEnter "3" - Dog - hard level');

var btnPlay = document.getElementById('butStart');

function setGameOver() {
  btnPlay.disabled = true;
}
  btnPlay.style.cursor = "not-allowed";

function resetGame(){
 btnPlay.disabled = false;
 btnPlay.style.cursor = "pointer";
 document.getElementById('score1').innerHTML = '';
 document.getElementById('score2').innerHTML = '';
 counterPlayer = 0;
 counterBot = 0;
 document.getElementById('card-player').innerHTML = '';
 document.getElementById('card-bot').innerHTML = '';
 if(chooseEnemy == 1){
   document.getElementById("avatar-bot").src="img/cat/defaultCat.gif";
 }
 if(chooseEnemy == 2){
   document.getElementById("avatar-bot").src="img/rabbit/defaultRabbit.gif";
 }
 if(chooseEnemy == 3){
   document.getElementById("avatar-bot").src="img/shiba/defaultShiba.gif";
 }
 document.getElementById("avatar-player").src="img/playerHero/defaultCorgi.gif";

 document.getElementById('card-player').classList.add('shakeAnimPlayer');
 document.getElementById('card-bot').classList.add('shakeAnimBot');
 setTimeout(function(){document.getElementById('card-player').classList.remove('shakeAnimPlayer');}, 600);
 setTimeout(function(){document.getElementById('card-bot').classList.remove('shakeAnimBot');}, 600);
}

if(chooseEnemy == 1){
  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById("avatar-bot").src="img/cat/defaultCat.gif";
  document.getElementById("avatar-player").src="img/playerHero/defaultCorgi.gif";
}
if(chooseEnemy == 2){
  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById("avatar-bot").src="img/rabbit/defaultRabbit.gif";
  document.getElementById("avatar-player").src="img/playerHero/defaultCorgi.gif";
}
if(chooseEnemy == 3){
  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById("avatar-bot").src="img/shiba/defaultShiba.gif";
  document.getElementById("avatar-player").src="img/playerHero/defaultCorgi.gif";
}

function playGame(){
  var playerUser = document.getElementById("card-player").innerHTML = Math.floor(Math.random() * 10);

  if(chooseEnemy == 1){
    var playerCat = document.getElementById("card-bot").innerHTML = Math.floor(Math.random() * 5);
    if(playerUser > playerCat){
      counterPlayer++;
      document.getElementById("score1").innerHTML = counterPlayer;
      }
    if(playerUser < playerCat){
      counterBot++;
      document.getElementById("score2").innerHTML = counterBot;
    }
     if(counterBot == 2){
      document.getElementById("avatar-bot").src="img/cat/happyCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/worryCorgi.gif";
    }
    if(counterPlayer == 2){
      document.getElementById("avatar-bot").src="img/cat/worryCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/happyCorgi.gif";
    }
    if(counterBot == 3){
      document.getElementById("avatar-bot").src="img/cat/winCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/upsetCorgi.gif";
    }
    if(counterPlayer == 3){
      document.getElementById("avatar-bot").src="img/cat/upsetCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/winCorgi.gif";
    }
  }
  else if(chooseEnemy == 2){
    var playerRabbit = document.getElementById("card-bot").innerHTML = Math.floor(Math.random() * 10);
    if(playerUser > playerRabbit){
      counterPlayer++;
      document.getElementById("score1").innerHTML = counterPlayer;
      }
    if(playerUser < playerRabbit){
      counterBot++;
      document.getElementById("score2").innerHTML = counterBot;
    }
    if(counterBot == 2){
      document.getElementById("avatar-bot").src="img/rabbit/happyRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/worryCorgi.gif";
    }
    if(counterPlayer == 2){
      document.getElementById("avatar-bot").src="img/rabbit/worryRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/happyCorgi.gif";
    }
    if(counterBot == 3){
      document.getElementById("avatar-bot").src="img/rabbit/winRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/upsetCorgi.gif";
    }
    if(counterPlayer == 3){
      document.getElementById("avatar-bot").src="img/rabbit/upsetRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/winCorgi.gif";
    }
  }
  else if(chooseEnemy == 3){
    var playerShiba = document.getElementById("card-bot").innerHTML = Math.floor(Math.random() * 25);
    if(playerUser > playerShiba){
      counterPlayer++;
      document.getElementById("score1").innerHTML = counterPlayer;
      }
    if(playerUser < playerShiba){
      counterBot++;
      document.getElementById("score2").innerHTML = counterBot;
    }
    if(counterBot == 2){
      document.getElementById("avatar-bot").src="img/shiba/happyShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/worryCorgi.gif";
    }
    if(counterPlayer == 2){
      document.getElementById("avatar-bot").src="img/shiba/worryShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/happyCorgi.gif";
    }
    if(counterBot == 3){
      document.getElementById("avatar-bot").src="img/shiba/winShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/upsetCorgi.gif";
    }
    if(counterPlayer == 3){
      document.getElementById("avatar-bot").src="img/shiba/upsetShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/winCorgi.gif";
    }
  }

  if(counterPlayer == 3){
    alert("Player " + namePlayer + ' won!');
    setGameOver();
  }
  else if(counterBot == 3){
    alert(nameBot + ' won!');
    setGameOver();
  }

  document.getElementById('card-player').classList.add('shakeAnimPlayer');
  document.getElementById('card-bot').classList.add('shakeAnimBot');
  setTimeout(function(){document.getElementById('card-player').classList.remove('shakeAnimPlayer');}, 600);
  setTimeout(function(){document.getElementById('card-bot').classList.remove('shakeAnimBot');}, 600);
}

// ---- Card Game ---- //

// ---- BlackJack ---- //
document.getElementById('player-name').innerHTML = playerName;
var cntrPlayer = 0;
var cntrBot = 0;
var cntrGame = 0;
var cards = [
"img/cards/bybn_6.png", "img/cards/cherv_6.png", "img/cards/piki_6.png", "img/cards/tref_6.png",
"img/cards/bybn_7.png", "img/cards/cherv_7.png", "img/cards/piki_7.png", "img/cards/tref_7.png",
"img/cards/bybn_8.png", "img/cards/cherv_8.png", "img/cards/piki_8.png", "img/cards/tref_8.png",
"img/cards/bybn_9.png", "img/cards/cherv_9.png", "img/cards/piki_9.png", "img/cards/tref_9.png",
"img/cards/bybn_10.png", "img/cards/cherv_10.png", "img/cards/piki_10.png", "img/cards/tref_10.png",
"img/cards/bybn_jack.png", "img/cards/cherv_jack.png", "img/cards/piki_jack.png", "img/cards/tref_jack.png",
"img/cards/bybn_queen.png", "img/cards/cherv_queen.png", "img/cards/piki_queen.png", "img/cards/tref_queen.png",
"img/cards/bybn_king.png", "img/cards/cherv_king.png", "img/cards/piki_king.png", "img/cards/tref_king.png",
"img/cards/bybn_ace.png", "img/cards/cherv_ace.png", "img/cards/piki_ace.png", "img/cards/tref_ace.png"];

var btnPlay = document.getElementById('startBut');

document.getElementById("bot-avatar").src="img/robot.png";
document.getElementById("player-ava").src="img/cat.png";

function GameOver() {
  btnPlay.disabled = true;
  btnPlay.style.cursor = "not-allowed";
}

function GameReset(){
  btnPlay.disabled = false;
  btnPlay.style.cursor = "pointer";
  document.getElementById('scorePlayer').innerHTML = '';
  document.getElementById('scoreBot').innerHTML = '';
  cntrPlayer = 0;
  cntrBot = 0;
  cntrGame = 0;
  document.getElementById('player-card').src = 'img/cards/freecard.png';
  document.getElementById('bot-card').src = 'img/cards/freecard.png';
  document.getElementById('player-card').classList.add('shakeAnimPlayer');
  document.getElementById('bot-card').classList.add('shakeAnimBot');
  setTimeout(function(){document.getElementById('player-card').classList.remove('shakeAnimPlayer');}, 600);
  setTimeout(function(){document.getElementById('bot-card').classList.remove('shakeAnimBot');}, 600);
}

  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("bot-name").innerHTML = botName[random];
  document.getElementById('player-card').src = 'img/cards/freecard.png';
  document.getElementById('bot-card').src = 'img/cards/freecard.png';

function GamePlay(){

  var randomCardPlayer = Math.floor(Math.random() * cards.length);
  var randomCardBot = Math.floor(Math.random() * cards.length);
  var playerCard = document.getElementById("player-card").src = cards[randomCardPlayer];
  var botCard = document.getElementById("bot-card").src = cards[randomCardBot];

  if(playerCard == cards[0] || playerCard == cards[1] || playerCard == cards[2] || playerCard == cards[3]){
    cntrPlayer = cntrPlayer + 6;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[4] || playerCard == cards[5] || playerCard == cards[6] || playerCard == cards[7]){
    cntrPlayer = cntrPlayer + 7;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[8] || playerCard == cards[9] || playerCard == cards[10] || playerCard == cards[11]){
    cntrPlayer = cntrPlayer + 8;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[12] || playerCard == cards[13] || playerCard == cards[14] || playerCard == cards[15]){
    cntrPlayer = cntrPlayer + 9;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[16] || playerCard == cards[17] || playerCard == cards[18] || playerCard == cards[19]){
    cntrPlayer = cntrPlayer + 10;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[20] || playerCard == cards[21] || playerCard == cards[22] || playerCard == cards[23]){
    cntrPlayer = cntrPlayer + 2;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[24] || playerCard == cards[25] || playerCard == cards[26] || playerCard == cards[27]){
    cntrPlayer = cntrPlayer + 3;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[28] || playerCard == cards[29] || playerCard == cards[30] || playerCard == cards[31]){
    cntrPlayer = cntrPlayer + 4;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }
  if(playerCard == cards[32] || playerCard == cards[33] || playerCard == cards[34] || playerCard == cards[35]){
    cntrPlayer = cntrPlayer + 11;
    document.getElementById("scorePlayer").innerHTML = cntrPlayer;
  }

  if(botCard == cards[0] || botCard == cards[1] || botCard == cards[2] || botCard == cards[3]){
    cntrBot = cntrBot + 6;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[4] || botCard == cards[5] || botCard == cards[6] || botCard == cards[7]){
    cntrBot = cntrBot + 7;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[8] || botCard == cards[9] || botCard == cards[10] || botCard == cards[11]){
    cntrBot = cntrBot + 8;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[12] || botCard == cards[13] || botCard == cards[14] || botCard == cards[15]){
    cntrBot = cntrBot + 9;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[16] || botCard == cards[17] || botCard == cards[18] || botCard == cards[19]){
    cntrBot = cntrBot + 10;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[20] || botCard == cards[21] || botCard == cards[22] || botCard == cards[23]){
    cntrBot = cntrBot + 2;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[24] || botCard == cards[25] || botCard == cards[26] || botCard == cards[27]){
    cntrBot = cntrBot + 3;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[28] || botCard == cards[29] || botCard == cards[30] || botCard == cards[31]){
    cntrBot = cntrBot + 4;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }
  if(botCard == cards[32] || botCard == cards[33] || botCard == cards[34] || botCard == cards[35]){
    cntrBot = cntrBot + 11;
    document.getElementById("scoreBot").innerHTML = cntrBot;
  }

  cntrGame++;

  if(cntrPlayer == 21){
    alert('Congrats! Player ' + namePlayer + ' has blackjack!');
  }
  else if(cntrBot == 21){
    alert('Player ' + namePlayer + 'lost - ' + nameBot + 'has blackjack!');
  }
  else if(cntrPlayer > 21){
    alert('Game over - ' + nameBot + ' won');
  }
  else if(cntrBot > 21){
    alert('Game over - Player ' + namePlayer + ' win');
  }
  else if(cntrGame == 3){
  if(cntrPlayer > 21){
      alert('Game over - ' + nameBot + ' won');
  }
  else if(cntrBot > 21){
      alert('Game over - Player ' + namePlayer + ' win');
  }
  else if(cntrPlayer > cntrBot){
      alert('Game over - Player ' + namePlayer + ' win');
  }
  else if(cntrPlayer < cntrBot){
      alert('Game over - ' + nameBot + ' won');
  }
  else if(cntrPlayer == cntrBot){
      alert('Game over - draw');
  }
    GameOver();
  }
  document.getElementById('player-card').classList.add('shakeAnimPlayer');
  document.getElementById('bot-card').classList.add('shakeAnimBot');
  setTimeout(function(){document.getElementById('player-card').classList.remove('shakeAnimPlayer');}, 600);
  setTimeout(function(){document.getElementById('bot-card').classList.remove('shakeAnimBot');}, 600);
}


//


const desires = ['!!! GOOD LUCK !!!', "!!! FORTUNE WITH YOU !!!", "!!! BUENA SUERTE !!!", "!!! BEST OF LUCK !!!"];
var doing = false;
let spinCounter = 0;
let balance = 50;

var btnPlay = document.getElementById('play');
var btnBorrow = document.getElementById("borrow");

// - Fuction Borrow Chips - //

function addChips(){
		if(balance == 0){
		balance = balance + 50;
		document.getElementById('balance').innerHTML = balance + "<img id='photo' class='img coin' src='img/casino-chip.png'>";
		btnPlay.disabled = false;
		btnPlay.style.cursor = "pointer";
		btnBorrow.disabled = true;
		btnBorrow.style.cursor = "not-allowed";
	}
	else{
	 	alert('Error! You can`t borrow chips if your balance is higher than 0.');
	 	btnBorrow.disabled = true;
	 	btnBorrow.style.cursor = "not-allowed";
	}
}

function randVal(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}
// - Game Script - //

function playSpin()
{
	if (doing){return null;}
	doing = true;
	var numChanges = randVal(1, 4) * 7;
	var reelValue1 = numChanges + randVal(1, 7);
	var reelValue2 = numChanges + 3 * 7 + randVal(1, 7);
	var reelValue3 = numChanges + 5 * 7 + randVal(1, 7);

	spinCounter++;
	balance = balance - 10;

	document.getElementById('spins').innerHTML = spinCounter + "<img id='photo' class='img' src='img/replay.png'>";

	var i1 = 0;
	var i2 = 0;
	var i3 = 0;

	let random = Math.floor(Math.random() * desires.length);
	document.getElementById('infoboard').innerHTML = desires[random];

	reel1 = setInterval(spin1, 60);
	reel2 = setInterval(spin2, 60);
	reel3 = setInterval(spin3, 60);

	function spin1(){
		i1++;
		if(i1>=reelValue1){
			clearInterval(reel1);
			return null;
		}
		var slot1 = document.getElementById("reel1");
		if(slot1.className == "c7"){
			slot1.className = "c0";
		}
		slot1.className = "c" + (parseInt(slot1.className.substring(1)) + 1);
	}

	function spin2(){
		i2++;
		if(i2 >= reelValue2){
			clearInterval(reel2);
			return null;
		}
		var slot2 = document.getElementById("reel2");
		if(slot2.className=="c7"){
			slot2.className = "c0";
		}
		slot2.className = "c" + (parseInt(slot2.className.substring(1)) + 1);
	}

	function spin3(){
		i3++;
		if (i3 >= reelValue3){
			clearInterval(reel3);
			result();
			return null;
		}
		var slot3 = document.getElementById("reel3");
		if (slot3.className == "c7"){
			slot3.className = "c0";
		}
		slot3.className = "c" + (parseInt(slot3.className.substring(1)) + 1);
	}
}

let winCounter = 0;

function result(){

	var val1 = document.getElementById("reel1").className;
	var val2 = document.getElementById("reel2").className;
	var val3 = document.getElementById("reel3").className;

	if (((val1 == val2 && val2 == val3) || (val1 == val2 && val3 == "c7") ||
		(val1 == val3 && val2 == "c7") || (val2 == val3 && val1 == "c7") ||
		(val1 == val2 && val1 == "c7") || (val1 == val3 && val1 == "c7") ||
		(val2 == val3 && val2 == "c7") ) && !(val1 == val2 && val2 == val3 && val1=="c7")){
		balance = balance + 100;
		winCounter++;
    document.getElementById('infoboard').innerHTML = "CONGRATS! YOU WIN!";
    document.getElementById('balance').innerHTML = balance + "<img id='photo' class='img coin' src='img/casino-chip.png'>";
		document.getElementById('wins').innerHTML = winCounter + "<img id='photo' class='img' src='img/winner.png'>";
	}
	else{
    document.getElementById('infoboard').innerHTML = "YOU LOSE :(";
    document.getElementById('balance').innerHTML = balance + "<img id='photo' class='img coin' src='img/casino-chip.png'>";
	}
	if (balance == 0)
	{
		alert("You lose!\nYou can borrow 50 chips or leave casino.");
		btnPlay.disabled = true;
		btnPlay.style.cursor = "not-allowed";
		btnBorrow.disabled = false;
		btnBorrow.style.cursor = "pointer";
	}
	doing = false;
}
