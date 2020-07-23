/* Replace with your SQL commands */

create table person_details(
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(128) DEFAULT NULL,
	`adderss` varchar(128) DEFAULT NULL,
	`city` varchar(128) DEFAULT NULL,
	`mobile_no` int (12) DEFAULT '0',
	PRIMARY KEY(`id`)
);

insert into person_details (`name`,`adderss`,`city`,`mobile_no`)
	values('shyam','ahmedabad','ahmedabad',9876545432),
		('ramesh','rajkot','rajkot',1234567789),
		('raju', 'jamnager', 'jamnager', 124556757);