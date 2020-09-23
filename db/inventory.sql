
CREATE TABLE Wood (
  id         SERIAL NOT NULL PRIMARY KEY, 
  color       INT REFERENCES Color(id),
  size        INT REFERENCES Size(id),
  stage       INT REFERENCES Stage(id),
  quantity    INT
);

CREATE TABLE Stage (
  id          SERIAL NOT NULL PRIMARY KEY,
  stage       VARCHAR(32)
);

INSERT INTO Stage (stage) VALUES ('unplaned');
INSERT INTO Stage (stage) VALUES ('planed');
INSERT INTO Stage (stage) VALUES ('stained');
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



-- INSERT INTO Wood (color, size, stage, quantity) VALUES ( , 2, ,-1);

INSERT INTO Wood (size, stage, quantity) VALUES (2, 1, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 2, 2, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 2, 2, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 2, 2, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 2, 3, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 2, 3, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 2, 3, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 2, 4, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 2, 4, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 2, 4, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 2, 5, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 2, 5, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 2, 5, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 2, 6, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 2, 6, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 2, 6, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 2, 7, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 2, 7, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 2, 7, -1);

INSERT INTO Wood (size, stage, quantity) VALUES (1, 1, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 1, 2, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 1, 2, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 1, 2, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 1, 3, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 1, 3, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 1, 3, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 1, 4, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 1, 4, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 1, 4, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 1, 5, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 1, 5, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 1, 5, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 1, 6, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 1, 6, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 1, 6, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (1, 1, 7, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (2, 1, 7, -1);
INSERT INTO Wood (color, size, stage, quantity) VALUES (3, 1, 7, -1);


