CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`nrp` VARCHAR(255) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `rules` (
	`rule_id` INT NOT NULL AUTO_INCREMENT,
	`rule_name` varchar(100) DEFAULT NULL,
	`start` TIME NOT NULL,
	`finish` TIME NOT NULL,
	`user_id` INT NOT NULL,
	`gate_id` INT NOT NULL,
	PRIMARY KEY (`rule_id`)
);

CREATE TABLE `logs` (
	`log_id` INT NOT NULL AUTO_INCREMENT,
	`description` VARCHAR(255) NOT NULL,
	`user_id` INT NOT NULL,
	`gate_id` INT NOT NULL,
	PRIMARY KEY (`log_id`)
);

CREATE TABLE `gates` (
	`gate_id` INT NOT NULL AUTO_INCREMENT,
	`gate_name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`gate_id`)
);

ALTER TABLE `rules` ADD CONSTRAINT `rules_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `rules` ADD CONSTRAINT `rules_fk1` FOREIGN KEY (`gate_id`) REFERENCES `gates`(`gate_id`);

ALTER TABLE `logs` ADD CONSTRAINT `logs_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `logs` ADD CONSTRAINT `logs_fk1` FOREIGN KEY (`gate_id`) REFERENCES `gates`(`gate_id`);
