<h1>
     <img align="center" width="60px" src="https://hermes.dio.me/courses/badge/3ba1d337-ed1b-449c-bcf2-7863afcb9c7c.png">
    <span> 
Fundamentos do Aprendizado de Máquina </span>
</h1>

- Interseção de duas disciplinas: ciência de dados e engenharia de software
- **Objetivo:** Utilizar dados para criar um modelo preditivo
- **Exemplos:**
    - Previsão de vendas de sorverte com base na previsão do tempo e vendas históricas;
    - Saber se um paciente está com diabetes com base em fatores como peso, nível de glicose no sangue e outras medidas;
    - Identificação de pinguins com base em observações passadas e com as medições das nadadeiras, bico e outros atributos físicos da ave;
## O aprendizado de máquina como uma *função*
![Aprendizado de Máquina](https://learn.microsoft.com/pt-br/training/wwl-data-ai/fundamentals-machine-learning/media/machine-learning.png)

### 1. Treinamento: 
- São informações do passado que usamos para ensinar um modelo;
- Essas informações incluem detalhes sobre algo que observamos;
- Cada observação possui características (como tamanho, cor, etc.) que chamamos de "atributos" ou "recursos".
- Também inclui o que queremos prever, chamado de "rótulo" (como preço, por exemplo)
- Costumamos chamar os recursos de "x" e o rótulo de "y".

### 2. Algoritmo: 
- Usamos um "algoritmo" para encontrar uma conexão entre as características e o rótulo nos dados de treinamento;
- Esse algoritmo procura padrões nos dados para entender como as características influenciam o rótulo, criando-se uma "fórmula"

### 3. Modelo: 
- encapsula o cálculo derivado pelo algoritmo como uma função - vamos chamá-la de f. Em notação matemática: **y = f(x)**

### ✅ Treinamento Concluído 

### 4. Inferência
- Dar ao modelo novos dados (valores de características) e pedimos para ele prever o rótulo correspondente;
- A saída da previsão é representada frequentemente como ŷ (pronunciado como "y-hat");

## Tipos de Aprendizagem de Máquina
![Tipos de Aprendizado de Máquina](https://learn.microsoft.com/pt-br/training/wwl-data-ai/fundamentals-machine-learning/media/machine-learning-types.png)

### Aprendizado de Máquina Supervisionado
- Os dados de treinamento incluem valores de recursos e valores conhecidos de rótulo;
- Utilizado para treinar modelos determinando um relacionamento entre os recursos e os rótulos em observações passadas, de modo que rótulos desconhecidos possam ser previstos para recursos em casos futuros.

### Regressão
- Forma de aprendizado de máquina supervisionado em que o rótulo previsto pelo modelo é um **VALOR NÚMERICO**
- **Exemplos:**
    - O número de sorvetes vendidos em um determinado dia, com base na temperatura, na chuva e na velocidade do vento.
    - O preço de venda de um imóvel com base no seu tamanho em pés quadrados, no número de quartos que contém e nas métricas socioeconômicas da sua localização.
    - A eficiência de combustível (em milhas por galão) de um carro com base no tamanho do motor, peso, largura, altura e comprimento.

### Classificação
- Forma de aprendizado de máquina supervisionado em que o rótulo representa uma **CATEGORIZAÇÃO**, ou classe. Existem dois cenários comuns de classificação:
    ### Classificação Binária
    - O rótulo determina se o item observado é uma instância de uma classe específica, preveem um de dois resultados mutuamente exclusivos (0 OU 1)
    - **Exemplos:**
        - Se um paciente está em risco de diabetes com base em métricas clínicas como peso, idade, nível de glicose no sangue e assim por diante.
        - Se um cliente do banco ficará inadimplente em um empréstimo com base na renda, no histórico de crédito, na idade e em outros fatores.
        - Se um cliente da lista de emails responderá positivamente a uma oferta de marketing com base nos atributos demográficos e nas compras anteriores.

    ### Classificação multiclasse
    - Amplia a classificação binária para prever um rótulo que representa uma das várias classes possíveis
    - **Exemplos:**
        - A espécie de um pinguim (Adélia, Gentoo ou Chinstrap) com base em suas medidas físicas.
        - O gênero de um filme (comédia, terror, romance, aventura ou ficção científica) com base na equipe de elenco, no diretor e no orçamento.

### Aprendizado de Máquina Não Supervisionado

### Clustering
- Um algoritmo de clustering identifica semelhanças entre observações com base nos seus recursos e as **AGRUPA** em clusters discretos. 
- **Exemplos:**
    - Agrupe flores semelhantes com base no tamanho, no número de folhas e no número de pétalas.
    - Identificar os grupos de clientes semelhantes com base nos atributos demográficos e no comportamento de compra.
