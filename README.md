# Clean Architecture - API de Products

- Este desafio representa um salto na aplicação para a parte de _API_, onde é criado um _endpoint_, aonde as requisições vão chegar;

- O _endpoint_ em uma _API_ representa um detalhe. Eventualmente, um request poderia chegar na aplicação via _gRPC_, _RabbitMQ_, _Kafka_, etc;

- De modo geral, qualquer coisa que bater na aplicação terá, a seguir, que chamar um _usecase_ - mas a orquestração do _usecase_ permanece inteiramente isolada;

- Testes de _endpoints_ da _API_ podem envolver a criação de testes _end-to-end_, em que um _request_ bate no _endpoint_ e acaba cruzando toda a aplicação;

- O que quer que converse com o mundo externo é considerado como sendo infraestrutura. Sendo assim, é definido um diretório de _api_ sob o diretório de _infrastructure_;

- Sob o diretório de _api_, um diretório de _routes_ irá receber os _endpoints_ da _API_. E um diretório de \_**\_tests\_\_** vai conter os testes _end-to-end_;

- Dentro desse contexto, este desafio propõe-se a:

  - Definir um _endpoint_ para realizar a listagem de produtos;

  - Implementar o teste _end-to-end_ para o novo _endpoint_.

> N.T. 1: Linguagem de programação para este desafio: _TypeScript_.
> N.T. 2: A solução para este desafio envolve:
>
> > /src/infrastructure/api/\_**\_tests\_\_**/product.e2e.spec.ts
> > /src/infrastructure/api/routes/product.route.ts
