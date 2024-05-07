let computerChoice;
let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
  win: 0,
  lose: 0,
  tie: 0,
  }

  score.displayscore = function(){
  return `Win: ${this.win}
  Lose: ${this.lose}
  Tie: ${this.tie}`;
  };
  showResult();
}

function generateComputerChoice(){
    let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log('computer choice is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log('computer choice is Ball');
  } else {
    computerChoice = 'Stump'
    // console.log('computer choice is Stump');
  }
}
function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Bat') {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Stump') {
      score.lose++;
      return 'Computer has won';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Bat') {
      score.lose++;
      return 'Computer has won';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'User won.';
    }
  } else {
    if (computerMove === 'Ball') {
      score.lose++;
      return 'Computer has won';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Stump') {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('#user-move').textContent = userMove? `You have chosen ${userMove}`: ``;
  document.querySelector('#computer-move').textContent = computerMove? `Computer choice is ${computerMove}`: ``;
  document.querySelector('#result').textContent = result || ``;
  document.querySelector('#score').textContent = score.displayscore();

  // alert(`You have chosen ${userMove}. Computer choice is ${computerMove}
  
  // ${result}
  
  // ${score.displayscore()}`);
}



