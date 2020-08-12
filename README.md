# Projeto Teste para a Kognita usando NodeJs e TypeScript

Para executar é necessário ter o nodejs instalado e seguir os seguintes passos:

1. Executar o comando `npm i` para resolver as dependências do node
2. Atualizar as informações de banco no arquivo `ormconfig.json`
3. Executar o comando `npm start`

# *Métodos*

A aplicação está direcionada para a porta 3000, com isso temos os métodos:
1. Consultar todos as empresas cadastradas
  Realizada através do método GET é chamada através de http://localhost:3000/empresas/

2. Consultar uma empresa específica
  Utiliza o método GET, passando por parâmetro o id da empresa http://localhost:3000/empresas/:id
  
3. Inclusão de empresa
  Utiliza o método POST chamando a URL http://localhost:3000/empresas. Deve ser passado um JSON com os campos razaoSocial, nomeFantasia, cpnj e dataAbertura.
  
4. Exclusão uma empresa específica
  Utiliza o método DELETE, passando por parâmetro o id da empresa http://localhost:3000/empresas/:id
