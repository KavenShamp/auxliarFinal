-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2021 a las 04:21:02
-- Versión del servidor: 8.0.27
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vegetablepowerdb`
--
CREATE DATABASE IF NOT EXISTS `vegetablepowerdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `vegetablepowerdb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foods`
--

CREATE TABLE IF NOT EXISTS `foods` (
  `idFruit` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) DEFAULT NULL,
  `segundos` float DEFAULT NULL,
  `cantidad` int DEFAULT '1',
  `posY` int DEFAULT NULL,
  `tipo` varchar(15) DEFAULT NULL,
  `boost` tinyint DEFAULT '0',
  `puntaje` int DEFAULT NULL,
  `idLevel` int DEFAULT NULL,
  PRIMARY KEY (`idFruit`),
  KEY `idLevel` (`idLevel`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `foods`
--

INSERT INTO `foods` (`idFruit`, `name`, `segundos`, `cantidad`, `posY`, `tipo`, `boost`, `puntaje`, `idLevel`) VALUES
(1, 'manzana', 6, 1, 540, 'good', 0, NULL, 2),
(2, 'manzana', 12, 1, 280, 'good', 0, NULL, 2),
(3, 'manzana', 19.6, 1, 280, 'good', 0, NULL, 2),
(4, 'manzana', 25.4, 1, 540, 'good', 0, NULL, 2),
(5, 'manzana', 41.7, 1, 315, 'good', 0, NULL, 2),
(6, 'manzana', 48, 1, 350, 'good', 0, NULL, 2),
(7, 'manzana', 53, 1, 540, 'good', 0, NULL, 2),
(8, 'naranja', 11.6, 1, 315, 'good', 0, NULL, 2),
(9, 'naranja', 15.8, 1, 280, 'good', 0, NULL, 2),
(10, 'naranja', 21.5, 1, 540, 'good', 0, NULL, 2),
(11, 'naranja', 26.4, 1, 280, 'good', 0, NULL, 2),
(12, 'naranja', 28.8, 1, 315, 'good', 0, NULL, 2),
(13, 'naranja', 34, 1, 540, 'good', 0, NULL, 2),
(14, 'naranja', 45.3, 1, 315, 'good', 0, NULL, 2),
(15, 'naranja', 49.8, 1, 330, 'good', 0, NULL, 2),
(16, 'naranja', 55.9, 1, 315, 'good', 0, NULL, 2),
(43, 'pancho', 3.8, 1, 540, 'bad', 0, NULL, 2),
(44, 'pancho', 7.8, 1, 540, 'bad', 0, NULL, 2),
(45, 'pancho', 8.8, 1, 540, 'bad', 0, NULL, 2),
(46, 'pancho', 14, 1, 540, 'bad', 0, NULL, 2),
(47, 'pancho', 18, 1, 540, 'bad', 0, NULL, 2),
(48, 'pancho', 23, 1, 540, 'bad', 0, NULL, 2),
(49, 'pancho', 26.6, 1, 300, 'bad', 0, NULL, 2),
(50, 'pancho', 32.5, 1, 540, 'bad', 0, NULL, 2),
(51, 'pancho', 38, 1, 540, 'bad', 0, NULL, 2),
(52, 'pancho', 43, 1, 250, 'bad', 0, NULL, 2),
(53, 'pancho', 51.5, 1, 540, 'bad', 0, NULL, 2),
(54, 'pancho', 55, 1, 540, 'bad', 0, NULL, 2),
(55, 'pancho', 56.6, 1, 300, 'bad', 0, NULL, 2),
(56, 'anana', 5, 1, 540, 'good', 0, NULL, 3),
(57, 'anana', 12.5, 1, 140, 'good', 0, NULL, 3),
(58, 'anana', 19.5, 1, 270, 'good', 0, NULL, 3),
(59, 'anana', 22.3, 1, 270, 'good', 0, NULL, 3),
(60, 'anana', 29.5, 1, 420, 'good', 0, NULL, 3),
(61, 'anana', 34.2, 1, 250, 'good', 0, NULL, 3),
(62, 'anana', 41.2, 1, 250, 'good', 0, NULL, 3),
(63, 'anana', 48.5, 1, 440, 'good', 0, NULL, 3),
(64, 'pera', 3.8, 1, 350, 'good', 0, NULL, 3),
(65, 'pera', 10.5, 1, 270, 'good', 0, NULL, 3),
(66, 'pera', 14.5, 1, 140, 'good', 0, NULL, 3),
(67, 'pera', 20.3, 1, 270, 'good', 0, NULL, 3),
(68, 'pera', 26.6, 1, 350, 'good', 0, NULL, 3),
(69, 'pera', 37, 1, 250, 'good', 0, NULL, 3),
(70, 'pera', 43, 1, 250, 'good', 0, NULL, 3),
(71, 'pera', 56, 1, 250, 'good', 0, NULL, 3),
(72, 'pizza', 2.2, 1, 300, 'bad', 0, NULL, 3),
(73, 'pizza', 8, 1, 140, 'bad', 0, NULL, 3),
(74, 'pizza', 11, 1, 270, 'bad', 0, NULL, 3),
(75, 'pizza', 12, 1, 140, 'bad', 0, NULL, 3),
(76, 'pizza', 13.5, 1, 140, 'bad', 0, NULL, 3),
(77, 'pizza', 18, 1, 140, 'bad', 0, NULL, 3),
(78, 'pizza', 21.2, 1, 320, 'bad', 0, NULL, 3),
(79, 'pizza', 25.3, 1, 540, 'bad', 0, NULL, 3),
(80, 'pizza', 28.2, 1, 300, 'bad', 0, NULL, 3),
(81, 'pizza', 32, 1, 540, 'bad', 0, NULL, 3),
(82, 'pizza', 35, 1, 540, 'bad', 0, NULL, 3),
(83, 'pizza', 35.5, 1, 540, 'bad', 0, NULL, 3),
(84, 'pizza', 40, 1, 540, 'bad', 0, NULL, 3),
(85, 'pizza', 42.3, 1, 540, 'bad', 0, NULL, 3),
(86, 'pizza', 44.8, 1, 540, 'bad', 0, NULL, 3),
(87, 'pizza', 47.2, 1, 270, 'bad', 0, NULL, 3),
(88, 'pizza', 50, 1, 540, 'bad', 0, NULL, 3),
(89, 'pizza', 52, 1, 540, 'bad', 0, NULL, 3),
(90, 'pizza', 54, 1, 540, 'bad', 0, NULL, 3),
(91, 'sandia', 4.6, 1, 250, 'good', 0, NULL, 4),
(92, 'sandia', 9.5, 1, 250, 'good', 0, NULL, 4),
(93, 'sandia', 12.6, 1, 250, 'good', 0, NULL, 4),
(94, 'sandia', 14, 1, 250, 'good', 0, NULL, 4),
(95, 'sandia', 16.5, 1, 250, 'good', 0, NULL, 4),
(96, 'sandia', 20, 1, 250, 'good', 0, NULL, 4),
(97, 'sandia', 26, 1, 250, 'good', 0, NULL, 4),
(98, 'sandia', 32.6, 1, 280, 'good', 0, NULL, 4),
(99, 'sandia', 37.6, 1, 200, 'good', 0, NULL, 4),
(100, 'sandia', 41.5, 1, 300, 'good', 0, NULL, 4),
(101, 'sandia', 44.7, 1, 220, 'good', 0, NULL, 4),
(102, 'sandia', 46.5, 1, 300, 'good', 0, NULL, 4),
(103, 'sandia', 50.7, 1, 300, 'good', 0, NULL, 4),
(104, 'palta', 5.7, 1, 280, 'good', 0, NULL, 4),
(105, 'palta', 11.5, 1, 280, 'good', 0, NULL, 4),
(106, 'palta', 24.5, 1, 220, 'good', 0, NULL, 4),
(107, 'palta', 27.8, 1, 220, 'good', 0, NULL, 4),
(108, 'palta', 31.3, 1, 280, 'good', 0, NULL, 4),
(109, 'palta', 34.2, 1, 220, 'good', 0, NULL, 4),
(110, 'palta', 38.7, 1, 220, 'good', 0, NULL, 4),
(111, 'palta', 42.7, 1, 220, 'good', 0, NULL, 4),
(112, 'palta', 49.3, 1, 220, 'good', 0, NULL, 4),
(113, 'palta', 53.5, 1, 220, 'good', 0, NULL, 4),
(114, 'palta', 54.5, 1, 540, 'good', 0, NULL, 4),
(115, 'burger', 2.3, 1, 300, 'bad', 0, NULL, 4),
(116, 'burger', 3.3, 1, 540, 'bad', 0, NULL, 4),
(117, 'burger', 8, 1, 140, 'bad', 0, NULL, 4),
(118, 'burger', 10, 1, 140, 'bad', 0, NULL, 4),
(119, 'burger', 13.3, 1, 270, 'bad', 0, NULL, 4),
(120, 'burger', 16, 1, 540, 'bad', 0, NULL, 4),
(121, 'burger', 18, 1, 250, 'bad', 0, NULL, 4),
(122, 'burger', 22, 1, 250, 'bad', 0, NULL, 4),
(123, 'burger', 23, 1, 140, 'bad', 0, NULL, 4),
(124, 'burger', 27, 1, 520, 'bad', 0, NULL, 4),
(125, 'burger', 30, 1, 320, 'bad', 0, NULL, 4),
(126, 'burger', 32, 1, 540, 'bad', 0, NULL, 4),
(127, 'burger', 35.2, 1, 540, 'bad', 0, NULL, 4),
(128, 'burger', 36.8, 1, 300, 'bad', 0, NULL, 4),
(129, 'burger', 41, 1, 540, 'bad', 0, NULL, 4),
(130, 'burger', 43, 1, 540, 'bad', 0, NULL, 4),
(131, 'burger', 45, 1, 540, 'bad', 0, NULL, 4),
(132, 'burger', 48.2, 1, 540, 'bad', 0, NULL, 4),
(133, 'burger', 50, 1, 340, 'bad', 0, NULL, 4),
(134, 'burger', 52, 1, 340, 'bad', 0, NULL, 4),
(135, 'burger', 56, 1, 300, 'bad', 0, NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `levels`
--

CREATE TABLE IF NOT EXISTS `levels` (
  `idLevel` int NOT NULL,
  `estrellas` int DEFAULT '0',
  `puntaje` int DEFAULT '0',
  `levelComplet` tinyint(1) DEFAULT '0',
  `idPlayer` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idLevel`),
  KEY `idPlayer` (`idPlayer`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `levels`
--

INSERT INTO `levels` (`idLevel`, `estrellas`, `puntaje`, `levelComplet`, `idPlayer`) VALUES
(1, 0, 0, 0, 1),
(2, 0, 0, 0, 2),
(3, 0, 0, 0, 3),
(4, 0, 0, 0, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obstacles`
--

CREATE TABLE IF NOT EXISTS `obstacles` (
  `idObstacles` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `segundos` float DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `posY` int DEFAULT NULL,
  `tipo` varchar(15) DEFAULT NULL,
  `idLevel` int DEFAULT NULL,
  PRIMARY KEY (`idObstacles`),
  KEY `idLevel` (`idLevel`)
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `obstacles`
--

INSERT INTO `obstacles` (`idObstacles`, `name`, `segundos`, `cantidad`, `posY`, `tipo`, `idLevel`) VALUES
(1, 'castlePlataforma', 11.5, 1, 400, 'platform', 2),
(2, 'castlePlataforma', 12.3, 1, 300, 'platform', 2),
(3, 'castlePlataforma', 15, 1, 400, 'platform', 2),
(4, 'castlePlataforma', 19, 1, 400, 'platform', 2),
(5, 'castlePlataforma', 26, 1, 400, 'platform', 2),
(6, 'castlePlataforma', 28.5, 1, 400, 'platform', 2),
(7, 'castlePlataforma', 29.3, 1, 300, 'platform', 2),
(8, 'castlePlataforma', 41.5, 1, 400, 'platform', 2),
(9, 'castlePlataforma', 42.3, 1, 300, 'platform', 2),
(10, 'castlePlataforma', 45, 1, 400, 'platform', 2),
(11, 'castlePlataforma', 49, 1, 400, 'platform', 2),
(12, 'castlePlataforma', 56, 1, 400, 'platform', 2),
(13, 'castlePlataforma', 58.5, 1, 400, 'platform', 2),
(14, 'castlePlataforma', 59.3, 1, 300, 'platform', 2),
(15, 'spikeBottomCastle', 2, 2, 550, 'spike', 2),
(16, 'spikeBottomCastle', 3, 1, 550, 'spike', 2),
(17, 'spikeBottomCastle', 5, 4, 550, 'spike', 2),
(18, 'spikeBottomCastle', 7, 3, 550, 'spike', 2),
(19, 'spikeBottomCastle', 9, 4, 550, 'spike', 2),
(20, 'spikeBottomCastle', 11, 16, 550, 'spike', 2),
(21, 'spikeBottomCastle', 15, 5, 550, 'spike', 2),
(22, 'spikeBottomCastle', 17, 2, 550, 'spike', 2),
(23, 'spikeBottomCastle', 19, 7, 550, 'spike', 2),
(24, 'spikeBottomCastle', 21, 2, 550, 'spike', 2),
(25, 'spikeBottomCastle', 22, 4, 550, 'spike', 2),
(26, 'spikeBottomCastle', 24, 2, 550, 'spike', 2),
(27, 'spikeBottomCastle', 26, 5, 550, 'spike', 2),
(28, 'spikeBottomCastle', 28, 16, 550, 'spike', 2),
(29, 'spikeBottomCastle', 32, 2, 550, 'spike', 2),
(30, 'spikeBottomCastle', 33, 1, 550, 'spike', 2),
(31, 'spikeBottomCastle', 35, 4, 550, 'spike', 2),
(32, 'spikeBottomCastle', 37, 3, 550, 'spike', 2),
(33, 'spikeBottomCastle', 39, 4, 550, 'spike', 2),
(34, 'spikeBottomCastle', 41, 16, 550, 'spike', 2),
(35, 'spikeBottomCastle', 45, 5, 550, 'spike', 2),
(36, 'spikeBottomCastle', 47, 2, 550, 'spike', 2),
(37, 'spikeBottomCastle', 49, 7, 550, 'spike', 2),
(38, 'spikeBottomCastle', 51, 2, 550, 'spike', 2),
(39, 'spikeBottomCastle', 52, 4, 550, 'spike', 2),
(40, 'spikeBottomCastle', 54, 2, 550, 'spike', 2),
(41, 'spikeBottomCastle', 56, 5, 550, 'spike', 2),
(42, 'spikeBottomCastle', 58, 16, 550, 'spike', 2),
(43, 'spikeSide', 4, 2, 300, 'spike', 2),
(44, 'spikeSide', 6, 3, 280, 'spike', 2),
(45, 'spikeSide', 8, 4, 200, 'spike', 2),
(46, 'spikeSide', 18, 3, 280, 'spike', 2),
(47, 'spikeSide', 23, 2, 350, 'spike', 2),
(48, 'spikeSide', 25, 3, 280, 'spike', 2),
(49, 'spikeSide', 34, 4, 186, 'spike', 2),
(50, 'spikeSide', 36, 5, 120, 'spike', 2),
(51, 'spikeSide', 38, 4, 150, 'spike', 2),
(52, 'spikeSide', 48, 3, 120, 'spike', 2),
(53, 'spikeSide', 53, 4, 120, 'spike', 2),
(54, 'spikeSide', 55, 3, 120, 'spike', 2),
(55, 'hellPlataforma', 2, 1, 400, 'platform', 3),
(56, 'hellPlataforma', 3, 1, 450, 'platform', 3),
(57, 'hellPlataforma', 21, 1, 220, 'platform', 3),
(58, 'hellPlataforma', 28, 1, 400, 'platform', 3),
(59, 'hellPlataforma', 34, 1, 400, 'platform', 3),
(60, 'spikeBottom', 2, 4, 550, 'spike', 3),
(61, 'spikeBottom', 4, 2, 550, 'spike', 3),
(62, 'spikeBottom', 6, 2, 550, 'spike', 3),
(63, 'spikeBottom', 7, 2, 550, 'spike', 3),
(64, 'spikeBottom', 17, 3, 550, 'spike', 3),
(65, 'spikeBottom', 18, 2, 550, 'spike', 3),
(66, 'spikeBottom', 19.5, 3, 550, 'spike', 3),
(67, 'spikeBottom', 24, 3, 550, 'spike', 3),
(68, 'spikeBottom', 26, 2, 550, 'spike', 3),
(69, 'spikeBottom', 28, 3, 550, 'spike', 3),
(70, 'spikeBottom', 29, 1, 550, 'spike', 3),
(71, 'spikeBottom', 30, 1, 550, 'spike', 3),
(72, 'spikeBottom', 31, 2, 550, 'spike', 3),
(73, 'spikeBottom', 33, 3, 550, 'spike', 3),
(74, 'spikeBottom', 34, 3, 550, 'spike', 3),
(75, 'spikeBottom', 36, 2, 550, 'spike', 3),
(76, 'spikeBottom', 38, 3, 550, 'spike', 3),
(77, 'spikeBottom', 44, 3, 550, 'spike', 3),
(78, 'spikeBottom', 47, 3, 550, 'spike', 3),
(79, 'spikeBottom', 48, 2, 550, 'spike', 3),
(80, 'spikeBottom', 49.5, 3, 550, 'spike', 3),
(81, 'spikeBottom', 51, 2, 550, 'spike', 3),
(82, 'spikeBottom', 53, 3, 550, 'spike', 3),
(83, 'spikeBottom', 55.5, 2, 550, 'spike', 3),
(84, 'spikeBottom', 56.6, 1, 550, 'spike', 3),
(85, 'spikeTop', 9, 2, 130, 'spike', 3),
(86, 'spikeTop', 11, 1, 130, 'spike', 3),
(87, 'spikeTop', 13, 2, 130, 'spike', 3),
(88, 'spikeTop', 15, 1, 130, 'spike', 3),
(89, 'spikeTop', 20, 1, 130, 'spike', 3),
(90, 'spikeTop', 21, 2, 130, 'spike', 3),
(91, 'spikeTop', 22, 1, 130, 'spike', 3),
(92, 'spikeTop', 39, 2, 130, 'spike', 3),
(93, 'spikeTop', 41, 1, 130, 'spike', 3),
(94, 'spikeTop', 43, 2, 130, 'spike', 3),
(95, 'spikeTop', 47, 8, 130, 'spike', 3),
(96, 'spikeSide', 3, 2, 250, 'spike', 3),
(97, 'spikeSide', 5, 2, 250, 'spike', 3),
(98, 'spikeSide', 10, 3, 250, 'spike', 3),
(99, 'spikeSide', 12, 3, 250, 'spike', 3),
(100, 'spikeSide', 19, 3, 300, 'spike', 3),
(101, 'spikeSide', 23, 2, 415, 'spike', 3),
(102, 'spikeSide', 23, 2, 186, 'spike', 3),
(103, 'spikeSide', 25, 3, 186, 'spike', 3),
(104, 'spikeSide', 27, 2, 265, 'spike', 3),
(105, 'spikeSide', 32, 3, 186, 'spike', 3),
(106, 'spikeSide', 35, 2, 250, 'spike', 3),
(107, 'spikeSide', 40, 2, 250, 'spike', 3),
(108, 'spikeSide', 42, 3, 250, 'spike', 3),
(109, 'spikeSide', 43, 2, 415, 'spike', 3),
(110, 'spikeSide', 45, 2, 300, 'spike', 3),
(111, 'spikeSide', 49, 3, 300, 'spike', 3),
(112, 'spikeSide', 53, 2, 186, 'spike', 3),
(113, 'spikeSide', 55, 2, 186, 'spike', 3),
(114, 'spikeSide', 57, 3, 265, 'spike', 3),
(115, 'hellPlataforma', 2, 1, 400, 'platform', 4),
(116, 'hellPlataforma', 4, 1, 450, 'platform', 4),
(117, 'hellPlataforma', 36.5, 1, 400, 'platform', 4),
(118, 'hellPlataforma', 37.3, 1, 300, 'platform', 4),
(119, 'hellPlataforma', 42, 1, 400, 'platform', 4),
(120, 'hellPlataforma', 44, 1, 450, 'platform', 4),
(121, 'hellPlataforma', 57, 1, 400, 'platform', 4),
(122, 'spikeBottom2', 2, 4, 550, 'spike', 4),
(123, 'spikeBottom2', 4, 3, 550, 'spike', 4),
(124, 'spikeBottom2', 6, 2, 550, 'spike', 4),
(125, 'spikeBottom2', 7, 12, 550, 'spike', 4),
(126, 'spikeBottom2', 17, 3, 550, 'spike', 4),
(127, 'spikeBottom2', 18, 2, 550, 'spike', 4),
(128, 'spikeBottom2', 19.5, 3, 550, 'spike', 4),
(129, 'spikeBottom2', 21, 15, 550, 'spike', 4),
(130, 'spikeBottom2', 30, 2, 550, 'spike', 4),
(131, 'spikeBottom2', 31, 2, 550, 'spike', 4),
(132, 'spikeBottom2', 33, 3, 550, 'spike', 4),
(133, 'spikeBottom2', 34, 4, 550, 'spike', 4),
(134, 'spikeBottom2', 36, 16, 550, 'spike', 4),
(135, 'spikeBottom2', 40, 5, 550, 'spike', 4),
(136, 'spikeBottom2', 42, 4, 550, 'spike', 4),
(137, 'spikeBottom2', 44, 3, 550, 'spike', 4),
(138, 'spikeBottom2', 46, 2, 550, 'spike', 4),
(139, 'spikeBottom2', 47, 5, 550, 'spike', 4),
(140, 'spikeBottom2', 49, 2, 550, 'spike', 4),
(141, 'spikeBottom2', 50, 2, 550, 'spike', 4),
(142, 'spikeBottom2', 52, 5, 550, 'spike', 4),
(143, 'spikeBottom2', 53, 1, 550, 'spike', 4),
(144, 'spikeBottom2', 54, 1, 550, 'spike', 4),
(145, 'spikeBottom2', 55.5, 1, 550, 'spike', 4),
(146, 'spikeBottom2', 57, 3, 550, 'spike', 4),
(147, 'spikeTop2', 9, 2, 130, 'spike', 4),
(148, 'spikeTop2', 11, 1, 130, 'spike', 4),
(149, 'spikeTop2', 13, 2, 130, 'spike', 4),
(150, 'spikeTop2', 15, 6, 130, 'spike', 4),
(151, 'spikeTop2', 17, 4, 130, 'spike', 4),
(152, 'spikeTop2', 29, 4, 130, 'spike', 4),
(153, 'spikeSide2', 3, 2, 300, 'spike', 4),
(154, 'spikeSide2', 5, 3, 300, 'spike', 4),
(155, 'spikeSide2', 10, 4, 200, 'spike', 4),
(156, 'spikeSide2', 12, 3, 300, 'spike', 4),
(157, 'spikeSide2', 19, 3, 300, 'spike', 4),
(158, 'spikeSide2', 23, 2, 415, 'spike', 4),
(159, 'spikeSide2', 24, 2, 186, 'spike', 4),
(160, 'spikeSide2', 25, 5, 120, 'spike', 4),
(161, 'spikeSide2', 27, 2, 265, 'spike', 4),
(162, 'spikeSide2', 28.5, 4, 300, 'spike', 4),
(163, 'spikeSide2', 30.5, 3, 186, 'spike', 4),
(164, 'spikeSide2', 32, 3, 186, 'spike', 4),
(165, 'spikeSide2', 34, 1, 186, 'spike', 4),
(166, 'spikeSide2', 34.5, 2, 186, 'spike', 4),
(167, 'spikeSide2', 35, 3, 186, 'spike', 4),
(168, 'spikeSide2', 35.5, 4, 186, 'spike', 4),
(169, 'spikeSide2', 39, 5, 130, 'spike', 4),
(170, 'spikeSide2', 39.5, 4, 130, 'spike', 4),
(171, 'spikeSide2', 40, 3, 130, 'spike', 4),
(172, 'spikeSide2', 40.5, 2, 130, 'spike', 4),
(173, 'spikeSide2', 43, 4, 130, 'spike', 4),
(174, 'spikeSide2', 45, 4, 130, 'spike', 4),
(175, 'spikeSide2', 46, 3, 130, 'spike', 4),
(176, 'spikeSide2', 47, 3, 130, 'spike', 4),
(177, 'spikeSide2', 48, 4, 130, 'spike', 4),
(178, 'spikeSide2', 48.5, 4, 130, 'spike', 4),
(179, 'spikeSide2', 50, 3, 130, 'spike', 4),
(180, 'spikeSide2', 51, 4, 130, 'spike', 4),
(181, 'spikeSide2', 52, 3, 130, 'spike', 4),
(182, 'spikeSide2', 53, 3, 130, 'spike', 4),
(183, 'spikeSide2', 54, 3, 130, 'spike', 4),
(184, 'spikeSide2', 54.5, 4, 130, 'spike', 4),
(185, 'spikeSide2', 55.5, 3, 130, 'spike', 4),
(186, 'spikeSide2', 56.5, 4, 130, 'spike', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `players`
--

CREATE TABLE IF NOT EXISTS `players` (
  `idPlayer` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `mensaje` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idPlayer`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `players`
--

INSERT INTO `players` (`idPlayer`, `nombre`, `email`, `telefono`, `mensaje`) VALUES
(1, 'test', NULL, NULL, NULL),
(2, NULL, 'fffffffffffffff@gmail.com', NULL, NULL),
(3, NULL, 'aaaaaaaaaaaa@gmail.com', NULL, NULL),
(4, 'fred', 'asas@gaas', 456345, 'hola'),
(5, 'jer', 'llllll@gmail.com', 123651, 'ola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`) VALUES
(1, 'aaaaaaaaaa@gmail.com');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `foods`
--
ALTER TABLE `foods`
  ADD CONSTRAINT `foods_ibfk_1` FOREIGN KEY (`idLevel`) REFERENCES `levels` (`idLevel`);

--
-- Filtros para la tabla `obstacles`
--
ALTER TABLE `obstacles`
  ADD CONSTRAINT `obstacles_ibfk_1` FOREIGN KEY (`idLevel`) REFERENCES `levels` (`idLevel`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
