## Página web React
***
Página web React
***
### Librerias necesarias
***
* git clone https://github.com/tripoli09/react/tree/master
* cd ../path/to/the/file
* npm install
* npm start
* npm install react-bootstrap bootstrap
* npm i react-router-dom
* npm i react-firebase
***
### Base de datos firebase
***
Crear archivo .env y remplazar el texto entre comillas por los datos correspondientes de Firebase:
***
REACT_APP_apiKey="apiKey"
REACT_APP_authDomain="authDomain"
REACT_APP_projectId="projectId"
REACT_APP_storageBucket="storageBucket"
REACT_APP_messagingSenderId="essagingSenderId"
REACT_APP_appId="REACT_APP_appId"
***
#### Campos de la base de datos
***
Colection: orders 
Campos: buyer (email, name, phone, date), items (cantidad, id, precio, titulo), total. 
Colection: products
Campos: categoria, descripcion, img, precio, stock, titulo. 
***
### Imagenes
***
Las rutas de imagenes de productos deben importarse a Imagenes.js  y exportarse en la misma, donde el nombre de la imagen debe coincidir con el ID del producto con el siguiente
formato: numero.extencion