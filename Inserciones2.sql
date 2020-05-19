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