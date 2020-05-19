Select * from Carrera c
Join Carrera_Herramienta h on  h.Id_carrera=c.Id_carrera
join Herramienta he on he.Id_herramienta=h.Id_herramienta

Select * from Carrera

Select * from Herramienta

Alter table Herramienta
drop constraint PK__Herramie__F18A912FD0AA3130;

sp_help Herramienta

alter table Herramienta
add constraint PK_Id_herramienta primary key (Id_herramienta);

create table Carrera_Herramienta(
	Id_carrera tinyint foreign key references Carrera(Id_carrera),
	Id_herramienta tinyint foreign key references Herramienta(Id_herramienta),
)

select * from Carrera_Herramienta

Insert into Carrera_Herramienta
values(1,0);

Alter table Herramienta
drop column Id_carrera;


Alter table Herramienta
add Id_carrera tinyint;


//Cambios a la tabla Cursos

    select h.Id_herramienta,h.Nombre,Link,h.Icono,Descripcion,Pros,Contras,Costo
	from Herramienta h
	join Carrera_Herramienta ch on ch.Id_herramienta=h.Id_herramienta
	join Carrera c on c.Id_carrera=ch.Id_carrera
	where c.Id_carrera=0;
    
	select Id_curso,c.Nombre,Link,Descripcion 
	from Cursos c
	join Carrera_Cursos cc on cc.Id_cursos=c.Id_curso
	join Carrera ca on ca.Id_carrera=cc.Id_carrera
	where ca.Id_carrera= 0;

	use EducationHub

	sp_help Cursos;

	alter table Cursos
	drop constraint FK__Cursos__Id_carre__3F466844

	create table Carrera_Cursos(
		Id_Carrera tinyint foreign key references Carrera(Id_carrera),
		Id_Cursos tinyint foreign key references Cursos(Id_curso)
	);

	alter table Cursos
	add Constraint PK_Id_Curso primary key (Id_curso);

	alter table Cursos
	drop column Id_Carrera