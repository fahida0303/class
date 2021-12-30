export  class persistenciaMemory {
    constructor() {
        this.products = []
    }
    obtenerProducts = async () => {
        return this.products
    }
    agregarProducts = async products => {
        this.products.push(products)
    }
}

new persistenciaMemory()
