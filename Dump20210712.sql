-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: dbccp
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `acao`
--

DROP TABLE IF EXISTS `acao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(20) NOT NULL,
  `hora_atualizacao` varchar(255) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `preco` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acao`
--

LOCK TABLES `acao` WRITE;
/*!40000 ALTER TABLE `acao` DISABLE KEYS */;
INSERT INTO `acao` VALUES (1,'Petrobras','17:45:53','AAAA2',100),(2,'BBBBBB','17:46:08','BBBBB',50),(3,'cc','21:32:15','CCCC',25.3),(4,'cc','21:32:52','CCCC',25.3),(5,'SDFSDF','14:27:30','ASDAS',200),(6,'Pepsi','13:05:36','PEPS0',100.2),(7,'Coca-cola','13:13:24','COCA5',100.23),(8,'Apple','14:52:45','APPLE',1000.5),(9,'FUHDSFU','21:12:17','ASFSAF',200.99),(10,'Teste','20:59:45','TESTE1',100.33);
/*!40000 ALTER TABLE `acao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra` (
  `compra_id` int NOT NULL AUTO_INCREMENT,
  `acao_id` int DEFAULT NULL,
  `investidor_id` int DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`compra_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
INSERT INTO `compra` VALUES (1,1,1,1),(2,1,1,1),(3,2,1,1),(4,2,1,1),(5,1,9,2),(6,1,9,2);
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conta_bancaria`
--

DROP TABLE IF EXISTS `conta_bancaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conta_bancaria` (
  `id` int NOT NULL,
  `agencia` varchar(6) NOT NULL,
  `conta` varchar(11) NOT NULL,
  `validade` datetime(6) NOT NULL,
  `conta_bancaria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmh9wk73y9o4em5xyqns6qdwbl` (`conta_bancaria_id`),
  CONSTRAINT `FKmh9wk73y9o4em5xyqns6qdwbl` FOREIGN KEY (`conta_bancaria_id`) REFERENCES `investidor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta_bancaria`
--

LOCK TABLES `conta_bancaria` WRITE;
/*!40000 ALTER TABLE `conta_bancaria` DISABLE KEYS */;
/*!40000 ALTER TABLE `conta_bancaria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL,
  `bairro` varchar(30) NOT NULL,
  `cidade` varchar(25) NOT NULL,
  `estado` int NOT NULL,
  `numero` int NOT NULL,
  `pais` varchar(10) NOT NULL,
  `rua` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fale_conosco`
--

DROP TABLE IF EXISTS `fale_conosco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fale_conosco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `mensagem` varchar(2000) NOT NULL,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fale_conosco`
--

LOCK TABLES `fale_conosco` WRITE;
/*!40000 ALTER TABLE `fale_conosco` DISABLE KEYS */;
INSERT INTO `fale_conosco` VALUES (1,'andriottichris@ssdij.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Acds'),(2,'andriottichris@ssdij.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Acds'),(3,'andriottichris@ssdij.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Acds'),(4,'andriottichris@ssdij.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Acds'),(5,'andriottichris@ssdij.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Acds'),(6,'andriottichris@ssdij.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Acds'),(7,'andriottichris@gmail.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Christofer'),(8,'andriottichris@gmail.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Christofer'),(9,'andriottichris@gmail.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Christofer'),(10,'andriottichris@gmail.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Christofer'),(11,'andriottichris@gmail.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet nisi risus, vitae volutpat tortor volutpat in. Vestibulum sit amet ullamcorper nibh. Vestibulum dui velit, rutrum et ullamcorper quis, egestas sit amet neque. aiodjasoidjasoidjasoidjas','Christofer'),(12,'sdjhsd@gmail.com','oi','Christofer');
/*!40000 ALTER TABLE `fale_conosco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investidor`
--

DROP TABLE IF EXISTS `investidor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investidor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carteira` double DEFAULT NULL,
  `celular` varchar(50) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nascimento` date NOT NULL,
  `nome` varchar(30) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `endereco_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `bairro` varchar(30) NOT NULL,
  `cidade` varchar(25) NOT NULL,
  `estado` varchar(15) NOT NULL,
  `numero` int NOT NULL,
  `pais` varchar(10) NOT NULL,
  `rua` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKag94shugqo442kobvn9cs59op` (`endereco_id`),
  KEY `FK6moj8ayfa93eg2slocvyldja7` (`usuario_id`),
  CONSTRAINT `FK6moj8ayfa93eg2slocvyldja7` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FKag94shugqo442kobvn9cs59op` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investidor`
--

LOCK TABLES `investidor` WRITE;
/*!40000 ALTER TABLE `investidor` DISABLE KEYS */;
INSERT INTO `investidor` VALUES (1,4700,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,NULL,'','','',0,'',''),(2,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,NULL,'','','',0,'',''),(3,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,3,'','','',0,'',''),(4,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,4,'','','',0,'',''),(5,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,5,'','','',0,'',''),(6,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,6,'','','',0,'',''),(7,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,7,'','','',0,'',''),(8,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,9,'','','',0,'',''),(9,4600,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','aaaaaa','bbbbbbbbb',NULL,15,'','','',0,'',''),(10,NULL,'(48)98239-9999','22345678910','zanare@email.com','1994-03-11','zzz','bbbbbbbbb',NULL,11,'','','',0,'',''),(11,5000,'(48)98239-9999','22345678910','chris@email.com','1994-03-11','Christofer','Andriotti',NULL,12,'','','',0,'',''),(12,NULL,'(48)98239-9999','22345678910','chris@email.com','1994-03-11','C','Andriotti',NULL,13,'','','',0,'',''),(13,NULL,'(48)98239-9999','22345678910','chris@email.com','1994-03-11','ca','Andriotti',NULL,14,'','','',0,'',''),(16,NULL,'teste','teste','teste@m.com','2020-06-09','teste','teste',NULL,18,'teste','teste','teste',1,'teste','teste');
/*!40000 ALTER TABLE `investidor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investimento`
--

DROP TABLE IF EXISTS `investimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investimento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ativo` bit(1) NOT NULL,
  `valor` double DEFAULT NULL,
  `acao_id` int DEFAULT NULL,
  `investimento_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrombbxjaobuxcvw4vqy33qxto` (`acao_id`),
  KEY `FKk1ti9stkkeqo768udwq50l6td` (`investimento_id`),
  CONSTRAINT `FKk1ti9stkkeqo768udwq50l6td` FOREIGN KEY (`investimento_id`) REFERENCES `investidor` (`id`),
  CONSTRAINT `FKrombbxjaobuxcvw4vqy33qxto` FOREIGN KEY (`acao_id`) REFERENCES `acao` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investimento`
--

LOCK TABLES `investimento` WRITE;
/*!40000 ALTER TABLE `investimento` DISABLE KEYS */;
INSERT INTO `investimento` VALUES (1,_binary '',200,1,1),(2,_binary '',100,2,1),(3,_binary '',400,1,9);
/*!40000 ALTER TABLE `investimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissao`
--

DROP TABLE IF EXISTS `permissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissao`
--

LOCK TABLES `permissao` WRITE;
/*!40000 ALTER TABLE `permissao` DISABLE KEYS */;
INSERT INTO `permissao` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `permissao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transacao`
--

DROP TABLE IF EXISTS `transacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_investidor` int DEFAULT NULL,
  `valor` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transacao`
--

LOCK TABLES `transacao` WRITE;
/*!40000 ALTER TABLE `transacao` DISABLE KEYS */;
INSERT INTO `transacao` VALUES (1,1,5000),(2,11,5000),(3,9,5000);
/*!40000 ALTER TABLE `transacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ativo` bit(1) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `investidor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3muwqaocunlsdsl8la78l57ee` (`investidor_id`),
  CONSTRAINT `FK3muwqaocunlsdsl8la78l57ee` FOREIGN KEY (`investidor_id`) REFERENCES `investidor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,_binary '','aaaa','bbbb',1),(2,_binary '','chris','123',NULL),(3,_binary '','chris','123',NULL),(4,_binary '','chris','123',NULL),(5,_binary '','chris','123',NULL),(6,_binary '',NULL,NULL,NULL),(7,_binary '','chris','123',NULL),(8,_binary '','chris','123',NULL),(9,_binary '','chris','123',NULL),(10,_binary '','abc','123',NULL),(11,_binary '','zzz','bbb',NULL),(12,_binary '','chris12','1303',NULL),(13,_binary '','chris13','1303',NULL),(14,_binary '','chris14','1303',NULL),(15,_binary '','abc','123',NULL),(16,_binary '','','',NULL),(17,_binary '','','',NULL),(18,_binary '','','',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariopermissao`
--

DROP TABLE IF EXISTS `usuariopermissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariopermissao` (
  `usuarioid` int NOT NULL,
  `permissaoid` int NOT NULL,
  KEY `FKctloo3gjxjoy7f0u8kprsby7b` (`permissaoid`),
  KEY `FKms43dfjlqv07hg6aiotw86occ` (`usuarioid`),
  CONSTRAINT `FKctloo3gjxjoy7f0u8kprsby7b` FOREIGN KEY (`permissaoid`) REFERENCES `permissao` (`id`),
  CONSTRAINT `FKms43dfjlqv07hg6aiotw86occ` FOREIGN KEY (`usuarioid`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariopermissao`
--

LOCK TABLES `usuariopermissao` WRITE;
/*!40000 ALTER TABLE `usuariopermissao` DISABLE KEYS */;
INSERT INTO `usuariopermissao` VALUES (9,2),(10,2),(11,2),(12,2),(13,2),(14,1),(15,2),(16,2),(17,2),(18,2);
/*!40000 ALTER TABLE `usuariopermissao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_investimento` int DEFAULT NULL,
  `id_investor` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-12 19:41:51
