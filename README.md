Estoque de acessórios para carros
(Dados que serão armazenados: ID, Nome do acessório e preço do acessório)

Passo 1: Iniciar o servidor
- Terminal
- Comando: npm start

Passo 2: Método POST (criar um acessório)
- Postman
- Escolher o método POST
- URL: http://localhost:3000/acessorios
- Body > raw > JSON
{ 
  "id": "1",
  "nome": "Volante esportivo",
  "preco": 250
}

Passo 3: Método GET (listar todos os acessórios)
- Escolher o método GET
- URL: http://localhost:3000/acessorios

Passo 4. Método PUT (atualizar um acessório)
- Escolher o Método PUT
- URL: http://localhost:3000/acessorios/1
- Body > raw > JSON
{
  "id": "1",
  "nome": "Volante esportivo com LED",
  "preco": 280
}

Passo 5: Método DELETE (remover um acessório)
- Escolher o método DELETE
- URL: http://localhost:3000/acessorios/1
