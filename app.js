//Incluir dependências de módulos
const mysql = require('mysql2');
//Criar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    root:'',
    database: 'node'
});

connection.connect(function(err){
    console.log('conectou!');
})

// const nomes = [
//     'Ana', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor',
//     'Joana', 'Kleber', 'Lívia', 'Marcelo', 'Nívea', 'Otávio', 'Patrícia', 'Quirino', 'Rafaela',
//     'Sandro', 'Tânia', 'Ulisses', 'Viviane', 'William', 'Xuxa', 'Yasmin', 'Zilda', 'Alberto',
//     'Bianca', 'Cecília', 'Dante','Leandro', 'Mirella', 'Natan', 'Olívia', 'Paulo', 'Quezia', 'Ricardo', 'Sônia', 'Tiago',
//   'Ursula', 'Valdir', 'Wanessa', 'Xavier', 'Yuri', 'Zara', 'Aline', 'Bruno', 'Camila',
//   'Diego', 'Elisa', 'Fábio', 'Gisele', 'Hugo', 'Íris', 'Júlio', 'Karina', 'Luciano',
//   'Mônica', 'Norberto', 'Oscar'
//   ];
//       // inserir os nomes no banco de dados
//   for (let i = 0; i < nomes.length; i++) {
//     const email = `${nomes[i].toLowerCase()}@exemplo.com`;
//     connection.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nomes[i], email], (error, results, fields) => {
//       if (error) throw error;
//       // Outras aç2ões após a inserção, se necessário
//     });
//   }
// Consultar os registros da tabela
connection.query('SELECT * FROM usuarios', function(err, results, fields){      
    console.log(results);
});

//Deletar registros da tabela
// connection.query('DELETE FROM usuarios WHERE id = 1', [1], function(err, results, fields){
//     console.log(results);
// });