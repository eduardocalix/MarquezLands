CREATE DATABASE db_Lands;

USE db_Lands;

-- TABLA USUARIOS
-- todas las contraseñas seran incriptadas
CREATE TABLE usuarios (
  id INT(11) NOT NULL,
  email VARCHAR(20) not NULL,
  contrasena VARCHAR(60) NOT NULL,
  nombreCompleto VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios
  ADD PRIMARY KEY (id);

ALTER TABLE usuarios
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE usuarios;

INSERT INTO usuarios (id, nombreUsuario, contrasena, nombreCompleto) 
  VALUES (1, 'calix@gmail.com', 'nose', 'Eduardo Calix');

SELECT * FROM usuarios;

CREATE TABLE Usuario_Admin (
  id INT(11) NOT NULL,
  email VARCHAR(20) not NULL,
  nombreUsuario VARCHAR(16) NOT NULL,
  contrasena VARCHAR(60) NOT NULL,
  nombreCompleto VARCHAR(100) NOT NULL
);

ALTER TABLE Usuarios_Admin
  ADD PRIMARY KEY (id);



-- Tabla de Contacto
CREATE TABLE Contacto (
  idContacto INT(11) NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  email VARCHAR(50) NOT NULL,
  descripcion TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at timestamp NOT NULL DEFAULT current_timestamp
  ---CONSTRAINT fk_usuarios_articulos FOREIGN KEY(idUsuario) REFERENCES usuarios(id)
);

ALTER TABLE Contacto
  ADD PRIMARY KEY (idContacto);

ALTER TABLE Contacto
  MODIFY idContacto INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE Contacto;

-- Tabla de Comentario
CREATE TABLE Comentario (
  idComentario INT(11) NOT NULL,
  comentarioEscrito TEXT NOT NULL,
  fecha DATETIME,
  idUsuario INT(11),
  idContacto INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  --CONSTRAINT fk_comentario_articulos FOREIGN KEY(idContacto) REFERENCES Contactos(idContacto),
  CONSTRAINT fk_comentario_usuario FOREIGN KEY(idUsuario) REFERENCES usuarios(id)
);

ALTER TABLE Comentario
  ADD PRIMARY KEY (idComentario);

ALTER TABLE Comentario
  MODIFY idComentario INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Comentario;