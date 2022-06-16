class Bebida {
    constructor(id, precio, tamaño, nombreBebida) {
        this.id = id
        this.precio = precio
        this.tamaño = tamaño
        this.nombreBebida = nombreBebida
    }
}

const cafe = new Bebida(1, 250, "grande", "cafe")
const te = new Bebida(2, 250, "grande", "te")
const capuccino = new Bebida(3, 300, "grande", "capuccino")
const chocolate = new Bebida(4, 350, "grande", "chocolate")
const latte = new Bebida(5, 400, "grande", "latte")
const café_con_leche = new Bebida(6, 300, "grande", "cafe con leche")
const frapuccino = new Bebida(7, 500, "grande", "frapuccino")
const te_frio = new Bebida(8, 300, "grande", "te frio")

const productos = [cafe, te, capuccino, chocolate, latte, café_con_leche, frapuccino, te_frio]


const saludar = () => {
    let saludo = document.querySelector("#saludoIndex");
    let inputNombre = document.querySelector('#inputNombre')
    let formSaludo = document.querySelector('#formSaludo')

    formSaludo.addEventListener('submit', (e) => {
        e.preventDefault();
        saludo.innerHTML = `<h1>HOLA ${inputNombre.value.toUpperCase()} SELECCIONE SU BEBIDA</h1>`
    });
};

const par = document.querySelector(".par")


const bebidas = document.querySelector(".bebidas")

productos.forEach(bebida => {
    bebidas.innerHTML += `<div class="card text-bg-light mb-3" style="max-width: 50%;">
    <div class="card-body">
    <h5 class="card-title">${bebida.id}</h5>
    <p class="card-text">${bebida.precio}</p>
    <p class="card-text">${bebida.tamaño}</p>
    <p class="card-text">${bebida.nombreBebida}</p>    
    <button id="boton${bebida.id}" class=" btn btn-primary"> Agregar al  carrito</button>
    </div>
    </div>`
})


let carrito = []
let carro = document.getElementById('carrito')

productos.forEach(bebida => {
    (document.getElementById(`boton${bebida.id}`)).addEventListener('click', () => {
        const cardBebidas = document.createElement("div");


        cardBebidas.setAttribute("id", "bebida");
        cardBebidas.classList.add("card");
        cardBebidas.style.width = "20rem";

        const cardContent = `<div class="card text-bg-light mb-3" style="max-width: 50%;">
        <div class="card-body">
        <h5 class="card-title">${bebida.id}</h5>
        <p class="card-text">${bebida.precio}</p>
        <p class="card-text">${bebida.tamaño}</p>
        <p class="card-text">${bebida.nombreBebida}</p>    
        <button id="boton${bebida.id}" class=" btn btn-primary eliminar">Eliminar</button>
        </div>
        </div>`

        cardBebidas.innerHTML = cardContent
        carro.append(cardBebidas);
        cardBebidas.querySelector('.eliminar')
        .addEventListener('click', (e) => eliminar(e) )

        carrito.push(bebida)
        console.log(carrito)

    })
})

const eliminar = (e) => {
    let bebidaCard = e.target.closest("#bebida");
    for (let i = 0; i < carrito.length; i++) {
        carrito.splice(i, 1);
        bebidaCard.remove();

    }
    console.log(carrito);
    console.log(carrito.length);
};

let ver = document.querySelector("#ver")

ver.addEventListener("click", () => {
    Swal.fire('SEGUIREMOS AGREGANDO CONTENIDO')
})

saludar()

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}







