CREATE DATABASE IF NOT EXISTS `resilia`;

USE `resilia`;

CREATE TABLE IF NOT EXISTS `estado` (
`estado_id` INT PRIMARY KEY AUTO_INCREMENT,
`estado` ENUM (
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'ES',
	'GO',
	'MA',
	'MT',
	'MS',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
	'DF'
  ) NOT NULL
);

CREATE TABLE `modulo` (
  `modulo_id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `modulo` INT NOT NULL
);

CREATE TABLE `disciplina` (
  `disciplina_id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `nome` VARCHAR(40) NOT NULL
);

CREATE TABLE `curso` (
  `curso_id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `tipo_duracao` ENUM ('mes', 'ano'),
  `duracao` INT
);

CREATE TABLE `status_estudante` (
	`status_estudante_id` INT PRIMARY KEY AUTO_INCREMENT,
	`nota` INT,
	`status_aluno` BOOLEAN NOT NULL,
	`frequencia` INT NOT NULL
);

CREATE TABLE `turma` (
  `turma_id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `data_inicio` DATE NOT NULL,
  `turno` ENUM ('Manhã', 'Tarde', 'Noite') NOT NULL
);

CREATE TABLE `endereco` (
  `endereco_id` INT PRIMARY KEY AUTO_INCREMENT,
  `cep` VARCHAR(8) NOT NULL,
  `rua` VARCHAR(60) NOT NULL,
  `numero` INT NOT NULL,
  `complemento` VARCHAR(20),
  `bairro` VARCHAR(60) NOT NULL,
  `cidade` VARCHAR(60) NOT NULL,
  `estados_id` INT NOT NULL,
  FOREIGN KEY (`estados_id`) REFERENCES `estado` (`estado_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `pessoa` (
  `pessoa_id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  `naturalidade` VARCHAR(15) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `endereco_id` INT NOT NULL,
  FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`endereco_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `estudante` (
  `estudante_id` INT PRIMARY KEY AUTO_INCREMENT,
  `senha` VARCHAR(32) NOT NULL,
  `pessoa_id` INT NOT NULL,
  FOREIGN KEY (`pessoa_id`) REFERENCES `pessoa` (`pessoa_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `facilitador` (
  `facilitador_id` INT PRIMARY KEY AUTO_INCREMENT,
  `senha` VARCHAR(32) NOT NULL,
  `frente` ENUM ('Soft', 'Hard') NOT NULL,
  `pessoa_id` INT NOT NULL,
  FOREIGN KEY (`pessoa_id`) REFERENCES `pessoa` (`pessoa_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `disciplina_modulo` (
    `curso_id` INT NOT NULL,
    `disciplina_id` INT NOT NULL,
	`modulo_id` INT NOT NULL,
    FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`disciplina_id`) REFERENCES `disciplina` (`disciplina_id`)  ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`modulo_id`) REFERENCES `modulo` (`modulo_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `estudantes_turma` (
	`matricula` INT PRIMARY KEY,
	`turma_id` INT NOT NULL,
    `curso_id` INT NOT NULL,
    `estudante_id` INT NOT NULL,
    `status_estudante_id` INT NOT NULL,
    FOREIGN KEY (`turma_id`) REFERENCES `turma` (`turma_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`)  ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`estudante_id`) REFERENCES `estudante` (`estudante_id`)  ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`status_estudante_id`) REFERENCES `status_estudante` (`status_estudante_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `facilitador_turma` (
	`turma_id` INT NOT NULL,
	`curso_id` INT NOT NULL,
    `facilitador_id` INT NOT NULL,
    FOREIGN KEY (`turma_id`) REFERENCES `turma` (`turma_id`)  ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`)  ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`facilitador_id`) REFERENCES `facilitador` (`facilitador_id`)  ON UPDATE CASCADE ON DELETE CASCADE
);

