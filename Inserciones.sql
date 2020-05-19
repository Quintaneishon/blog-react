Update Carrera
set Nombre='sistemas computacionales'
where Id_carrera=0;

Select * from Carrera;

Insert into Carrera values (3,'Quimica',0,'','quimica.png' )

Select * from Herramienta;

Update Herramienta
set Descripcion='Te ayudará a interpretar y resolver problemas con contenido matematico, desde aritmética hasta calculo.';


Alter table Herramienta 
add Pros varchar(255);

Alter table Herramienta
add Contras varchar(255);

Alter table Herramienta
add Costo bit;

Update Herramienta
set Pros='Escanea un problema usando la camara-Obtén explicaciones paso a paso-Instrucciones animadas-Incluye Graficadora', Costo=0;

Update Herramienta
set Contras='Si no tienes buena escritura, la cámara no detectará el problema-No resulve problemas complejos de calculo y aritmética';

insert into Herramienta values(1,'freecodecamp', 'https://www.freecodecamp.org',0, 'freecodecamp','Esta plataforma brinda cursos y certificaciones gratuitas de programación como desarrollo web, algoritmos en JavaScript y estructuras de datos, entre otros.', 'Tienen más de 6000 cursos gratuitos-Cuentan con una plataforma para escuchar música mientras programas', 'Todos los cursos son en Inglés', 0);
insert into Herramienta values(2,'canva','https://www.canva.com/es_419/', 1, 'canva','Crea impresionantes diseños para tus trabajos, ya sea para construir tu CV, elaborar una presentación o crear una infografía, lo única que te limitará es tu imaginación!.', 'Plantillas para todo tipo de trabajo-Facíl de usar-Continúa tus diseños en tu celular con la App Móvil','Muchos gráficos dependen de la suscripción pro-Exportar tus trabajos a cierto tipo de archivo dependen de la suscripción',0);
insert into Herramienta values(3,'xmind','https://www.xmind.net', 1, 'xmind', 'Elabora mapas mentales o lluvia de ideas de forma rápida y sencilla, exporta tus documentos a imágenes y plasma todas tus ideas en un diseño sencillo.', 'Disponible para todos los sistemas operativos-Multiples diseños-Modo de presentación-Interfaz sencilla-Exporta tus archivos a multiples formatos','La versión gratuita tiene algunas limitantes-Diagramas con diseño simple',0);
insert into Herramienta values(4,'everycircuit','https://everycircuit.com',0,'everycircuit','Puedes construir y simular circuitos directamente en tu teléfono o tableta, animar y entender cómo funcionan y probar tus diseños. Lo mejor de todo es que puedes unirte e interactuar con la gran comunidad online de compañeros entusiastas de los circuitos de EveryCircuit.', '-Visualizador de frecuencias-Interfaz atractiva-Múltiples circuitos contruidos por la comunidad', 'No  cuenta con gran variedad de integrados-Disponible solo para navegador y dispositivos móviles', 1);

Insert into Carrera values (4,'Administración de Empresas',1,'','administracion.png' );