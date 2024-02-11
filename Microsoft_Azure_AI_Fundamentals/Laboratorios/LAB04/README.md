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
![AzureAI](azureai.png)

- Após configurar e implementar o Azure AI Search, usei tammbém o Azure AI services;

<img align="center" width="30px" src="https://catalogartifact.azureedge.net/publicartifacts/Microsoft.CognitiveServicesAllInOne-1.0.124/Icons/Small.png">
Azure AI Services

- Depois tem que criar a conta de armazenamento e permirtir o Acesso Anônimo ao Blob;

![AzureAI](ContasdeArmazenamento.jpeg)

- Após isso, cria-se um container e a importação e indexação dos dados;

![AzureAI](sucesso.png)

- Depois disso, consultei o índice clicando o Explorador de pesquisa;
- Alterei para a visualização em JSON

- No campo do editor de consultas JSON , copiei e colei:
      
      {
         "search": "*",
         "count": true
      }