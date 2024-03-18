-- Active: 1710762178571@@127.0.0.1@3306
CREATE DATABASE IF NOT EXISTS timeoff
DEFAULT CHARACTER SET = 'utf8mb4';

SET NAMES utf8mb4;

USE timeoff;

CREATE TABLE IF NOT EXISTS `team` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255),
    `created_date` DATE,
    `code` VARCHAR(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `member` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(20),
    `member_email` VARCHAR(255),
    `daysoff` INT(10),
    `allowed_daysoff` INT(10),
    `created_date` DATE,
    `team_id` int(10) unsigned,
    FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `time_off` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `start_date` DATE,
    `end_date` DATE,
    `description` VARCHAR(255),
    `created_date` DATE,
    `member_id` int(10) unsigned,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `member_color` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `hex` VARCHAR(7),
    `member_id` int(10) unsigned,
    FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Data Insertion
INSERT INTO team (title, created_date, code)
VALUES ('Gaffers', '2023-11-21', 'bond007'),
       ('Casanovas','2023-09-21', 'lad420'),
       ('Illuminati','2023-05-25', 'tesla369');


-- Members Insertion
INSERT INTO member (first_name, last_name, member_email, daysoff, allowed_daysoff, created_date)
VALUES ('Jericho', 'Koizomi', 'CR7@gmail.com', 1, 25, '2024-01-29'),
       ('Delilah', 'Ali', 'DL@gmail.com', 0, 25, '2023-01-29'),
       ('Femme', 'Fatale', 'CR9@gmail.com', 10, 25, '2021-02-21'),
       ('Cordelia', 'Alishah', 'bb17@gmail.com', 9, 25, '2022-08-11');

-- Timeoff Insertion
INSERT INTO `time_off` (start_date, end_date, description, created_date)
VALUES ('2024-08-10', '2024-08-11', 'My dog is upset', '2023-07-21'),
       ('2024-09-10', '2024-09-11', 'Taking my hamster for a walk', '2023-08-11'),
       ('2024-06-10', '2024-06-11', 'Taking my cow to the beauty parlour', '2023-10-21'),
       ('2024-05-01', '2024-05-05', 'Pet mouse needs a hairdo', '2023-10-21');

INSERT INTO `member_color` (hex, member_id)
VALUES ('#ff0000', 1),
       ('#FFA500', 2),
       ('#008000', 3),
       ('#800020', 4);
