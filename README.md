# ***NaLista***
![image](https://user-images.githubusercontent.com/104369965/218205246-361dbb69-2aa6-43f3-955a-5074e1452c4e.png)

Já esteve em uma situação em que te indicaram uma série, mas por falta de tempo acabou dizendo, "Pô, nunca vi, mas vou colocar na lista pra assistir um dia." e depois acabou esquecendo a recomendação? É com a proposta de salvar o seu entretenimento e a sua amizade (afinal, ninguém gosta de esquecer recomendação dos amigos não é mesmo?) que a aplicação ***NaLista*** foi criada.
Nela você pode pesquisar títulos de filmes e séries, ver informações como capa, atores, avaliação, sinopse e caso você goste pode adicionar o título à sua lista de títulos para que você tenha várias opções de entretenimento quando tiver tempo e disposição para assistir.
NaLista é uma aplicação fullstack tendo como componentes de sua arquitetura o Django, VueJs, e Postgresql. Foi utilizado o template do [Djavue](https://github.com/huogerac/djavue)


[Link](https://www.youtube.com/watch?v=lrsKa5ZwZoA) do vídeo apresentando o projeto.


## 1. Para rodar o projeto você siga os seguintes passos:
- No diretório do projeto crie um ambiente virtual. `virtualenv .venv`
- Ative o ambiente virtual. `source .venv/bin/activate`
- `docker compose build`
- `docker compose up`

## 2. Para rodar o projeto utilizando a api mock é necessário alterar 2 imports em arquivos diferentes.
- No arquivo TitlesListView.vue, alterar o `import {apijs} from '@/api/titles.api.js'` para `import {apijs} from '@/api/titles.api-fk.js'

![image](https://user-images.githubusercontent.com/104369965/218235302-59d451d3-2c2c-4b92-bee1-1816d705390a.png)

- No arquivo TitleModal.vue alterar o import `import {apijs} from '@/api/titles.api.js'` para `import {apijs} from '@/api/titles.api-fk.js'` 

![image](https://user-images.githubusercontent.com/104369965/218235491-ea2405c2-5761-4893-9be0-690047897775.png)

 Resumindo titles.api.js bate na api real e a titles.api-fk.js bate na api mock.
 
 ## 3. Atenção! O projeto utiliza uma api do imdb, para acessá-la é necessário uma API Key que você pode obter no [site](https://imdb-api.com/api), é necessário se registrar com um e-mail.
 Caso você deseje acessar a api do imbd, coloque a sua chave no na url do arquivo `titles.api.js`
 

