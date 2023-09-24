-- Quais atores atuaram em mais de 15 filmes?
SELECT * FROM sakila.film_actor;
SELECT actor_id, COUNT(actor_id) contagem FROM sakila.film_actor GROUP BY actor_id HAVING contagem > 15;

-- Ouais clientes fizeram 29 pedidos?
SELECT * FROM sakila.payment;
SELECT customer_id, COUNT(customer_id) contagem FROM sakila.payment GROUP BY customer_id HAVING contagem LIKE 29;

-- Quais são os anos que possuem mais de 5 lançamentos dentro dos filmes da locadora?
SELECT release_year, COUNT(release_year) FROM sakila.film GROUP BY release_year;

-- Numa nova campanha, o público-alvo são os clientes que gastaram entre 70 e 100 dólares. Qual o id desses clientes?
SELECT * FROM sakila.payment;
SELECT customer_id, COUNT(customer_id) contagem, SUM(amount) soma FROM sakila.payment GROUP BY customer_id HAVING soma BETWEEN 70 AND 100;