//SE DEFINEN LOS PRODUCTOS EN EXISTENCIA
function Instrumentos (instrumento, modelo, precio) {
    this.instrumento = instrumento;
    this.modelo = modelo;
    this. precio = precio;
}

const piano1 = new Instrumentos ("Piano", "Casio 354K", 45000)
const guitarra1 = new Instrumentos ("Guitarra Electrica", "Epiphone SG Special", 53000)
const bajo1 = new Instrumentos ("Bajo Eléctrico", "Cort Action Pj", 43000)
const violin1 = new Instrumentos ("Violin", "Stradella Mv1411", 18000)



//Se declaran variables para la función contadora
let nuevoProducto = 0
let total = 0



//Se declara el array vacio de los productos que serán elegidos posteriormente
const productosCanasta = []



//Se declara la función encargada de contabilizar los productos elegidos
function contadora () {
    do {
        let compra = prompt("¿Que desea comprar?");
    
        switch (compra) {
            case "Piano":
               nuevoProducto = 0 + parseInt(piano1.precio);
               productosCanasta.push(piano1.instrumento, piano1.modelo, "\n")
                break;
            case "Guitarra electrica": 
                nuevoProducto = 0 + parseInt(guitarra1.precio)
                productosCanasta.push(guitarra1.instrumento, guitarra1.modelo, "\n")
                break;
            case "Bajo electrico":
                nuevoProducto = 0 + parseInt(bajo1.precio)
                productosCanasta.push(bajo1.instrumento, bajo1.modelo, "\n")
                break;
            case "Violin":
                nuevoProducto = 0 + parseInt(violin1.precio)
                productosCanasta.push(violin1.instrumento, violin1.modelo, "\n")
                break;
            case "":
                alert("No ha escrito nada")
                break;
            case null: 
                alert("Ha cancelado la compra de este producto")
                break;
            default:
                alert("No se ha encontrado tal instrumento o no se ha escrito correctamente")
                break;
        }
    
        total = total + nuevoProducto
        repeticion = confirm("¿Seguir comprando?")
    
    } while (repeticion == true);
    }



//INICIO DE LA COMPRA
let repeticion = confirm("Hola, ¿desea comprar instrumentos musicales?")

if (repeticion == true) {
    contadora ()
}



//ALERT DE LOS PRODUCTOS ELEGIDOS Y EL VALOR TOTAL
alert("Tus productos comprados son: \n"+ productosCanasta.join("-"))
alert("El valor total de la compra es: $"+ total +" Pesos")

