# Criando seu primeiro chatbot com IA generativa

## Bem-vindos à quarta aula! Chegou a hora de mergulhar na quarta aula da **Imersão IA da Alura e do Google Gemini** para dar um novo passo na sua carreira!  

- [Acesse o Google Gemini](https://gemini.google.com/?android-min-version=301356232&ios-min-version=322.0&is_sa=1&campaign_id=alura_may25&utm_source=alura&utm_medium=referral&utm_campaign=alura_may25&pt=9008&mt=8&ct=ref-alura-brmay25)
- [Acesse o Google AI Studio](https://aistudio.google.com/app/prompts/new_chat?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25)
- [Pegar a API Key no Google AI Studio](https://aistudio.google.com/app/apikey?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25)
---
## Introdução 
Nesta aula, você vai gerar sua API Key no Google AI Studio e programar um chatbot em `Python` com o SDK do Gemini no Google Colab 
- Gerar e usar sua API Key no Google AI Studio 
- Codificar no Google Colab com o SDK do Gemini 
- Explorar os parâmetros da API e aprender a usá-la com `Python`
- Construir um chatbot básico usando a Gemini API, testando diferente interações. 

### Link do projeto 
- [Código Final da aula4](https://colab.research.google.com/drive/1KJRja3ioeTeyMpUWkNJOKNdCX7Qcq4e5?usp=sharing)
----
## Links importantes para você acompanhar a aula 
- [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25)
    - [Pegar a API Key no Google ai Studio ](https://aistudio.google.com/app/apikey?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25)
- [Google Colab](https://colab.research.google.com/)
- [Google Gemini](https://gemini.google.com/app?android-min-version=301356232&ios-min-version=322.0&is_sa=1&campaign_id=alura_may25&utm_source=alura&utm_medium=referral&utm_campaign=alura_may25&pt=9008&mt=8&ct=ref-alura-brmay25)
- [Guia de início rápido na API Gemini](https://ai.google.dev/gemini-api/docs?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25&hl=pt-br)
- [Exemplos do Google AI Studio](https://ai.google.dev/gemini-api/prompts?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25&hl=pt-br)
- [Cookbook de códigos do Gemini](https://github.com/google-gemini/cookbook)
---

## Como compartilhar seu `Projeto`
Compartilhe seu codespace com outras pessoas pelo [GitHub](https://github.com/):
- Acesse [aqui](https://www.youtube.com/watch?v=QHhmjNJZPoY&ab_channel=Alura) o tutorial para saber como subir seu projeto no GitHub; Lembre-se de não compartilhar a sua API Key no seu projeto do Google Colab para o Github.
- Na página inicial do GitHub, clique no botão "New" (Novo) localizado no canto superior direito;
- Preencha o nome do seu repositório e uma breve descrição. Escolha se deseja que o repositório seja público (visível para todos) ou privado (acessível apenas por convite);
- Você pode optar por inicializar o repositório com um arquivo README, que é uma boa prática para fornecer informações sobre o projeto. Além disso, você pode escolher uma licença para o seu código, se desejar;
- Você pode especificar tipos de arquivos que o Git deve ignorar ao rastrear alterações. Por exemplo, você pode selecionar uma linguagem de programação específica para gerar um arquivo .gitignore correspondente;
- Se o seu projeto se encaixa em um dos modelos de projeto disponíveis, você pode escolher um para iniciar com estrutura pré-definida;
- Após preencher todas as informações necessárias, clique no botão "Create repository" (Criar repositório) para criar o seu repositório;
- Para saber mais confira os [primeiros passos no GitHub](https://www.alura.com.br/artigos?hsa&hsa_acc=7964138385&hsa_ad=688089973825&hsa_cam=20946398532&hsa_grp=153091871930&utm_campaign=&utm_medium=ppc&utm_source=adwords&utm_term=).


Divulgue seu projeto
Quem compartilha seus projetos ganha mais visibilidade no mercado! Poste seu progresso no LinkedIn e use a hashtag #imersaoiagoogle para interagir com outros devs e até chamar atenção de recrutadores!  




---

# Notações Sobre a Video Aula 

## Sumário
- [Notações gerais ](#1-do-código)
- [Configurando variaveis de ambiente](#2-configurando-variaveis-de-ambiente)

Um ponto sobre o `Google IA Studio` e que através do tools do [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat?utm_source=website&utm_medium=referral&utm_campaign=Alura-may-25) é possível utilizar a opção de `Grounding with Google Search `, com essa opção é possível que as interações junto ao prompt do `Google IA Studio` realize uma busca no google antes de gerar a resposta embasado na pesquisa conforme imagem abaixo:  

<div id="Grounding with Google Search">
<img src="imgs/geminisearchgoogle.png" alt="Grounding with Google Search">
</div>

## 1. Do código 
Quando se está trabalhando com ferramentas novas, como no caso o gemini se tem *pacotes* ou *bibliotecas*, que comumente são chamadas de **SDK "kit de desenvolvimento de software**, uma **skd** é uma forma mais simplificada de para acessar os serviços, o que implica diretamente em *"escrever menos código"*, ou seja é uma simplificação do acesso para os desenvolvedores.  
Para instalar o SDK do Gemini utiliza-se o `pip` *"(Pip: Ferramenta de instalação de bibliotecas Python)"*. No meu caso em especifico, não estou utilizando o [Google Colab](https://colab.research.google.com/), irei instalar o SDK no ambiente local, porém se estivesse no `Google Colab`, iria instalar a biblioteca mencionada.  
**OBS**: Para utilizar desse artifício na plataforma é necessário adicionar um dos caracteres especiais a seguir  
```
! pip install google-genai
-- ou 
% pip install google-genai
```  
Como esse caso não se aplica irei instalar diretamente na máquina conforme abaixo:
<div id="pipGenai">
<img src="imgs/venv.google-genai.png" alt="Successfully Genai SDK">
</div>

## 2. Configurando variaveis de ambiente 
Como não estou utilizando o `Colab` algumas adaptações tiverem de ser realizadas, sendo elas:
No bash:  

```
export GOOGLE_API_KEY="minha api key"
``` 
Como este comando foi declarado uma váriavel de ambiente para minha api key, conseguinte para realizar a persistencia dessa geração foi adicionado essa variavel de ambiente através dos comando:
```
nano ~/.bashrc
```
 e enserido o comando diretamente, após essa definição de variavel de ambiente, já no meu Notebook Jupyter, utilizei a `SDK os`, para caputra definição dessa variável de ambiente utilizando o comando:
 ```
import os
key = os.environ.get('GOOGLE_API_KEY')
```
Caso estivesse utilizando o Google Colab essa definição de váriavel de ambiente seria um pouco diferente, e seguiria os seguintes passos. 
1. Importar a chave de api para dentro do ambiente do `Google Colab`
     <div id="API_KEY_COLAB">
      <img src="imgs/coolab_impor_api_key.png" alt="Coolab api key">
      </div>

2. Dentro do notebook do `Google Colab`, faria a declaração de variavel de ambiente da seguinte maneira. 
    ```
    import os 
    from google.colab import userdata

    os.environ['GOOGLE_API_KEY'] = userdata.get('GOOGLE_API_KEY')
    ```  
A principal diferença é que como estou executando o código em máquina local os passos para definição de de variavel de ambiente são definidas diretamente na máquina, enquanto no google colab utilizase do SDK google.colab userdata para que essa plataforma caputure essa variavel de ambiente no cofre que foi determinado 
