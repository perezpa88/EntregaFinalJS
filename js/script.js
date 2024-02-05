const productos=[
  {
    id:"Camiseta01",
    titulo:"Camiseta01",
    imagen:"./img/camiseta-1.jpg",
    precio:"35000",
    categoria:{
      nombre:"camiseta",
      id:"camiseta"
    }
  },
  {
    id:"Camiseta02",
    titulo:"Camiseta02",
    imagen:"./img/camiseta-2.jpeg",
    precio:"35000",
    categoria:{
      nombre:"camiseta",
      id:"camiseta"
    }
  },
  {
    id:"Camiseta03",
    titulo:"Camiseta03",
    imagen:"./img/camiseta-3.jpeg",
    precio:"35000",
    categoria:{
      nombre:"camiseta",
      id:"camiseta"
    }
  },
  {
    id:"Camiseta04",
    titulo:"Camiseta04",
    imagen:"./img/camiseta-4.jpeg",
    precio:"35000",
    categoria:{
      nombre:"camiseta",
      id:"camiseta"
    }
  },
  {
    id:"Camiseta05",
    titulo:"Camiseta05",
    imagen:"./img/camiseta-5.jpg",
    precio:"35000",
    categoria:{
      nombre:"camiseta",
      id:"camiseta"
    }
  },
  {
    id:"Camiseta06",
    titulo:"Camiseta06",
    imagen:"./img/camiseta-6.png",
    precio:"35000",
    categoria:{
      nombre:"camiseta",
      id:"camiseta"
    }
  },
  {
    id:"Short01",
    titulo:"Short01",
    imagen:"./img/short-1.jpeg",
    precio:"15000",
    categoria:{
      nombre:"short",
      id:"short"
    }
  },
  {
    id:"Short02",
    titulo:"Short02",
    imagen:"./img/short-2.jpg",
    precio:"15000",
    categoria:{
      nombre:"short",
      id:"short"
    }
  },

];
//voy a declarar todos las constantes del DOM.
const contenedorDeProductos = document.getElementById("ContenedorProductos");
const BotonesCategorias = document.querySelectorAll(".botonProductos");
const TitulPpl = document.getElementById("titulo-main");
let BotonAlCarrito = document.querySelectorAll(".agregar-prod");
const NumCarro = document.getElementById("numCarro")

function agregarProducto(productoseleccionado){
  //se van a agregar los productos en el html
  contenedorDeProductos.innerHTML="";
  productoseleccionado.forEach(producto =>{
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML =`
      <img class="img-prop" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="detalles-prod">
        <h3 class="producto">${producto.titulo}</h3>
        <p class="precio-prod">$${producto.precio}</p>
        <button class="agregar-prod" id =${producto.id}>Agregar</button>
      </div> 
    `;
    contenedorDeProductos.append(div);

  })
  botonesAgregar();
}

agregarProducto(productos);
//se agrega una clase active a los botones y se los saca a los que no se hace el click tambien llamo a la funcion de agregar a los productos segun su categoria
BotonesCategorias.forEach(boton =>{
  boton.addEventListener("click",(e)=>{

    BotonesCategorias.forEach(boton => boton.classList.remove("active"));

    e.target.classList.add("active")
    if (e.target.id != "productosTodos"){
      
      const prodtitulo = productos.find(productos=> productos.categoria.id === e.target.id);
      TitulPpl.innerText=prodtitulo.categoria.nombre;
      const prodBoton = productos.filter(productos=> productos.categoria.id === e.target.id)
    agregarProducto(prodBoton);

    }else{
      TitulPpl.innerText = "Todos Los Productos"
      agregarProducto(productos); 
    }
  })
})
//aca se agregan los productos que se hacen click, los enviamos al carrito

function botonesAgregar() {
  BotonAlCarrito = document.querySelectorAll(".agregar-prod");

  BotonAlCarrito.forEach(boton=>{
    boton.addEventListener("click", agregarAlCarro) 
  })
}
//aca se agregan los productos que se hacen click, los enviamos al carrito
const Alcarrito =[];


function agregarAlCarro(e) {
  const botonid = e.currentTarget.id;
  const productoid = productos.find(productos => productos.id === botonid);

  // Verifica si el producto ya existe en el array Alcarrito
  const indice = Alcarrito.findIndex(productos => productos.id === botonid);

  if (indice !== -1) {
    // Si el producto ya existe, incrementa la cantidad en 1
    Alcarrito[indice].cantidad++;
  } else {
    // Si el producto no existe, crea un nuevo objeto con la propiedad cantidad y la asigna a 1
    const nuevoProducto = { ...productoid, cantidad: 1 };
    Alcarrito.push(nuevoProducto);
  }

  actualizarNumeroDelCarro();

  localStorage.setItem("prodDeCarro", JSON.stringify(Alcarrito));
  
}

function actualizarNumeroDelCarro() {
  let NumCarro = Alcarrito.reduce((acumulador, productos) => acumulador + productos.cantidad, 0);
  document.getElementById("numCarro").innerText = NumCarro;
 
}
