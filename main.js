class bebida {
    constructor(id, precio, tamaño, nombreBebida) {
        this.id = id
        this.precio = precio
        this.tamaño = tamaño    
        this.nombreBebida = nombreBebida
    }
}

const cafe = new bebida(1, 250, "grande", "cafe")
const te = new bebida(2, 250, "grande", "te")
const capuccino = new bebida(3, 300, "grande", "capuccino")
const chocolate = new bebida(4, 350, "grande", "chocolate")
const latte = new bebida(5, 400, "grande", "latte")
const café_con_leche = new bebida(6, 300, "grande", "cafe con leche")
const frapuccino = new bebida(7, 500, "grande", "frapuccino")
const te_frio = new bebida(8, 300, "grande", "te frio")

const productos = [cafe, te, capuccino, chocolate, latte, café_con_leche, frapuccino, te_frio]

const saludo = () => {
    alert ("¡Hola! Bienvenidos a nuestra tienda virtual")    
    let nombre = prompt ("Ingrese su nombre")
    while (!isNaN(nombre)){
        nombre = prompt ("Ingrese su nombre")
    }
    contenedor.innerHTML = `<h1>Hola ${nombre.toUpperCase()}</h1>`
}

const contenedor = document.querySelector(".contenedor")


const bebidas = document.querySelector(".bebidas")

 productos.forEach(bebida => {
    bebidas.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${bebida.id}</h5>
    <p class="card-text">${bebida.precio}</p>
    <p class="card-text">${bebida.tamaño}</p>
    <p class="card-text">${bebida.nombreBebida}</p>    
    <button id="boton${bebida.id}" class=" btn btn-primary"> Agregar al  carrito</button>
    </div>
    </div>`
 })

 productos.forEach(bebida => {
    (document.getElementById(`boton${bebida.id}`)).addEventListener('click', () => {
        carrito.push(bebida)
        console.log(carrito)

    })
})

let carrito = []
 
saludo()






