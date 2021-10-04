// Globales
const Carrito = []
let VerCarrito;
let resultado = 0;
let acumulador = 0;
let mostrarDom;


class Producto{
    constructor(nombre, categoria, precio, id){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = parseInt(precio);
        this.id = parseInt(id);
    }
}
// Productos
const productos = [
    new Producto("Televisor 32' ", "Tecnologia", 2000, 1),
    new Producto("Celular" , "Tecnologia", 2500, 2),
    new Producto("Pc Gamer" , "Tecnologia", 3000, 3),
    new Producto("Mazo de cartas Yu-Gi-Oh" , "Juguetes, coleccionables", 1500, 4),
    new Producto("Mazo de cartas españolas" , "Juguetes, coleccionables", 500, 5),
    new Producto("Mazo de cartas de magic" , "Juguetes, coleccionables", 1500, 6),
    new Producto("Remera XL" , "Indumentaria", 1250, 7),
    new Producto("Zapatillas" , "Indumentaria", 2000, 8),
    new Producto("Pantalon" , "Indumentaria", 1500, 9)
]


// Funcion buscar categoria dentro de los productos
function buscadorCategoria() {
    if (ingresoCategoria == 1) {
        const Filter = productos.filter(producto => producto.categoria == "Tecnologia");
        for (let i = 0; i < 3; i++) {
            const element = Filter[i].nombre;
            alert(" " + element + " sector Tecnologia")
        }
    } else if (ingresoCategoria == 2) {
        Filter = productos.filter(producto => producto.categoria == "Juguetes, coleccionables");
        for (let i = 0; i < 3; i++) {
            const element = Filter[i].nombre;
            alert(" " + element + " sector Juguetes, coleccionables")
        }
        console.log(Filter);
    }  else if (ingresoCategoria == 3) {
        Filter = productos.filter(producto => producto.categoria == "Indumentaria");
        for (let i = 0; i < 3; i++) {
            const element = Filter[i].nombre;
            alert(" " + element + " sector Indumentaria")
        }
        console.log(Filter);
    }
}
// Funcion agregar producto al carrito
function agregarAlCarrito() {
    if (ingresoCategoria == 1) {
        ingresoDeEleccion = parseInt(prompt("Ingrese el numero correspondiente para agregar el articulo al carrito. 1 = Televisor 32'. 2 = Celular. 3 = Pc gamer"))
        switch(ingresoDeEleccion){
            case 1:
                Carrito.push(new Producto("Televisor 32' ", "Tecnologia", 2000, 1))
                break;
            case 2:
                Carrito.push(new Producto("Celular" , "Tecnologia", 2500, 2))
                break;
            case 3:
                Carrito.push(new Producto("Pc Gamer" , "Tecnologia", 3000, 3))
                break;
            default:
                break;
        }
    } else if (ingresoCategoria == 2) {
        ingresoDeEleccion = parseInt(prompt("Ingrese el numero correspondiente para agregar el articulo al carrito. 1 = Mazo de cartas Yu-Gi-Oh. 2 = Mazo de cartas españolas. 3 = Mazo de cartas de magic"))
        switch(ingresoDeEleccion){
            case 1:
                Carrito.push(new Producto("Mazo de cartas Yu-Gi-Oh" , "Juguetes, coleccionables", 1500, 4))
                break;
            case 2:
                Carrito.push(new Producto("Mazo de cartas españolas" , "Juguetes, coleccionables", 500, 5))
                break;
            case 3:
                Carrito.push(new Producto("Mazo de cartas de magic" , "Juguetes, coleccionables", 1500, 6))
                break;
            default:
                break;
        }
    } else if (ingresoCategoria == 3) {
        ingresoDeEleccion = parseInt(prompt("Ingrese el numero correspondiente para agregar el articulo al carrito. 1 = Remera XL. 2 = Zapatillas. 3 = Pantalon"))
        switch(ingresoDeEleccion){
            case 1:
                Carrito.push(new Producto("Remera XL" , "Indumentaria", 1250, 7))
                break;
            case 2:
                Carrito.push(new Producto("Zapatillas" , "Indumentaria", 2000, 8))
                break;
            case 3:
                Carrito.push(new Producto("Pantalon" , "Indumentaria", 1500, 9))
                break;
            default:
                break;
        }
    }
}
// Acumulador de precio de productos
function acumuladorDePrecios() {
    for (let i = 0; i < Carrito.length; i++) {
        const element = Carrito[i].precio;
        acumulador = acumulador + element;
        console.log(acumulador);
    }
}
// Suma total entre el precio de los productos y el IVA a pagar
function resultadoPrecioTotal() {
    resultado = total + acumulador;
    console.log(resultado);
}

alert("Bienvenido a la tienda online")
// Ingreso del usuario que categoria ver
let ingresoCategoria = parseInt(prompt("Ingresa 1 si queres ver nuestros productos en la categoria de Tecnologia. Ingresa 2 para nuestros productos en la categoria de Juguetes y coleccionables. Ingresa 3 para ver la categoria de indumentaria."));
// Funcion
buscadorCategoria();
// Ingreso del usuario si añadir elementos al carrito o no
let interes = parseInt(prompt("Te gustaria añadir uno de estos productos al carrito de compras? 1 = Si. 2 = No"))

if (interes == 1) {
    agregarAlCarrito();

    let interesDos = parseInt(prompt("Te gustaria añadir otro producto?  1 = Si. 2 = No"))
    if (interesDos == 1) {
    agregarAlCarrito();
    acumuladorDePrecios();
    }
    // Mostrar el carrito y el precio final en el DOM
    verCarrito = parseInt(prompt("Te gustaria mirar el carrito y el precio total de los productos? 1 = Si. 2 = No"))
    if (verCarrito == 1) {
        mostrarDom = document.getElementById('contenedorProductos')
        for (let i = 0; i < Carrito.length; i++) {
            const element = Carrito[i];
            let contenedorProductos = document.createElement("li");
            contenedorProductos.innerHTML = `<h2>Producto: ${element.nombre}</h2>
            <p> ID: ${element.id}</p>
            <hr>`;
            mostrarDom.appendChild(contenedorProductos);  
        }
        total = 0

        for (let i = 0; i < Carrito.length; i++) {
            total += Carrito[i].precio * 0.21;
        }

        resultadoPrecioTotal();
        contenedorProductos = document.createElement("div");
        contenedorProductos.innerHTML = `<h2> El precio total de tus productos es de $${resultado}</h2>
        <button class = "my-2 btn btn-success">Comprar</button>`;
        mostrarDom.appendChild(contenedorProductos);  
    }

} else {
    alert("Adios")
}

