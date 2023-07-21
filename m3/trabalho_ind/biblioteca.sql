-- Criar banco de dados-- 
CREATE DATABASE biblioteca;

 -- Usar Banco de dados -- 
USE biblioteca;

-- Criar tabela endereço -- 
CREATE TABLE endereco (
	id INT NOT NULL AUTO_INCREMENT,
    logradouro VARCHAR(40),
    complemento VARCHAR(20),
    numero INT,
    cep INT,
    bairro VARCHAR(30),
    cidade VARCHAR(30),
    estado VARCHAR(2),
    pais VARCHAR(20),
    PRIMARY KEY(id)
);

-- Inserir dados na tabela endereco -- 
INSERT INTO endereco (logradouro, complemento, numero, cep, bairro, cidade, estado, pais)
	values
		('Rua logo ali', 'ap 404', 12, 82510020, 'merces', 'curitiba', 'pr', 'brasil'),
        ('Avenida ali', 'Ap 12', 404, 8291220, 'alto da gloria', 'curitiba', 'pr', 'brasil'),
        ('Travessia Trevisan', '204 B', 222, 80510020, 'cabhral', 'curitiba', 'pr', 'brasil');

-- Mostra atributos da tabela -- 
DESC endereco;

SELECT * FROM endereco;


	

SHOW TABLES;
    
DROP DATABASE biblioteca;