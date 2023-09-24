CREATE DATABASE IF NOT EXISTS escola;

USE escola;

CREATE TABLE IF NOT EXISTS pessoas (
	pessoa_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    cpf VARCHAR (11)
);

-- cada aluno sendo apenas umas pessoa
CREATE TABLE IF NOT EXISTS alunos (
	aluno_id INT PRIMARY KEY AUTO_INCREMENT,
    pessoa_id INT,
    FOREIGN KEY (pessoa_id) REFERENCES pessoas (pessoa_id)
);

-- cada curso pode ter diversos alunos (1 - n)
CREATE TABLE IF NOT EXISTS cursos (
	curso_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    duracao VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS alunos_matriculados (
	matricula INT,
    aluno_id INT,
    curso_id INT,
    FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id),
    FOREIGN KEY (curso_id) REFERENCES cursos (curso_id)
);

-- cada professor pode ser apenas uma pessoa
CREATE TABLE IF NOT EXISTS professores (
	professor_id INT PRIMARY KEY AUTO_INCREMENT,
	pessoa_id INT,
    FOREIGN KEY (pessoa_id) REFERENCES pessoas (pessoa_id)
);

-- Professores em turmas
CREATE TABLE professor_turma (
	professor_id INT,
    curso_id INT,
	FOREIGN KEY (professor_id) REFERENCES professores (professor_id),
    FOREIGN KEY (curso_id) REFERENCES cursos (curso_id)
);

-- Inserindo valores em pessoas
INSERT INTO 
	pessoas (nome, cpf)
VALUES
	('Victor Matheus', '12312312311'),
    ('Lucas Martins', '31232131222'),
    ('Pedro Zezé', '55555555555'),
    ('Marcos Castro', '99999999900'),
    ('Lucas Gomes', '43232112322'),
    ('Dayane Stefane', '65465465455');

-- Inserindo valores em alunos
INSERT INTO 
	alunos (pessoa_id)
VALUES
	(1),
    (4),
    (5),
    (6);

-- Inserindo valores em professor
INSERT INTO 
	professores (pessoa_id)
VALUES
	(2),
    (3);
    
-- Inserindo valores em curso
INSERT INTO
	cursos (nome, duracao)
VALUES
    ('JavaScript', '2 anos'),
    ('Banco de Dados', '2 anos');
    
-- inserindo valores em alunos matriculados
INSERT INTO 
	alunos_matriculados (matricula, aluno_id, curso_id)
VALUES
    (19020, 1, 1),
    (020019, 2, 1),
    (021900, 3, 2),
    (000219, 4, 2);

INSERT INTO 
	professor_turma(professor_id, curso_id)
VALUES
	(1, 1),
    (1, 2),
    (2, 1),
    (2, 2);
    
-- Quantos alunos nós temos no matriculados e seus nomes?
SELECT am.matricula, p.nome FROM alunos_matriculados AS am
JOIN alunos AS a
ON am.aluno_id = a.aluno_id
JOIN pessoas AS p
ON a.pessoa_id = p.pessoa_id;

SELECT curso_id, COUNT(aluno_id) FROM alunos_matriculados
GROUP BY curso_id;

-- Quais cursos cada professor atua?
SELECT p.nome, c.nome FROM professor_turma AS pt
JOIN professores AS pr
ON pt.professor_id = pr.professor_id
JOIN pessoas AS p
ON pr.pessoa_id = p.pessoa_id
JOIN cursos AS c
ON pt.curso_id = c.curso_id;


    
    
    
    
    
    
    
    
    
SELECT * FROM cursos;

SELECT * FROM alunos_matriculados;

SELECT * FROM pessoas
WHERE pessoa_id = 1 OR pessoa_id = 2 OR pessoa_id = 3;

SELECT * FROM cursos;


    



	
