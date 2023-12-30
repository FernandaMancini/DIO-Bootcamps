# Jogo Detona Ralph 👊

Desafio de Código da DIO
---
Jogo baseado no filme Detona Ralph, onde o objetivo é acertar o Ralph na janela que ele aparecer. Ao longo do projeto, vamos explorar eventos Javascript e manipular áudios no browser.

- **Tecnologias Utilizadas:** HTML, CSS e Javascript

## Melhorias Criadas

- Responsividade
- Adicionando Audios para game-over e quando errar
- Adicionando Vidas Funcionais caso o jogador erre o quadrado que está o Ralph, e caso erre três vezes aparece um alerta de game-over:

```javascript
//... Parte de código
else {
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
//... Parte de cógido
