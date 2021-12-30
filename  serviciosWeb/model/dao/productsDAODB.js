import ProductosDao from './productsDAO';
import { products } from '../tablamsql';
import productsMysql from '../../data/ProductMysql';
import products from '../products';
import CustomError from './productsDAO';


class ProductosDaoDb extends ProductosDao{
    constructor(){
        super()
        this.client = new productsMysql()
        this.projection = config.db.projection
    }
    async getAll(){
        try {
            const searching = await products.find({}, this.projection).lean()
            return searching;
        }catch (err){
            throw new CustomError()
        }
    }
    async getById(idsearchin){
        let searchin
        try {
            searchin = await products.findOne({ _id: idSearchin  }, this.projection )
        } catch (err) {
            throw new CustomError(500, 'error al buscar producto por dni', err)
        }

        if (!searchin) {
            throw new CustomError(404, 'producto no encontrado con ese ID', { id: idsearchin  })
        }

        return [searchino]
    }

    async add(prodNew) {
        let result
        try {
            const productAdd = new productos(prodNew)
            result = await productAdd.save()
        } catch (error) {
            throw new CustomError(500, 'error al crear un nuevo producto', error)
        }
        return prodNew
    }

    async deleteById(idDelete) {
        let result
        try {
            result = await productos.deleteOne({ _id: idDelete })
        } catch (error) {
            throw new CustomError(500, `error al borrar producto`, error)
        }

        if (result.deletedCount == 0) {
            throw new CustomError(404, `no existe un producto para borrar con id: ${idDelete}`, { idDelete })
        }
    }

    async deleteAll() {
        try {
            await products.deleteMany()
        } catch (error) {
            throw new CustomError(500, `error al borrar a todos los productos`, error)
        }
    }

    async updateById(idReplace, newProd) {
        let result
        try {
            result = await products.findOneAndReplace({ _id: idReplace }, newProd, this.projection )
        } catch (error) {
            throw new CustomError(500, `error al reemplazar al producto`, error)
        }

        if (!result) {
            throw new CustomError(404, `no se encontró para actualizar un producto con id: ${idReplace}`, { idReplace })
        }

        return nuevoProd
    }
    exit() {
        this.client.disconnect()
    }
}

export default ProductosDaoDb
