/* Replace with your SQL commands */

create table car(
	`car_id` int(11) NOT NULL AUTO_INCREMENT,
	`make` varchar(128) DEFAULT NULL,
	`model` varchar(128) DEFAULT NULL,
	`color` varchar(128) DEFAULT NULL,
	`miles` int (12) DEFAULT '0',
	PRIMARY KEY(`car_id`)
);

insert into car (`make`,`model`,`color`,`miles`)
	values('Audi','A4','red',3000),
		('Porsche','911','white',3000),
		('BMW', ' 1 series', 'Blue', 3000);