# 📖 PROYECTO OJIMETRO 


## Avance del proyecto: 55%

## Fundamento
Proyecto de aplicación web para conocer y aprender los términos y el uso del color a travéz de definiciones
y ejemplos animados como fondo. El propósito de este proyecto es entregar mayor conocimiento de las teorías
delcolor y cómo usarlo de forma óptima. Está dirigido para todo aquél que deseé aprender en esta materia o 
necesite trabajar con color, ya sea diseñadores web, ingenieros informáticos, front end, communitys managers,
emprendedores, estudiantes, etc.

### 📱 Front-End 
Permite a los usuarios/as interactuar con las distintas definiciones y términos del color.

![front](https://user-images.githubusercontent.com/119952622/235474649-73d7d9bb-34db-4c6b-b31f-d48a73bfe9f5.jpg)



### 🖥️ Back-End 
Permite a la administradora llevar un registro o catástro de quienes han ingresado en la aplicación. 
![backend](https://user-images.githubusercontent.com/119952622/235474735-376297d2-8286-42cc-949e-34389cc645c3.jpg)

![backend2](https://user-images.githubusercontent.com/119952622/235474769-9f0af9fe-f7a3-4b61-be68-af298d339cd1.jpg)






## 🧮 Dependencias
- Base de datos: [Supabase](https://supabase.com/)




## ⚙️ Instalación

1. Descargar el repositorio



2. Abrir la carpeta con VS Code y ejecutar la terminal



3. Instalar componentes ejecutando:

    ```
    npm i
    ```

    ```
    npm i express hbs
    ```

    ```
    npm i sequelize
    ```

    ```
    npm i modal
    ```

    ```
    npm i method-override
    ```

    ```
    npm i body-parser
    ```



4. Crear archivo `.env` en la raíz del proyecto

    ![Carpetas](https://user-images.githubusercontent.com/19751976/235373331-ff085b6a-8625-4e11-9d3c-7420e127b87e.png)



5. Enviar correo electrónico a **loretoalmendra.ec@gmail.com** para obtener el código de vinculación a la base de datos. 
    - Indicar si se quiere acceso a los datos o solo al código de vinculación.



6. Iniciar la aplicación web y API por separado, ejecutando:
   
    ```
    node app.js
    ```
    ```
    node index.js
    ```

7. Ingresar a algún navegador web y ejecutar la [aplicación](http://localhost:3001/)



8. Rúbrica de evaluación

*Los puntos en donde no hayan menciones es porque se encuentran en el general del proyecto.


1.-Consulta a la base de datos
1.a.-Selecciona las columnas requeridas para presentar la información solicitada
(API_portafolio/index.js)

1.b.-Utiliza JOIN para relacionar la información de distintas tablas
(API_portafolio/index.js)

1.c.-Utiliza WHERE para filtrar la información requerida
(API_portafolio/index.js)

1.d.-Utiliza cláusulas de ordenamiento para presentar la información
(API_portafolio/index.js)

1.e.-Utiliza cláusulas de agrupación de información para obtener datos agregados
---
2.- Algoritmo de cálculo y manipulación de archivos de texto
2.a.-Utilización general del lenguaje, sintaxis, selección de tipos de datos, sentencias lógicas, expresiones, operaciones, comparaciones.

2.b.-Utilización de sentencias repetitivas

2.c.-Convenciones y estilos de programación

2.d.-Utilización correcta de estructuras de datos

2.e.-Manipulación de archivos

3.-Página web y html

3.a.-Utilización de tags html, estilos y responsividad
(./views/cualidades.hbs)

3.b.- Utilización de Bootstrap
(./views/formulario.hbs)

4.- Lenguaje de node

4.a.-Inclusión de paquetes y librerías de usuario

4.b.-Agrupación del código y separación por funcionalidad

Llamadas API (.app.js) y (mantenedor.js)

4.c.-Utilización de funciones asíncronas

(API_portafolio/index.js)

4.d.-Lectura de parámetros de entrada

4.e.-Funcionamiento general del aplicativo

5.-Conexión a Base de Datos

5.a.-Manejo de conexión a base de datos desde Node

(API_portafolio/db_conectios.js)

5.b.-Manejo y ejecución de consultas desde Node	

Llamadas API (.app.js) y (mantenedor.js)

(API_portafolio/index.js)

6.- Uso de express
6.a.-Creación servicio Rest con Express
(API_portafolio/index.js)
