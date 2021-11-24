const faker = require('faker')
const {
    get
} = require('../generadores/productos')
const {
    getFecha
} = require('../utiles')

const generar = (cant) => {
    let arr = [];

    for (let i = 0; i < cant; i++) {
        let productos = get();
        productos.id = i + 1;
        productos.fecha = getFecha();
        arr.push(productos);
    }
    return arr;
}


const getProductoById = (id) => {
    return productos[getIndex(id, productos)];
}
const agregar = () => {
    let productos = get();
    productos.id = nextId(productos);
    productos.fecha = getFecha();
    productos.push(productos)

    return productos;
}


const getProducto = () => usuarios;



module.exports = {
    generar,
    getProducto,
    agregar,
    getProductoById
};