-- Aos endereços cadastrados que estão vinculados apenas aos clientes

SELECT c.first_name, c.last_name, a.address, city.city
FROM sakila.customer AS c
LEFT JOIN sakila.address AS a
ON c.address_id = a.address_id
LEFT JOIN sakila.city AS city
ON a.city_id = city.city_id;

-- As linguas que não possuem nenhum filme cadastrado na base




