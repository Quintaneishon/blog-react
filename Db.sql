/*
create table Tipo_Carrera(
	Id_tipo tinyint primary key,
	Nombre varchar(30)
);
create table Carrera(
	Id_carrera tinyint Primary key,
	Nombre varchar(100),
	Id_tipo tinyint foreign key references Tipo_Carrera(Id_tipo),
	Imagen varchar(200)
);
create table Ranking(
	Id_ranking tinyint Primary key,
	Id_carrera tinyint Foreign key references Carrera(Id_carrera),
	Escuela varchar(100),
	Escuela2 varchar(100),
	Escuela3 varchar(100),
	Escuela4 varchar(100),
	Escuela5 varchar(100)
);
create table Cursos(
	Id_curso tinyint,
	Nombre varchar (50),
	Link varchar(50),
	Id_carrera tinyint foreign key references Carrera(Id_carrera),
	Descripcion text,
	primary key (Id_curso,Id_carrera)
);
create table Herramienta(
	Id_herramienta tinyint,
	Nombre varchar (50),
	Link varchar(50),
	Id_carrera tinyint foreign key references Carrera(Id_carrera),
	Icono varchar(20),
	Descripcion text,
	primary key (Id_herramienta,Id_carrera)
);
create table Temario(
	Id_temario tinyint primary key,
	Id_carrera tinyint foreign key references Carrera(Id_carrera)
);
create table Materia(
	Id_materia tinyint primary key,
	Id_temario tinyint foreign key references Temario(Id_temario),
	Titulo varchar(50),
	Descripcion text,
	Dificultad tinyint
);
create table Apuntes(
	Id_apuntes tinyint primary key,
	Imagen varchar(200),
	Id_materia tinyint foreign key references Materia(Id_materia)
);

insert into Tipo_Carrera values(0,'ingenieria');
insert into Carrera values (0,'sistemas compuitacionales',0,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33XwzoKKCgcUT0dnvBjvXuN7NhYvg1fGxhvBouHSUb-Y7gcw4&usqp=CAU');
insert into Ranking values (0,0,'IPN','UNITEC','UNAM','UVM','TESCO');
insert into Herramienta values (0,'photomath','https://www.photomath.net/en/',0,'photo','herramienta que te ayuda a escanear problemas matem,aticos y los resuelve');
insert into Temario values (0,0);
Insert into Materia values (0,0,'Crypto','criptografía',5);
Insert into Apuntes values (0,'ISO_IEC_38500_2008.pdf',0);

*/