CREATE TABLE IF NOT EXISTS Gates (
    gate_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (gate_id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Users (
    nrp VARCHAR(15),
    name VARCHAR(100),
    PRIMARY KEY (nrp)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Time (
    time_id INT AUTO_INCREMENT,
    open Datetime,
    close Datetime,
    PRIMARY KEY (time_id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Schedule(
    schedule_id INT AUTO_INCREMENT,
    fk_gate_id INT,
    fk_time_id INT,
    fk_nrp VARCHAR(100),
    FOREIGN KEY (fk_gate_id) REFERENCES Gate(gate_id),
    FOREIGN KEY (fk_time_id) REFERENCES Time(time_id),
    FOREIGN KEY (fk_nrp) REFERENCES User(nrp),
    PRIMARY KEY (schedule_id)
)   ENGINE=INNODB;
