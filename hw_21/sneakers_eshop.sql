-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 29, 2018 at 01:11 PM
-- Server version: 5.6.31
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sneakers_eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) unsigned NOT NULL,
  `brand_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand_name`) VALUES
(1, 'ADIDAS'),
(2, 'REEBOK'),
(3, 'NIKE'),
(4, 'PUMA'),
(5, 'GEOX'),
(6, 'NEW BALANCE');

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE IF NOT EXISTS `genders` (
  `id` int(11) unsigned NOT NULL,
  `gender` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`id`, `gender`) VALUES
(1, 'men'),
(2, 'women'),
(3, 'children');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) unsigned NOT NULL,
  `gender_id` int(11) unsigned NOT NULL,
  `type_id` int(11) unsigned NOT NULL,
  `season_id` int(11) unsigned NOT NULL,
  `brand_id` int(11) unsigned NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `gender_id`, `type_id`, `season_id`, `brand_id`, `price`) VALUES
(1, 2, 3, 2, 1, 2000),
(2, 3, 5, 3, 2, 1000),
(3, 1, 3, 3, 3, 1500),
(4, 2, 3, 3, 4, 2800);

-- --------------------------------------------------------

--
-- Table structure for table `seasons`
--

CREATE TABLE IF NOT EXISTS `seasons` (
  `id` int(11) unsigned NOT NULL,
  `season` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `seasons`
--

INSERT INTO `seasons` (`id`, `season`) VALUES
(1, 'summer'),
(2, 'winter'),
(3, 'multi');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE IF NOT EXISTS `types` (
  `id` int(11) unsigned NOT NULL,
  `type` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `type`) VALUES
(1, 'casual'),
(2, 'running'),
(3, 'football'),
(4, 'basketball'),
(5, 'training');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_brand_id_idx` (`brand_id`),
  ADD KEY `fk_gender_id_idx` (`gender_id`),
  ADD KEY `fk_type_id_idx` (`type_id`),
  ADD KEY `fk_season_id_idx` (`season_id`);

--
-- Indexes for table `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `seasons`
--
ALTER TABLE `seasons`
  MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_gender_id` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_season_id` FOREIGN KEY (`season_id`) REFERENCES `seasons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_type_id` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
