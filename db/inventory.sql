
CREATE TABLE Points ( 
  id          SERIAL NOT NULL PRIMARY KEY, 
  kids        INT NOT NULL REFERENCES Family(id),
  points      INT,
  notes       VARCHAR(255)
);

INSERT INTO Points (kids, points, notes) VALUES (1, 1, 'love');


CREATE TABLE Natural (
  nId         SERIAL NOT NULL PRIMARY KEY, 
  planed      INT, 
  stained     INT,
  cut         INT,
  stampled    INT, 
  completed   INT
);

INSERT INTO Natural (planed, stained, cut, stapled, completed) VALUES (1, 1, 1, 1, 1);


















gray 
'https://thumbs.dreamstime.com/z/natural-gray-wooden-parquet-herringbone-wood-texture-99316148.jpg' 

kona
'https://thumbs.dreamstime.com/z/brown-natural-painted-wood-texture-background-rustic-old-wooden-aged-planks-72586155.jpg'

natural
'https://thumbs.dreamstime.com/z/light-pine-wood-texture-horizontal-planks-93600384.jpg'
'https://thumbs.dreamstime.com/b/light-pine-wood-texture-horizontal-planks-93600384.jpg'
