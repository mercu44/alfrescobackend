 
DROP TABLE IF EXISTS ClienteMesaFavorita;
DROP TABLE IF EXISTS Reserva;
DROP TABLE IF EXISTS Mesa;
DROP TABLE IF EXISTS Cliente;

CREATE TABLE Cliente(
	id SERIAL PRIMARY KEY,
	telefono VARCHAR(20) NOT NULL,
	prefijo VARCHAR(5) NOT NULL,
	correo VARCHAR(100),
	nombre VARCHAR(30) NOT NULL,
	nacionalidad VARCHAR(20),
	score SMALLINT DEFAULT 5,
	comentarios TEXT,
	UNIQUE (prefijo, telefono),
	CHECK (score BETWEEN 1 AND 10)
);


CREATE TABLE Mesa(
	id VARCHAR(5) PRIMARY KEY,
	lugar VARCHAR(20) NOT NULL,
	espacio SMALLINT NOT NULL,
	CHECK (lugar IN ('jardin','entrada','interior')),
	CHECK (espacio >0)
);

CREATE TABLE ClienteMesaFavorita(
	cliente_id INT,
	mesa_id VARCHAR(5),
	prioridad SMALLINT,
	
	PRIMARY KEY(cliente_id, mesa_id),
	CHECK (prioridad BETWEEN 1 AND 10),
	FOREIGN KEY(cliente_id)
	REFERENCES Cliente(id),
	FOREIGN KEY(mesa_id)
	REFERENCES Mesa(id)
);

CREATE TABLE Reserva(
	id SERIAL PRIMARY KEY,
	cliente_id INT NOT NULL,
	mesa_id VARCHAR(5),
	fecha DATE NOT NULL,
	hora_inicio TIME,
	hora_fin TIME,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	estado VARCHAR(20) DEFAULT 'pendiente',
	token UUID NOT NULL UNIQUE,
	tipo_reserva VARCHAR(20) DEFAULT 'web',
	personas SMALLINT NOT null,
	lista_espera BOOLEAN DEFAULT FALSE,
	
	CHECK(personas >0),
	CHECK(estado IN('pendiente','hecha','confirmada','cancelada','no_aparecida','pasada')),
	CHECK(tipo_reserva IN('whatsapp','web','llamada')),
	CHECK (hora_fin IS NULL OR hora_inicio IS NULL OR hora_fin > hora_inicio),
	FOREIGN KEY(cliente_id)
	REFERENCES Cliente(id),
	FOREIGN KEY(mesa_id)
	REFERENCES Mesa(id)
);


CREATE INDEX idx_reserva_cliente
ON Reserva(cliente_id);

CREATE INDEX idx_reserva_fecha
ON Reserva(fecha);

CREATE INDEX idx_reserva_mesa
ON Reserva(mesa_id);

INSERT INTO Mesa (id, lugar, espacio)
VALUES
('J1',  'jardin', 2),
('J2',  'jardin', 4),
('J3',  'jardin', 2),
('J4',  'jardin', 2),
('J5',  'jardin', 4),
('J6',  'jardin', 6),
('J7',  'jardin', 4),
('J8',  'jardin', 2),
('J9',  'jardin', 3),
('J10', 'jardin', 2),
('J11', 'jardin', 3),
('J12', 'jardin', 5),
('21', 'interior', 2),
('22', 'interior', 2),
('23', 'interior', 2),
('24', 'interior', 2),
('25', 'interior', 2),
('26', 'interior', 2),
('27', 'interior', 2),
('28', 'interior', 2),
('31', 'entrada', 2),
('32', 'entrada', 2),
('33', 'entrada', 2),
('34', 'entrada', 2),
('35', 'entrada', 2),
('36', 'entrada', 2);



