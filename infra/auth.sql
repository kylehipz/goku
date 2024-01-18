CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL
);

INSERT INTO users (email, name) VALUES 
  ('kylehipolito2109@gmail.com', 'Kyle Hipolito'),
  ('benz.matias13@gmail.com', 'Benj Matias');
