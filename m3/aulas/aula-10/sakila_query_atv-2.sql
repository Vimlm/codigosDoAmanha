USE sakila;

-- Qual o ranking dos DVD's que foram mais alugados?
SELECT * FROM rental;
SELECT * FROM inventory;
SELECT * FROM film;
SELECT title, rental_rate FROM film ORDER BY rental_rate DESC;

-- Quantas vezes o filme com id = 1 foi alugado na loja 1?
SELECT * FROM rental;
SELECT * FROM inventory;
SELECT store_id ,film_id, COUNT(film_id) FROM inventory WHERE store_id = 1 AND film_id = 1 GROUP BY film_id;

-- Qual funcionário alugou mais filme
SELECT * FROM rental;
SELECT staff_id, COUNT(staff_id) FROM rental GROUP BY staff_id;

-- Faturamento do dia 27/mai/2005
SELECT * FROM payment;

-- Qual o faturamento do dia 27 de maio de 2005
SELECT SUM(amount) FROM payment WHERE payment_date >= '2005-05-27 00:00:00' AND payment_date <= '2005-05-28 00:00:00';

-- Quanto cada funcionário faturou no dia 27 de maio de 2005
-- Funcionário 01
SELECT SUM(amount) FROM payment WHERE payment_date >= '2005-05-27 00:00:00' AND payment_date <= '2005-05-28 00:00:00' AND staff_id = 1;

-- Funcionário 02
SELECT SUM(amount) FROM payment WHERE payment_date >= '2005-05-27 00:00:00' AND payment_date <= '2005-05-28 00:00:00' AND staff_id = 2;