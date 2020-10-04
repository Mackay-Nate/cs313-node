
CREATE TABLE Israel (
  id          SERIAL NOT NULL PRIMARY KEY,
  promise     VARCHAR(255),
  scripture   VARCHAR(255),
  note       VARCHAR(255)
);

INSERT INTO Israel (promise, scripture, note) VALUES ('test promise', 'test scripture', 'test note');
