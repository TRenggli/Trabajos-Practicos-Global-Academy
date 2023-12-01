Nombre del Trabajo:
. TomasE-COMMERCE 2.0

En que consistio?
. Mi objetivo en este tp fue hacer nuevamente una pagina web basada de un E-COMMERCE pero con la diferencia de que en este, trate de implementar los nuevos conocimientos vistos y aprendidos hasta el momento. Un HTML y un css mas organizado y limpio sumado a archivos javascript que contienen diversas funcionalizades para partes especifica de mi pagina en donde le doy al usuario la posibilidad de interactuar mediante la navegacion en la web, ver los productos que hay diferenciados por su categoria o juntos si asi bien lo desea. Un carrito totalmente funcional en donde puede eliminar o agregar cuantos mas productos quiere, vaciar el mismo y comprar los productos que selecciono con un precio TOTAL visible y claro, sacado de la suma de precios de los diversos productos añadidos al carrito.
En resumen quise utilizar la misma idea del TP anterior (un E-COMMERCE) pero agregandole todo lo nuevo visto, queriendo lograr una mejora drastica en mi diseño, partiendo de haber hecho un html y un css basicos, a hacer un html organizado, un css bonito y funcionalidades mediante javascropt para elementos puntuales de la web y mejorar drasticamente la interaccion del usuario con la misma; y por ultimo le agregue datos y estrucutras de mis productos en el archivo json ya que lo eh visto en otros proyectos y me parecio una buena idea

Ideas a mejorar y agregar en un futuro?
. Agregar mas productos y unificar otros para no poner el mismo productos varias veces y que la persona pueda seleccionar el color ahi mismo
. Mas animaciones
. Una navbar con el logo de mi E-COMMERCE, y otras etiquetas en donde ponga una seccion de ofertas, redes de contacto y demas
. Videos mostrando la calidad de mis productos anuncuando las ofertas y demas, dandole la posibilidad al usuario de que pueda dejar sus datos de contacto para despues llamarlo y asesorarlo, y preguntarle si se quiere afiliar medfiante su email para que asi le lelguen todas las novedades de la tienda la mismo



Archivo index.html:
. define la estructura de tu página web, vincula hojas de estilo y scripts, y proporciona contenido visual y de interacción para los usuarios.


Archivo carrito.html
. Este código forma la estructura básica de una página web que representa un carrito de compras. Incorpora estilos externos, fuentes, y scripts para mejorar la apariencia y la funcionalidad de la página. La interactividad del carrito y del menú está controlada por los scripts vinculados al final del documento.



Archivo style.css:
. Establece estilos globales, define variables para colores, y utiliza reglas específicas para estructurar y estilizar elementos en mi página web, adaptándose también a diferentes tamaños de pantalla.



Archivos .js:
- Carrito: Este código maneja las operaciones del carrito de compras, desde agregar y eliminar productos hasta vaciar completamente el carrito y simular una compra. También proporciona una interfaz de usuario actualizada en consecuencia.

- main: maneja la carga y visualización de productos, la interacción del usuario con los botones de categoría y los botones "Agregar al Carrito", y la gestión del carrito de compras. Además, utiliza notificaciones Toastify para informar al usuario sobre las acciones realizadas.

- menu: Proporciona una funcionalidad básica para mostrar y ocultar un menú lateral en respuesta a los clics en los botones "Abrir Menú" y "Cerrar Menú". La visibilidad del menú se controla mediante la adición o eliminación de una clase CSS específica (`aside-visible`). Este tipo de interacción es común en diseños de navegación móvil o en páginas web con menús desplegables.



Archivo Productos.json:
. Este archivo contiene datos estructurados. En el contexto de mi proyecto web, este tipo de archivo es utilizado para almacenar información sobre productos, categorías, precios y un titulo, que pueda necesitar.
Cada uno de estos apartados y/o prendas tiene un identificador único (id), un título (titulo), una ruta a la imagen correspondiente (imagen), 
una categoría (categoria) y un precio (precio).