CREATE TABLE `users` (
	`nrp` VARCHAR(15) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	`created_at` DATETIME,
	PRIMARY KEY (`nrp`)
);

CREATE TABLE `gates` (
	`gate_id` INT NOT NULL AUTO_INCREMENT,
	`gate_name` VARCHAR(255),
	`created_at` DATETIME NOT NULL,
	PRIMARY KEY (`gate_id`)
);

CREATE TABLE `times` (
	`time_id` INT NOT NULL AUTO_INCREMENT,
	`time_name` VARCHAR(255),
	`time_start` DATETIME NOT NULL,
	`time_finish` DATETIME NOT NULL,
	`created_at` DATETIME NOT NULL,
	PRIMARY KEY (`time_id`)
);

CREATE TABLE `logs` (
	`log_id` INT NOT NULL AUTO_INCREMENT,
	`log_name` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`created_at` DATETIME NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`log_id`)
);

CREATE TABLE `role_gate` (
	`role_id` INT NOT NULL AUTO_INCREMENT,
	`nrp` VARCHAR(15) NOT NULL,
	`gate_id` INT NOT NULL,
	`time_id` INT NOT NULL,
	`log_id` INT NOT NULL,
	`created_at` DATETIME NOT NULL,
	PRIMARY KEY (`role_id`)
);

ALTER TABLE `role_gate` ADD CONSTRAINT `role_gate_fk0` FOREIGN KEY (`nrp`) REFERENCES `users`(`nrp`);

ALTER TABLE `role_gate` ADD CONSTRAINT `role_gate_fk1` FOREIGN KEY (`gate_id`) REFERENCES `gates`(`gate_id`);

ALTER TABLE `role_gate` ADD CONSTRAINT `role_gate_fk2` FOREIGN KEY (`time_id`) REFERENCES `times`(`time_id`);

ALTER TABLE `role_gate` ADD CONSTRAINT `role_gate_fk3` FOREIGN KEY (`log_id`) REFERENCES `logs`(`log_id`);