-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2023 at 12:55 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blood_donation`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Name` varchar(25) NOT NULL,
  `Password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Name`, `Password`) VALUES
('Sumanth', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `bloodbank`
--

CREATE TABLE `bloodbank` (
  `Bloodbank_id` int(11) NOT NULL,
  `Name` varchar(25) NOT NULL,
  `PhNo` varchar(15) NOT NULL,
  `Password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bloodbank`
--

INSERT INTO `bloodbank` (`Bloodbank_id`, `Name`, `PhNo`, `Password`) VALUES
(21, 'G V Pai', '9876432106', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `Message_id` int(11) NOT NULL,
  `Name` varchar(25) NOT NULL,
  `Type` varchar(10) NOT NULL,
  `PhNo` varchar(15) NOT NULL,
  `Message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`Message_id`, `Name`, `Type`, `PhNo`, `Message`) VALUES
(2, 'Sumanth', 'User', '7349376269', 'Hii');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `Question` varchar(100) NOT NULL,
  `Answer` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`Question`, `Answer`) VALUES
('How does the blood donation process work?', 'Donating blood is a simple thing to do, but can make a big difference in the lives of others. The donation process from the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average. The steps in the process are: Registration You will complete donor registration, which includes information such as your name, address, phone number, and donor identification number (if you have one). You will be asked to show a donor card, driver’s license or two other forms of ID.'),
('What should I do after donating blood?', 'Drink an extra four glasses (eight ounces each) of non-alcoholic liquids.<br>\r\nKeep your bandage on and dry for the next five hours, and do not do heavy exercising or lifting.<br>\r\nIf the needle site starts to bleed, raise your arm straight up and press on the site until the bleeding stops.'),
('How long will it take to replenish the pint of blood I donate?', 'The plasma from your donation is replaced within about 24 hours. Red cells need about four to six weeks for complete replacement. That’s why at least eight weeks are required between whole blood donations.'),
('Who can donate blood?', 'In most states, donors must be age 17 or older. Some states allow donation by 16-year-olds with a signed parental consent form. Donors must weigh at least 110 pounds and be in good health. Additional eligibility criteria apply.\r\n'),
('Am I eligible to donate if I have been quarantined for COVID-19?', 'If you are quarantined for any reason, you are not eligible to donate during the quarantine time period. If you are past the quarantine time and have been symptom-free for 10 days, you will be eligible to donate blood.');

-- --------------------------------------------------------

--
-- Table structure for table `request_blood`
--

CREATE TABLE `request_blood` (
  `Request_id` int(11) NOT NULL,
  `Name` varchar(25) NOT NULL,
  `PhNo` varchar(15) DEFAULT NULL,
  `Blood_type` varchar(5) NOT NULL,
  `Requirements` int(11) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_id` int(11) NOT NULL,
  `Name` varchar(25) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Bgroup` varchar(5) NOT NULL,
  `PhNo` varchar(15) NOT NULL,
  `Age` int(11) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Location` varchar(20) NOT NULL,
  `Password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_id`, `Name`, `Email`, `Bgroup`, `PhNo`, `Age`, `Gender`, `Location`, `Password`) VALUES
(15, 'hema', 'hema@gmail.com', 'b', '944943914', 43, 'female', 'kaiga', 'test'),
(6, 'Hegde Sumanth Shyam', 'hsumanth339@gmail.com', 'O+', '7349376269', 0, '', '', 'test'),
(5, 'Pushpa', 'hsumanth899@gmail.com', 'O+', '7349376269', 0, '', '', 'test'),
(24, 'Prash', 'ppp@gmail.com', 'O+', '7349376269', 20, 'Male', 'Karkala', 'test'),
(22, 'Prash', 'pras@gmail', 'O+', '7349376269', 20, 'Male', 'Karkala', 'test'),
(23, 'Prashanth', 'prashanth@gmail', 'O+', '7349376269', 20, 'Male', 'Karkala', 'test'),
(19, 'pushpa', 'pushp@gmail.com', 'o+', '12346712', 12, 'female', 'ghjk', 'test'),
(17, 'ruchitha', 'ruchitha@gmail.com', 'a+', '12346789', 20, 'female', 'kundapura', 'test'),
(14, 'Sanketh', 'sankethegde143@gmail.com', 'O+', '7349376269', 30, 'Male', 'Karkala', 'test'),
(10, 'Sandhya1', 'test1@test.com', 'O+', '7349376269', 0, '', '', 'test'),
(9, 'Sandhya', 'test@test.com', 'O+', '7349376269', 0, '', '', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bloodbank`
--
ALTER TABLE `bloodbank`
  ADD PRIMARY KEY (`Name`),
  ADD UNIQUE KEY `Number` (`Bloodbank_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`Message_id`);

--
-- Indexes for table `request_blood`
--
ALTER TABLE `request_blood`
  ADD PRIMARY KEY (`Name`),
  ADD UNIQUE KEY `Number` (`Request_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Email`),
  ADD UNIQUE KEY `Number` (`User_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bloodbank`
--
ALTER TABLE `bloodbank`
  MODIFY `Bloodbank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `Message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `request_blood`
--
ALTER TABLE `request_blood`
  MODIFY `Request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `request_blood`
--
ALTER TABLE `request_blood`
  ADD CONSTRAINT `request_blood_ibfk_1` FOREIGN KEY (`Name`) REFERENCES `bloodbank` (`Name`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
