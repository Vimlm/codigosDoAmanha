-- Classifique os clientes por faixa de gastos:
-- a) Acima de $100 - 'Clientão brabo';
-- b) Entre 70$ e $100 - 'Cliente bom';
-- c) Abaixo de $70 - 'Cliente eventual'.

SELECT customer_id, COUNT(customer_id) contagem, SUM(amount) soma,
	CASE 
		WHEN SUM(amount) > 100
        THEN 'Clientão Brabo'
        WHEN SUM(amount) < 100 AND SUM(amount) > 70
        THEN 'Cliente bom'
        WHEN SUM(amount) < 70
        THEN 'Cliente eventual'
	END AS classificacao
FROM sakila.payment 
GROUP BY customer_id;

-- Classifique os atores por número de participações:
-- a) Acima de 40 participações - 'Topa tudo';
-- b) Acima de 30 participações - 'Altamente produtivo';
-- c) Acima de 20 participações - 'Fez alguns filmes';
-- d) Acima de 10 participações - 'Tem que fazer seu nome ainda'.

SELECT * FROM sakila.film_actor;
SELECT actor_id, COUNT(actor_id) contagem,
	CASE
		WHEN COUNT(actor_id) > 40
        THEN 'Topa tudo'
        WHEN COUNT(actor_id) > 30
        THEN 'Altamente produtivo'
        WHEN COUNT(actor_id) > 20
        THEN 'Fez alguns filmes'
        WHEN COUNT(actor_id) > 10
        THEN 'Tem que fazer seu nome ainda'
	END AS participacao
FROM sakila.film_actor GROUP BY actor_id;

