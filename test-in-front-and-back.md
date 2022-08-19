# Teste unitário (teste de unidade)

<p>
  Garante que um componente, uma unidade ou uma funcionalidade esteja funcionando de forma desconectada de toda a aplicação. Basicamente funções são testadas e chamadas para simularem operações e eventos de retorno e parâmetros.

  Por exemplo: Se um botão ao receber o evento de clique causa esse evento de forma correta.
</p>

# Teste de integração

<p>
  Não testa uma funcionalidade, componenente ou unidade da aplicação, ele vai testar como duas ou mais funcionalidades funcionam juntas.

  Por exemplo: Um componente de input + componente de butão, verifica se o texto informado no input é válido e se o usuário clicou no botão e o botão causou o evento esperado.
</p>

# Teste E2E (ponta a ponta)

<p>
  Testa a aplicação da maneira que o usuário constuma fazer uso dela. Ou seja, um teste será escrito como se fosse um roteiro de uma ação que um usuário acaba realizando ao utilizar a aplicação.

  Por exemplo: Fluxo de login e autenticação em uma aplicação e redirecionamento para outra página após logar na aplicação. Acessar página -> Login -> Digitar e-mail -> Digitar senha -> Clicar no botão de login -> Verificar se o usuário foi redirecionado para página de dashboard.

  Funciona também para o back-end. Por exemplo, testar todo o fluxo de autenticação por trás do back-end desde a requisição HTTP até o banco de dados e conexões externas.
</p>

# Mocks ou imitações 

<p>
  Sempre que algo estiver sendo testado e estiver utilizando uma funcionalidade que é externa aquele componente, deve-se criar um "mock" ou "imitações" para simular essa funcionalidade externa (que é externa aquele componente) e assim se tornar possível testar o componente. Basicamente a "mock" vai impor que tipo de retorno, operação ou evento o componente espera (quando estiver sendo testado e simulado) daquela funcionalidade externa que está sendo simulada pela "mock". 

  Por exemplo: Em um componente React basta utilizar (para simular a funcionalidade externa que está sendo utilizada dentro do componente):
  
  ```js
    jest.mock("importar a biblioteca/funcionalidade externa ao componente", () => {
      return {

      }
    });
  ```

  Ou seja, toda vez que um componente da aplicação importar essa funcionalidade externa o jest vai simular ela dentro dos testes retornando algo que essa funcionalidade externa retornaria dentro do componente.
  
  Quando o componente for simulado pelos testes ele vai utilizar a "mock" que foi criada para simular o retorno da funcionalidade externa e não funcionalidade externa original que está dentro dele.
</p>

# Observação para sempre que for escrever testes unitários 

<p>
  Quando estiver escrevendo testes unitários e o componente depender de algo externo, pode ser uma biblioteca por exemplo, ou seja, de algo que não vai funcionar necessariamente dentro do teste do componente em si basta criar um "mock" e "mockar" o funcionamento dessa funcionalidade externa botando um retorno fictício para aquela função.
</p>

# Observação para sempre que for escrever testes unitários para um componente que renderiza outros componentes e eles possuem funcionalidades externa

<p>
  Para tal problemática o ideal é utilizar uma biblioteca chamada "ts-jest" para ajudar na configuração dessa funcionalidade externa para cada caso de teste. Por exemplo: o estado de um botão que diferencia quando o usuário autenticado na aplicação e quando ele não está autenticado, ou seja, para cada um desses casos haverá testes diferentes.
</p>

# Biblioteca ts-jest

<ul>
  <li>Função mockReturnValueOnce() -> Só é disparada uma vez dentro do escopo em que ela está, ou seja, quando a função render() renderizar o componente que está dentro do escopo it() ou test()</li>
  <li>Função mockReturnValue() -> É disparada a cada vez que a função render() renderizar um componente, independente do escopo que essa renderização for realizada a função mockReturnValue() será disparada mesmo ela estando fora do escopo que a renderização foi disparada.</li>
</ul>

<p>Para mais dúvidas: consultar arquivo "SubscribeButton.spec.tsx" do projeto Ignews.</p>

<p>OBS: sempre que a função/funcionalidade externa for uma Promise utiliza a função de teste mockResolvedValueOnce().</p>

# Para dúvidas em testes de forma assíncrona e testes em geral

<p>Basta consultar o arquivo Async.spec.tsx do projeto Ig-news.</p>

# Comando para gerar uma URL com dicas de melhores abordagens aos testes dos componentes

```js 
  screen.logTestingPlaygroundURL();
```

# Coverage Report 

<p>
  É um relatório de cobertura que ajuda a saber se os testes criados são suficientes e quais partes do código os testes que foram criados estão cobrindo e quais partes eles não estão cobrindo.

  OBS: Para mais dúvidas consultar o arquivo jest.config do projeto ignews.

  Comando para criar o relatório de cobertura: yarn/npm test --coverage, após isso uma pasta coverage será criada com os arquivos de relatório.
</p>