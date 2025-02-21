CREATE TABLE employees (
  id INT NOT NULL,
  data JSONB NOT NULL
);

INSERT INTO 
  employees (id, data) 
VALUES 
  (1, '{}'::jsonb),
  (2, '{"name": "test"}'::jsonb);