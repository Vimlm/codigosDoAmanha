-- Quais os países de cada cidade cadastrada?
USE sakila;
SELECT ct.city, co.country
FROM city ct
INNER JOIN country co
ON ct.city_id = co.country_id;
    
-- Quais as cidades cadastradas no Brasil e Argentina?
SELECT ct.city, co.country
FROM city ct
INNER JOIN country co
ON ct.city_id = co.country_id
WHERE co.country = 'Brazil' OR co.country = 'Argentina';

-- Olhando para todos os atores cadastrados, qual o id de cada um dos filmes de que participaram?
SELECT * FROM actor;

SELECT actor.first_name, film.film_id
FROM actor
INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id
INNER JOIN film ON film_actor.film_id = film.film_id;

-- Quais são os títulos em que o ator 'John Suvari' participou?
SELECT actor.first_name, actor.last_name,film.film_id
FROM actor
INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id
INNER JOIN film ON film_actor.film_id = film.film_id
WHERE actor.first_name =  'John' AND actor.last_name = 'Suvari';
	
-- Qual o idioma de todos os títulos cadastrados? (título e idioma apenas)
SELECT * FROM film;

SELECT * FROM language;

SELECT title, language.name 
FROM film
INNER JOIN language ON film.language_id = language.language_id;

-- Qual o nome e e-mail dos clientes, e o valor que gastaram em aluguéis?
SELECT * FROM customer;

SELECT * FROM payment;

SELECT first_name, last_name, email, SUM(payment.amount) 
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
GROUP BY customer.customer_id;


-- No relatório de faturamento geral, qual o nome de cada um dos funcionários?


-- Quais os nomes dos atores e os filmes de que participaram?
-- Quais os nomes do cliente e funcionário envolvidos em cada aluguel?