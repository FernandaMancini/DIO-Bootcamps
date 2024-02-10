 # Processamento de Imagem
 ## Imagens como matrizes de pixel
- Para um computador, uma imagem é uma matriz de valores numéricos de pixel
<br><br>
![pixels](https://github.com/FernandaMancini/Estudos-DIO/assets/108295414/4420571b-4a90-4056-9c45-ce99f2595a97)

- Cada pixel tem um valor entre 0 (preto) e 255 (branco); 
- **Imagem Bidimensional:** Uma única camada de valores de pixel como esta representa uma imagem em escala de cinza
- **Imagem Multidimensionais:** Consistem em três camadas que representam tons de cor vermelho, verde e azul (RGB)


        Red:
        150  150  150  150  150  150  150  
        150  150  150  150  150  150  150
        150  150  255  255  255  150  150
        150  150  255  255  255  150  150
        150  150  255  255  255  150  150
        150  150  150  150  150  150  150
        150  150  150  150  150  150  150

        Green:
        0    0    0    0    0    0    0          
        0    0    0    0    0    0    0
        0    0   255  255  255   0    0
        0    0   255  255  255   0    0
        0    0   255  255  255   0    0
        0    0    0    0    0    0    0
        0    0    0    0    0    0    0

        Blue:
        255  255  255  255  255  255  255  
        255  255  255  255  255  255  255
        255  255   0    0    0   255  255
        255  255   0    0    0   255  255
        255  255   0    0    0   255  255
        255  255  255  255  255  255  255
        255  255  255  255  255  255  255

## Filtros para Processar Imagens
- Maneira comum de executar tarefas de processamento de imagem;
- Um filtro é definido por uma ou mais matrizes de valores de pixel, chamadas kernels de filtro
- **Exemplo:**

        -1 -1 -1
        -1  8 -1
        -1 -1 -1
- O kernel é então convoluído pela imagem, calculando uma soma ponderada para cada patch de 3,3 pixels e atribuindo o resultado a uma nova imagem

![Gif de exemplo](https://learn.microsoft.com/pt-br/training/wwl-data-ai/analyze-images-computer-vision/media/filter.gif)

## Filtragem Convolucional
| Imagem Original | Imagem Filtrada |
| ----------------| ----------------|
|![Imagem Original](https://learn.microsoft.com/pt-br/training/wwl-data-ai/analyze-images-computer-vision/media/banana-grayscale.png)| ![Imagem Filtrada](https://learn.microsoft.com/pt-br/training/wwl-data-ai/analyze-images-computer-vision/media/laplace.png)| 

# Redes Neurais Convolucionais
![Como funciona uma Rede Neural Convolucional](https://learn.microsoft.com/pt-br/training/wwl-data-ai/analyze-images-computer-vision/media/convolutional-neural-network.png)
1. Imagens rotuladas são usadas para treinar o modelo
2. Camadas de filtro extraem mapas de recursos de cada imagem
3. Os mapas de recursos são reunidos
4. Os valores dos recursos são alimentados em uma rede totalmente conectada
5. A camada de saída produz um valor de probalidade para cada rótulode classe possível

# Modelos Multimodais
- O modelo encapsula relações semânticas entre recursos extraídos das imagens e texto extraído de legendas relacionadas
![Modelos Multimodais](https://learn.microsoft.com/pt-br/training/wwl-data-ai/analyze-images-computer-vision/media/florence-model.png)

