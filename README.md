<h4 align="center">
  ✅ API Node.Js aplicando TDD ❌
</h4>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Resumo dos conceitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## 🎮 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)
- [Huskyrc](https://github.com/typicode/husky)
- [JSON Web Token](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [MongoDB](https://www.mongodb.com/)


## 📦 Projeto

Testes em aplicações é uma das fases mais importante no processo de desenvolvimento de um sistema. Durante essas últimas semanas foquei em me aprofundar em em TDD. Desenvolvi uma aplicação backend com Node.Js com a função de cadastrar e validar usuários mas antes de começar a desenvolver as rotas e escolher o banco de dados,  realizei alguns testes simulando diversas situações que vão de falhas no desenvolvimento ou possíveis erros de envio de dados.

A API utiliza o Jest como principal dependência no desenvolvimento. Através dela é possível desenvolver testes personalizados em cima de uma situação criada pelo desenvolvedor. Já o Huskyrc, permiti dentre várias opções, realizar testes antes de realizar um commit ou push dando total certeza que a sua aplicação está testada e funcionando conforme o esperado.

## 🎯 Resumo dos conceitos

- TDD é uma sigla para Test Driven Development ou Desenvolvimento guiado por testes. Esse tipo de progamação tem o seguinte objetivo, tudo que for desenvolver é atravéis de um resultado de teste realizado. Esse teste são como uma busola para o programador pois atravéis dele é capaz de saber aonde e o porque de um erro está aparecendo.

- Ciclo do TDD - O TDD possui tres cilcos: 
  ❌ - RED (Escreva um pequeno teste que o seu resutado apresentado seje uma falha)
  ✅ - GREEN ( Implemente um código que faça o teste reprovado seja aprovado )
  🔎 - REFACTOR ( Refatore o código para que se torne mais limpo e funcional)

- Teste Unitário - Esse tipo de teste tem o objetivo de verificar toda a aplicação verificando se tudo está funcionado conforme o planejado

- Teste de Integração - Esse tipo de teste tem o objetivo de verificar um grupo de arquivo especifico

## 🔥 Desenvolvimento 

O projeto foi divido em 12 partes: 

- Melhorando as configurações do Jest
- Configurando os arquivos de config para os testes de integração e unitários
- Restruturação de pastas e criação de teste unitários em cima da classe de validação do email
- Criação da classe authUseCase, reoganização da estrutura de pasta e refatoração do cógigo
- Teste relacioanados a autenticação do usuário
- Desenvolvimento de testes em cima de dados com criptografia
- Criação dos testes baseados na utilização do Encrypt
- Refatoração do código e reorganização de estrutura de pastas (*)
- Elaboração de testes em cima do JWT
- Testes integrados com o Banco de Dados não relacional (Mongo DB)
- Desenvolvimento de teste sobre o acesso com token
- Elaboração do Composition Root
