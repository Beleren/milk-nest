# Injeção de dependências

- O que é?

  O termo `injeção de dependência`(dependency injection DI) é uma interpretação menos genérica de `inversão de controle`(inversion of control IoC). O objetivo da DI é desacoplar um comportamento de uma funcionalidade (ex: uma classe usuário que necessita de um meio para se comunicar com uma fila).

  https://martinfowler.com/articles/injection.html


- O que resolve?

  A DI permite a separação da aplicação em camadas: organização com limitação de comportamentos de classes, facilita mock de classes em testes, possibilita criação de camada anti-corrupção, etc.


- Como é feito em JS/TS?

  No exemplo do Martin Fowler ele dá 3 modos de implementação de DI: via `interface`, `setter` e `constructor`.

  Basicamente na injeção via `constructor` nós podemos imaginar uma classe que recebe um serviço via construtor para uso interno; a injeção via `setter` é uma classe que possui uma função que atribui um valor a uma variável interna da classe quando chamada e a injeção via `interface` é tipo o que o Nest faz, acho, mas sem usar interfaces do TS, já que não existe em JS.

- Como é feito no Nest?

  Faz uma maracutaia hard com a API do pacote `reflact-metadata` pros devs não precisarem se preocupar com a ordem de DI. Não entendi muito bem qual a vantagem disso em relação à performance, mas é uma funcionalidade que é bem ergonômica pra devs. 
  
  Pode ser interessante para um projeto futuro de gerador de dados falsos por definição de propriedades de interfaces. -> https://github.com/google/intermock

  https://www.npmjs.com/package/reflect-metadata
  https://www.youtube.com/watch?v=vYFhHVMetPg
  https://wanago.io/2020/06/15/api-with-nestjs-6-looking-into-dependency-injection-and-modules/#:~:text=NestJS%20uses%20the%20root%20module,of%20registering%20and%20verifying%20users.


- O que são módulos do nest?

  São contextos diferentes numa arquitetura DDD, que podem funcionar como serviços numa aplicação ou plugins de implementações.

- Como módulos são utilizados em testes?

  Módulos são geralmente utilizados em testes de controllers que necessitam que o módulo faça a DI para utilização em testes unitários ou e2e, possibilitando mocking pelo jest.

  https://docs.nestjs.com/fundamentals/testing#testing


- O que são módulos dinâmicos e o que resolvem?

  Geralmente usados para plugins onde conseguimos configurar parâmetros diferentes em diferentes DIs: urls de conexões de banco, nome de filas de brokers, etc. Os módulos dinâmicos usam um padrão de `register` e `registerAsync` do próprio nest.
