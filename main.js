const saludo = () => {
    let nombre;

    do {
        nombre = prompt("Bienvenido a Tienda de Café, ingrese su nombre:");
    } while (nombre === "" || !isNaN(nombre));

    console.log(`Hola ${nombre}`);
};

const Bebidas = () => {
    let listbebidas = parseInt(prompt("¿Que bebida desea?\n1) Café\n2) Té\n3) Capuccino\n4) Chocolate\n5 Latte\n6) Café con leche "));
    if (listbebidas == 1) {
        alert("Disfrute su café")
    } else if (listbebidas == 2) {
        alert("Disfrute su té")
    } else if (listbebidas == 3) {
        alert("Disfrute su capuccino")
    } else if (listbebidas == 4) {
        alert("Disfrute su chocolate")
    } else if (listbebidas == 5) {
        alert("Disfrute su latte")
    } else if (listbebidas == 6) {
        alert("Disfrute su café con leche")
    } else {
        alert("Ingrese una opción válida")
    }

    console.log(listbebidas);

};

saludo();
Bebidas();