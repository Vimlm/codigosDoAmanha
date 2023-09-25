-- Selecionar a quantidade total de estudantes cadastrados no banco **
SELECT 
	COUNT(estudante_id)
FROM 
	resilia.estudante;

-- Selecionar quais facilitadores atuam em mais de uma turma **
SELECT 
	p.nome, COUNT(turma_id) AS qtd_turma
FROM 
	resilia.facilitador_turma AS ft
JOIN resilia.facilitador AS f
ON ft.facilitador_id = f.facilitador_id
JOIN resilia.pessoa AS p
ON f.pessoa_id = p.pessoa_id
GROUP BY 
	p.nome
HAVING qtd_turma > 1;

-- Alunos que estão abaixo da frequencia permitida **
SELECT p.nome, se.frequencia 
FROM resilia.estudantes_turma et
JOIN resilia.status_estudante se
ON et.status_estudante_id = se.status_estudante_id
JOIN resilia.estudante AS e
ON et.estudante_id = e.estudante_id
JOIN resilia.pessoa AS p
ON e.pessoa_id = p.pessoa_id
HAVING se.frequencia < 85;

-- Alunos que estão abaixo da nota? **
SELECT et.matricula, p.nome, se.nota
FROM resilia.estudantes_turma AS et
JOIN resilia.estudante AS e
ON e.estudante_id = et.estudante_id
JOIN pessoa AS p
ON e.pessoa_id = p.pessoa_id
JOIN resilia.status_estudante AS se
ON et.status_estudante_id = se.status_estudante_id
HAVING se.nota < 75
ORDER BY p.nome;

-- Criar uma view que selecione a porcentagem de estudantes com status de evasão agrupados por turma **
CREATE VIEW vwEvasaoPorTurma AS
SELECT
    et.turma_id,
    t.nome,
    COUNT(CASE WHEN se.status_aluno = 0 THEN 1 END) AS total_evasao,
    (COUNT(CASE WHEN se.status_aluno = 0 THEN 1 END) / NULLIF(COUNT(et.matricula), 0)) * 100 AS porcentagem_evasao
FROM
    resilia.estudantes_turma AS et
INNER JOIN
    resilia.status_estudante AS se 
ON 
	et.status_estudante_id = se.status_estudante_id
INNER JOIN
    resilia.estudante AS e 
ON 
	et.estudante_id = e.estudante_id
INNER JOIN
    resilia.pessoa AS p 
ON e.pessoa_id = p.pessoa_id
INNER JOIN
    resilia.turma AS t 
ON et.turma_id = t.turma_id
GROUP BY
    et.turma_id, t.nome;

SELECT * FROM vwEvasaoPorTurma;

-- Alunos que não são de curitiba
SELECT e.estudante_id, p.nome, en.cidade 
FROM resilia.estudante AS e
JOIN resilia.pessoa AS p
ON e.pessoa_id = p.pessoa_id
JOIN resilia.endereco AS en
ON p.endereco_id = en.endereco_id
WHERE en.cidade <> 'Curitiba';

-- Alunos que são de curitiba
SELECT e.estudante_id, p.nome, en.cidade 
FROM resilia.estudante AS e
JOIN resilia.pessoa AS p
ON e.pessoa_id = p.pessoa_id
JOIN resilia.resilia.endereco AS en
ON p.endereco_id = en.endereco_id
WHERE en.cidade = 'Curitiba';

