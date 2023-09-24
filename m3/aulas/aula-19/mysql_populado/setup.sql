USE teste;

CREATE TABLE IF NOT EXISTS qualquer(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(256)
);

INSERT INTO qualquer(nome) VALUES 
("nome de teste 1"),
("nome de teste 2"),
("nome de teste 3"),
("nome de teste 4");