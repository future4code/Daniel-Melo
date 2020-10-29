# Exercício 1
## a) 
É uma referência à chave primária da tabela relacionada.

## b)

```sql
CREATE TABLE Rating (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment TEXT NOT NULL,
  rate FLOAT NOT NULL,
  movie_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (comment, rate, movie_id)
VALUES ("Filme muito bom", 9.5, "003");

INSERT INTO Rating (comment, rate, movie_id)
VALUES ("Filme bem mais ou menos", 6, "004");
```

## c)

É informado que a chave estrangeira passada não existe.

## d)

```sql
ALTER TABLE Movie 
DROP COLUMN rating;
```

## e)

```sql
DELETE FROM Movie
WHERE id = "003";
```

Não se pode deletar uma linha "pai". Isso acontece porque a chave primária dessa campo é chave estrangeira em outra tabela.

<br />

# Exercício 2
## a)
Essa tabela armazenará como chaves estrangeiras as chaves primárias das tabelas de atores e de filmes, de forma que seja possível estabelecer relações entre elas.

## b)
```sql
INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("003", "001");

INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("003", "002");

INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("003", "005");

INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("004", "005");

INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("004", "006");

INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("004", "007");
```

## c)

```sql
INSERT INTO MovieCast ( movie_id, actor_id )
VALUES ("004", "008");
```

É informada uma falha na chave estrangeira. Isso acontece pois o valor da chave estrangeira passado não contém referência na tabela a ser relacionada.

## d)
 
```sql
DELETE FROM Actor
WHERE id = "001";
```

O mesmo erro do exerício 1-e)

<br />

# Exercício 3

## a)
A query em questão retorna todas as colunas dos dados das tabelas Movie e Rating em que o "id" do filme é igual ao "movie_id" da tabela Rating. O operador ON determina o critério de avaliação para determinar se há correspondências entre os campos.

## b)

```sql
SELECT Movie.id, title, rate
FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

<br />

# Exercício 4

## a)
```sql
SELECT Movie.id as movie_id, title, rate, comment
FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id;
```

## b)
```sql
SELECT Movie.id as Movie_ID, title, Actor.id as Actor_ID, name
FROM Movie
INNER JOIN MovieCast
ON Movie.id = MovieCast.movie_id
INNER JOIN Actor
ON Actor.id = MovieCast.actor_id;
```

## c)
```sql
SELECT title, AVG(rate) 
FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id
GROUP BY Movie.id;
```

<br />

# Exercício 5

## a)
Essa query busca todos os dados da tabela Movie e as informações do seu elenco. Há necessidade dos dois JOIN'S porque relacionamos as duas tabelas a partir de um tabela intermediária.

## b)
```sql
SELECT Movie.id as Movie_ID, Movie.title, Actor.id as Actor_ID, Actor.name
FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

## c)
Não funciona porque tem uma vírgula no lugar onde deveria ser um ponto. "m,title" deveria ser "m.title"

## d)

```sql
SELECT Movie.title, Actor.name, Rating.rate, Rating.comment
FROM Movie
INNER JOIN MovieCast 
ON Movie.id = MovieCast.movie_id
INNER JOIN Actor
ON Actor.id = MovieCast.actor_id
INNER JOIN Rating 
ON Movie.id = Rating.movie_id;
```

<br />

# Exercício 6

## a)
Relação N:M, um filme pode receber vários prêmios e um prêmio pode ser dado a vários filmes em anos diferentes.

## b)
```sql
CREATE TABLE Oscar (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(255) NOT NULL
);

INSERT INTO Oscar (category)
VALUES ("Melhor Filme");

INSERT INTO Oscar (category)
VALUES ("Melhor Diretor");

INSERT INTO Oscar (category)
VALUES ("Melhor Ator");

INSERT INTO Oscar (category)
VALUES ("Melhor Roteiro Original");

INSERT INTO Oscar (category)
VALUES ("Melhor Roteiro Adaptado");

INSERT INTO Oscar (category)
VALUES ("Melhor Fotografia");

CREATE TABLE OscarAward (
  movie_id VARCHAR(255) NOT NULL,
  oscar_id INT NOT NULL,
  award_year DATE NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES Movie(id),
  FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);
```

## c)
```sql
INSERT INTO OscarAward (movie_id, oscar_id, award_year)
VALUES ("001", 1, "2020-10-29");

INSERT INTO OscarAward (movie_id, oscar_id, award_year)
VALUES ("001", 2, "2020-10-29");

INSERT INTO OscarAward (movie_id, oscar_id, award_year)
VALUES ("003", 3, "2020-10-29");

INSERT INTO OscarAward (movie_id, oscar_id, award_year)
VALUES ("003", 4, "2020-10-29");

INSERT INTO OscarAward (movie_id, oscar_id, award_year)
VALUES ("004", 5, "2020-10-29");

INSERT INTO OscarAward (movie_id, oscar_id, award_year)
VALUES ("004", 6, "2020-10-29");
```

## d)
```sql
SELECT title, category, award_year
FROM Movie
INNER JOIN OscarAward
ON Movie.id = OscarAward.movie_id
INNER JOIN Oscar
ON Oscar.id = OscarAward.oscar_id;
```

