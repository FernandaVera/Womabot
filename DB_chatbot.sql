-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: chatbot
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `preferences`
--

DROP TABLE IF EXISTS `preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferences` (
  `id_preference` int DEFAULT NULL,
  `setting` varchar(50) DEFAULT NULL,
  `setting_status` int DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferences`
--

LOCK TABLES `preferences` WRITE;
/*!40000 ALTER TABLE `preferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id_answer` int DEFAULT NULL,
  `keyword` varchar(50) NOT NULL,
  `answer` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`keyword`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (5,'autoexploracion','Conocer tus senos es de vital importancia y para ello es mejor la autoexploración mensual pues cualquier cambio es importante. Observa frente al espejo busca cambios en la forma tamańo o superficie de la piel especialmente hundimientos inflación enrojecimiento o ulceraciones.'),(3,'causa','el cáncer de mama ocurre cuando algunas células mamarias comienzan a crecer de manera anormal estas células se dividen más rápido que las células saludables y continúan acumulándose formando un bulto o masa'),(12,'causes','breast cancer occurs when some breast cells start to grow abnormally, these cells divide faster than healthy cells and continue to accumulate to form a lump or mass'),(9,'error','Lo siento no puedo responder esto por el momento intenta de nuevo.'),(10,'hello',' Hello I\'m a chat created to inform you about breast cancer go ahead and ask me a question'),(1,'hola','Hola soy un chat creado para informarte sobre el cáncer de mama adelante hazme una pregunta'),(7,'mastografia','La mamografía o mastografía consiste en una exploración diagnóstica de imagen por rayos X de la glándula mamaria mediante aparatos denominados mamógrafos'),(4,'prevencion','Para prevenir el cáncer de mama es recomendable: Llevar una alimentación balanceada disminuir el consumo de azúcares y grasas Practicar ejercicio al menos 30 minutos diariamente Evitar el cigarro y el alcohol'),(2,'sintomas','Los síntomas del cáncer de mama son las protuberancias en el pecho las secreciones de sangre del pezón y los cambios en la forma o la textura del pezón o el seno'),(11,'symptom',' Symptoms of breast cancer are bumps on the chest, secretions of blood from the nipple, and changes in the shape or texture of the nipple or breast'),(8,'tratamiento','El cáncer de mama se trata de varias maneras. Esto depende del tipo de cáncer de mama y del grado de diseminación. Las personas con cáncer de mama a menudo reciben más de un tipo de tratamiento.');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'chatbot'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-27 11:05:46
