
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
INSERT INTO job (jobName) VALUES ('family room');
INSERT INTO job (jobName) VALUES ('living room');
INSERT INTO job (jobName) VALUES ('bedroom');
INSERT INTO job (jobName) VALUES ('Clear and Wipe the table');
INSERT INTO job (jobName) VALUES ('Make dinner');
INSERT INTO job (jobName) VALUES ('Make breakfast');
INSERT INTO job (jobName) VALUES ('Clean toilet');
INSERT INTO job (jobName) VALUES ('Sink, and mirror');
INSERT INTO job (jobName) VALUES ('Sweep floor');
INSERT INTO job (jobName) VALUES ('hallway');
INSERT INTO job (jobName) VALUES ('dust');
INSERT INTO job (jobName) VALUES ('Wash the baseboards');
INSERT INTO job (jobName) VALUES ('Wipe the cabinets');
INSERT INTO job (jobName) VALUES ('Dust the blinds');
INSERT INTO job (jobName) VALUES ('');

--Member db inserted 
INSERT INTO Member (firstName) VALUES('Nate');
INSERT INTO Member (firstName) VALUES('Jen');
INSERT INTO Member (firstName) VALUES('grandma');
INSERT INTO Member (firstName) VALUES('grandpa');
INSERT INTO Member (firstName) VALUES('Natalie');
INSERT INTO Member (firstName) VALUES('Ava');
INSERT INTO Member (firstName) VALUES('Corbin');

