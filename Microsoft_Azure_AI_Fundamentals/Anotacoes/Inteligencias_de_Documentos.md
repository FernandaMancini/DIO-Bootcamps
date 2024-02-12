<h1>
     <img align="center" width="60px" src="https://hermes.dio.me/courses/badge/d3f11201-4372-42ed-bbd0-7d227976c3d4.png">
    <span> 
Inteligência de Documentos</span>
</h1>

- Abrange recursos de IA que processam texto e compreendem informações contidas em documentos, automatizando a extração, compreensão e salvamento de dados em texto, indo além do OCR.
-  Agiliza o processamento de documentos, como recibos, para declarações de despesas e outros fins contábeis, reduzindo a necessidade de inserção manual de dados e mitigando erros potenciais.

- A inteligência documental utiliza modelos de aprendizado de máquina para reconhecer dados em texto, permitindo a extração de texto, layout e pares de valores-chave através da análise de documento, que identifica localizações de texto em uma página por meio das coordenadas da caixa delimitadora.  

![Foto de um documento](https://learn.microsoft.com/en-us/training/wwl-data-ai/analyze-receipts-form-recognizer/media/contoso-receipt-small.png)

- As informações no recibo 123 Main Streetsão salvas como key, addresse como value, 123 Main Stree
- A análise do documento pode registrar a localização do valor do campo como coordenadas da caixa delimitadora [4.1, 2.2], [4.3, 2.2], [4.3, 2.4], [4.1, 2.4]

-**Desafio:** Os formulários e documentos vêm em todos os formatos diferentes;

## Análise de recibos no Azure
- **Modelos Pré-construídos:** Modelos pré-treinados que foram criados para processar tipos de documentos comuns, como faturas, cartões de visita, documentos de identificação e muito mais. Esses modelos são projetados para reconhecer e extrair campos específicos importantes para cada tipo de documento.
- **Modelos Personalizados:** Podem ser treinados para identificar campos específicos que não estão incluídos nos modelos pré-treinados existentes.
- **Análise documental:** Análise geral de documentos que retorna representações estruturadas de dados, incluindo regiões de interesse e suas inter-relações.

## Modelos Pré-construídos
- Aplicam aprendizado de máquina avançado para identificar e extrair com precisão texto, pares de valores-chave, tabelas e estruturas de formulários e documentos;
    - detalhes do cliente e do fornecedor nas faturas
    - detalhes de vendas e transações de recibos
    - detalhes de identificação e verificação de documentos de identidade
    - detalhes do seguro saúde
    - detalhes de contato comercial
    - acordo e detalhes da parte dos contratos
    - compensação tributável, juros de hipoteca, detalhes de empréstimos estudantis e muito mais

- O modelo foi treinado para reconhecer vários idiomas diferentes, dependendo do tipo de recibo. Para obter melhores resultados ao usar o modelo de recibo pré-construído, as imagens devem ser:
    - Formato JPEG, PNG, BMP, PDF ou TIFF
    - Tamanho do arquivo inferior a 500 MB para o nível pago (S0) e 4 MB para o nível gratuito (F0)
    - Entre 50 x 50 pixels e 10.000 x 10.000 pixels
    - Para documentos PDF, não maiores que 17 polegadas x 17 polegadas
    - Um recibo por documento
