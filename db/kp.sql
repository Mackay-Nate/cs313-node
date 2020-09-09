
--  used for kids-points 

-- use Family from Come Follow ME

CREATE TABLE Points ( 
  id          SERIAL NOT NULL PRIMARY KEY, 
  kids        INT NOT NULL REFERENCES Family(id),
  points      INT,
  notes       VARCHAR(255)
);

INSERT INTO Points (kids, points, notes) VALUES (1, 1, 'love');

