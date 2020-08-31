
CREATE TABLE Dates ( 
  week      SERIAL NOT NULL PRIMARY KEY, 
  weekName  varchar(80) NOT NULL UNIQUE
);

--creation of the scriptures 
CREATE TABLE Scriptures (
  week        SERIAL NOT NULL PRIMARY KEY,
  scriptName  varchar(80) NOT NULL
);

CREATE TABLE scriptLink (
  id        SERIAL NOT NULL PRIMARY KEY,
  linkName  INT
);

--creation of the week 
CREATE TABLE Family (
  id         SERIAL NOT NULL PRIMARY KEY,
  firstName  varchar(16) NOT NULL UNIQUE
);

CREATE TABLE business (
  id          SERIAL NOT NULL PRIMARY KEY, 
  note        varchar(255)
);

CREATE TABLE oSong (
  id          SERIAL PRIMARY KEY,
  name        varchar(255)
);

CREATE TABLE musicLink (
  id          SERIAL,
  name        varchar(255)
);

--INSERT INTO Dates VALUES ('');
INSERT INTO Dates VALUES ('December 28-January 3');
INSERT INTO Dates VALUES ('January 4-10');
INSERT INTO Dates VALUES ('January 11-17');
INSERT INTO Dates VALUES ('January 18-24');
INSERT INTO Dates VALUES ('January 25-31');
INSERT INTO Dates VALUES ('February 1-7');
INSERT INTO Dates VALUES ('February 8-14');
INSERT INTO Dates VALUES ('February 15-21');
INSERT INTO Dates VALUES ('February 22-28');
INSERT INTO Dates VALUES ('March 1-7');
INSERT INTO Dates VALUES ('March 8-14');
INSERT INTO Dates VALUES ('March 15-21');
INSERT INTO Dates VALUES ('March 22-28');
INSERT INTO Dates VALUES ('March 29-April 4');
INSERT INTO Dates VALUES ('April 5-11');
INSERT INTO Dates VALUES ('April 12-18');
INSERT INTO Dates VALUES ('April 19-25');
INSERT INTO Dates VALUES ('April 26-May 2');
INSERT INTO Dates VALUES ('May 3-9');
INSERT INTO Dates VALUES ('May 10-16');
INSERT INTO Dates VALUES ('May 17-23');
INSERT INTO Dates VALUES ('May 24-30');
INSERT INTO Dates VALUES ('May 31-June 6');
INSERT INTO Dates VALUES ('June 7-13');
INSERT INTO Dates VALUES ('June 14-20');
INSERT INTO Dates VALUES ('June 21-27');
INSERT INTO Dates VALUES ('June 28-July 4');
INSERT INTO Dates VALUES ('July 5-11');
INSERT INTO Dates VALUES ('July 12-18');
INSERT INTO Dates VALUES ('July 19-25');
INSERT INTO Dates VALUES ('July 26-August 1');
INSERT INTO Dates VALUES ('August 2- 8');
INSERT INTO Dates VALUES ('August 9-15');
INSERT INTO Dates VALUES ('August 16-22');
INSERT INTO Dates VALUES ('August 23-29');
INSERT INTO Dates VALUES ('August 30-September 5');
INSERT INTO Dates VALUES ('September 6-12');
INSERT INTO Dates VALUES ('September 13-19');
INSERT INTO Dates VALUES ('September 20-26');
INSERT INTO Dates VALUES ('September 27-October 3');
INSERT INTO Dates VALUES ('October 4-10');
INSERT INTO Dates VALUES ('October 11-17');
INSERT INTO Dates VALUES ('October 18-24');
INSERT INTO Dates VALUES ('October 25-31');
INSERT INTO Dates VALUES ('November 1-7');
INSERT INTO Dates VALUES ('November 8-14');
INSERT INTO Dates VALUES ('November 15-21');
INSERT INTO Dates VALUES ('November 22-28');
INSERT INTO Dates VALUES ('November 29-December 5');
INSERT INTO Dates VALUES ('December 6-12');
INSERT INTO Dates VALUES ('December 13-19');
INSERT INTO Dates VALUES ('December 20-26');

--INSERT INTO Scriptures VALUES ('');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 1');
INSERT INTO Scriptures VALUES ('Joseph Smith-History 1:1-26');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 2');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 3-5');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 6-9');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 10-11');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 12-13');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 14-17');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 18-19');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 20-22');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 23-26');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 27-28');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 29');
INSERT INTO Scriptures VALUES ('Easter');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 30-36');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 37-40');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 41-44');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 45');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 46-48');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 49-50');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 51-57');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 58-59');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 60-62');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 63');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 64-66');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 67-70');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 71-75');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 76');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 77-80');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 81-83');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 84');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 85-87');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 88');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 89-92');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 93');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 94-97');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 98-101');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 102-105');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 106-108');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 109-110');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 111-114');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 115-120');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 121-123');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 124');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 125-128');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 129-132');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 133-134');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 135-136');
INSERT INTO Scriptures VALUES ('Doctrine and Covenants 137-138');
INSERT INTO Scriptures VALUES ('The Articles of Faith and Official Declarations 1 and 2');
INSERT INTO Scriptures VALUES ('Christmas');


--INSERT INTO scriptLink VALUES ('');
INSERT INTO scriptLink VALUES ('1');
INSERT INTO scriptLink VALUES ('');
INSERT INTO scriptLink VALUES ('2');
INSERT INTO scriptLink VALUES ('3');
INSERT INTO scriptLink VALUES ('6');
INSERT INTO scriptLink VALUES ('10');
INSERT INTO scriptLink VALUES ('12');
INSERT INTO scriptLink VALUES ('14');
INSERT INTO scriptLink VALUES ('18');
INSERT INTO scriptLink VALUES ('20');
INSERT INTO scriptLink VALUES ('23');
INSERT INTO scriptLink VALUES ('27');
INSERT INTO scriptLink VALUES ('29');
INSERT INTO scriptLink VALUES ('');
INSERT INTO scriptLink VALUES ('30');
INSERT INTO scriptLink VALUES ('37');
INSERT INTO scriptLink VALUES ('41');
INSERT INTO scriptLink VALUES ('45');
INSERT INTO scriptLink VALUES ('46');
INSERT INTO scriptLink VALUES ('49');
INSERT INTO scriptLink VALUES ('51');
INSERT INTO scriptLink VALUES ('58');
INSERT INTO scriptLink VALUES ('60');
INSERT INTO scriptLink VALUES ('63');
INSERT INTO scriptLink VALUES ('64');
INSERT INTO scriptLink VALUES ('67');
INSERT INTO scriptLink VALUES ('71');
INSERT INTO scriptLink VALUES ('76');
INSERT INTO scriptLink VALUES ('77');
INSERT INTO scriptLink VALUES ('81');
INSERT INTO scriptLink VALUES ('84');
INSERT INTO scriptLink VALUES ('85');
INSERT INTO scriptLink VALUES ('88');
INSERT INTO scriptLink VALUES ('89');
INSERT INTO scriptLink VALUES ('93');
INSERT INTO scriptLink VALUES ('94');
INSERT INTO scriptLink VALUES ('98');
INSERT INTO scriptLink VALUES ('102');
INSERT INTO scriptLink VALUES ('106');
INSERT INTO scriptLink VALUES ('109');
INSERT INTO scriptLink VALUES ('111');
INSERT INTO scriptLink VALUES ('115');
INSERT INTO scriptLink VALUES ('121');
INSERT INTO scriptLink VALUES ('124');
INSERT INTO scriptLink VALUES ('125');
INSERT INTO scriptLink VALUES ('129');
INSERT INTO scriptLink VALUES ('133');
INSERT INTO scriptLink VALUES ('135');
INSERT INTO scriptLink VALUES ('137');
INSERT INTO scriptLink VALUES ('');
INSERT INTO scriptLink VALUES ('');

--Member db inserted 
INSERT INTO Member (firstName) VALUES('Dad');
INSERT INTO Member (firstName) VALUES('Mom');
INSERT INTO Member (firstName) VALUES('');
INSERT INTO Member (firstName) VALUES('Ginger');
INSERT INTO Member (firstName) VALUES('Dude');
INSERT INTO Member (firstName) VALUES('');



