-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 16, 2021 at 08:40 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `book_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `release_date` text,
  `price` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `author`, `book_name`, `description`, `release_date`, `price`, `quantity`) VALUES
(13, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-08-31 05:30:00', '455', '34'),
(14, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-02', '455', '34'),
(15, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-02', '455', '34'),
(16, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-02', '455', '34'),
(17, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-02', '455', '34'),
(18, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-02', '455', '34'),
(19, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-02', '455', '34'),
(20, 'author', 'book_name', 'type and scrambled it to make a type specimen book...', '2021-09-01 05:30:00', '455', '34');

-- --------------------------------------------------------

--
-- Table structure for table `login_details`
--

DROP TABLE IF EXISTS `login_details`;
CREATE TABLE IF NOT EXISTS `login_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`id`, `password`, `user_name`) VALUES
(1, 'user1', 'user1'),
(3, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `cart_details` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `name`, `password`, `telephone`, `cart_details`) VALUES
(1, 'user1@gmail.com', 'user1', '12345', '01111111111', NULL),
(2, 'user2@gmail.com', 'user2', '12345', '1111111111', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
