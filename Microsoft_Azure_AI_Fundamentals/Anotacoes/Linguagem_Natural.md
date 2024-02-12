<h1>
     <img align="center" width="60px" src="https://hermes.dio.me/courses/badge/a3fdb205-88b5-4838-bfda-a7231e94e6e0.png">
    <span> 
         Processamento de Linguagem Natural (PNL) </span>
</h1>

- Área da IA que trata da compreensão da linguagem escrita ou falada e da resposta em espécie;
- O processamento de linguagem natural pode ser usado para criar:
    - Um analisador de feed de mídia social que detecta o sentimento de uma campanha de marketing de produto;
    - Um aplicativo de pesquisa de documentos que resume documentos em um catálogo;
    - Um aplicativo que extrai marcas e nomes de empresas de textos

- Análise de texto com computadores pode começar com técnicas estatísticas;
- Corpo do texto ➜ *Corpus*
- Assim:
    - Criando Inferência de Significado Semântico;
    - Identificando palavras mais usadas;
    - Simplificando Processos;

## Tokenização

- Tokens: Representações de palavras ou combinações de palavras e pontuação;

![Tokens](https://miro.medium.com/v2/resize:fit:640/format:webp/1*gWP5Whykah1101EpYy17qQ.png)

| Tipo de Tokenização| Funcionamento| Vantagens| Desvantagens|
|--------------------|--------------|----------|-------------|
| Espaços em Branco    | Divide o texto nos espaços em branco entre as palavras. | Simplicidade de implementação; Fácil de entender. | Não adequado para línguas que não utilizam espaços para separar palavras; Pode gerar tokens indesejados em casos de pontuação. |
| Caracteres | Separa o texto em tokens individuais, considerando cada caractere como um token. | Útil para idiomas com complexa estrutura de palavras; Preserva a integridade de cada caractere. | Aumento da dimensionalidade do espaço de características; Pode não capturar significado semântico a nível de palavras. |
| Palavras  | Divide o texto em palavras individuais. | Natural para idiomas com espaçamento claro entre palavras; Facilita a interpretação semântica. | Problemas com hifenização e palavras compostas; Não captura subpalavras significativas. |
| Subpalavras  | Divide o texto em unidades menores, frequentemente encontradas no vocabulário. | Útil para idiomas aglutinativos ou com palavras compostas; Melhor captura de subpalavras significativas. | Pode aumentar a complexidade do pré-processamento; Requer construção de vocabulário. |
| Expressões Regulares | Utiliza padrões definidos por expressões regulares para dividir o texto em tokens. | Flexibilidade na definição de regras de tokenização; Pode lidar com casos complexos. | Complexidade de construção de padrões de expressões regulares; Pode ser difícil de otimizar. |

- **Etapa final da tokenização**: Consiste em substituir cada token individual por um índice inteiro exclusivo.
  
- **Substituição de tokens**: Cada palavra, subpalavra ou caractere tokenizado é substituído por um número inteiro específico. Esse número geralmente corresponde à posição desse token no vocabulário aprendido durante a tokenização.
  
- **Transformação para números inteiros**: Essa etapa conclui a transformação do texto original em uma sequência de números inteiros. O objetivo é preparar os dados para serem processados por modelos de aprendizado de máquina, que trabalham com dados numéricos.

## Aprendizado de máquina para classificação de texto

- Uso de algoritmo de classificação, como a *regressão logística* para classificar o texto com base em um conjunto conhecido de categorizações. 
- **Exemplos** Classificação (0 negativo, 1 positivo):´
    - A comida e o serviço foram ótimos : 1
    - Uma experiência realmente terrível : 0
    - Hum! comida saborosa e clima divertido : 1
    - Serviço lento e comida abaixo do padrão : 0

## Modelos de linguagem semântica
- Codificação de tokens de linguagem como vetores (matrizes de números com vários valores) conhecidos como embeddings;
- Token como coordenadas no espaço multidimensional;
- Palavras relacionadas são agrupadas mais próximas;

![Como funciona](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-text-with-text-analytics-service/media/example-embeddings-graph.png)

![Linguagem Natural](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-text-with-text-analytics-service/media/example-embeddings-graph.png)

- As tarefas comuns de PNL suportadas por modelos de linguagem incluem:

- Análise de texto, como extração de termos-chave ou identificação de entidades nomeadas no texto.
    - Análise de sentimento e mineração de opinião para categorizar o texto como positivo ou negativo .
    - Tradução automática, na qual o texto é traduzido automaticamente de um idioma para outro.
    - Sumarização, na qual são resumidos os pontos principais de um grande corpo de texto.
    - Soluções de IA conversacional, como bots ou assistentes digitais, nas quais o modelo de linguagem pode interpretar a entrada da linguagem natural e retornar uma resposta apropriada.

## Reconhecimento e vinculação de entidades
- Você pode fornecer texto não estruturado ao Azure AI Language e ele retornará uma lista de entidades;
- Uma entidade é um item de um determinado tipo ou categoria e em alguns casos, subtipo;

| Tipo             | Subtipo               | Exemplo                            |
|------------------|-----------------------|------------------------------------|
| Pessoa           |                       | "Bill Gates", "João"               |
| Localização      |                       | "Paris", "Nova York"               |
| Organização      |                       | "Microsoft"                        |
| Quantidade       | Número                | "6" ou "seis"                      |
| Quantidade       | Percentagem           | "25%" ou "cinquenta por cento"     |
| Quantidade       | Ordinal               | "1º" ou "primeiro"                 |
| Quantidade       | Idade                 | "90 dias" ou "30 anos"             |
| Quantidade       | Moeda                 | "10,99"                            |
| Quantidade       | Dimensão              | "10 milhas", "40 cm"               |
| Quantidade       | Temperatura           | "45 graus"                         |
| Data hora        |                       | "18h30, 4 de fevereiro de 2012"    |
| Data hora        | Data                  | "2 de maio de 2017" ou "02/05/2017"|
| Data hora        | Tempo                 | "8h" ou "8h"                       |
| Data hora        | Intervalo de datas    | "2 a 5 de maio"                    |
| Data hora        | Intervalo de tempo    | "18h às 19h"                       |
| Data hora        | Duração               | "1 minuto e 45 segundos"           |
| Data hora        | Definir               | "Toda terça"                       |
| URL              |                       | "https://www.bing.com"             |
| E-mail           |                       | "support@microsoft.com"            |
| Número de telefone baseado nos EUA |     | "(312) 555-0176"                   |
| Endereço de IP   |                       | "10.0.1.125"                       |

- A linguagem Azure AI também suporta a ligação de entidades;
- **Exemplo:** Comi num restaurante em Seattle na semana passada.

| Entidade  | Tipo       | Subtipo             | URL da Wikipédia                            |
|-----------|------------|---------------------|---------------------------------------------|
| Seattle   | Localização|                     | https://en.wikipedia.org/wiki/Seattle |
| semana passada | Data hora | Intervalo de datas |                                             |

## Detecção de idioma
-  Azure AI Language para identificar o idioma em que o texto está escrito
    - O nome do idioma (por exemplo "Inglês") 
    - O código de idioma ISO 639-1 (por exemplo, "en")
    - Uma pontuação que indica um nível de confiança na detecção de idioma

        Comentário 1 : " Um lugar fantástico para almoçar. A sopa estava deliciosa. "
        Comentário 2 : " Comida maravillosa y gran servicio. "
        Comentário 3 : " O croque monsieur com batatas fritas foi ótimo. Bom apetite! "

| Documento    | Nome do idioma | Código ISO 6391  | Pontuação |
|--------------|----------------|------------------|-----------|
| Comentário 1 | Inglês         | en               | 1,0       |
| Comentário 2 | Espanhol       | es               | 1,0       |
| Comentário 3 | Inglês         | en               | 0,9       |

> Observação: O serviço vai identificar o idioma **predominante** no texto, por isso o Comentário 3 é em inglês, apesar do texto conter uma mistura de inglês e francês.

## Extração de frase-chave
- Se você tiver um grande número de pesquisas, pode usar os recursos de extração de frases-chave do serviço de linguagem para resumir os pontos principais
- **Exemplo:** " Jantamos aqui para uma festa de aniversário e tivemos uma experiência fantástica. Fomos recebidos por uma anfitriã simpática e levados imediatamente para a nossa mesa. O ambiente era descontraído, a comida era incrível e o serviço era excelente. Se você gosta de boa comida e serviço atencioso, você deveria experimentar este lugar. "
- A extração de frases-chave pode fornecer algum contexto para esta revisão, extraindo as seguintes frases:
    - festa de aniversário
    - experiência fantástica
    - anfitriã amigável
    - ótima comida
    - serviço atencioso
    - jantar
    - mesa
    - ambiente
    - lugar

