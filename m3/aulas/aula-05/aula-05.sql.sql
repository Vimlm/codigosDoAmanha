-- Vamos criar nossas primeiras tabelas: facilitadores e resilientes!
-- Atributos:
-- id - int
-- nome - varchar(100)
-- rente - varchar(4)
-- cpf - varchar(11)
-- turma - int

-- Criamos banco de dado
CREATE DATABASE IF NOT EXISTS resilia;

-- Criamos tabela resiliente no banco de dados resilia
CREATE TABLE resilia.resilientes (
	`resilientes_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100),
    `frente` VARCHAR(4),
    `cpf` VARCHAR(11),
    `turma` INT
);

-- Criamos tabela resiliente no banco de dados resilia
CREATE TABLE resilia.facilitadores (
	`resilientes_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100),
    `frente` VARCHAR(4),
    `cpf` VARCHAR(11),
    `turma` INT
);

-- Inserindo dados na tabela resilientes do banco reslia
INSERT INTO 
	resilia.resilientes (nome, frente, cpf, turma)
VALUES
	('Victor Martins', 'alun', '12312312322', 17);
    

-- Fez uma busca por todos os registros e todos os atributos da nossa tabela resilientes do banco resilia
SELECT * FROM resilia.resilientes;

-- Inserindo registros na tabela facilitadores
INSERT INTO 
	resilia.facilitadores (nome, frente, cpf, turma)
VALUES
	('Esli Queiroz', 'Soft', '32132132111', 23),
    ('Leonardo Braga', 'Hard', '43243243222', 23);

-- Buscando os registros da tabela facilitadores
SELECT * FROM resilia.facilitadores;

-- Deletando dados aonde o resientes_id = 7 ou resilientes_id = 8-
DELETE FROM
	resilia.facilitadores
WHERE
	resilientes_id = 7
OR 
	resilientes_id = 8;


-- Criado banco de dados se não existir, com padrão de caracter utf8
CREATE DATABASE IF NOT EXISTS escola  DEFAULT CHARACTER SET utf8 ;

-- Criado tabela alunos com id aluno_id
CREATE TABLE escola.alunos (
	aluno_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL
);

-- Selecionou tudo de escola.alunos
SELECT * FROM escola.alunos;

-- Alteramos a tabela escola.alunos e adicionamos nova coluna nome com 60 caracteres 
ALTER TABLE escola.alunos ADD nome VARCHAR(60);

-- Alteramos a quantidade de cacteres 
ALTER TABLE escola.alunos MODIFY nome VARCHAR(80);

-- Retirado nome
ALTER TABLE escola.alunos DROP COLUMN nome;

-- Adicionado em alunos nome como int
ALTER TABLE escola.alunos ADD nome INT;

-- Mudei o nome da coluna "nome" para "senha"
ALTER TABLE escola.alunos CHANGE COLUMN nome senha INT;

-- Mudado o tipo de dado da tabela "nome" para INT
ALTER TABLE escola.alunos CHANGE COLUMN nome nome INT;


-- Colocando registros na tabela alunos
INSERT INTO 
	escola.alunos (nome)
VALUES
	('Martins Victor');
    
SELECT * FROM escola.alunos;

