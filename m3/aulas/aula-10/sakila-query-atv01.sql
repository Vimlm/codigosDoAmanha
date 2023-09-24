USE sakila;

-- Quais os pagamentos mais caros
SELECT * FROM payment;
SELECT amount FROM payment ORDER BY amount DESC;

-- Clientes Inativos
SELECT * FROM customer WHERE active = 0 ORDER BY first_name;

-- Selecionar cidades do Brasil
SELECT * FROM city WHERE country_id = 15;

-- Cidades da América Latina
SELECT * FROM city WHERE country_id IN (6, 14, 15, 22, 24, 27, 28, 73, 74, 77, 104);

-- Alugueis feitos pelo funcionário Myke Hillyer
SELECT * FROM staff;
SELECT * FROM rental WHERE staff_id = 1;

-- Filmes que o ator John Suvari participou
SELECT * FROM actor WHERE first_name = 'John'; -- 192
SELECT * FROM film_actor WHERE actor_id = 192; 

-- Filmes que Rip participou
SELECT * FROM actor WHERE first_name = 'Rip'; -- 26 e 68
SELECT * FROM film_actor WHERE actor_id = 68 OR actor_id = 26;