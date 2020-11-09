# Exercício 1

- `VARCHAR` : texto com quantidade de caracteres pré-estabelecida;
- `PRIMARY KEY`: identificador único de cada elemento da lista;
- `NOT NULL`: o valor não pode ser nulo;
- `DATE`: valor que representa uma data;

<hr />

- `SHOW DATABASES`: Lista os bancos de dados do servidor
- `SHOW TABLES`: Lista as tabelas do banco de dados

<hr />

- `DESCRIBE <table>`: Retorna a estrutura da tabela. Na primeira coluna o identificador do campo, na segundo o tipo, na terceira se o campo pode ser nulo, na quarta se é uma chave primária e na quinta os valores padrões do cammpo.

# Exercício 2
- Entrada duplicada para a chave primária. Esse erro ocorres porque a coluna identificada como chave primária deve ter valor único e o valor informado já existia.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Daniel Farias",
  1200000,
  "1994-08-21",
  "male"
);
```

- Quantidade de colunas não combina. Isto acontece porque a quantidade de colunas e a quantidade de valores informados não são coerentes.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

- O campo "name" não tem um valor padrão. Este erro acontece porque não foi passado nenhum valor para um campo não nulo e sem um valor padrão.

```sql
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "005",
  400000,
  "1949-04-18", 
  "male",
  "Daniel Araujo"
);
```

- Valor de data incorreto. Isto acontece porque o valor foi passado com a formatação incoerente com seu tipo.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

# Exercício 3

```sql
SELECT * FROM Actor WHERE gender = "female";
```

<hr />

```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

<hr />

```sql
SELECT * FROM Actor WHERE gender = "invalid";
```

- retornou tudo nulo. Não há nenhuma linha com valor de gender inválido.

<hr />

```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

<hr />

- Não reconhece a coluna "nome". Isso acontece porque o campo é "name" e não "nome".

```sql
SELECT id, name FROM Actor WHERE id = "002";
```

# Exercício 4

```sql
SELECT * FROM Actor WHERE name NOT LIKE 'A%' AND salary > 350000;
```
 <hr />

 ```sql
 SELECT * FROM Actor WHERE name LIKE '%g%' OR name LIKE '%G%';
 ```
 <hr />

 ```sql
 SELECT * FROM Actor
 WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
 ```

 # Exercício 5

 ```sql
 CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	synopsis TEXT NOT NULL,
	release_date DATE NOT NULL,
	rating INT NOT NULL CHECK (rating >= 0 OR rating <= 10)
);
 ```

 ```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
 ```

 # Exercício 6

 ```sql
 SELECT id, title, rating FROM Movie WHERE id = "004";
 ```
 ```sql
 SELECT * FROM Movie WHERE title = "Deus é Brasileiro";
 ```
 ```sql
 SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
 ```

# Exercício 7

 ```sql
SELECT * FROM Movie WHERE title LIKE "%bra%";
 ```
 ```sql
SELECT * FROM Movie WHERE title LIKE "%Deus%" OR synopsis LIKE "%humanidade%";
 ```
 ```sql
SELECT * FROM Movie WHERE release_date < CURDATE();
 ```
 ```sql
SELECT * FROM Movie WHERE release_date < CURDATE() AND (title LIKE "%humanidade%" OR synopsis LIKE "%humanidade%");
 ```




