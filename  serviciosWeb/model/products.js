import {persistenciaMemory} from './data/productMemory';
import {persistenciaMsql} from '../model/tablamsql';

class FactoryProductsModel {
    static set(opcion) {
        console.log('persistencia de datos ' + opcion);
        switch(opcion){
            case 'Mem': return new  persistenciaMemory()
            case  'Mysql': return new persistenciaMsql()
        }

    }
}

const opcion= process.argv[2] || 'Mem'
export default FactoryProductsModel.set(opcion);