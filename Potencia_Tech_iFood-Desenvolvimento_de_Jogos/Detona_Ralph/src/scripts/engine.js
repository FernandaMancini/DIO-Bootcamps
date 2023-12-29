const state = {
    view: {
      squares: document.querySelectorAll(".square"),
      enemy: document.querySelector(".enemy"),
      timeLeft: document.querySelector("#time-left"),
      score: document.querySelector("#score"),
      lives: document.querySelector("#lives"),
    },
    values: {
      gameVelocity: 600,
      hitPosition: 0,
      result: 0,
      curretTime: 60,
      lives: 3,
    },
    actions: {
      timerId: setInterval(randomSquare, 1000),
      countDownTimerId: setInterval(countDown, 1000),
    },
  };
  
  function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;
  
    if (state.values.curretTime <= 0) {
      playSound("game-over.mp3");
      clearInterval(state.actions.countDownTimerId);
      clearInterval(state.actions.timerId);
      alert("Game Over! O seu resultado foi: " + state.values.result);
    }
  }
  
  function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}`);
    audio.volume = 0.2;
    audio.play();
  }
  
  function randomSquare() {
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });
  
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
  }
  
  function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        if (square.id === state.values.hitPosition) {
          state.values.result++;
          state.view.score.textContent = state.values.result;
          state.values.hitPosition = null;
          playSound("hit.m4a");
        } else {
          // Se clicar na posição errada, decrementa a vida e verifica se o jogo acabou
          state.values.lives--;
          state.view.lives.textContent = state.values.lives;
          playSound("errou.mp3");
          if (state.values.lives === 0) {
            playSound("game-over.mp3");
            clearInterval(state.actions.countDownTimerId);
            clearInterval(state.actions.timerId);
            alert("Game Over! O seu resultado foi: " + state.values.result);
          }
        }
      });
    });
  }
  
  function initialize() {
    addListenerHitBox();
  }
  
  initialize();