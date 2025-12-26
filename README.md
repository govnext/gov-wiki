<p align="center">
  <img src="https://user-images.githubusercontent.com/31465/34380645-bd67f474-eb0b-11e7-8d03-0151c1730654.png" height="29" />
</p>
<p align="center">
  <i>Uma base de conhecimento rápida e colaborativa para órgãos públicos, desenvolvida com React e Node.js.<br/>Baseado no projeto Outline.</i>
  <br/>
  <img width="1640" alt="screenshot" src="https://user-images.githubusercontent.com/380914/110356468-26374600-7fef-11eb-9f6a-f2cc2c8c6590.png">
</p>

**GovWiki** é uma plataforma de gestão de conhecimento especialmente desenvolvida para órgãos públicos, facilitando a organização, compartilhamento e acesso a informações institucionais.

Se você deseja usar o GovWiki, pode configurar sua própria instância ou contribuir para o desenvolvimento.

# Instalação

Consulte a [documentação](https://docs.getoutline.com/s/hosting/) para executar sua própria cópia do GovWiki em um ambiente de produção.

Se você tiver dúvidas ou melhorias para a documentação, crie uma discussão no [GitHub discussions](https://github.com/outline/outline/discussions).

# Desenvolvimento

Há um guia rápido para [configurar um ambiente de desenvolvimento](https://docs.getoutline.com/s/hosting/doc/local-development-5hEhFRXow7) se você deseja contribuir com mudanças, correções e melhorias para o GovWiki.

## Contribuindo

O GovWiki é construído e mantido por uma pequena equipe – adoraríamos sua ajuda para corrigir bugs e adicionar recursos!

Antes de enviar um pull request, _por favor_ discuta com a equipe principal criando ou comentando em uma issue no [GitHub](https://www.github.com/outline/outline/issues) – também adoraríamos ouvir você nas [discussões](https://www.github.com/outline/outline/discussions). Dessa forma, podemos garantir que uma abordagem seja acordada antes que o código seja escrito. Isso resultará em uma probabilidade muito maior de seu código ser aceito.

## Arquitetura

Se você está interessado em contribuir ou aprender mais sobre a base de código do GovWiki, consulte primeiro o [documento de arquitetura](docs/ARCHITECTURE.md) para uma visão geral de alto nível de como o aplicativo é estruturado.

## Depuração

No desenvolvimento, o GovWiki produz logs simples no console, prefixados por categorias. Na produção, produz logs JSON, que podem ser facilmente analisados pelo seu pipeline de ingestão de logs preferido.

O log HTTP está desabilitado por padrão, mas pode ser habilitado definindo a variável de ambiente `DEBUG=http`.

## Testes

Nosso objetivo é ter cobertura de teste suficiente para partes críticas do aplicativo e não estamos visando 100% de cobertura de teste unitário. Todos os endpoints da API e qualquer coisa relacionada à autenticação devem ser completamente testados.

Para adicionar novos testes, escreva seus testes com [Jest](https://facebook.github.io/jest/) e adicione um arquivo com extensão `.test.js` ao lado do código testado.

```shell
# Para executar todos os testes
make test

# Para executar testes de backend em modo watch
make watch
```

Depois que o banco de dados de teste for criado com `make test`, você pode executar individualmente os testes de frontend e backend diretamente.

```shell
# Para executar testes de backend
yarn test:server

# Para executar um teste de backend específico
yarn test:server myTestFile

# Para executar testes de frontend
yarn test:app
```

## Migrações

O Sequelize é usado para criar e executar migrações, por exemplo:

```shell
yarn sequelize migration:generate --name my-migration
yarn sequelize db:migrate
```

Ou para executar migrações no banco de dados de teste:

```shell
yarn sequelize db:migrate --env test
```

# Licença

GovWiki é licenciado sob [BSL 1.1](LICENSE).
