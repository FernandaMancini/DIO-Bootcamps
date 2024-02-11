<h1>
     <img align="center" width="60px" src="https://hermes.dio.me/lab_projects/badges/619af8f8-d138-4e40-9d48-fec7b318e44d.png">
    <span> 
    Azure Cognitive Search: Utilizando AI Search para indexação e consulta de Dados
 </span>
</h1>

## Case do Projeto:
-  Você trabalha para a Fourth Coffee, uma rede nacional de cafés. Você foi solicitado a ajudar a criar uma **solução de mineração de conhecimento** que facilite a busca de insights sobre as experiências dos clientes. Você decide criar um índice do Azure AI Search usando dados extraídos de avaliações de clientes.

   <img align="center" width="30px" src="https://catalogartifact.azureedge.net/publicartifacts/Microsoft.Search-1.0.23/Icons/Small.png">
   Primeiramente, vamos usar o Azure AI Search
   
![Azure AI](https://github.com/FernandaMancini/Estudos-DIO/assets/108295414/752e0b56-0ac7-47f0-a5fe-6bbe0059043e)

- Após configurar e implementar o Azure AI Search, usei tammbém o Azure AI services;

<img align="center" width="30px" src="https://catalogartifact.azureedge.net/publicartifacts/Microsoft.CognitiveServicesAllInOne-1.0.124/Icons/Small.png">
Azure AI Services

- Depois tem que criar a conta de armazenamento e permirtir o Acesso Anônimo ao Blob;

![Contas de Armazenamento](https://github.com/FernandaMancini/Estudos-DIO/assets/108295414/ec4e97f6-db13-4c99-b314-57a54397c246)

- Após isso, cria-se um container e a importação e indexação dos dados;

![Sucesso](https://github.com/FernandaMancini/Estudos-DIO/assets/108295414/5e61226c-b4af-4d26-98b2-f592f96743a4)

- Depois disso, consultei o índice clicando o Explorador de pesquisa;
- Alterei para a visualização em JSON

- No campo do editor de consultas JSON , copiei e colei:
      
      {
         "search": "*",
         "count": true
      }
  
- Assim, retornou todos os os documentos no índice de pesquisa;
- Para filtrar por localização, copiei e colei:

      {
         "search": "locations:'Chicago'",
         "count": true
      }

- Por fim, para filtrar por sentimento, copiei e colei:

      {
         "search": "sentiment:'negative'",
         "count": true
      }

![Final](https://github.com/FernandaMancini/Estudos-DIO/assets/108295414/aab1e95e-2cc7-4c7f-98ce-9a32ac167242)

- Ao utilizar o índice do Azure AI Search, percebi que é possível extrair insights valiosos das avaliações dos clientes, possibilitando decisões mais informadas e estratégias de negócios mais alinhadas com as necessidades do mercado. A IA se revelou uma ferramenta fundamental para a analise de dados e tomadas de decisão. 
