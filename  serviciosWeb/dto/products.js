const productoConInfo = producto => {
    return {
        pid: process.pid,
        producto : producto.toUpperCase(),
        cagtegoria: producto.cagtegoria,
        stock: producto.stock / 157,
    }
}

export default {
    productoConInfo
}