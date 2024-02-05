const proEnCarrito = JSON.parse(localStorage.getitem("prodDeCarro"))

const ContenedorProd = document.getElementById("contenedorProductos");
const CarroVacio = document.getElementById("CarroVacio");
const CarroCompras = document.getElementById("carritoCompras");
const CompraRealizada = document.getElementById("CompraRealizada");

if(prodEnCarrito){
  CarroVacio.classList.add("ocultar");
  CarroCompras.classList.remove("ocultar");
  ContenedorProd.classList.remove("ocultar");
  CompraRealizada.classList.add("ocultar");

  proEnCarrito.forEach(productos => {
    const div = document.createElement("div");
    div.classList.add("prod-carro");
    div.innerHTML =` 
    
      <img class="img-carro" src= "${productos.imagen}" alt="${productos.titulo}">
      <div class="carrito-titulo-nombre">
        <small>Titulo</small>
        <p>${productos.titulo}</p>
      </div>
      <div class="carrito-cant-prod">
        <small>Cantidad</small>
        <p>${productos.cantidad}</p>
      </div>
      <div class="carrito-precio-prod">
        <small>Precio</small>
        <p>$${productos.precio}</p>
      </div>
      <div class="carrito-precio-subtotal">
        <small>SubTotal:</small>
        <p>${productos.precio * productos.cantidad}</p>
      </div>
        <button id="${productos.id}"class="Eliminar-compra">Eliminar</button>
    
  `
  ContenedorProd.append(div);

  });

}else{

}