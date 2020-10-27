# Exercício 1
## a.
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Exclui a coluna "salary" da tabela.

<hr />

## b.
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Utilizado para alterar o nome e as definições da coluna, como o tipo do dado. Nesse caso, o comando renomeia a coluna "gender" para "sex" e mantém o tipo como `VARCHAR` de 6 caracteres.

<hr />

## c.
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Nesse caso, o mantido o nome da coluna e altera-se apenas o tipo de dado dessa coluna para `VARCHAR` com um máximo de 255 caracteres.

<hr />

## d.
```sql
ALTER TABLE Actor MODIFY COLUMN gender VARCHAR(100);
```
`MODIFY` é utilizado apenas para alterar as definições de uma coluna, não conseguimos, por exemplo, renomear a coluna. Nessa caso, o tipo da coluna "gender" é alterado para `VARCHAR` com 100 caracteres.

<br />

# Exercício 2
## a.

```sql
UPDATE Actor
SET name = "Jurandi Pires", birth_date = "1990-03-20"
WHERE id = "003";
```

<hr />

## b.

```sql
UPDATE Actor
SET name = "Juliana Pães"
WHERE id = "006";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "006";
```

<hr />

## c.

```sql
UPDATE Actor
SET 
  name = "Joana",
  birth_date = "2005-05-10",
  salary = 300000,
  gender = "female"
WHERE id = "005";
```

<hr />

## d.

```sql
UPDATE Actor
SET 
  name = "Joana",
  birth_date = "2005-05-10",
  salary = 300000,
  gender = "female"
WHERE id = "100";
```

O comando roda com sucesso, mas nenhuma linha é alterada, visto que não foi encontrada nenhum correspondência.

<br />

# Exercício 3
## a.

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
<hr />

## b.

```sql
DELETE FROM Actor 
WHERE  gender = "male" and salary > 1000000;
```

<br />

# Exercício 4
## a. 

```sql
SELECT max(salary) FROM Actor;
```

<hr />

## b.

```sql
SELECT min(salary)
FROM Actor
WHERE gender = "female";
```

<hr />

## c.

```sql
SELECT count(*)
FROM Actor
WHERE gender = "female";
```

<hr />

## d.

```sql
SELECT sum(salary) FROM Actor;
```

<br />

# Exercício 5
## a.

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
Essa query conta a quantidade de itens por gênero. O retorno é uma tabela com duas colunas, a quantidade contada e o gênero.

<hr />

## b.
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

<hr />

## c.
```sql
SELECT *
FROM Actor
ORDER BY salary ASC;
```

<hr />

## d.
```sql
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
<hr />

## e.
```sql
SELECT gender, AVG(salary) AS salary_average
FROM Actor
GROUP BY gender;
``` 

<br />

# Exercício 6

## a.
```sql
ALTER TABLE Movie
ADD playing_limit_date DATE;

UPDATE Movie
SET playing_limit_date = "2003-02-28"
WHERE id = "004";
```

<hr />

## b.
```sql
ALTER TABLE Movie MODIFY COLUMN rating FLOAT NOT NULL;
```

<hr />

## c.
```sql
UPDATE Movie
SET playing_limit_date = "2020-12-30"
WHERE id = "003";

UPDATE Movie
SET playing_limit_date = "2020-07-30"
WHERE id = "004";
```

<hr />

## d.
```sql
DELETE FROM Movie WHERE id = "002";

UPDATE Movie
SET synopsis = "Uma sinopse qualquer"
WHERE id = "002"; 
```

O comando rodou com sucesso mas nenhum linha foi alterada, uma vez que não há correspondência.

<br />

# Exercício 7

## a.
```sql
SELECT count(*)
FROM Movie
WHERE rating > 7.5;
```

<hr />

## b.
```sql
SELECT AVG(rating) FROM Movie;
```

<hr />

## c.
```sql
SELECT count(*)
FROM Movie
WHERE playing_limit_date < curdate();
```

<hr />

## d.
```sql
SELECT count(*)
FROM Movie
WHERE release_date < curdate();
```

<hr />

## e.
```sql
SELECT max(rating) FROM Movie;
```

<hr />

## f.
```sql
SELECT min(rating) FROM Movie;
```

<br />

# Exercício 8

## a.
```sql
SELECT * FROM Movie ORDER BY title ASC;
``` 

<hr />

## b.
```sql
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

<hr />

## c.
```sql
SELECT *
FROM Movie
WHERE playing_limit_date > curdate()
ORDER BY release_date DESC LIMIT 3;
```

<hr />

## d.
```sql
SELECT *
FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```