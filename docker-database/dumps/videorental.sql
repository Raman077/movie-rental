-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: videorental
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Rafael Oliveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-21 22:49:47'),(2,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:14:02'),(3,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:14:34'),(4,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:16:25'),(5,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:16:45'),(6,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:20:07'),(7,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:21:27'),(8,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:22:30'),(9,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:23:11'),(10,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:24:14'),(11,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:24:50'),(12,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:26:54'),(13,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:27:25'),(14,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:28:59'),(15,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:31:21'),(16,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:32:05'),(17,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:32:59'),(18,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:35:45'),(19,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:37:18'),(20,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:37:52'),(21,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:39:35'),(22,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:46:55'),(23,'Rafael Silveira','me@rsilveira.dev','ae2b1fca515949e5d54fb22b8ed95575','2019-04-22 23:47:26');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (3,'testing','Rafael Silveira'),(4,'The Avengers: Age of Ultron','Kevin Feige'),(6,'The Avengers: Endgame','Kevin Feige'),(7,'The Avengers: Endgame','Kevin Feige'),(8,'The Avengers: Endgame','Kevin Feige'),(9,'The Avengers: Endgame','Kevin Feige'),(10,'The Avengers: Endgame','Kevin Feige'),(11,'The Avengers: Endgame','Kevin Feige'),(12,'The Avengers: Endgame','Kevin Feige'),(13,'The Avengers: Endgame','Kevin Feige'),(14,'The Avengers: Endgame','Kevin Feige'),(15,'The Avengers: Endgame','Kevin Feige'),(16,'The Avengers: Endgame','Kevin Feige'),(17,'The Avengers: Endgame','Kevin Feige'),(18,'The Avengers: Endgame','Kevin Feige'),(19,'The Avengers: Endgame','Kevin Feige');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_copy`
--

DROP TABLE IF EXISTS `movie_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie_copy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movieId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_copy`
--

LOCK TABLES `movie_copy` WRITE;
/*!40000 ALTER TABLE `movie_copy` DISABLE KEYS */;
INSERT INTO `movie_copy` VALUES (1,3,'2019-04-21 22:17:27',NULL),(3,3,'2019-04-21 22:23:57','AVAILABLE'),(4,1,'2019-04-22 23:37:18','AVAILABLE'),(5,4,'2019-04-22 23:37:52','AVAILABLE'),(6,4,'2019-04-22 23:39:35','AVAILABLE'),(7,4,'2019-04-22 23:46:55','AVAILABLE'),(8,4,'2019-04-22 23:47:26','AVAILABLE');
/*!40000 ALTER TABLE `movie_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rent`
--

DROP TABLE IF EXISTS `rent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movieCopyId` int(11) NOT NULL,
  `clientId` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `rentDate` datetime DEFAULT NULL,
  `returnDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent`
--

LOCK TABLES `rent` WRITE;
/*!40000 ALTER TABLE `rent` DISABLE KEYS */;
INSERT INTO `rent` VALUES (1,2,1,'CLOSED','2019-04-21 22:51:03','2019-04-21 22:51:03'),(2,2,1,'RENTERED','2019-04-22 23:46:55',NULL),(3,2,1,'RENTERED','2019-04-22 23:47:27',NULL);
/*!40000 ALTER TABLE `rent` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-22 23:48:27
