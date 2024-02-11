<h1>
     <img align="center" width="60px" src="https://hermes.dio.me/courses/badge/3ba1d337-ed1b-449c-bcf2-7863afcb9c7c.png">
    <span> 
Aprendizado Profundo</span>
</h1>

-  Forma avançada de aprendizado de máquina que tenta emular a maneira como o cérebro humano aprende;
- Criação de uma **rede neural artificial** que simula a atividade eletroquímica em neurônios biológicos utilizando funções matemáticas;

| Rede Neural Biologica | Rede Neural Artificial |
| ----------------------| -----------------------|
|![Rede Neural Biológica](https://learn.microsoft.com/pt-br/training/wwl-data-ai/fundamentals-machine-learning/media/biological-neural-network.png)| ![Rede Neural Artificial](https://learn.microsoft.com/pt-br/training/wwl-data-ai/fundamentals-machine-learning/media/artificial-neural-network.png)| 
|Os neurônios disparam em resposta aos estímulos eletroquímicos. Quando disparado, o sinal é passado para os neurônios conectados | Cada neurônio é uma função que opera em um valor de entrada (x) e um peso (w). A função é encapsulada em uma função de ativação que determina se a saída deve ser passada adiante|

## Exemplo de Rede Neural
![Exemplo de Rede Neural](https://learn.microsoft.com/pt-br/training/wwl-data-ai/fundamentals-machine-learning/media/deep-classification.png)

- Medidas do Pinguim (recurso(x)):
    - O comprimento do bico do pinguim
    - A profundidade do bico do pinguim
    - O comprimento das nadadeiras do pinguim
    - O peso do pinguim

- Espécie do Pinguim (rótulo(y)):
    - Adélia
    - Gentoo
    - Chinstrap

1. Entrada de Dados:
    - Pegamos as informações sobre um pinguim (como altura, peso, etc.) e criamos um vetor chamado "x" com esses valores.
2. Primeira Camada da Rede Neural:
    - Esses valores são dados a uma rede neural, onde cada valor é multiplicado por um peso específico (chamado de "w").
    - Cada neurônio nesta camada calcula uma soma ponderada desses valores e uma função de ativação decide se essa soma passa para a próxima camada.
3. Conexões Entre Camadas:
    - Cada neurônio da primeira camada está conectado a todos os neurônios da próxima camada, criando uma rede.
4. Camada de Saída:
    - Na última camada (saída), calcula-se as probabilidades para cada classe de pinguins.
5. Interpretação da Saída:
    - A maior probabilidade indica a classe prevista, chegando na conclusão da inferência
