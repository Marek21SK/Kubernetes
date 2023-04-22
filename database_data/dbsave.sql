-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.32 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table kubernetes.forms: ~0 rows (approximately)
INSERT INTO `forms` (`id`, `users_id`, `username`, `surename`, `email`, `city`) VALUES
	(1, 1, 'Marek', 'Pástor', 'marekpastorml@gmail.com', 'Roznava'),
	(2, 1, 'Nela', 'Pástorová', 'marekpastorml@gmail.com', 'Roznava'),
	(3, 2, 'NelaPastorova', 'Pástor', 'patrikszokos3@gmail.com', 'Banská Bystrica'),
	(4, 3, 'Marek', 'Pástor', 'marekpastorml@gmail.com', 'Banská Bystrica'),
	(5, 3, 'Testurák', 'TestTest', 'marekpastorml@gmail.com', 'Banská Bystrica'),
	(6, 3, 'Test 1', 'Test 2', 'patrikszokos3@gmail.com', 'Test 44');

-- Dumping data for table kubernetes.users: ~0 rows (approximately)
INSERT INTO `users` (`id`, `name`, `password`) VALUES
	(1, 'pasrdfffsas', '123456'),
	(2, 'user', 'user'),
	(3, 'test', 'test');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
