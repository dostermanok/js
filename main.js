const saludo = () => {
    let nombre;

    do {
        nombre = prompt("Bienvenido a Tienda de Café, ingrese su nombre:");
    } while (nombre === "" || !isNaN(nombre));

};

class bebida {
    constructor(precio, tamaño, nombreBebida){
        this.precio = precio
        this.tamaño = tamaño
        this.nombreBebida = nombreBebida
    }
}

const cafe = new bebida(250, "grande", "cafe")
const te = new bebida(250, "grande", "te")
const capuccino = new bebida(300, "grande", "capuccino")
const chocolate = new bebida(350, "grande", "chocolate")
const latte = new bebida(400, "grande", "latte")
const café_con_leche = new bebida(300, "grande", "cafe con leche")
const frapuccino = new bebida(500, "grande", "frapuccino")
const te_frio = new bebida(300, "grande", "te frio")

let arrayBebidas = [cafe, te, capuccino, chocolate, latte, café_con_leche, frapuccino, te_frio]

let arrayBebidasF = arrayBebidas.slice(6,8)

const Bebidas = () => {
    let listbebidas = parseInt(prompt(`¿Que bebida caliente desea?\n1) ${arrayBebidas[0].nombreBebida}\n2) ${arrayBebidas[1].nombreBebida}\n3) ${arrayBebidas[2].nombreBebida}\n4) ${arrayBebidas[3].nombreBebida}\n5 ${arrayBebidas[4].nombreBebida}\n6) ${arrayBebidas[5].nombreBebida}\n\n¿Que bebida fria desea?\n7) ${arrayBebidasF[0].nombreBebida}\n8) ${arrayBebidasF[1].nombreBebida} `));
    if (listbebidas == 1) {
        alert(`Disfrute su ${arrayBebidas[0].nombreBebida}`)
    } else if (listbebidas == 2) {
        alert(`Disfrute su ${arrayBebidas[1].nombreBebida}`)
    } else if (listbebidas == 3) {
        alert(`Disfrute su ${arrayBebidas[2].nombreBebida}`)
    } else if (listbebidas == 4) {
        alert(`Disfrute su ${arrayBebidas[3].nombreBebida}`)
    } else if (listbebidas == 5) {
        alert(`Disfrute su ${arrayBebidas[4].nombreBebida}`)
    } else if (listbebidas == 6) {
        alert(`Disfrute su ${arrayBebidas[5].nombreBebida}`)
    } else if (listbebidas == 7) {
        alert(`Disfrute su ${arrayBebidasF[0].nombreBebida}`)
    } else if (listbebidas == 8) {
        alert(`Disfrute su ${arrayBebidasF[1].nombreBebida}`)
    } else {
        alert("Ingrese una opción válida")
    }

    console.log(listbebidas);

};

saludo();
Bebidas();