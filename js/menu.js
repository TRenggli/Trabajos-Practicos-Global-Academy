const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})



/* 
 Explicacion del codigo:

 
 Este código JavaScript se encarga de manejar la apertura y cierre de un menú lateral (aside) en una página web. Aquí tienes una explicación de las funciones y su propósito:

 Selección de Elementos del DOM:
   - Se seleccionan elementos del DOM utilizando `document.querySelector` para obtener referencias a los elementos con los IDs "open-menu", "close-menu", y `aside".

 Manejo de Clic en el Botón "Abrir Menú" ("openMenu"):
   - Se añade un evento de clic al botón "Abrir Menú". Cuando se hace clic en este botón, se agrega la clase "aside-visible" al elemento "aside", lo que hace que el menú lateral sea visible.

 Manejo de Clic en el Botón "Cerrar Menú" ("closeMenu"):
   - Se añade un evento de clic al botón "Cerrar Menú". Cuando se hace clic en este botón, se elimina la clase `aside-visible` del elemento "aside", ocultando así el menú lateral.
*/