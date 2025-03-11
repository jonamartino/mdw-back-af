# mdw-back-af - ActivityFinder 

Este proyecto constituye el backend de la aplicación ActivityFinder, una plataforma que conecta a usuarios con actividades deportivas y sociales ofrecidas por diversas empresas. Este servicio maneja la lógica de negocio, la gestión de datos y la comunicación con la base de datos para garantizar un funcionamiento eficiente de la plataforma.


# Características

API RESTful: Proporciona endpoints para gestionar usuarios, actividades, reservas y otros recursos esenciales de la plataforma.
Autenticación y autorización: Implementa mecanismos de seguridad para proteger los datos y garantizar que solo usuarios autorizados accedan a ciertas funcionalidades.
Gestión de datos: Interacción con la base de datos para operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los distintos modelos de datos.
Validación y manejo de errores: Asegura la integridad de los datos y proporciona respuestas claras ante situaciones de error.


# Tecnologías utilizadas

Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework para la construcción de aplicaciones web y APIs.
TypeScript: Superconjunto de JavaScript que añade tipado estático, mejorando la escalabilidad y mantenibilidad del código.
MongoDB: Base de datos NoSQL orientada a documentos para el almacenamiento de datos.
Mongoose: Biblioteca de modelado de datos para MongoDB y Node.js.


# Estructura del proyecto
Una visión general de la estructura principal del proyecto:
```
mdw-back-af/
├── src/                
│   ├── controllers/    
│   ├── models/          
│   ├── routes/     
│   ├── middlewares/  
│   ├── utils/       
│   ├── app.ts       
│   └── server.ts  
├── .env               
├── package.json       
├── tsconfig.json        
└── README.md           
```

# Licencia
Este proyecto está bajo la licencia MIT.
