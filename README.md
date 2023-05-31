# Metro Records

Es un ecommerce de Discos de Vinilo.

## Tecnologías utilizadas

- ReactJS
- Firebase
- Bootstrap

## Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `firebaseConfig.js` en la raíz del proyecto y agrega la configuración de tu proyecto Firebase. Puedes copiar y pegar el contenido del archivo `firebaseConfig.js` proporcionado en el código de ejemplo.
4. Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.

## Estructura del proyecto

El código principal se encuentra dentro del directorio src y dentro de este, los subdirectorios:
- `components`: Contiene todos los subdirectorios de componentes, además del contexto `CartContext`, los servicios de Firebase y la App.js.
## Componentes principales

- `App.js`: Contiene el enrutador de la aplicación y los componentes principales de la interfaz.
- `ItemListContainer.js`: Muestra una lista de productos, donde se puede navegar por categorías.
- `NavBar.jsx`: Barra de navegación con enlaces a diferentes categorías.
- `ItemDetailContainer.jsx`: Muestra los detalles de un producto específico.
- `Checkout.jsx`: Pantalla de checkout para procesar pedidos.
- `CheckoutForm.jsx`: Formulario para ingresar los datos de envío y crear la orden de compra.
- `ItemCount.jsx`: Componente que muestra un contador de cantidad de productos en el carrito.
- `Item.jsx`: Componente que muestra los detalles de un producto individual.

## Archivos deprecados:
- `asyncMock.js`: Fue reemplazado por los servicios de Firestore.
- `productos.json`: Fue reemplazado por el servicio Firestore.

## Uso

El usuario puede navegar por el listado de productos o seleccionar una categoría de su interés e ir agregando los productos que desea comprar al Carrito de compras, se mostrará un número en el ícono del carrito indicando la cantidad de productos que fue agregando. Si desea proceder a la compra, puede hacer click en el botón "Finalizar compra" o en el ícono del carrito del Navbar.
Una vez en la pantalla del carrito de compras, se mostrarán los productos agregados, pudiendo proseguir con la compra y completar los datos para que se genere la orden, o vaciar el carrito.
