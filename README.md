## Números Felizes e Sortudos

Desafio técnico desenvolvido para o processo seletivo do Trinks.
Foi utilizado o typescript e lógica orientada a objetos para resolução da questão 1.
Também foram implementados os casos de testes para auxiliar no desenvolvimento.


## Tecnologias

<div style="display: flex; gap: 10px; height: 40px;">
  <a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
      <img src="https://user-images.githubusercontent.com/85591297/157519943-9da08e53-e59d-450a-8b0d-81af17974fd0.svg" alt="TypeScript" height="40"/>
  </a>
  <a title="Node JS" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" height="40"/> 
  </a>
</div>

## Requisitos

### [npm](https://www.npmjs.com/)

<details>
    <summary>instale npm</summary>

```bash
wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh> | bash

## Or this command
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Close and open terminal
nvm install --lts
nvm use --lts
# Verify node version
node --version # Must show v14.16.1
# Verify npm version
npm -v
```

</details>

## Como rodar

1. Clone esse repositório
2. Instale as dependencias

```bash
npm i
```

3. Rode o projeto com

```bash
npm run start (deploy)
```

4. Rode o projeto em mode de desenvolvimento (nodemon)

```bash
npm run start:dev
```

5. Rode os testes

```bash
npm t
```
