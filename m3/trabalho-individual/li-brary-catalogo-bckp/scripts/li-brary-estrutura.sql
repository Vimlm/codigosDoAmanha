-- Cria bando de dados "li_brary_catalogo"
CREATE DATABASE IF NOT EXISTS li_brary_catalogo;

-- Usando banco de dados "li_brary_catalogo"
USE li_brary_catalogo;

-- Criando tabela endereços
CREATE TABLE `enderecos` (
  `id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `cep` INT NOT NULL,
  `rua` VARCHAR(50) NOT NULL,
  `numero` INT NOT NULL,
  `complemento` VARCHAR(30),
  `bairro` VARCHAR(30) NOT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  `pais` VARCHAR(30) NOT NULL
);

-- Criando tabela pessoas
CREATE TABLE `pessoas` (
  `id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `nacionalidade` VARCHAR(30) NOT NULL,
  `email` VARCHAR(50),
  `tel` BIGINT,
  `genero` VARCHAR(30) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `id_endereco_fk` INT NOT NULL,
  FOREIGN KEY (`id_endereco_fk`) REFERENCES `enderecos` (`id`)
);

-- Criando tabela autores
CREATE TABLE `autores` (
  `id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `qtd_livros` INT,
  `biografia` VARCHAR(255),
  `status_atividade` ENUM (
	'ativo',
    'aposentado',
    'falecido'
  ) NOT NULL,
  `data_falecimento` DATE,
  `id_pessoa_fk` INT NOT NULL,
  FOREIGN KEY (`id_pessoa_fk`) REFERENCES `pessoas` (`id`)
);

-- Criando tabela funcionários
CREATE TABLE `funcionarios` (
  `id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `cargo` VARCHAR(40) NOT NULL,
  `data_adimissao` DATETIME NOT NULL,
  `data_desligamento` DATETIME,
  `senha` INT NOT NULL,
  `departamento` VARCHAR(50) NOT NULL,
  `id_pessoa_fk` INT NOT NULL,
  FOREIGN KEY (`id_pessoa_fk`) REFERENCES `pessoas` (`id`)
);

-- Criando tabela editoras
CREATE TABLE `editoras` (
  `id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `cnpj` BIGINT NOT NULL,
  `tel` BIGINT,
  `id_endereco_fk` INT NOT NULL,
  FOREIGN KEY (`id_endereco_fk`) REFERENCES `enderecos` (`id`)
);

-- Criando tabela livros
CREATE TABLE `livros` (
  `id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `ano` DATE NOT NULL,
  `genero` ENUM (
	'autobiografia',
    'biografia',
    'conto',
    'poesia',
    'romance',
    'auto ajuda',
    'religioso',
    'livro reportagem',
    'fábula',
    'novela',
    'suspense',
    'acadêmico',
    'científico'
  ) NOT NULL,
  `qtd_paginas` INT NOT NULL,
  `idioma` VARCHAR(20) NOT NULL,
  `isbn` BIGINT NOT NULL,
  `edicao` VARCHAR(30) NOT NULL,
  `id_autor_fk` INT NOT NULL,
  `id_editora_fk` INT NOT NULL,
  `id_funcionario_fk` INT NOT NULL,
  FOREIGN KEY (`id_autor_fk`) REFERENCES `autores` (`id`),
  FOREIGN KEY (`id_editora_fk`) REFERENCES `editoras` (`id`),
  FOREIGN KEY (`id_funcionario_fk`) REFERENCES `funcionarios` (`id`)
);
