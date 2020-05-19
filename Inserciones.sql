Update Carrera
set Nombre='sistemas computacionales'
where Id_carrera=0;

Select * from Carrera;

Insert into Carrera values (3,'Quimica',0,'','quimica.png' )

Select * from Herramienta;

Update Herramienta
set Descripcion='Te ayudar� a interpretar y resolver problemas con contenido matematico, desde aritm�tica hasta calculo.';


Alter table Herramienta 
add Pros varchar(255);

Alter table Herramienta
add Contras varchar(255);

Alter table Herramienta
add Costo bit;

Update Herramienta
set Pros='Escanea un problema usando la camara-Obt�n explicaciones paso a paso-Instrucciones animadas-Incluye Graficadora', Costo=0;

Update Herramienta
set Contras='Si no tienes buena escritura, la c�mara no detectar� el problema-No resulve problemas complejos de calculo y aritm�tica';

insert into Herramienta values(1,'freecodecamp', 'https://www.freecodecamp.org',0, 'freecodecamp','Esta plataforma brinda cursos y certificaciones gratuitas de programaci�n como desarrollo web, algoritmos en JavaScript y estructuras de datos, entre otros.', 'Tienen m�s de 6000 cursos gratuitos-Cuentan con una plataforma para escuchar m�sica mientras programas', 'Todos los cursos son en Ingl�s', 0);
insert into Herramienta values(2,'canva','https://www.canva.com/es_419/', 1, 'canva','Crea impresionantes dise�os para tus trabajos, ya sea para construir tu CV, elaborar una presentaci�n o crear una infograf�a, lo �nica que te limitar� es tu imaginaci�n!.', 'Plantillas para todo tipo de trabajo-Fac�l de usar-Contin�a tus dise�os en tu celular con la App M�vil','Muchos gr�ficos dependen de la suscripci�n pro-Exportar tus trabajos a cierto tipo de archivo dependen de la suscripci�n',0);
insert into Herramienta values(3,'xmind','https://www.xmind.net', 1, 'xmind', 'Elabora mapas mentales o lluvia de ideas de forma r�pida y sencilla, exporta tus documentos a im�genes y plasma todas tus ideas en un dise�o sencillo.', 'Disponible para todos los sistemas operativos-Multiples dise�os-Modo de presentaci�n-Interfaz sencilla-Exporta tus archivos a multiples formatos','La versi�n gratuita tiene algunas limitantes-Diagramas con dise�o simple',0);
insert into Herramienta values(4,'everycircuit','https://everycircuit.com',0,'everycircuit','Puedes construir y simular circuitos directamente en tu tel�fono o tableta, animar y entender c�mo funcionan y probar tus dise�os. Lo mejor de todo es que puedes unirte e interactuar con la gran comunidad online de compa�eros entusiastas de los circuitos de EveryCircuit.', '-Visualizador de frecuencias-Interfaz atractiva-M�ltiples circuitos contruidos por la comunidad', 'No  cuenta con gran variedad de integrados-Disponible solo para navegador y dispositivos m�viles', 1);

Insert into Carrera values (4,'Administraci�n de Empresas',1,'','administracion.png' );