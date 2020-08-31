
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
  id        SERIAL PRIMARY KEY,
  linkName  INT
);

--creation of the week 
CREATE TABLE Family (
  id         SERIAL PRIMARY KEY,
  firstName  varchar(16) NOT NULL UNIQUE
);

CREATE TABLE business (
  id          SERIAL NOT NULL PRIMARY KEY, 
  note        varchar(255)
);

CREATE TABLE musicLink (
  id          SERIAL UNIQUE,
  name        varchar(255)
);

CREATE TABLE oSong (
  id          SERIAL PRIMARY KEY,
  name        varchar(255),
  number      INT, 
  book        INT REFERENCES musicLink(id)
);

CREATE TABLE cSong (
  id          SERIAL PRIMARY KEY,
  name        varchar(255),
  book        INT REFERENCES musicLink(id),
  number      INT
);

--INSERT INTO Dates VALUES ('');
INSERT INTO Dates VALUES (1, 'December 28-January 3');
INSERT INTO Dates VALUES (2, 'January 4-10');
INSERT INTO Dates VALUES (3, 'January 11-17');
INSERT INTO Dates VALUES (4, 'January 18-24');
INSERT INTO Dates VALUES (5, 'January 25-31');
INSERT INTO Dates VALUES (6, 'February 1-7');
INSERT INTO Dates VALUES (7, 'February 8-14');
INSERT INTO Dates VALUES (8, 'February 15-21');
INSERT INTO Dates VALUES (9, 'February 22-28');
INSERT INTO Dates VALUES (10, 'March 1-7');
INSERT INTO Dates VALUES (11, 'March 8-14');
INSERT INTO Dates VALUES (12, 'March 15-21');
INSERT INTO Dates VALUES (13, 'March 22-28');
INSERT INTO Dates VALUES (14, 'March 29-April 4');
INSERT INTO Dates VALUES (15, 'April 5-11');
INSERT INTO Dates VALUES (16, 'April 12-18');
INSERT INTO Dates VALUES (17, 'April 19-25');
INSERT INTO Dates VALUES (18, 'April 26-May 2');
INSERT INTO Dates VALUES (19, 'May 3-9');
INSERT INTO Dates VALUES (20, 'May 10-16');
INSERT INTO Dates VALUES (21, 'May 17-23');
INSERT INTO Dates VALUES (22, 'May 24-30');
INSERT INTO Dates VALUES (23, 'May 31-June 6');
INSERT INTO Dates VALUES (24, 'June 7-13');
INSERT INTO Dates VALUES (25, 'June 14-20');
INSERT INTO Dates VALUES (26, 'June 21-27');
INSERT INTO Dates VALUES (27, 'June 28-July 4');
INSERT INTO Dates VALUES (28, 'July 5-11');
INSERT INTO Dates VALUES (29, 'July 12-18');
INSERT INTO Dates VALUES (30, 'July 19-25');
INSERT INTO Dates VALUES (31, 'July 26-August 1');
INSERT INTO Dates VALUES (32, 'August 2- 8');
INSERT INTO Dates VALUES (33, 'August 9-15');
INSERT INTO Dates VALUES (34, 'August 16-22');
INSERT INTO Dates VALUES (35, 'August 23-29');
INSERT INTO Dates VALUES (36, 'August 30-September 5');
INSERT INTO Dates VALUES (37, 'September 6-12');
INSERT INTO Dates VALUES (38, 'September 13-19');
INSERT INTO Dates VALUES (39, 'September 20-26');
INSERT INTO Dates VALUES (40, 'September 27-October 3');
INSERT INTO Dates VALUES (41, 'October 4-10');
INSERT INTO Dates VALUES (42, 'October 11-17');
INSERT INTO Dates VALUES (43, 'October 18-24');
INSERT INTO Dates VALUES (44, 'October 25-31');
INSERT INTO Dates VALUES (45, 'November 1-7');
INSERT INTO Dates VALUES (46, 'November 8-14');
INSERT INTO Dates VALUES (47, 'November 15-21');
INSERT INTO Dates VALUES (48, 'November 22-28');
INSERT INTO Dates VALUES (49, 'November 29-December 5');
INSERT INTO Dates VALUES (50, 'December 6-12');
INSERT INTO Dates VALUES (51, 'December 13-19');
INSERT INTO Dates VALUES (52, 'December 20-26');

--INSERT INTO Scriptures VALUES ('');
INSERT INTO Scriptures VALUES (1, 'Doctrine and Covenants 1');
INSERT INTO Scriptures VALUES (2, 'Joseph Smith-History 1:1-26');
INSERT INTO Scriptures VALUES (3, 'Doctrine and Covenants 2');
INSERT INTO Scriptures VALUES (4, 'Doctrine and Covenants 3-5');
INSERT INTO Scriptures VALUES (5, 'Doctrine and Covenants 6-9');
INSERT INTO Scriptures VALUES (6, 'Doctrine and Covenants 10-11');
INSERT INTO Scriptures VALUES (7, 'Doctrine and Covenants 12-13');
INSERT INTO Scriptures VALUES (8, 'Doctrine and Covenants 14-17');
INSERT INTO Scriptures VALUES (9, 'Doctrine and Covenants 18-19');
INSERT INTO Scriptures VALUES (10, 'Doctrine and Covenants 20-22');
INSERT INTO Scriptures VALUES (11, 'Doctrine and Covenants 23-26');
INSERT INTO Scriptures VALUES (12, 'Doctrine and Covenants 27-28');
INSERT INTO Scriptures VALUES (13, 'Doctrine and Covenants 29');
INSERT INTO Scriptures VALUES (14, 'Easter');
INSERT INTO Scriptures VALUES (15, 'Doctrine and Covenants 30-36');
INSERT INTO Scriptures VALUES (16, 'Doctrine and Covenants 37-40');
INSERT INTO Scriptures VALUES (17, 'Doctrine and Covenants 41-44');
INSERT INTO Scriptures VALUES (18, 'Doctrine and Covenants 45');
INSERT INTO Scriptures VALUES (19, 'Doctrine and Covenants 46-48');
INSERT INTO Scriptures VALUES (20, 'Doctrine and Covenants 49-50');
INSERT INTO Scriptures VALUES (21, 'Doctrine and Covenants 51-57');
INSERT INTO Scriptures VALUES (22, 'Doctrine and Covenants 58-59');
INSERT INTO Scriptures VALUES (23, 'Doctrine and Covenants 60-62');
INSERT INTO Scriptures VALUES (24, 'Doctrine and Covenants 63');
INSERT INTO Scriptures VALUES (25, 'Doctrine and Covenants 64-66');
INSERT INTO Scriptures VALUES (26, 'Doctrine and Covenants 67-70');
INSERT INTO Scriptures VALUES (27, 'Doctrine and Covenants 71-75');
INSERT INTO Scriptures VALUES (28, 'Doctrine and Covenants 76');
INSERT INTO Scriptures VALUES (29, 'Doctrine and Covenants 77-80');
INSERT INTO Scriptures VALUES (30, 'Doctrine and Covenants 81-83');
INSERT INTO Scriptures VALUES (31, 'Doctrine and Covenants 84');
INSERT INTO Scriptures VALUES (32, 'Doctrine and Covenants 85-87');
INSERT INTO Scriptures VALUES (33, 'Doctrine and Covenants 88');
INSERT INTO Scriptures VALUES (34, 'Doctrine and Covenants 89-92');
INSERT INTO Scriptures VALUES (35, 'Doctrine and Covenants 93');
INSERT INTO Scriptures VALUES (36, 'Doctrine and Covenants 94-97');
INSERT INTO Scriptures VALUES (37, 'Doctrine and Covenants 98-101');
INSERT INTO Scriptures VALUES (38, 'Doctrine and Covenants 102-105');
INSERT INTO Scriptures VALUES (39, 'Doctrine and Covenants 106-108');
INSERT INTO Scriptures VALUES (40, 'Doctrine and Covenants 109-110');
INSERT INTO Scriptures VALUES (41, 'Doctrine and Covenants 111-114');
INSERT INTO Scriptures VALUES (42, 'Doctrine and Covenants 115-120');
INSERT INTO Scriptures VALUES (43, 'Doctrine and Covenants 121-123');
INSERT INTO Scriptures VALUES (44, 'Doctrine and Covenants 124');
INSERT INTO Scriptures VALUES (45, 'Doctrine and Covenants 125-128');
INSERT INTO Scriptures VALUES (46, 'Doctrine and Covenants 129-132');
INSERT INTO Scriptures VALUES (47, 'Doctrine and Covenants 133-134');
INSERT INTO Scriptures VALUES (48, 'Doctrine and Covenants 135-136');
INSERT INTO Scriptures VALUES (49, 'Doctrine and Covenants 137-138');
INSERT INTO Scriptures VALUES (50, 'The Articles of Faith and Official Declarations 1 and 2');
INSERT INTO Scriptures VALUES (51, 'The Family: A Proclamation to the World')
INSERT INTO Scriptures VALUES (52, 'Christmas');


--INSERT INTO scriptLink VALUES ('');
INSERT INTO scriptLink (linkName) VALUES ('1');
INSERT INTO scriptLink (linkName) VALUES ('0');
INSERT INTO scriptLink (linkName) VALUES ('2');
INSERT INTO scriptLink (linkName) VALUES ('3');
INSERT INTO scriptLink (linkName) VALUES ('6');
INSERT INTO scriptLink (linkName) VALUES ('10');
INSERT INTO scriptLink (linkName) VALUES ('12');
INSERT INTO scriptLink (linkName) VALUES ('14');
INSERT INTO scriptLink (linkName) VALUES ('18');
INSERT INTO scriptLink (linkName) VALUES ('20');
INSERT INTO scriptLink (linkName) VALUES ('23');
INSERT INTO scriptLink (linkName) VALUES ('27');
INSERT INTO scriptLink (linkName) VALUES ('29');
INSERT INTO scriptLink (linkName) VALUES ('0');
INSERT INTO scriptLink (linkName) VALUES ('30');
INSERT INTO scriptLink (linkName) VALUES ('37');
INSERT INTO scriptLink (linkName) VALUES ('41');
INSERT INTO scriptLink (linkName) VALUES ('45');
INSERT INTO scriptLink (linkName) VALUES ('46');
INSERT INTO scriptLink (linkName) VALUES ('49');
INSERT INTO scriptLink (linkName) VALUES ('51');
INSERT INTO scriptLink (linkName) VALUES ('58');
INSERT INTO scriptLink (linkName) VALUES ('60');
INSERT INTO scriptLink (linkName) VALUES ('63');
INSERT INTO scriptLink (linkName) VALUES ('64');
INSERT INTO scriptLink (linkName) VALUES ('67');
INSERT INTO scriptLink (linkName) VALUES ('71');
INSERT INTO scriptLink (linkName) VALUES ('76');
INSERT INTO scriptLink (linkName) VALUES ('77');
INSERT INTO scriptLink (linkName) VALUES ('81');
INSERT INTO scriptLink (linkName) VALUES ('84');
INSERT INTO scriptLink (linkName) VALUES ('85');
INSERT INTO scriptLink (linkName) VALUES ('88');
INSERT INTO scriptLink (linkName) VALUES ('89');
INSERT INTO scriptLink (linkName) VALUES ('93');
INSERT INTO scriptLink (linkName) VALUES ('94');
INSERT INTO scriptLink (linkName) VALUES ('98');
INSERT INTO scriptLink (linkName) VALUES ('102');
INSERT INTO scriptLink (linkName) VALUES ('106');
INSERT INTO scriptLink (linkName) VALUES ('109');
INSERT INTO scriptLink (linkName) VALUES ('111');
INSERT INTO scriptLink (linkName) VALUES ('115');
INSERT INTO scriptLink (linkName) VALUES ('121');
INSERT INTO scriptLink (linkName) VALUES ('124');
INSERT INTO scriptLink (linkName) VALUES ('125');
INSERT INTO scriptLink (linkName) VALUES ('129');
INSERT INTO scriptLink (linkName) VALUES ('133');
INSERT INTO scriptLink (linkName) VALUES ('135');
INSERT INTO scriptLink (linkName) VALUES ('137');
INSERT INTO scriptLink (linkName) VALUES ('0');
INSERT INTO scriptLink (linkName) VALUES ('0');

INSERT INTO Family (firstName) VALUES('Dad');
INSERT INTO Family (firstName) VALUES('Mom');
INSERT INTO Family (firstName) VALUES('Natalie');
INSERT INTO Family (firstName) VALUES('Ginger');
INSERT INTO Family (firstName) VALUES('Dude');
INSERT INTO Family (firstName) VALUES('William');

INSERT INTO business (note) VALUES ('Love one another');
INSERT INTO business (note) VALUES ('Serve others');
INSERT INTO business (note) VALUES ('Be extra kind to one another');

UPDATE business 
SET    note = value
WHERE  id   = value;


INSERT INTO musicLink (name) VALUES ('https://www.churchofjesuschrist.org/music/library/hymns?lang=eng');
INSERT INTO musicLink (name) VALUES ('https://www.churchofjesuschrist.org/music/library/childrens-songbook?lang=eng');

--INSERT INTO oSong (name, number, book) VALUES ('', );
INSERT INTO oSong (name, number, book) VALUES ('Follow the Prophet', 110, 2);
INSERT INTO oSong (name, number, book) VALUES ('Joseph Smith''s First Prayer', 26, 1);
INSERT INTO oSong (name, number, book) VALUES ('Family History_I Am Doing It', 94, 2);
INSERT INTO oSong (name, number, book) VALUES ('I Will Be Valiant', 162, 2);
INSERT INTO oSong (name, number, book) VALUES ('Dare to Do Right', 158, 2);
INSERT INTO oSong (name, number, book) VALUES ('Search, Ponder, and Pray', 109, 2);
INSERT INTO oSong (name, number, book) VALUES ('The Priesthood Is Restored', 89, 2);
INSERT INTO oSong (name, number, book) VALUES ('I''ll Go Where You Want Me to Go', 270, 1);
INSERT INTO oSong (name, number, book) VALUES ('I Stand All Amazed', 193, 1);
INSERT INTO oSong (name, number, book) VALUES ('The Church of Jesus Christ', 77, 2);
INSERT INTO oSong (name, number, book) VALUES ('Lift Up Your Voice and Sing', 252, 2);
INSERT INTO oSong (name, number, book) VALUES ('Come, Listen to a Prophet''s Voice', 21, 1);
INSERT INTO oSong (name, number, book) VALUES ('Israel, Israel, God Is Calling', 7, 1);
INSERT INTO oSong (name, number, book) VALUES ('Jesus Has Risen', 70, 2);
INSERT INTO oSong (name, number, book) VALUES ('I Hope They Call Me on a Mission', 169, 2);
INSERT INTO oSong (name, number, book) VALUES ('Jesus Said Love Everyone', 61, 2);
INSERT INTO oSong (name, number, book) VALUES ('I Want to Live the Gospel', 148, 2);
INSERT INTO oSong (name, number, book) VALUES ('When He Comes Again', 82, 2);
INSERT INTO oSong (name, number, book) VALUES ('Have I Done Any Good?', 223, 1);
INSERT INTO oSong (name, number, book) VALUES ('Shine On', 144, 2);
INSERT INTO oSong (name, number, book) VALUES ('"Give," Said the Little Stream', 236, 2);
INSERT INTO oSong (name, number, book) VALUES ('Choose the Right', 239, 1);
INSERT INTO oSong (name, number, book) VALUES ('Testimony', 137, 1);
INSERT INTO oSong (name, number, book) VALUES ('Reverence Is Love', 31, 2);
INSERT INTO oSong (name, number, book) VALUES ('Help Me, Dear Father', 99, 2);
INSERT INTO oSong (name, number, book) VALUES ('Home Can Be a Heaven on Earth', 298, 1);
INSERT INTO oSong (name, number, book) VALUES ('Let Us All Press On', 243, 1);
INSERT INTO oSong (name, number, book) VALUES ('I Know That My Redeemer Lives', 136, 1);
INSERT INTO oSong (name, number, book) VALUES ('Count Your Blessings', 241, 1);
INSERT INTO oSong (name, number, book) VALUES ('Have I Done Any Good?', 223, 1);
INSERT INTO oSong (name, number, book) VALUES ('The Priesthood Is Restored', 89, 2);
INSERT INTO oSong (name, number, book) VALUES ('Where Love Is', 138, 2);
INSERT INTO oSong (name, number, book) VALUES ('Nearer, My God, to Thee', 100, 1);
INSERT INTO oSong (name, number, book) VALUES ('The Lord Gave Me a Temple', 153, 2);
INSERT INTO oSong (name, number, book) VALUES ('I Am a Child of God', 2, 2);
INSERT INTO oSong (name, number, book) VALUES ('I Love to See the Temple', 95, 2);
INSERT INTO oSong (name, number, book) VALUES ('Help Me, Dear Father', 99, 2);
INSERT INTO oSong (name, number, book) VALUES ('Count Your Blessings', 241, 1);
INSERT INTO oSong (name, number, book) VALUES ('We Listen to a Prophet''s Voice', 22, 1);
INSERT INTO oSong (name, number, book) VALUES ('The Spirit of God', 2, 1);
INSERT INTO oSong (name, number, book) VALUES ('Be Thou Humble', 130, 1);
INSERT INTO oSong (name, number, book) VALUES ('I Want to Give the Lord My Tenth', 150, 2);
INSERT INTO oSong (name, number, book) VALUES ('Where Can I Turn for Peach?', 129, 1);
INSERT INTO oSong (name, number, book) VALUES ('I Love to See the Temple', 95, 2);
INSERT INTO oSong (name, number, book) VALUES ('Family History-I Am Doing It', 94, 2);
INSERT INTO oSong (name, number, book) VALUES ('Families Can Be Together, Forever', 188, 2);
INSERT INTO oSong (name, number, book) VALUES ('Come, Ye Children of the Lord', 58, 1);
INSERT INTO oSong (name, number, book) VALUES ('Praise to the Man', 27, 1);
INSERT INTO oSong (name, number, book) VALUES ('Search, Ponder, and Pray', 109, 2);
INSERT INTO oSong (name, number, book) VALUES ('Keep the Commandments', 146, 2);
INSERT INTO oSong (name, number, book) VALUES ('Home Can Be a Heaven on Earth', 298, 1);
INSERT INTO oSong (name, number, book) VALUES ('Hark! The Herald Angels Sing', 209, 1);

INSERT INTO cSong (name, book, number) VALUES ('Love Is Spoken Here', 2, 190);
INSERT INTO cSong (name, book, number) VALUES ('Come, Follow Me', 1, 116);
INSERT INTO cSong (name, book, number) VALUES ('I''m Trying to Be Like Jesus', 2, 78);
INSERT INTO cSong (name, book, number) VALUES ('A Child''s Prayer', 2, 12);
INSERT INTO cSong (name, book, number) VALUES ('My Heavenly Father Loves Me', 2, 228);
INSERT INTO cSong (name, book, number) VALUES ('Count Your Blessings', 1, 241);

