# ***NaLista***
![image](https://user-images.githubusercontent.com/104369965/218348659-e3343dc1-505c-4402-9b6a-1b5e9245e6ad.png)

Já esteve em uma situação em que te indicaram uma série, mas por falta de tempo acabou dizendo, "Pô, nunca vi, mas vou colocar na lista pra assistir um dia." e depois acabou esquecendo a recomendação? É com a proposta de salvar o seu entretenimento e a sua amizade (afinal, ninguém gosta de esquecer recomendação dos amigos não é mesmo?) que a aplicação ***NaLista*** foi criada.
Nela você pode pesquisar títulos de filmes e séries, ver informações como capa, atores, avaliação, sinopse e caso você goste pode adicionar o título à sua lista de títulos para que você tenha várias opções de entretenimento quando tiver tempo e disposição para assistir.
NaLista é uma aplicação fullstack tendo como componentes de sua arquitetura o Django, VueJs, e Postgresql. Foi utilizado o template do [Djavue](https://github.com/huogerac/djavue)


[Link](https://youtu.be/D2HWqx18sNU) do vídeo apresentando o projeto.


## 1. Para rodar o projeto você siga os seguintes passos:
- No diretório do projeto crie um ambiente virtual. `virtualenv .venv`
- Ative o ambiente virtual. `source .venv/bin/activate`
- `pip install -r requirements-dev.txt`
- `cp .env-sample .env`
- `docker compose build`
- `docker compose up`


## 2. Por padrão o projeto roda com uma api mock, se desejar rodar com a api do IMDB é necessário alterar 2 imports em arquivos diferentes e seguir o passo 3.
- No arquivo TitlesListView.vue, alterar o `import {apijs} from '@/api/titles.api-fk.js'` para `import {apijs} from '@/api/titles.api.js'`

![image](https://user-images.githubusercontent.com/104369965/218235302-59d451d3-2c2c-4b92-bee1-1816d705390a.png)

- No arquivo TitleModal.vue alterar o import `import {apijs} from '@/api/titles.api-fk.js'` para `import {apijs} from '@/api/titles.api.js'` 

![image](https://user-images.githubusercontent.com/104369965/218235491-ea2405c2-5761-4893-9be0-690047897775.png)

 Resumindo titles.api.js bate na api real e a titles.api-fk.js bate na api mock.
 
 ## 3. Atenção! O projeto utiliza uma api do imdb, SE quiser acessá-la é necessário uma API Key que você pode obter no [site](https://imdb-api.com/api), é necessário se registrar com um e-mail. Cada chave dá direito a 100 requisições por dia. Caso deseje rodar somente com a api mock não precisa ir pegar a chave da api.
 Caso você deseje acessar a api do imbd, coloque a sua chave nas 2 url do arquivo `titles.api.js`
 
 Caso só deseje utilizar a api mock é só seguir os passos já citados neste documento.
 
 ![image](https://user-images.githubusercontent.com/104369965/218288262-4a87dd92-f71f-48b2-b9a9-a89f2f064a44.png)


