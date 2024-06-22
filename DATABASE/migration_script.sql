-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: safezen
-- Source Schemata: safezen
-- Created: Sat Jun 22 12:22:40 2024
-- Workbench Version: 8.0.36
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema safezen
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `safezen` ;
CREATE SCHEMA IF NOT EXISTS `safezen` ;

-- ----------------------------------------------------------------------------
-- Table safezen.doctor_data
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `safezen`.`doctor_data` (
  `doctor_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `profile_img` TEXT NULL DEFAULT NULL,
  `specialization` VARCHAR(100) NULL DEFAULT NULL,
  `qualification` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  UNIQUE INDEX `iddoctor_data_UNIQUE` (`doctor_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table safezen.indappointments
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `safezen`.`indappointments` (
  `appointmentid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  `user_id` INT NOT NULL,
  `illness_id` INT NOT NULL,
  `date` TEXT NULL DEFAULT NULL,
  `timeSlot` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`appointmentid`),
  UNIQUE INDEX `idappointments_UNIQUE` (`appointmentid` ASC) VISIBLE,
  INDEX `illness_id` (`illness_id` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `indappointments_ibfk_1`
    FOREIGN KEY (`illness_id`)
    REFERENCES `safezen`.`indtherapy` (`illness_id`),
  CONSTRAINT `indappointments_ibfk_2`
    FOREIGN KEY (`user_id`)
    REFERENCES `safezen`.`user_data` (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table safezen.indtherapy
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `safezen`.`indtherapy` (
  `illness_id` INT NOT NULL AUTO_INCREMENT,
  `illness_name` VARCHAR(45) NULL DEFAULT NULL,
  `illness_desc` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`illness_id`),
  UNIQUE INDEX `idindTherapy_UNIQUE` (`illness_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table safezen.relappointments
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `safezen`.`relappointments` (
  `appointmentid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  `relillness_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `timeSlot` TEXT NULL DEFAULT NULL,
  `date` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`appointmentid`),
  UNIQUE INDEX `idrelappointments_UNIQUE` (`appointmentid` ASC) VISIBLE,
  INDEX `relillness_id` (`relillness_id` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `relappointments_ibfk_1`
    FOREIGN KEY (`relillness_id`)
    REFERENCES `safezen`.`reltherapy` (`relillness_id`),
  CONSTRAINT `relappointments_ibfk_2`
    FOREIGN KEY (`user_id`)
    REFERENCES `safezen`.`user_data` (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table safezen.reltherapy
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `safezen`.`reltherapy` (
  `relillness_id` INT NOT NULL AUTO_INCREMENT,
  `relillness_name` VARCHAR(100) NOT NULL,
  `relillness_desc` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`relillness_id`),
  UNIQUE INDEX `idreltherapy_UNIQUE` (`relillness_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table safezen.user_data
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `safezen`.`user_data` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `age` INT NOT NULL,
  `noOfSessions` INT(10) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `emailId` VARCHAR(55) NOT NULL,
  `Password` TEXT NOT NULL,
  `currappointmentId` INT NULL DEFAULT NULL,
  `doctor_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  INDEX `doctor_id` (`doctor_id` ASC) VISIBLE,
  INDEX `currappointmentId` (`currappointmentId` ASC) VISIBLE,
  CONSTRAINT `user_data_ibfk_1`
    FOREIGN KEY (`currappointmentId`)
    REFERENCES `safezen`.`indappointments` (`appointmentid`),
  CONSTRAINT `user_data_ibfk_2`
    FOREIGN KEY (`doctor_id`)
    REFERENCES `safezen`.`doctor_data` (`doctor_id`),
  CONSTRAINT `user_data_ibfk_3`
    FOREIGN KEY (`currappointmentId`)
    REFERENCES `safezen`.`relappointments` (`appointmentid`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
SET FOREIGN_KEY_CHECKS = 1;
