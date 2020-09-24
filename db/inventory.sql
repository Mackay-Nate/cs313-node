
CREATE TABLE Frame (
  id         SERIAL NOT NULL PRIMARY KEY, 
  color       INT REFERENCES Color(id),
  size        INT REFERENCES Size(id),
  stage       INT REFERENCES Stage(id),
  quantity    INT, 
  dateUpdated DATE
);

CREATE TABLE Stage (
  id          SERIAL NOT NULL PRIMARY KEY,
  stage       VARCHAR(32)
);

INSERT INTO Stage (stage) VALUES ('unplaned');
INSERT INTO Stage (stage) VALUES ('planed/stained');
INSERT INTO Stage (stage) VALUES ('cut');
INSERT INTO Stage (stage) VALUES ('slotted');
INSERT INTO Stage (stage) VALUES ('stapled');
INSERT INTO Stage (stage) VALUES ('completed');

CREATE TABLE Color ( 
  id      SERIAL NOT NULL PRIMARY KEY, 
  color   VARCHAR(32),
  link    VARCHAR(255)
);

INSERT INTO Color (color, link) VALUES ('Natural', 'https://thumbs.dreamstime.com/b/light-pine-wood-texture-horizontal-planks-93600384.jpg'
);
-- 'https://thumbs.dreamstime.com/z/light-pine-wood-texture-horizontal-planks-93600384.jpg'
INSERT INTO Color (color, link) VALUES ('Gray', 'https://thumbs.dreamstime.com/z/natural-gray-wooden-parquet-herringbone-wood-texture-99316148.jpg' );
INSERT INTO Color (color, link) VALUES ('Kona', 'https://thumbs.dreamstime.com/z/brown-natural-painted-wood-texture-background-rustic-old-wooden-aged-planks-72586155.jpg'
);

CREATE TABLE Size ( 
  id      SERIAL NOT NULL PRIMARY KEY, 
  size    VARCHAR(32)
);

INSERT INTO Size (size) VALUES ('Mini', 'Medium');



-- INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES ( , 2, ,-1, '09-01-2020');

INSERT INTO Frame (size, stage, quantity, dateUpdated) VALUES (2, 1, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 2, 2, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 2, 2, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 2, 2, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 2, 3, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 2, 3, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 2, 3, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 2, 4, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 2, 4, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 2, 4, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 2, 5, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 2, 5, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 2, 5, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 2, 6, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 2, 6, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 2, 6, -1, '09-01-2020');

INSERT INTO Frame (size, stage, quantity, dateUpdated) VALUES (1, 1, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 1, 2, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 1, 2, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 1, 2, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 1, 3, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 1, 3, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 1, 3, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 1, 4, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 1, 4, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 1, 4, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 1, 5, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 1, 5, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 1, 5, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (1, 1, 6, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (2, 1, 6, -1, '09-01-2020');
INSERT INTO Frame (color, size, stage, quantity, dateUpdated) VALUES (3, 1, 6, -1, '09-01-2020');


