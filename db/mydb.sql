
CREATE TABLE Secure ( 
  username  varchar(80), 
  password  varchar(80)
)
INSERT INTO Secure (username, password) VALUES ('admin', 'password');
INSERT INTO Secure (username, password) VALUES ('ava', '123');
INSERT INTO Secure (username, password) VALUES ('william', '456');

--creation of the job
CREATE TABLE job (
  id         SERIAL NOT NULL PRIMARY KEY,
  jobName    varchar(80) NOT NULL
);

--creation of the Member 
CREATE TABLE Member (
  id         SERIAL NOT NULL PRIMARY KEY,
  firstName  varchar(16) NOT NULL UNIQUE
);

--job db inserted 
INSERT INTO job (jobName) VALUES ('Clean the Family Room');
INSERT INTO job (jobName) VALUES ('Clean the Living Room');
INSERT INTO job (jobName) VALUES ('Clean your Bedroom');
INSERT INTO job (jobName) VALUES ('Clear & Wipe the table');
INSERT INTO job (jobName) VALUES ('Make dinner');
INSERT INTO job (jobName) VALUES ('Make breakfast');
INSERT INTO job (jobName) VALUES ('Clean the toilet');
INSERT INTO job (jobName) VALUES ('Clean the sink and mirror');
INSERT INTO job (jobName) VALUES ('Sweep the floor');
INSERT INTO job (jobName) VALUES ('Clean the hallway');
INSERT INTO job (jobName) VALUES ('Dust');
INSERT INTO job (jobName) VALUES ('Wash the baseboards');
INSERT INTO job (jobName) VALUES ('Wipe the cabinets');
INSERT INTO job (jobName) VALUES ('Dust the blinds');

INSERT INTO job (jobName) VALUES ('Empty the dishwasher');
INSERT INTO job (jobName) VALUES ('Clean the playroom');
INSERT INTO job (jobName) VALUES ('Clean up outside');
INSERT INTO job (jobName) VALUES ('Wash the dishes');
INSERT INTO job (jobName) VALUES ('Clean the bathroom');



-- INSERT INTO job (jobName) VALUES ('');

--Member db inserted 
INSERT INTO Member (firstName) VALUES('Nate');
INSERT INTO Member (firstName) VALUES('Jen');
INSERT INTO Member (firstName) VALUES('grandma');
INSERT INTO Member (firstName) VALUES('grandpa');
INSERT INTO Member (firstName) VALUES('Natalie');
INSERT INTO Member (firstName) VALUES('Ava');
INSERT INTO Member (firstName) VALUES('Corbin');
INSERT INTO Member (firstName) VALUES('');



--creation of the Breakfast assignments 
CREATE TABLE Breakfast (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO Breakfast (nameId) VALUES (8);
INSERT INTO Breakfast (nameId) VALUES (2);
INSERT INTO Breakfast (nameId) VALUES (6);
INSERT INTO Breakfast (nameId) VALUES (5);
INSERT INTO Breakfast (nameId) VALUES (7);
INSERT INTO Breakfast (nameId) VALUES (1);
INSERT INTO Breakfast (nameId) VALUES (2);

--creation of the Empty the dishwasher assignments 
CREATE TABLE EmptyDishwasher (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO EmptyDishwasher (nameId) VALUES (5);
INSERT INTO EmptyDishwasher (nameId) VALUES (3);
INSERT INTO EmptyDishwasher (nameId) VALUES (3);
INSERT INTO EmptyDishwasher (nameId) VALUES (1);
INSERT INTO EmptyDishwasher (nameId) VALUES (3);
INSERT INTO EmptyDishwasher (nameId) VALUES (3);
INSERT INTO EmptyDishwasher (nameId) VALUES (6);

--creation of the Member 
CREATE TABLE Playroom (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO Playroom (nameId) VALUES (8);
INSERT INTO Playroom (nameId) VALUES (5);
INSERT INTO Playroom (nameId) VALUES (8);
INSERT INTO Playroom (nameId) VALUES (6);
INSERT INTO Playroom (nameId) VALUES (8);
INSERT INTO Playroom (nameId) VALUES (7);
INSERT INTO Playroom (nameId) VALUES (8);

--creation of the Member 
CREATE TABLE Familyroom (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO Familyroom (nameId) VALUES (8);
INSERT INTO Familyroom (nameId) VALUES (6);
INSERT INTO Familyroom (nameId) VALUES (5);
INSERT INTO Familyroom (nameId) VALUES (8);
INSERT INTO Familyroom (nameId) VALUES (8);
INSERT INTO Familyroom (nameId) VALUES (5);
INSERT INTO Familyroom (nameId) VALUES (8);

--creation of the Member 
CREATE TABLE Outside (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO Outside (nameId) VALUES (8);
INSERT INTO Outside (nameId) VALUES (8);
INSERT INTO Outside (nameId) VALUES (7);
INSERT INTO Outside (nameId) VALUES (8);
INSERT INTO Outside (nameId) VALUES (8);
INSERT INTO Outside (nameId) VALUES (6);
INSERT INTO Outside (nameId) VALUES (8);

--creation of the Member 
CREATE TABLE Bedroom (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO Bedroom (nameId) VALUES (8);
INSERT INTO Bedroom (nameId) VALUES (7);
INSERT INTO Bedroom (nameId) VALUES (6);
INSERT INTO Bedroom (nameId) VALUES (5);
INSERT INTO Bedroom (nameId) VALUES (7);
INSERT INTO Bedroom (nameId) VALUES (8);
INSERT INTO Bedroom (nameId) VALUES (5);

--creation of the Member 
CREATE TABLE Dinner (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO Dinner (nameId) VALUES (8);
INSERT INTO Dinner (nameId) VALUES (2);
INSERT INTO Dinner (nameId) VALUES (3);
INSERT INTO Dinner (nameId) VALUES (3);
INSERT INTO Dinner (nameId) VALUES (2);
INSERT INTO Dinner (nameId) VALUES (1);
INSERT INTO Dinner (nameId) VALUES (4);

--creation of the Member 
CREATE TABLE ClearWipe (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO ClearWipe (nameId) VALUES (8);
INSERT INTO ClearWipe (nameId) VALUES (2);
INSERT INTO ClearWipe (nameId) VALUES (5);
INSERT INTO ClearWipe (nameId) VALUES (3);
INSERT INTO ClearWipe (nameId) VALUES (4);
INSERT INTO ClearWipe (nameId) VALUES (2);
INSERT INTO ClearWipe (nameId) VALUES (7);

--creation of the Member 
CREATE TABLE WashDishes (
  day      SERIAL NOT NULL PRIMARY KEY,
  nameId   INT NOT NULL REFERENCES Member(id)
);

INSERT INTO WashDishes (nameId) VALUES (3);
INSERT INTO WashDishes (nameId) VALUES (1);
INSERT INTO WashDishes (nameId) VALUES (2);
INSERT INTO WashDishes (nameId) VALUES (2);
INSERT INTO WashDishes (nameId) VALUES (3);
INSERT INTO WashDishes (nameId) VALUES (1);
INSERT INTO WashDishes (nameId) VALUES (2);



CREATE TABLE Together ( 
  day       SERIAL NOT NULL PRIMARY KEY,
  jobId     INT NOT NULL REFERENCES job(id)
);

-- INSERT INTO  (jobId) VALUES ();
-- INSERT INTO  (jobId) VALUES (2);
-- INSERT INTO  (jobId) VALUES (3);
-- INSERT INTO  (jobId) VALUES (1);
-- INSERT INTO  (jobId) VALUES ();
-- INSERT INTO  (jobId) VALUES (3);
-- INSERT INTO  (jobId) VALUES ();


-- SELECT * FROM 
-- JOIN Member ON  .nameid = Member.id 
-- ORDER BY day

-- INSERT INTO  (nameId) VALUES ();
