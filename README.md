# Fullstack Challenge


### [Context](https://bitbucket.org/modclima/challenge.git/)

## Front-End application
  A ReactJs App thats uses React Router DOM, Reactstrap, React Leaflet and Axios
  
# Instalação e Execução


### Clonando o repositório
  ```
  git clone https://github.com/gabrieeeuu/cyan_challenge_frontend
  ```

### Executar

  No arquivo 'src/services/Api.js' há uma linha de código comentada e outra não comentada
  ```
  1. baseURL: "https://cyan-challenge-server.heroku.com/"
  2. // baseURL: "http://localhost:8080/"
  ```
  Esse argumento 'baseURL' configura a url base do Axios para as requisições HTTP do client (este repo) para o servidor que, por sua vez, pode ser acessado através das duas urls:
  'http://localhost:8080/' para execução local (ver instruções [aqui](https://github.com/gabrieeeuu/cyan_challenge_backend/blob/master/README.md)); 
  e 'https://cyan-challenge-server.heroku.com/' para execução pelo Heroku.
  
  Sendo um ReactJs App, esse repositório necessita de 'npm' ou 'yarn' para sua execução.
  
  ## 'npm/yarn install'
  
  ```
  C:\Users\@user\cyan_challenge_frontend> npm install
  C:\Users\@user\cyan_challenge_frontend> yarn install
  ```
  
  Execute um dos comandos acima no root do repositório clonado para instalar o node_modules.
  
  ```
  C:\Users\@user\cyan_challenge_frontend> npm install --save axios react-router-dom reactrap react-leaflet 
  C:\Users\@user\cyan_challenge_frontend> yarn add axios react-router-dom reactrap react-leaflet
  ```
  Os comandos acima (apenas um é necessário) adicionam os modules que não são instalados no comando anteior.
  
  Após todos os modules serem instalados, execute 'yarn start' ou 'npm start' e a aplicação será executada localmente na porta '3000'
