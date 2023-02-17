# eCommerce Coderhouse
## _Bahia Import_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Bahia import es una SPA creada con React, Tailwindcss y Firebase.

## Features

- Filtrado de productos por categoría y ID
- Detalle de productos
- Control de stock con firebase
- Cart y Checkout con orden de compra y almacenamiento de Datos en Firebase

## Installation

Bahia Import requires [React](https://reactjs.org/) to run.


```sh
Inicializar el proyecto.
 - Clonar el repositorio
 - Instalar dependencias
 - Configurar las variables de entorno del .env.example
 - Ejecutar npm start
 
```



La lógica de la obtención de los productos se encuentra en services/firebase y la ejecución de la filtración de los productos se encuentran en los containers (itemListContainer - itemDetailContainer)

***
El item count se encuentra dentro de itemDetail y cuenta con otro contador dentro llamado Counter
