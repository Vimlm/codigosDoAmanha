-- Selecionando todos os endereços
SELECT * FROM enderecos;

-- Pesquisa com filtro para as ruas do centro de Curitiba
SELECT id, rua, bairro, cidade FROM enderecos WHERE bairro = 'Centro' AND cidade = 'Curitiba' ORDER BY rua;

-- Seleciona todos os funcioários
SELECT * FROM funcionarios;

-- Mostra a visualização de todos os funcionários desligados
SELECT * FROM funcionarios WHERE data_desligamento <> 'null';

-- Seleciona todos os funciários e cria uma view mostrando o id do funcionário junto com nome e cpf e o seu departamento
CREATE VIEW vwFuncionario AS
	SELECT
		f.id AS id_funcionario,
		p.nome,
		p.cpf,
		f.departamento
FROM funcionarios f
INNER JOIN pessoas p ON f.id = p.id;

SELECT * FROM li_brary_catalogo.vwFuncionario ORDER BY nome;
